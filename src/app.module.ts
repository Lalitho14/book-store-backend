import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookModule } from './book/book.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Libro } from './book/book.entity';

@Module({
  imports: [
    //Inicializar base de datos con TypeORM
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      password: 'root',
      username: 'postgres',
      entities: [Libro],
      database: 'book-store',
      synchronize: true,
      logging: true,
    }),
    //Importar modulo de libros
    BookModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
