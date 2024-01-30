import { Module } from '@nestjs/common';
import { AppController } from './book/book.controller';
import { AppService } from './book/book.service';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
