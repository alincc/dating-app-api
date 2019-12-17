import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { User } from 'src/user';

@Entity()
export class School {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar')
  label: string;

  @Column('decimal', { precision: 20, scale: 3 })
  lat: number;

  @Column('decimal', { precision: 20, scale: 3 })
  lng: number;

  @Column('varchar')
  geohash: string;

  @OneToMany(
    type => User,
    user => user.school,
  )
  users: User[];
}
