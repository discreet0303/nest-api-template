import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrmModuleConfig } from './config/typeorm';

@Module({
  imports: [TypeOrmModule.forRoot(OrmModuleConfig)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
