import {
  Controller,
  Get,
  Post,
  Put,
  Body,
  Param,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { BookingService } from './booking.service';
// import { CreateBookingDto } from './dto/create-booking.dto';
// import { UpdateBookingDto } from './dto/update-booking.dto';

@Controller('booking')
export class BookingController {
  constructor(private readonly bookingService: BookingService) {}

  @Get()
  async findAll() {
    return this.bookingService.findAll();
  }

  @Get(':id')
  async findById(@Param('id', ParseIntPipe) id: number) {
    return this.bookingService.findById(id);
  }

  @Post()
  async create(@Body() bookingData: any) {
    return this.bookingService.create(bookingData);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() bookingData: any) {
    return this.bookingService.update(id, bookingData);
  }

  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: number) {
    return this.bookingService.delete(id);
  }

  // constructor(private readonly bookingService: BookingService) {}
  // @Post()
  // create(@Body() createBookingDto: CreateBookingDto) {
  //   return this.bookingService.create(createBookingDto);
  // }
  // @Get()
  // findAll() {
  //   return this.bookingService.findAll();
  // }
  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.bookingService.findOne(+id);
  // }
  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateBookingDto: UpdateBookingDto) {
  //   return this.bookingService.update(+id, updateBookingDto);
  // }
  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.bookingService.remove(+id);
  // }
}
