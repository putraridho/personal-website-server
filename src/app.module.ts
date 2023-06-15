import { Module } from '@nestjs/common';
import { BlocksModule, DatabasesModule, SearchModule } from './modules';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env', '.env.local'],
      isGlobal: true,
    }),
    BlocksModule,
    DatabasesModule,
    SearchModule,
  ],
})
export class AppModule {}
