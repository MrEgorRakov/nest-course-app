import { IsEmail, IsNotEmpty } from 'class-validator';

export class LoginDto {
  @IsNotEmpty({ message: 'write your email please<3' })
  @IsEmail({}, { message: 'that looks nothing like email' })
  email: string;

  @IsNotEmpty({ message: 'write your password please<3' })
  password: string;
}
