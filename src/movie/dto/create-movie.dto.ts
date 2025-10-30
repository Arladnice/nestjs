import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateMovieDto {
  @ApiProperty({
    description: 'The title of the movie',
    example: 'Movie 1',
    type: String,
  })
  title: string;
  @ApiProperty({
    description: 'The release year of the movie',
    example: 2021,
    type: Number,
  })
  releaseYear: number;
  @ApiPropertyOptional({
    description: 'The poster of the movie',
    example: 'https://example.com/poster.jpg',
    type: String,
  })
  poster?: string;
  @ApiProperty({
    description: 'The actor ids of the movie',
    example: ['1', '2', '3'],
    type: [String],
  })
  actorIds: string[];
}
