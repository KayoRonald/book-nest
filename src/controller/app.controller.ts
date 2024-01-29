import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';
import { AppService } from '../service/app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Res() response: Response) {
    return response.status(200).json({
      message: this.appService.getHello()
    });
  }
}
