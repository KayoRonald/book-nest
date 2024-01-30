import { ApiProperty } from '@nestjs/swagger';

export class Book {
  /**
   * The name of the Book
   * @example Kitty
   */
  @ApiProperty({
    example: '1',
    description: 'The age of the Book',
  })
  name: string;

  /**
   * The name of the Book
   * @example 1
   */
  @ApiProperty({
    example: 1,
    description: 'The age of the Book',
  })
  age: number;
  /**
   * The name of the Book
   * @example Maine Coon
   */
  @ApiProperty({
    example: 'Maine Coon',
    description: 'The breed of the Book',
  })
  breed: string;
}
