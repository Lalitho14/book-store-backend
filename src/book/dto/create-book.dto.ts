import { IsBoolean, IsOptional, IsString, MaxLength, MinLength } from 'class-validator';

//DTO para verificar y guardar campos de libros
export class CreateBook {
  @IsString()
  @MinLength(1, { message: 'El nombre del libro debe ser mayor a 1 caracter.' })
  @MaxLength(200)
  titulo: string;

  @IsString()
  @MinLength(1, { message: 'El nombre del autor debe ser mayor a 1 caracter.' })
  @MaxLength(200)
  autor: string;

  @IsString()
  @MinLength(4, { message: 'Año de libro incorrecto.' })
  @MaxLength(4)
  anio: string;

  @IsString()
  @MinLength(1, {
    message: 'El nombre del genero debe ser mayor a 1 caracter.',
  })
  @MaxLength(200)
  genero: string;

  @IsBoolean()
  @IsOptional()
  disponible?: boolean;
}
