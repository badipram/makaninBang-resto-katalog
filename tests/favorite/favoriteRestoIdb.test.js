import itActsAsFavoriteRestoModel from '../contracs/favoriteRestoContact';
import FavoriteRestoIdb from '../../src/scripts/data/favorite-resto-idb';
import { clearIdb } from '../helpers/idb-helper';

// eslint-disable-next-line no-undef
describe('favorite resto idb contract test implementation', () => {
  // eslint-disable-next-line no-undef
  afterEach(async () => {
    await clearIdb();
  });

  itActsAsFavoriteRestoModel(FavoriteRestoIdb);
});
