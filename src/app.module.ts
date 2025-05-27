import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
/* import { MongoService } from './database/mongo.service'; */
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRoot(
      'mongodb+srv://ivanbarbosag:YIVOfDTdTH5JoVmi@cluster0.vrf349i.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
    ),
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
