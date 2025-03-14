import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { $Enums, Prisma } from '@prisma/client';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @ApiPropertyOptional({ example: 'Antonio', description: 'Updated name' })
  name?: string;

  @ApiPropertyOptional({
    example: 'antonio@example.com',
    description: 'Updated email',
  })
  email?: string;

  @ApiPropertyOptional({
    example: 'ADMIN',
    description: 'Updated role',
    enum: ['ADMIN', 'SELLER', 'CLIENT'],
  })
  role?: $Enums.Role;
}
