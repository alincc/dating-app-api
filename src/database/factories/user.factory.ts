import * as Faker from 'faker';
import { define } from 'typeorm-seeding';
import { User } from 'src/user';
import { School } from 'src/school';
import { Photo } from 'src/photo';
import { Orientation } from 'src/orientation';
import { Gender } from 'src/gender';

export declare interface UserFactorySettings {
  gender: Gender;
  school: School;
  photos: Photo[];
  orientations: Orientation[];
  lat: number;
  lng: number;
  geohash: string;
}

define(User, (faker: typeof Faker, settings: UserFactorySettings) => {
  const user = new User();

  const age = Math.floor(Math.random() * (60 - 18 + 1) + 18);

  user.name = faker.name.firstName() + ' ' + faker.name.lastName();
  user.email = faker.internet.email(user.name);
  user.phoneNumber = faker.phone.phoneNumber();
  user.dateOfBirth = faker.date.past(age);
  user.jobTitle = faker.name.jobTitle();
  user.company = faker.company.companyName();
  user.description = faker.lorem.words();
  user.showOrientation = faker.random.boolean();
  user.showGender = faker.random.boolean();
  user.male = faker.random.boolean();
  user.female = !user.male;
  user.orientationQueryPreference = faker.random.boolean();

  user.geohash = settings.geohash;
  user.gender = settings.gender;
  user.school = settings.school;
  user.photos = settings.photos;
  user.orientations = settings.orientations;
  user.lat = settings.lat;
  user.lng = settings.lng;
  user.geohash = settings.geohash;

  return user;
});
