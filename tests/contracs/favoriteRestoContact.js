const itActsAsFavoriteRestoModel = (favoriteResto) => {
  // eslint-disable-next-line no-undef
  it('should return the resto that has been added', async () => {
    await favoriteResto.putResto({ id: 1 });
    await favoriteResto.putResto({ id: 2 });

    // eslint-disable-next-line no-undef
    expect(await favoriteResto.getResto(1)).toEqual({ id: 1 });
    // eslint-disable-next-line no-undef
    expect(await favoriteResto.getResto(2)).toEqual({ id: 2 });
    // eslint-disable-next-line no-undef
    expect(await favoriteResto.getResto(3)).toEqual(undefined);
  });

  // eslint-disable-next-line no-undef
  it('should refuse a resto from being added if it does not have the correct property', async () => {
    await favoriteResto.putResto({ aProperty: 'property' });

    // eslint-disable-next-line no-undef
    expect(await favoriteResto.getAllRestaurants()).toEqual([]);
  });

  // eslint-disable-next-line no-undef
  it('can return all the resto that have been added', async () => {
    await favoriteResto.putResto({ id: 1 });
    await favoriteResto.putResto({ id: 2 });

    // eslint-disable-next-line no-undef
    expect(await favoriteResto.getAllRestaurants()).toEqual([
      { id: 1 },
      { id: 2 },
    ]);
  });

  // eslint-disable-next-line no-undef
  it('should remove favorite resto', async () => {
    await favoriteResto.putResto({ id: 1 });
    await favoriteResto.putResto({ id: 2 });
    await favoriteResto.putResto({ id: 3 });

    await favoriteResto.deleteResto(1);

    // eslint-disable-next-line no-undef
    expect(await favoriteResto.getAllRestaurants()).toEqual([
      { id: 2 },
      { id: 3 },
    ]);
  });

  // eslint-disable-next-line no-undef
  it('should handle request to remove a resto even tought the resto has not been added', async () => {
    await favoriteResto.putResto({ id: 1 });
    await favoriteResto.putResto({ id: 2 });
    await favoriteResto.putResto({ id: 3 });

    await favoriteResto.deleteResto(4);

    // eslint-disable-next-line no-undef
    expect(await favoriteResto.getAllRestaurants()).toEqual([
      { id: 1 },
      { id: 2 },
      { id: 3 },
    ]);
  });
};

export default itActsAsFavoriteRestoModel;
