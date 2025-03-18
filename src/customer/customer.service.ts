import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { customer } from './entities/customer.entity';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class CustomerService {
  constructor(
    @InjectModel(customer)
    private customerModel: typeof customer,
  ) {}

  async update(id: number, updateCustomerDto: UpdateCustomerDto) {
    return await this.customerModel.update(updateCustomerDto, {
      where: { id: id },
    });
  }

  async create(createCustomerDto: CreateCustomerDto) {
    return await this.customerModel.create(
      createCustomerDto as Partial<customer>,
    );
  }

  async findAll() {
    return await this.customerModel.findAll({
      order: [['id', 'desc']],
    });
  }

  async findOne(id: number) {
    return await this.customerModel.findByPk(id);
  }

  async findFullname(fullname: string) {
    return await this.customerModel.findOne({
      where: {
        fullname: fullname,
      },
    });
  }

  async remove(id: number) {
    return await this.customerModel.destroy({
      where: { id: id },
    });
  }
}
