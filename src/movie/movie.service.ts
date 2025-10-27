import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { MovieDto } from './dto/movie.dto';

@Injectable()
export class MovieService {
  // constructor(
  //   @InjectRepository(MovieEntity)
  //   private readonly movieRepository: Repository<MovieEntity>,
  //   @InjectRepository(ActorEntity)
  //   private readonly actorRepository: Repository<ActorEntity>,
  //   @InjectRepository(PosterEntity)
  //   private readonly posterRepository: Repository<PosterEntity>,
  // ) {}

  // async findAll(): Promise<MovieEntity[]> {
  //   return await this.movieRepository.find({
  //     order: {
  //       createdAt: 'desc',
  //     },
  //   });
  // }

  // async findById(id: string): Promise<MovieEntity> {
  //   const movie = await this.movieRepository.findOne({
  //     where: { id },
  //     relations: ['actors'],
  //   });

  //   if (!movie) throw new NotFoundException('Фильм не найден');

  //   return movie;
  // }

  // async create(dto: MovieDto): Promise<MovieEntity> {
  //   const { title, releaseYear, actorIds, imageUrl } = dto;

  //   const actors = await this.actorRepository.find({
  //     where: {
  //       id: In(actorIds),
  //     },
  //   });

  //   if (!actors || !actors.length)
  //     throw new NotFoundException('Один или несколько актеров не найдено');

  //   let poster: PosterEntity | null = null;
  //   if (imageUrl) {
  //     poster = this.posterRepository.create({ url: imageUrl });
  //     await this.posterRepository.save(poster);
  //   }

  //   const movie = this.movieRepository.create({
  //     title,
  //     releaseYear,
  //     poster,
  //     actors,
  //   });

  //   return await this.movieRepository.save(movie);
  // }

  // async update(id: string, dto: MovieDto): Promise<boolean> {
  //   const movie = await this.findById(id);

  //   Object.assign(movie, dto);

  //   await this.movieRepository.save(movie);

  //   return true;
  // }

  // async delete(id: string): Promise<string> {
  //   const movie = await this.findById(id);

  //   await this.movieRepository.remove(movie);

  //   return movie.id;
  // }
}
