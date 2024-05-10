import { Injectable } from '@nestjs/common';
import { UserRepository } from './repository/user';
import { UserDTO } from './dto/user.dto';

@Injectable()
export class UserService {
  constructor(private readonly repository: UserRepository) {}

  create(userDTO: UserDTO) {
    return this.repository.create(userDTO);
  }
}
