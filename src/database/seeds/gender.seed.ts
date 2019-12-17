import { Factory, Seeder } from 'typeorm-seeding';
import { Connection } from 'typeorm';
import { Gender } from '../../gender';

export default class CreateGenders implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await connection
      .createQueryBuilder()
      .insert()
      .into(Gender)
      .values([
        { label: 'Man' },
        { label: 'Woman' },
        { label: 'Male to Female (MtF)' },
        { label: 'Female to Male (FtM)' },
        { label: 'Binary' },
        { label: 'Non-Binary' },
        { label: 'Genderfluid' },
        { label: 'Agender' },
        { label: 'Bigender' },
        { label: 'Polygender' },
        { label: 'Neutrois' },
        { label: 'Gender Apathetic' },
        { label: 'Androgyne' },
        { label: 'Intergender' },
        { label: 'Demigender' },
        { label: 'Greygender' },
        { label: 'Aporagender' },
        { label: 'Maverique' },
        { label: 'Novigender' },
        { label: 'Transitioning' },
        { label: 'Intersex' },
        { label: 'Dyadic' },
        { label: 'Trans Woman' },
        { label: 'Trans Man' },
        { label: 'Trans Feminine' },
        { label: 'Trans Masculine' },
      ])
      .execute();
  }
}
