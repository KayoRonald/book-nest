import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { BookController } from './book/book.controller';
import { BookService } from './book/book.service';
import { PrismaModule } from './prisma/prisma.module';
import configuration from './config/configuration';
import { BookModule } from './book/book.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
    }),
    PrismaModule,
    BookModule,
  ],
  controllers: [BookController],
  providers: [BookService],
})
export class AppModule {}
