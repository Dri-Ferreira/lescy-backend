import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, MinLength } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    example: 'Adriano Ferreira',
    description: 'User full name',
  })
  @IsString()
  @MinLength(3)
  name!: string;

  @ApiProperty({
    example: 'adriano@email.com',
    description: 'User email',
  })
  @IsEmail()
  @MinLength(3)
  @IsString()
  email!: string;

  @ApiProperty({
    example: '123456',
    description: 'User password',
  })
  @IsString()
  @MinLength(6)
  password!: string;

  @ApiProperty({
    example: '30140071',
    description: 'Postal code',
  })
  @IsString()
  @MinLength(8)
  cep!: string;

  @ApiProperty({
    example: '120',
    description: 'House number',
  })
  @IsString()
  @MinLength(1)
  number!: string;
}
