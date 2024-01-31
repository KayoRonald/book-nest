import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { BookService } from './book.service';
import { BookEntity } from './entities/book.entity';
import { CreateBookDto } from './dto/create-book.dto';

@ApiTags('book')
@Controller()
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @ApiResponse({
    status: 200,
    description: 'The found record',
    type: BookEntity,
    isArray: true,
  })
  @Get()
  async findAll() {
    const book = await this.bookService.findAll();
    return book.map((book) => new BookEntity(book));
  }

  @ApiResponse({
    status: 201,
    description: 'The found record',
    type: BookEntity,
  })
  @Post()
  async create(@Body() data: CreateBookDto) {
    return new BookEntity(await this.bookService.create(data));
  }
}
