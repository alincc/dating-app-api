import { Factory, Seeder } from 'typeorm-seeding';
import { Connection } from 'typeorm';
import { User } from 'src/user';
import { UserFactorySettings } from '../factories/user.factory';
import { Gender } from 'src/gender';
import { School } from 'src/school';
import { Orientation } from 'src/orientation';
import * as Geohash from 'ngeohash';

export default class CreateUsers implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    const gender = connection.getRepository(Gender);
    const school = connection.getRepository(School);
    const orientation = connection.getRepository(Orientation);

    const genders = await gender.find();
    const schools = await school.find();
    const orientations = await orientation.find();

    let genderIdx;
    let schoolIdx;
    let orientationsIdx;
    // philadelphia users
    for (let i = 0; i < 1000; i++) {
      genderIdx = Math.floor(Math.random() * genders.length);
      schoolIdx = Math.floor(Math.random() * schools.length);
      orientationsIdx = Math.floor(Math.random() * orientations.length);

      const lat = getRandomInRange(40.05394, 39.901877, 7);
      const lng = getRandomInRange(-75.240945, -75.143441, 7);
      const geohash = Geohash.encode(lat, lng);

      const settings: UserFactorySettings = {
        gender: genders[genderIdx],
        school: schools[schoolIdx],
        photos: [],
        orientations: [orientations[orientationsIdx]],
        geohash,
        lat,
        lng,
      };

      await factory(User)(settings).seed();
    }

    // seattle users
    for (let n = 0; n < 1000; n++) {
      genderIdx = Math.floor(Math.random() * genders.length);
      schoolIdx = Math.floor(Math.random() * schools.length);
      orientationsIdx = Math.floor(Math.random() * orientations.length);

      const lat = getRandomInRange(47.73281, 47.520641, 7);
      const lng = getRandomInRange(-122.414501, -122.255828, 7);
      const geohash = Geohash.encode(lat, lng);

      const settings: UserFactorySettings = {
        gender: genders[genderIdx],
        school: schools[schoolIdx],
        photos: [],
        orientations: [orientations[orientationsIdx]],
        geohash,
        lat,
        lng,
      };

      await factory(User)(settings).seed();
    }
  }
}

// https://stackoverflow.com/questions/6878761/javascript-how-to-create-random-longitude-and-latitudes
function getRandomInRange(from, to, fixed) {
  return (Math.random() * (to - from) + from).toFixed(fixed) * 1;
}
