import { Column, Model, Table, HasMany } from 'sequelize-typescript';
import { Order } from 'src/order/entities/order.entity';

@Table
export class Booking extends Model<Booking> {
  @Column
  name: string;

  @Column
  description: string;

  @Column
  availableUnits: number;

  @Column
  pricePerUnit: number;

  @HasMany(() => Order)
  orders: Order[];
}
