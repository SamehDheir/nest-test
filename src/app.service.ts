import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class AppService implements OnModuleInit {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  getHello(): string {
    return 'Hello World!';
  }

  async onModuleInit() {
    console.log('🚀 App started, waiting 5 seconds to trigger error...');
    const user = await this.userRepository.findOne(1);
    if (user) {
      console.log(user.name);
    } else {
      console.log('User is null');
    }
  }
}