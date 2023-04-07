import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    default: 'test@test.ru',
    description: 'User email',
  })
  @IsNotEmpty()
  @IsEmail()
  readonly email: string;

  @ApiProperty({
    default: 'Name',
    description: 'User name',
  })
  @IsNotEmpty()
  readonly name: string;
}
