import RestoDataSource from '../../data/resto-data-source';
import CONFIG from '../../globals/config';
import 'lazysizes';

const Home = {
  async render() {
    return `
      <div class="resto-list">
        ${this.renderSkeletons(10)}
      </div>
    `;
  },

  async afterRender() {
    const restoListContainer = document.querySelector('.resto-list');

    try {
      const restos = await RestoDataSource.getListOfRestaurants();
      restoListContainer.innerHTML = '';

      restos.forEach(resto => {
        const smallImageUrl = `${CONFIG.SMALL_BASE_URL}${resto.pictureId}`;
        const mediumImageUrl = `${CONFIG.MEDIUM_BASE_URL}${resto.pictureId}`;

        const restoItem = document.createElement('div');
        restoItem.classList.add('resto-item');
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
        restoListContainer.appendChild(restoItem);
      });
    } catch (error) {
      console.error('Error fetching restaurant data:', error.message);
      restoListContainer.innerHTML = '<p>Gagal memuat data restoran.</p>';
    }
  },

  renderSkeletons(count) {
    let skeletons = '';
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < count; i++) {
      skeletons += `
        <div class="resto-item skeleton home-skeleton">
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

export default Home;
