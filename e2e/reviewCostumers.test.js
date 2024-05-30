// eslint-disable-next-line no-undef
Feature('Review Feature');

// eslint-disable-next-line no-undef
Before(({ I }) => {
  I.amOnPage('/#/home');
  I.resizeWindow(1920, 1080);
});

// eslint-disable-next-line no-undef
Scenario('Adding a review', async ({ I }) => {
  I.seeElement('.resto-item h3 a');
  // eslint-disable-next-line no-undef
  const firstRestaurant = locate('.resto-item h3 a').first();
  I.click(firstRestaurant);

  I.seeElement('.restaurant-detail');
  I.seeElement('#add-review');
  const reviewNameInput = 'Maman Abdulrahman';
  const reviewContentInput = 'Makanan nya enak!!!';

  I.fillField('#review-name', reviewNameInput);
  I.fillField('#review-content', reviewContentInput);
  I.click('#submit-review');

  I.waitForText(reviewContentInput, 10, '#restaurant-reviews');

  I.see(reviewContentInput, '#restaurant-reviews');
});

// eslint-disable-next-line no-undef
Scenario('Viewing all reviews', async ({ I }) => {
  I.seeElement('.resto-item h3 a');
  // eslint-disable-next-line no-undef
  const firstRestaurant = locate('.resto-item h3 a').first();
  I.click(firstRestaurant);

  I.seeElement('.restaurant-detail');
  I.seeElement('.reviews');
  I.seeElement('.review_box');
  I.click('#show-all-reviews');

  I.waitForElement('.review_box ul li', 10);

  I.seeElement('.review_box ul li');
});
