import { Controller, Get } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { AppService } from './book.service';
import { Book } from './entities/book.entity';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @ApiResponse({
    status: 200,
    description: 'The found record',
    type: Book,
  })
  @ApiTags('Book')
  @Get()
  getHello() {
    return this.appService.getHello();
  }
}
