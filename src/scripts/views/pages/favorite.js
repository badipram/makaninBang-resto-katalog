import FavoriteRestoIdb from '../../data/favorite-resto-idb';
import CONFIG from '../../globals/config';
import 'lazysizes';

const Favorite = {
  async render() {
    return `
      <div class="restaurants">
        ${this.renderSkeletons(10)}
      </div>
    `;
  },

  async afterRender() {
    const restaurantsContainer = document.querySelector('.restaurants');

    try {
      const restaurants = await FavoriteRestoIdb.getAllRestaurants();
      restaurantsContainer.innerHTML = '';

      restaurants.forEach((resto) => {
        const smallImageUrl = `${CONFIG.SMALL_BASE_URL}${resto.pictureId}`;
        const mediumImageUrl = `${CONFIG.MEDIUM_BASE_URL}${resto.pictureId}`;

        const restoItem = document.createElement('div');
        restoItem.classList.add('restaurant-item');
        restoItem.innerHTML = `
        <img 
        data-src="${smallImageUrl}" 
        data-srcset="${smallImageUrl} 480w, ${mediumImageUrl} 800w" 
        alt="${resto.name}" 
        class="resto-image lazyload"
      >
          <h3><a href="#/detail/${resto.id}">${resto.name}</a></h3>
          <div class="details">
            <p>🏠${resto.city}</p>
            <p>⭐${resto.rating}</p>
          </div>
          <p>${resto.description}</p>
        `;
        restaurantsContainer.appendChild(restoItem);
      });
    } catch (error) {
      console.error('Error displaying data from db:', error.message);
      restaurantsContainer.innerHTML = '<p>Failed to load restaurant data.</p>';
    }
  },

  renderSkeletons(count) {
    let skeletons = '';
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < count; i++) {
      skeletons += `
        <div class="restaurant-item skeleton favorite-skeleton">
          <div class="skeleton-image"></div>
          <h3 class="skeleton-text"></h3>
          <div class="details">
            <p class="skeleton-text"></p>
            <p class="skeleton-text"></p>
          </div>
          <p class="skeleton-text"></p>
        </div>
      `;
    }
    return skeletons;
  },
};

export default Favorite;
