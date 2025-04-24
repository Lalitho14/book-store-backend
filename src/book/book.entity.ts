import { Column, Entity, PrimaryGeneratedColumn, Unique } from 'typeorm';

//Inicializar entidad de libro para base de datos
@Entity({schema: 'public'})
export class Libro {
  //ID: llave primaria, autoincrementable
  @PrimaryGeneratedColumn('increment')
  id: number;

  //Campo para guardar título de libro
  @Column({ type: 'varchar', length: 200 })
  titulo: string;
  
  //Campo para guardar autor de libro
  @Column({ type: 'varchar', length: 200 })
  autor: string;

  //Campo para guardar año de libro
  @Column({ type: 'varchar', length: 4 })
  anio: string;

  //Campo para guardar genero de libro
  @Column({ type: 'varchar', length: 100 })
  genero: string;

  //Campo para guardar disponibilidad de libro
  @Column({ type: 'boolean', default: true })
  disponible: boolean;
}
