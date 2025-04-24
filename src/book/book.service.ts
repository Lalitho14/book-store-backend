import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Libro } from './book.entity';
import { Repository } from 'typeorm';
import { CreateBook } from './dto/create-book.dto';
import { UpdateBook } from './dto/update-book.dto';

//Servicio para CRUD de libros
@Injectable()
export class BookService {
  //Inicializar servicios
  constructor(
    @InjectRepository(Libro) private bookRepository: Repository<Libro>,
  ) {}

  //Recuperar todos los libros desde base de datos
  async getBooks(): Promise<Libro[]> {
    return this.bookRepository.find();
  }

  //Obtener libro por ID desde base de datos
  async getBook(id: number): Promise<Libro | null> {
    //Intenta recuperar libro
    const exist_book = await this.bookRepository.findOne({ where: { id: id } });

    //Si se encontro libro se devuelve
    if (exist_book !== null) {
      return exist_book;
    }

    //Si no se encontro libro devuelve null
    return null;
  }

  //Eliminar registro de libro por ID desde base de datos
  async removeBook(id: number) {
    //Intenta recuperar libro
    const exist_book = await this.bookRepository.findOne({ where: { id: id } });

    //Si se encontro libro se elimina
    if (exist_book !== null) {
      //Regresa el registro eliminado
      return this.bookRepository.delete(id);
    }

    //Si no se encontro libro devuelve undefined
    return undefined;
  }

  //Crear registro de libro desde base de datos
  async setBook(book: CreateBook): Promise<Libro> {
    //Inicializa el nuevo registro
    const data = this.bookRepository.create(book);

    //Guarda el nuevo registro
    return this.bookRepository.save(data);
  }

  //Actualizar registro de libro desde base de datos
  async updateBook(book: UpdateBook, id: number) {
    //Intenta recuperar libro
    const exist_book = await this.bookRepository.findOne({ where: { id: id } });

    //Si se encontro libro se inicializa actualización
    if (exist_book !== null) {
      //Se actualiza registro con los campos correspondientes en base de datos
      const new_book = this.bookRepository.update(
        { id: id },
        {
          titulo: book.titulo,
          autor: book.autor,
          anio: book.anio,
          disponible: book.disponible,
        },
      );

      //Regresa el nuevo registro
      return new_book;
    } else {
      //Si no se encontro libro devuelve undefined
      return undefined;
    }
  }
}
