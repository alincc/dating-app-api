import { Factory, Seeder } from 'typeorm-seeding';
import { Connection } from 'typeorm';
import { School } from '../../school';

export default class CreateSchools implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await connection
      .createQueryBuilder()
      .insert()
      .into(School)
      .values([
        {
          label: 'Temple University',
          lat: 39.9811877,
          lng: -75.1554979,
          geohash: 'dr4e3y37m',
        },
        {
          label: 'Drexel University',
          lat: 39.9566127,
          lng: -75.1921381,
          geohash: 'dr4e2cyu0',
        },
        {
          label: 'University of Pennsylvania',
          lat: 39.9522188,
          lng: -75.1954077,
          geohash: 'dr4e2ch6s',
        },
        {
          label: 'Seattle University',
          lat: 47.6091799,
          lng: -122.3195059,
          geohash: 'c23nbdcxs',
        },
        {
          label: 'University of Washington',
          lat: 47.6553351,
          lng: -122.3057139,
          geohash: 'c23p0g7sq',
        },
        {
          label: 'Seattle Central College',
          lat: 47.6163121,
          lng: -122.3233975,
          geohash: 'c23nbkqc4',
        },
      ])
      .execute();
  }
}
