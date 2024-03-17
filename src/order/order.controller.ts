import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { OrderService } from './order.service';
// import { CreateOrderDto } from './dto/create-order.dto';
// import { UpdateOrderDto } from './dto/update-order.dto';

@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Get()
  async findAll() {
    return this.orderService.findAll();
  }

  @Get(':id')
  async findById(@Param('id', ParseIntPipe) id: number) {
    return this.orderService.findById(id);
  }

  @Post()
  async create(@Body() bookingData: any) {
    return this.orderService.create(bookingData);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() bookingData: any) {
    return this.orderService.update(id, bookingData);
  }

  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: number) {
    return this.orderService.delete(id);
  }
}
