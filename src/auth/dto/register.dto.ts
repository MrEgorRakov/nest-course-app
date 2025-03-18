import { IsEmail, IsNotEmpty } from 'class-validator';

export class RegisterDto {
  @IsNotEmpty({ message: 'write your username please<3' })
  username: string;

  @IsNotEmpty({ message: 'write your email please<3' })
  @IsEmail({}, { message: 'that looks nothing like email' })
  email: string;

  @IsNotEmpty({ message: 'write your password please<3' })
  password: string;
}
