import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  userList = [
    new User({
      id: 1,
      name: 'Antonio',
      email: 'antonio@hotmail.com',
    }),
    new User({
      id: 2,
      name: 'Diogo',
      email: 'diogo@hotmail.com',
    }),
  ];

  create(createUserDto: CreateUserDto) {
    this.userList.push(
      new User({ id: this.userList.length + 1, ...createUserDto }),
    );
  }

  findAll() {
    return this.userList;
  }

  findOne(id: number) {
    const user = this.userList.filter((a) => a.id === id);

    if (!user.length) {
      throw new NotFoundException('User not found');
    }

    return user;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
