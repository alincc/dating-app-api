import { Factory, Seeder } from 'typeorm-seeding';
import { Connection } from 'typeorm';
import { Orientation } from '../../orientation';

export default class CreateOrientations implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await connection
      .createQueryBuilder()
      .insert()
      .into(Orientation)
      .values([
        { label: 'Heterosexual' },
        { label: 'Homosexual' },
        { label: 'Lesbian' },
        { label: 'Bisexual' },
        { label: 'Pansexual' },
        { label: 'Bicurious' },
        { label: 'Polysexual' },
        { label: 'Monosexual' },
        { label: 'Allosexual' },
        { label: 'Androsexual' },
        { label: 'Gynosexual' },
        { label: 'Questioning' },
        { label: 'Asexual' },
        { label: 'Demisexual' },
        { label: 'Grey Asexual' },
        { label: 'Perioriented' },
        { label: 'Varioriented' },
        { label: 'Heteronormative' },
        { label: 'Erasure' },
        { label: 'Cishet' },
        { label: 'Polyamorous' },
        { label: 'Monoamorous' },
        { label: 'Queer' },
      ])
      .execute();
  }
}
