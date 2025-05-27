import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongoService } from './database/mongo.service';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService, MongoService],
})
export class AppModule {}
