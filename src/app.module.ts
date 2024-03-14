import { Module } from '@nestjs/common';
import { dataBaseConfig } from './database/database.config';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrderModule } from './order/order.module';
import { BookingModule } from './booking/booking.module';

@Module({
  imports: [
    SequelizeModule.forRoot(dataBaseConfig),
    OrderModule,
    BookingModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
