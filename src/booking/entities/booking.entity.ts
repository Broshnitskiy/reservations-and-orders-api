import { Column, Model, Table } from 'sequelize-typescript';

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
}
