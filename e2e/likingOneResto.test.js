// eslint-disable-next-line no-undef
Feature('Liking One Restaurant');

// eslint-disable-next-line no-undef
Before(({ I }) => {
  I.amOnPage('/#/favorite');
  I.resizeWindow(1920, 1080);
});

// eslint-disable-next-line no-undef
Scenario('Liking One Restaurant', async ({ I }) => {
  I.dontSeeElement('.restaurant-item');

  I.amOnPage('/');

  I.seeElement('.resto-item h3 a');
  // eslint-disable-next-line no-undef
  const firstRestaurant = locate('.resto-item h3 a').first();
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.restaurant-item');
  // eslint-disable-next-line no-undef
  const likedRestaurant = locate('.restaurant-item h3 a').first();
  I.click(likedRestaurant);
});

// eslint-disable-next-line no-undef
Scenario('Unliking One Restaurant', async ({ I }) => {
  I.dontSeeElement('.restaurant-item');

  I.amOnPage('/');

  I.seeElement('.resto-item h3 a');
  // eslint-disable-next-line no-undef
  const firstRestaurant = locate('.resto-item h3 a').first();
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.restaurant-item');
  // eslint-disable-next-line no-undef
  const likedRestaurant = locate('.restaurant-item h3 a').first();
  I.click(likedRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.dontSeeElement('.restaurant-item');
});
