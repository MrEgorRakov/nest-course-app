import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  NotFoundException,
  UseGuards,
} from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('customer')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @Post('/create')
  async create(@Body() createCustomerDto: CreateCustomerDto) {
    const createCustomer = await this.customerService.create(createCustomerDto);
    if (createCustomer == null) {
      throw new Error('my mama can make better data then you');
    }
    return {
      message: 'W data man',
      data: createCustomer,
    };
  }

  @Get()
  findAll() {
    return this.customerService.findAll();
  }

  @Get(':id') //localhost:3000/customer/:id
  async findOne(@Param('id') id: string) {
    const findcustomer = await this.customerService.findOne(+id);
    if (findcustomer == null) {
      throw new NotFoundException('No data here:,(');
    }
    return findcustomer;
  }

  @Get('/findfullname/:fullname')
  async findFullname(@Param('fullname') fullname: string) {
    const findfullname = await this.customerService.findFullname(fullname);
    if (findfullname == null) {
      throw new NotFoundException('NO data bruh -_-');
    }
    return findfullname;
  }

  @Patch('/update/:id')
  async update(
    @Param('id') id: string,
    @Body() updateCustomerDto: UpdateCustomerDto,
  ) {
    const [updateCustomer] = await this.customerService.update(
      +id,
      updateCustomerDto,
    );
    console.log(updateCustomer);
    if (updateCustomer === 0) {
      throw new NotFoundException(
        'What do you want me to update? There is no data',
      );
    }
    return { message: 'Data Updated' };
  }

  @Delete('/delete/:id')
  async remove(@Param('id') id: string) {
    const destroyCustomer = await this.customerService.remove(+id);
    console.log(destroyCustomer);
    if (destroyCustomer === 0) {
      throw new NotFoundException('There is noone to delete here');
    }
    return { message: 'Data Removed' };
  }
}
