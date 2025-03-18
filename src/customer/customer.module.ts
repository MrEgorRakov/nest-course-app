import { Module } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CustomerController } from './customer.controller';
import { customer } from './entities/customer.entity';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [SequelizeModule.forFeature([customer])],
  controllers: [CustomerController],
  providers: [CustomerService],
})
export class CustomerModule {}
