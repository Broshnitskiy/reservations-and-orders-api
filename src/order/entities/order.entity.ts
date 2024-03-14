import { Column, ForeignKey, Model, Table } from 'sequelize-typescript';
import { Booking } from '../../booking/entities/booking.entity';

@Table
export class Order extends Model<Order> {
  @ForeignKey(() => Booking)
  @Column
  bookingId: number;

  @Column
  quantity: number;

  @Column
  startDate: Date;

  @Column
  endDate: Date;
}
