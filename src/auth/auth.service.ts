import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthDTO } from './dto';
import * from  'argon2';
@Injectable({})
export class AuthService {
  constructor(private prismaService: PrismaService) {}
  register(authDTO: AuthDTO) {
    console.log(authDTO);
    return {
      message: 'Register an user',
    };
  }
  login() {
    return {
      message: 'login',
    };
  }
}
