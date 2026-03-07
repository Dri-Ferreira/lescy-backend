import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/modules/users/users.service';
import { LoginDto } from './DTO/login.dto';
import { comparePassword } from 'src/utils/hash';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async login(data: LoginDto) {
    const user = await this.usersService.findByEmail(data.email);
    if (!user) {
      throw new UnauthorizedException('Invalid email or password');
    }
    console.log(user);

    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    const passwordMatch = await comparePassword(data.password, user.password);
    if (!passwordMatch) {
      throw new UnauthorizedException('Invalid email or password');
    }

    const payload = { sub: user.id, email: user.email };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
