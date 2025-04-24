import { IsBoolean, IsOptional, IsString, MaxLength, MinLength } from 'class-validator';
import { IsNull } from 'typeorm';

//DTO para verificar y actualizar campos de libros
export class UpdateBook {
  @IsString()
  @MinLength(1, { message: 'El nombre del libro debe ser mayor a 1 caracter.' })
  @MaxLength(200)
  @IsOptional()
  titulo?: string;

  @IsString()
  @MinLength(1, { message: 'El nombre del autor debe ser mayor a 1 caracter.' })
  @MaxLength(200)
  @IsOptional()
  autor?: string;

  @IsString()
  @MinLength(4, { message: 'Año de libro incorrecto.' })
  @MaxLength(4)
  @IsOptional()
  anio?: string;

  @IsString()
  @IsOptional()
  @MinLength(1, {
    message: 'El nombre del genero debe ser mayor a 1 caracter.',
  })
  @MaxLength(200)
  genero?: string;

  @IsBoolean()
  @IsOptional()
  disponible?: boolean;
}
