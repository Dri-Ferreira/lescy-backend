/* eslint-disable @typescript-eslint/no-redundant-type-constituents */
import type { User } from 'generated/prisma/client';

export const USER_REPOSITORY = Symbol('USER_REPOSITORY');

export interface IUserRepository {
  create(data: {
    name: string;
    email: string;
    password: string;
    cep: string;
    street: string;
    neighborhood: string;
    city: string;
    state: string;
    number: string;
  }): Promise<User>;

  findByEmail(email: string): Promise<User | null>;
  findById(id: string): Promise<User | null>;
  findMany(): Promise<User[]>;
}
