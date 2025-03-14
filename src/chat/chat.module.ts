import { Module } from '@nestjs/common';
import { ChatService } from './chat.service';
import { UtilityModule } from 'src/shared/utility/utility.module';
import { ChatController } from './chat.controller';

@Module({
  imports: [UtilityModule],
  providers: [ChatService],
  controllers: [ChatController],
})
export class ChatModule {}
