import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { User } from 'src/user';

@Entity()
export class Gender {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar')
  label: string;

  @OneToMany(
    type => User,
    user => user.gender,
  )
  users: User[];
}
