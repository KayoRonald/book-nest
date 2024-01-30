import { ApiProperty } from '@nestjs/swagger';

export class Book {
  /**
   * The name of the Book
   * @example Kitty
   */
  name: string;

  @ApiProperty({ example: 1, description: 'The age of the Book' })
  age: number;

  @ApiProperty({
    example: 'Maine Coon',
    description: 'The breed of the Book',
  })
  breed: string;
}
