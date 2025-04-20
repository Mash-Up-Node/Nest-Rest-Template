import { UsersModule } from '@/users/users.module';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { typeormConfig } from './common/database/config';
import { GlobalAuthGuard } from './common/guard/global-auth.guard';

@Module({
  imports: [TypeOrmModule.forRoot(typeormConfig), UsersModule],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: 'APP_GUARD',
      useClass: GlobalAuthGuard,
    },
  ],
})
export class AppModule {}
