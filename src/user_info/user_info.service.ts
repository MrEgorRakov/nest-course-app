import { Injectable } from '@nestjs/common';
import { CreateUserInfoDto } from './dto/create-user_info.dto';
import { UpdateUserInfoDto } from './dto/update-user_info.dto';
import { UserInfo } from './entities/user_info.entity';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class UserInfoService {
  constructor(
    @InjectModel(UserInfo)
    private UserInfoModule: typeof UserInfo,
  ) {}

  async create(createUserInfoDto: CreateUserInfoDto) {
    return await this.UserInfoModule.create(
      createUserInfoDto as unknown as Partial<UserInfo>,
    );
  }

  async update(id: number, updateUserInfoDto: UpdateUserInfoDto) {
    return await this.UserInfoModule.update(updateUserInfoDto, {
      where: { id: id },
    });
  }

  async remove(id: number) {
    return await this.UserInfoModule.destroy({
      where: { id: id },
    });
  }

  async findFirstname(firstname: string) {
    return await this.UserInfoModule.findOne({
      where: {
        firstname: firstname,
      },
    });
  }

  async findAll() {
    return await this.UserInfoModule.findAll();
  }

  async findOne(id: number) {
    return await this.UserInfoModule.findByPk(id);
  }
}
