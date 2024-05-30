import FavoriteRestoIdb from '../../src/scripts/data/favorite-resto-idb';

const clearIdb = async () => {
  const allRestodata = await FavoriteRestoIdb.getAllRestaurants();
  allRestodata.forEach(async (resto) => {
    await FavoriteRestoIdb.deleteResto(resto.id);
  });
};

// eslint-disable-next-line import/prefer-default-export
export { clearIdb };
