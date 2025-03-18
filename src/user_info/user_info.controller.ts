import {
  Controller,
  Get,
  Body,
  Patch,
  Param,
  Delete,
  Post,
  NotFoundException,
} from '@nestjs/common';
import { UserInfoService } from './user_info.service';
import { UpdateUserInfoDto } from './dto/update-user_info.dto';
import { CreateUserInfoDto } from './dto/create-user_info.dto';

@Controller('user-info')
export class UserInfoController {
  constructor(private readonly userInfoService: UserInfoService) {}

  @Post('/create')
  async create(@Body() createUserInfoDto: CreateUserInfoDto) {
    const createUserInfo = await this.userInfoService.create(createUserInfoDto);
    if (createUserInfo == null) {
      throw new Error('noob data');
    }
    return {
      message: 'got the data',
      data: createUserInfo,
    };
  }

  @Get('/findfirstname/:firstname')
  async findFirstname(@Param('firstname') firstname: string) {
    const findfirstname = await this.userInfoService.findFirstname(firstname);
    if (findfirstname == null) {
      throw new NotFoundException('NO data, what a shame');
    }
    return findfirstname;
  }

  @Get()
  findAll() {
    return this.userInfoService.findAll();
  }

  @Get(':id') //localhost:3000/customer/:id
  async findOne(@Param('id') id: string) {
    const findUserInfo = await this.userInfoService.findOne(+id);
    if (findUserInfo == null) {
      throw new NotFoundException('No data here:,(');
    }
    return findUserInfo;
  }

  @Patch('/update/:id')
  async update(
    @Param('id') id: string,
    @Body() updateUserInfoDto: UpdateUserInfoDto,
  ) {
    const [updateUserInfo] = await this.userInfoService.update(
      +id,
      updateUserInfoDto,
    );
    console.log(updateUserInfo);
    if (updateUserInfo === 0) {
      throw new NotFoundException('no data noob');
    }
    return { message: 'Data Updated' };
  }

  @Delete('/delete/:id')
  async remove(@Param('id') id: string) {
    const destroyUserInfo = await this.userInfoService.remove(+id);
    console.log(destroyUserInfo);
    if (destroyUserInfo === 0) {
      throw new NotFoundException('There is nothing to delete here');
    }
    return { message: 'Data Removed' };
  }
}
