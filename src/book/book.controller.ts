import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  NotFoundException,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { BookService } from './book.service';
import { Libro } from './book.entity';
import { CreateBook } from './dto/create-book.dto';
import { UpdateBook } from './dto/update-book.dto';

//Controlador para ruta /books
@Controller('books')
export class BookController {
  //Inicializar servicio de libros
  constructor(private readonly bookService: BookService) {}

  //Función para ruta books/
  @Get('/')
  @HttpCode(200)
  async findAll(): Promise<Libro[]> {
    //Regresa todos los registros de libros desde servicio
    return await this.bookService.getBooks();
  }

  //Función para ruta books/:id
  @Get('/:id')
  //Se pasa parametro únicamente números
  async findBook(@Param('id', ParseIntPipe) id: number) {
    //Intenta recuperar libro desde servicio
    const book = await this.bookService.getBook(id);

    if (!book) {
      //Si no se encontro regresa mensaje de error
      throw new NotFoundException(`Libro con el id ${id} no existe.`);
    }

    //Si se encuentra registro regresa datos del libro
    return book;
  }

  //Función para ruta books/:id
  @Delete('/:id')
  //Recibe como parametro solo números
  async deleteBook(@Param('id', ParseIntPipe) id: number) {
    //Intenta eliminar libro desde servicio
    const book = await this.bookService.removeBook(id);

    if (!book) {
      //Si no se devolvio el registro de libro eliminado
      //Muestra el siguiente mensaje
      throw new NotFoundException(`Libro con el id ${id} no existe.`);
    }

    //Regresa registro de libro eliminado
    return book;
  }

  //Función para books/
  @Post('/')
  //Recibe datos desde cuerpo de solicitud
  async createBook(@Body() book: CreateBook) {
    //Crear registro de libro desde servicio
    return this.bookService.setBook(book);
  }

  //Función para books/
  @Put('/:id')
  //Recibe como parametro id del libro a actualizar
  //Recibe datos desde cuerpo de solicitud
  async updateBook(
    @Body() book: UpdateBook,
    @Param('id', ParseIntPipe) id: number,
  ) {
    //Intenta actualizar registro de libro desde servicio
    const book_u = await this.bookService.updateBook(book, id);

    if (!book_u) {
      //Si no regresa un registro de libro lanza la excepción
      throw new NotFoundException(`Libro con el id ${id} no existe.`);
    }

    //Si actualiza correctamente devuelve registro actualizado
    return book_u;
  }
}
