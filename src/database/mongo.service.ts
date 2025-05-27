import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { MongoClient, ServerApiVersion } from 'mongodb';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class MongoService implements OnModuleInit {
  private client: MongoClient;

  constructor(private readonly configService: ConfigService) {
    const uri = this.configService.get<string>('MONGODB_URI');
    if (!uri) {
      throw new Error('❌ MONGODB_URI não foi definida no .env');
    }
    this.client = new MongoClient(uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      },
    });
  }

  async onModuleInit() {
    try {
      await this.client.connect();
      await this.client.db('admin').command({ ping: 1 });
      Logger.log('✅ Conectado com sucesso ao MongoDB!', 'MongoService');
    } catch (error) {
      Logger.error('❌ Falha ao conectar ao MongoDB', error, 'MongoService');
    } finally {
      await this.client.close();
    }
  }
}
