import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from 'src/user';

@Entity()
export class Photo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  url: string;

  @Column('int')
  sequence: number;

  @ManyToOne(
    type => User,
    user => user.photos,
  )
  user: User;
}
