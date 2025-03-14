import { ApiProperty } from '@nestjs/swagger';
import { $Enums, Prisma } from '@prisma/client';

export class CreateUserDto implements Prisma.UserCreateInput {
  @ApiProperty({ example: 'Antonio', description: 'Full name of the user' })
  name: string;

  @ApiProperty({
    example: 'antonio@example.com',
    description: 'User email address',
  })
  email: string;

  @ApiProperty({
    example: 'ADMIN',
    description: 'User role',
    enum: ['ADMIN', 'SELLER', 'CLIENT'],
  })
  role: $Enums.Role;
}
