import { Body, Controller, Get, NotFoundException, Param, Patch, Post, Query } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Post('')
  createUser(@Body() body: CreateUserDto) {
    this.userService.create(body.name, body.email)
  }

  @Get('/:id')
  async findUser(@Param('id') id: number) {
    const user = await this.userService.getById((id));
    if (!user){
      throw new NotFoundException('user not found')
    }
    return user;
  }

  @Get()
  findAllUsers(@Query('name') name: string){
    return this.userService.find(name);
  }

  @Patch('/:id')
  updateUser(@Param('id') userId: number, @Body() body: UpdateUserDto) {
    return this.userService.update((userId), body)
  }
}
