import { Controller, Get, Query } from '@nestjs/common';

@Controller('movies')
export class MovieController {
  @Get()
  findAll(@Query() query: any) {
    return JSON.stringify(query);
  }
}
