import itActsAsFavoriteRestoModel from '../contracs/favoriteRestoContact';
import FavoriteRestoIdb from '../../src/scripts/data/favorite-resto-idb';
import { clearIdb } from '../helpers/idb-helper';

describe('favorite resto idb contract test implementation', () => {
    afterEach(async () => {
        await clearIdb();
    });

    itActsAsFavoriteRestoModel(FavoriteRestoIdb);
});
