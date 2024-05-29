Feature('Liking One Restaurant');

Before(({ I }) => {
    I.amOnPage('/#/favorite');
    I.resizeWindow(1920, 1080); 
});

Scenario('Liking One Restaurant', async ({ I }) => {
    I.dontSeeElement('.restaurant-item');

    I.amOnPage('/');

    I.seeElement('.resto-item h3 a'); 
    const firstRestaurant = locate('.resto-item h3 a').first(); 
    I.click(firstRestaurant); 

    I.seeElement('#likeButton'); 
    I.click('#likeButton'); 

    I.amOnPage('/#/favorite'); 
    I.seeElement('.restaurant-item'); 
    const likedRestaurant = locate('.restaurant-item h3 a').first(); 
    I.click(likedRestaurant); 
});

Scenario('Unliking One Restaurant', async ({ I }) => {
    I.dontSeeElement('.restaurant-item');

    I.amOnPage('/');

    I.seeElement('.resto-item h3 a'); 
    const firstRestaurant = locate('.resto-item h3 a').first(); 
    I.click(firstRestaurant); 

    I.seeElement('#likeButton'); 
    I.click('#likeButton'); 

    I.amOnPage('/#/favorite'); 
    I.seeElement('.restaurant-item'); 
    const likedRestaurant = locate('.restaurant-item h3 a').first(); 
    I.click(likedRestaurant); 

    I.seeElement('#likeButton'); 
    I.click('#likeButton'); 

    I.amOnPage('/#/favorite'); 
    I.dontSeeElement('.restaurant-item');
});
