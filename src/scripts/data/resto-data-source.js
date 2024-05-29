import API_ENDPOINT from '../globals/api-endpoint';
import CONFIG from '../globals/config';

class RestoDataSource {
  static async getListOfRestaurants() {
    try {
      const response = await fetch(API_ENDPOINT.LIST);
      const jsonResponse = await response.json();
      if (jsonResponse.restaurants) {
        return jsonResponse.restaurants;
      }
      throw new Error('Daftar restoran kosong.');
    } catch (error) {
      console.error('Error fetching list of restaurants:', error);
      throw error;
    }
  }

  static async getRestaurantDetail(id) {
    try {
      const response = await fetch(API_ENDPOINT.DETAIL(id));
      const jsonResponse = await response.json();
      if (jsonResponse.restaurant) {
        return jsonResponse.restaurant;
      }
      throw new Error('Restoran tidak ditemukan.');
    } catch (error) {
      console.error('Error fetching restaurant detail:', error);
      throw error;
    }
  }

  static async addReview(reviewData) {
    try {
      const response = await fetch(API_ENDPOINT.ADD_REVIEW, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Auth-Token': CONFIG.AUTH_TOKEN,
        },
        body: JSON.stringify(reviewData),
      });
      const jsonResponse = await response.json();
      if (jsonResponse.customerReviews) {
        return jsonResponse.customerReviews;
      }
      throw new Error('Gagal menambahkan review.');
    } catch (error) {
      console.error('Error adding review:', error);
      throw error;
    }
  }
}

export default RestoDataSource;
