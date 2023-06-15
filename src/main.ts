import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('mrputraridho')
    .setDescription('mrputraridho server')
    .setVersion('3.1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document, {
    jsonDocumentUrl: 'swagger.json',
  });

  await app.listen(1609);
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
