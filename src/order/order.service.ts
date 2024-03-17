import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Order } from './entities/order.entity';
// import { CreateOrderDto } from './dto/create-order.dto';
// import { UpdateOrderDto } from './dto/update-order.dto';

@Injectable()
export class OrderService {
  constructor(
    @InjectModel(Order)
    private orderModel: typeof Order,
  ) {}

  async findAll(): Promise<Order[]> {
    return await this.orderModel.findAll();
  }

  async findById(id: number): Promise<Order> {
    return await this.orderModel.findByPk(id);
  }

  async create(orderData) {
    return await this.orderModel.create(orderData);
  }

  async update(id: number, orderData) {
    const [affectedCount, order] = await this.orderModel.update(orderData, {
      where: { id },
      returning: true,
    });

    return [affectedCount, order];
  }

  async delete(id: number) {
    return await this.orderModel.destroy({ where: { id } });
  }
}
