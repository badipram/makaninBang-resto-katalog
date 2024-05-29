import RestoDataSource from '../../data/resto-data-source';
import UrlParser from '../../routes/url-parser';
import CONFIG from '../../globals/config';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const Detail = {
  async render() {
    return `
      <div class="resto-detail">
        ${this.renderSkeleton()}
      </div>
      <div id="likeButtonContainer"></div>
    `;
  },
  async afterRender() {
    const restoDetailContainer = document.querySelector('.resto-detail');

    try {
      const url = UrlParser.parseActiveUrlWithoutCombiner();
      const restoDetail = await RestoDataSource.getRestaurantDetail(url.id);
      const smallImageUrl = `${CONFIG.SMALL_BASE_URL}${restoDetail.pictureId}`;
      const mediumImageUrl = `${CONFIG.MEDIUM_BASE_URL}${restoDetail.pictureId}`;

      const restaurantDetail = document.createElement('div');
      restaurantDetail.classList.add('restaurant-detail');
      restaurantDetail.innerHTML = `
        <div id="detail-restaurant">
          <div class="header_detail">
            <h2 id="restaurant-name">${restoDetail.name}</h2>
            <img src="${smallImageUrl}" srcset="${smallImageUrl} 480w, ${mediumImageUrl} 800w" alt="${restoDetail.name}" class="restaurant-image lazyload">
            <p id="restaurant-description">${restoDetail.description}</p>
          </div>

          <div class="address">
            <h2>Informasi</h2>
            <h3>Alamat</h3>
            <p id="restaurant-address">${restoDetail.address}</p>
            <h3>Kota</h3>
            <p id="restaurant-city">${restoDetail.city}</p>
            <h3>Rating</h3>
            <p id="restaurant-rating">${restoDetail.rating}</p>
            <h3>Categories</h3>
            <ul id="restaurant-categories">
              ${restoDetail.categories.map(category => `<li>${category.name}</li>`).join('')}
            </ul>
          </div>

          <div class="menu_list">
            <h2>Daftar Menu</h2>
            <ul id="restaurant-menus">
              ${Object.entries(restoDetail.menus).map(([menuType, menuItems]) => `
                <h4>${menuType}</h4>
                <ul>
                  ${menuItems.map(menuItem => `<li>${menuItem.name}</li>`).join('')}
                </ul>
                <br>
              `).join('')}
            </ul>
          </div>

          <div class="reviews">
            <h2>Review Pelanggan</h2>
            <div class="review_box">
              <ul id="restaurant-reviews"></ul>
              <button id="show-all-reviews">Lihat Semua Ulasan</button>
            </div>
          </div>

          <div id="add-review">
            <div class="input">
              <h3>Add Review</h3>
              <input type="text" id="review-name" placeholder="Your Name">
              <textarea id="review-content" placeholder="Your Review"></textarea>
              <button id="submit-review">Submit</button>
            </div>
          </div>

        </div>
      `;
      restoDetailContainer.innerHTML = '';
      restoDetailContainer.appendChild(restaurantDetail);

      const reviewListContainer = document.getElementById('restaurant-reviews');

      restoDetail.customerReviews.slice(0, 5).forEach(review => {
        const newReview = document.createElement('li');
        newReview.innerHTML = `<strong>${review.name}</strong><br> ${review.date} <br> "${review.review}" `;
        reviewListContainer.appendChild(newReview);
      });

      const allReviews = restoDetail.customerReviews.slice(5);

      const showAllReviewsButton = document.getElementById('show-all-reviews');
      showAllReviewsButton.addEventListener('click', () => {
        allReviews.forEach(review => {
          const newReview = document.createElement('li');
          newReview.innerHTML = `<strong>${review.name}</strong><br> ${review.date} <br> "${review.review}"`;
          reviewListContainer.appendChild(newReview);
        });
        showAllReviewsButton.style.display = 'none';
      });

      const submitReviewButton = document.getElementById('submit-review');
      submitReviewButton.addEventListener('click', async () => {
        const reviewNameInput = document.getElementById('review-name');
        const reviewContentInput = document.getElementById('review-content');
        const reviewData = {
          id: url.id,
          name: reviewNameInput.value,
          review: reviewContentInput.value,
        };
        try {
          const response = await RestoDataSource.addReview(reviewData);
          console.log('Review berhasil ditambahkan:', response);
          const newReview = response[response.length - 1];
          const newReviewElement = document.createElement('li');
          newReviewElement.innerHTML = `<strong>${newReview.name}</strong><br> ${newReview.date}<br> "${newReview.review}"`;
          const reviewListContainer = document.getElementById('restaurant-reviews');
          reviewListContainer.appendChild(newReviewElement);
          reviewNameInput.value = '';
          reviewContentInput.value = '';
        } catch (error) {
          console.error('Gagal menambahkan review:', error.message);
        }
      });
      LikeButtonInitiator.init({
        likeButtonContainer: document.querySelector('#likeButtonContainer'),
        resto: {
          id: restoDetail.id,
          name: restoDetail.name,
          description: restoDetail.description,
          pictureId: restoDetail.pictureId,
          city: restoDetail.city,
          rating: restoDetail.rating,
        },
      });
    } catch (error) {
      console.error('Error fetching restaurant data:', error.message);
      restoDetailContainer.innerHTML = '<p>Gagal memuat data restaurant.</p>';
    }
  },

  renderSkeleton() {
    let skeletons = '';
    for (let i = 0; i < 5; i++) {
      skeletons += `
        <div class="restaurant-detail skeleton detail-skeleton">
          <div class="skeleton-image"></div>
          <div class="skeleton-text"></div>
        </div>
      `;
    }
    return skeletons;
  }
};

export default Detail;
