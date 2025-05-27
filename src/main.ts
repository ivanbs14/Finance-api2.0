import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import * as mongoose from 'mongoose';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  mongoose.connection.on('connected', () => {
    Logger.log('✅ Conectado ao MongoDB com sucesso!', 'MongoDB');
  });

  mongoose.connection.on('error', (err) => {
    Logger.error('❌ Erro ao conectar ao MongoDB:', err, 'MongoDB');
  });

  await app.listen(3000);
}
bootstrap();
