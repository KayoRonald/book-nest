import { Book } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';
import { IsUUID } from 'class-validator';

export class BookEntity implements Book {
  /**
   * The title of the book.
   * @example uuid
   */
  @ApiProperty({ example: '3ecd7c72-4190-43d7-8633-8fa0d0993d1a' })
  @IsUUID()
  id: string;
  /**
   * The title of the book.
   * @example The Lord of the Rings
   */
  @ApiProperty({
    example: 'The Lord of the Rings',
    description: 'The title of the book',
  })
  title: string;

  /**
   * The thumbnail image URL for the book.
   * @example https://example.com/book-thumbnail.jpg
   */
  @ApiProperty({
    example: 'https://example.com/book-thumbnail.jpg',
    description: 'The thumbnail image URL',
  })
  thumbl: string;

  /**
   * The description of the book.
   * @example An epic fantasy trilogy by J.R.R. Tolkien.
   */
  @ApiProperty({
    example: 'An epic fantasy trilogy by J.R.R. Tolkien.',
    description: 'The description of the book',
  })
  description: string;

  /**
   * The price of the book.
   * @example 29.99
   */
  @ApiProperty({
    example: 29.99,
    description: 'The price of the book',
  })
  price: number;
  constructor({ ...data }: Partial<BookEntity>) {
    Object.assign(this, data);
  }
}
