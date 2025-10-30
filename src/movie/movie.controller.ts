import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import { MovieService } from './movie.service';
import {
  ApiBody,
  ApiHeader,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiParam,
  ApiQuery,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { CreateMovieDto } from './dto/create-movie.dto';

@ApiTags('Movie')
@Controller('movie')
export class MovieController {
  constructor(private readonly movieService: MovieService) {}

  @Get()
  @ApiOperation({
    summary: 'Get all movies',
    description: 'Get all movies from the database',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Movies fetched successfully',
  })
  findAll() {
    return [
      {
        id: 1,
        title: 'Movie 1',
        description: 'Description 1',
        releaseYear: 2021,
        rating: 4.5,
        isAvailable: true,
      },
      {
        id: 2,
        title: 'Movie 2',
        description: 'Description 2',
        releaseYear: 2022,
        rating: 4.0,
        isAvailable: false,
      },
    ];
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Get a movie by id',
    description: 'Get a movie by id from the database',
  })
  @ApiOkResponse({
    description: 'Movie by id fetched successfully',
  })
  @ApiNotFoundResponse({
    description: 'Movie by id not found',
    example: {
      status: 404,
      message: 'Movie by id not found',
      timestamp: '2025-10-30T12:00:00.000Z',
      path: '/movie/1',
    },
  })
  findById(@Param('id') id: string) {
    return {
      id: 1,
      title: 'Movie 1',
      description: 'Description 1',
      releaseYear: 2021,
      rating: 4.5,
      isAvailable: true,
    };
  }

  @ApiOperation({
    summary: 'Create a new movie',
    description: 'Create a new movie in the database',
  })
  @Post()
  create(@Body() dto: CreateMovieDto) {
    return dto;
  }
}
