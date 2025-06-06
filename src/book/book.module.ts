import { Module } from '@nestjs/common';
import { BookService } from './book.service';
import { BookController } from './book.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Libro } from './book.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Libro])],
  controllers: [BookController],
  providers: [BookService],
})
export class BookModule {}
