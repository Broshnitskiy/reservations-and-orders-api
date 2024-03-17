import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Booking } from './entities/booking.entity';
// import { CreateBookingDto } from './dto/create-booking.dto';
// import { UpdateBookingDto } from './dto/update-booking.dto';

@Injectable()
export class BookingService {
  constructor(
    @InjectModel(Booking)
    private bookingModel: typeof Booking,
  ) {}

  async findAll(): Promise<Booking[]> {
    return await this.bookingModel.findAll();
  }

  async findById(id: number): Promise<Booking> {
    return await this.bookingModel.findByPk(id);
  }

  async create(bookingData: any): Promise<Booking> {
    return await this.bookingModel.create(bookingData);
  }

  async update(id: number, bookingData: any): Promise<[number, Booking[]]> {
    const [affectedCount, bookings] = await this.bookingModel.update(
      bookingData,
      {
        where: { id },
        returning: true,
      },
    );

    return [affectedCount, bookings];
  }

  async delete(id: number): Promise<number> {
    return await this.bookingModel.destroy({
      where: { id },
    });
  }

  // create(createBookingDto: CreateBookingDto) {
  //   return 'This action adds a new booking';
  // }
  // findAll() {
  //   return `This action returns all booking`;
  // }
  // findOne(id: number) {
  //   return `This action returns a #${id} booking`;
  // }
  // update(id: number, updateBookingDto: UpdateBookingDto) {
  //   return `This action updates a #${id} booking`;
  // }
  // remove(id: number) {
  //   return `This action removes a #${id} booking`;
  // }
}
