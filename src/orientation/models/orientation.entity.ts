import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Orientation {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar')
  label: string;
}
