import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinTable,
  ManyToMany,
  JoinColumn,
  OneToMany,
  ManyToOne,
} from 'typeorm';
import { Gender } from 'src/gender';
import { Orientation } from 'src/orientation';
import { School } from 'src/school';
import { Photo } from 'src/photo';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  name: string;

  @Column()
  email: string;

  @Column()
  phoneNumber: string;

  @Column('date')
  dateOfBirth: Date;

  @Column('decimal', { precision: 20, scale: 3 })
  lat: number;

  @Column('decimal', { precision: 20, scale: 3 })
  lng: number;

  @Column('varchar')
  geohash: string;

  @Column({ length: 100 })
  jobTitle: string;

  @Column({ length: 100 })
  company: string;

  @Column('longtext')
  description: string;

  @Column('bool')
  showOrientation: boolean;

  @Column('bool')
  showGender: boolean;

  @Column('bool')
  male: boolean;

  @Column('bool')
  female: boolean;

  @Column('bool')
  orientationQueryPreference: boolean;

  @ManyToOne(
    type => Gender,
    gender => gender.users,
  )
  gender: Gender;

  @ManyToMany(type => Orientation)
  @JoinTable()
  orientations: Orientation[];

  @ManyToOne(
    type => School,
    school => school.users,
  )
  school: School;

  @OneToMany(
    type => Photo,
    photo => photo.user,
  )
  photos: Photo[];
}
