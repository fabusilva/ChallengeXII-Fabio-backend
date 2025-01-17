import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDTO } from './dto/user.dto';
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUser(@Body() userDTO: UserDTO) {
    return await this.userService.create(userDTO);
  }
  @Get()
  async findUsers(){
    return await this.userService.get();
  }
}
