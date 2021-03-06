import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CardsModule } from './cards/cards.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ImageManagementModule } from './image-management/image-management.module';
import { CardCategoriesModule } from './card-categories/card-categories.module';
import { MailModule } from './mail/mail.module';
import { TokensModule } from './tokens/tokens.module';
import { MailTemplatesModule } from './mail-templates/mail-templates.module';

const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_USER,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    CardsModule,
    AuthModule,
    UsersModule,
    ImageManagementModule,
    CardCategoriesModule,
    MailModule,
    TokensModule,
    MailTemplatesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
