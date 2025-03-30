import { UsersModule } from '@/users/users.module';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { typeormConfig } from './common/database/config';

@Module({
  imports: [TypeOrmModule.forRoot(typeormConfig), UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
