import { Module } from '@nestjs/common';
import { UserInfoService } from './user_info.service';
import { UserInfoController } from './user_info.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserInfo } from './entities/user_info.entity';

@Module({
  imports: [SequelizeModule.forFeature([UserInfo])],
  controllers: [UserInfoController],
  providers: [UserInfoService],
})
export class UserInfoModule {}
