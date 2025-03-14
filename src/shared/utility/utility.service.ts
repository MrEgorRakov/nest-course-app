import { Injectable } from '@nestjs/common';

@Injectable()
export class UtilityService {
  shareFunction(): string {
    return ' IM great at this ';
  }

  User(): string {
    return 'EgorRakov';
  }

  Order(): string {
    return '2 cheeseburgers 1 large coke and fries';
  }

  Chat(): string {
    return 'Chat chat chat';
  }
}
