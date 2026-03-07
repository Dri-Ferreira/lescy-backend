import { ApiProperty } from '@nestjs/swagger';

export class UserResponseDto {
  @ApiProperty()
  id!: string;
  @ApiProperty({
    example: 'uuid',
  })
  name!: string;

  @ApiProperty({
    example: 'adriano@email.com',
  })
  email!: string;

  @ApiProperty({
    example: '120',
  })
  number!: string;

  @ApiProperty({
    example: 'Centro',
  })
  neighborhood!: string;

  @ApiProperty({
    example: 'Rua Exemplo, 123',
  })
  street!: string;

  @ApiProperty({
    example: 'São Paulo',
  })
  city!: string;

  @ApiProperty({
    example: 'SP',
  })
  state!: string;

  @ApiProperty({
    example: '01001-000',
  })
  cep!: string;
}
