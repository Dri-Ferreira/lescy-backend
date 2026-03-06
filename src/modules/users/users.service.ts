import { AddressService } from '../address/address.service';
import { ForbiddenException, Inject, Injectable } from '@nestjs/common';
import { USER_REPOSITORY } from './domain/repositories/user.repository.interface';
import type { IUserRepository } from './domain/repositories/user.repository.interface';
import { CreateUserDto } from './DTO/create-user-dto';

@Injectable()
export class UsersService {
  constructor(
    @Inject(USER_REPOSITORY)
    private readonly userRepository: IUserRepository,
    private readonly addressService: AddressService,
  ) {}

  async createUser(data: CreateUserDto) {
    const userExists = await this.userRepository.findByEmail(data.email);

    if (userExists) {
      throw new ForbiddenException('User already exists');
    }

    const address = await this.addressService.findAddressByCep(data.cep);

    const user = await this.userRepository.create({
      name: data.name,
      email: data.email,
      password: data.password,
      street: address.street,
      neighborhood: address.neighborhood,
      city: address.city,
      state: address.state,
      number: data.number,
      cep: data.cep,
    });

    // retirar a senha do objeto retornado
    delete user.password;

    return user;
  }

  async listUsers() {
    return this.userRepository.findMany();
  }
}
