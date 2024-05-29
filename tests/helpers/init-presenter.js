// import RestoDataSource from '../../src/scripts/data/resto-data-source';
// import FavoriteRestoIdb from '../../src/scripts/data/favorite-resto-idb';
// import Home from '../../src/scripts/views/pages/home';
// import Detail from '../../src/scripts/views/pages/detail';

// const Presenter = {
//   async showRestoList() {
//     const restoListContainer = document.querySelector('.resto-list');

//     try {
//       const restos = await RestoDataSource.getListOfRestaurants();
//       restoListContainer.innerHTML = '';

//       restos.forEach(resto => {
//         restoListContainer.innerHTML += `
//           <div class="resto-item">
//             <h2>${resto.name}</h2>
//             <p>${resto.description}</p>
//             <p>City: ${resto.city}</p>
//             <p>Rating: ${resto.rating}</p>
//           </div>
//         `;
//       });
//     } catch (error) {
//       console.error('Error fetching restaurant data:', error.message);
//       restoListContainer.innerHTML = '<p>Failed to load restaurant data. Please try again later.</p>';
//     }
//   },

//   async showRestoDetail(url) {
//     const restoDetailContainer = document.querySelector('.resto-detail');

//     try {
//       const restoDetail = await RestoDataSource.getRestaurantDetail(url.id);
//       restoDetailContainer.innerHTML = `
//         <div class="resto-detail">
//           <h2>${restoDetail.name}</h2>
//           <p>${restoDetail.description}</p>
//           <p>City: ${restoDetail.city}</p>
//           <p>Rating: ${restoDetail.rating}</p>
//           <!-- Add more details here as needed -->
//         </div>
//       `;
//     } catch (error) {
//       console.error('Error fetching restaurant detail:', error.message);
//       restoDetailContainer.innerHTML = '<p>Failed to load restaurant detail. Please try again later.</p>';
//     }
//   },

//   async showFavoriteRestos() {
//     const restaurantsContainer = document.querySelector('.restaurants');

//     try {
//       const restaurants = await FavoriteRestoIdb.getAllRestaurants();
//       restaurantsContainer.innerHTML = '';

//       restaurants.forEach(resto => {
//         restaurantsContainer.innerHTML += `
//           <div class="resto-item">
//             <h2>${resto.name}</h2>
//             <p>${resto.description}</p>
//             <p>City: ${resto.city}</p>
//             <p>Rating: ${resto.rating}</p>
//           </div>
//         `;
//       });
//     } catch (error) {
//       console.error('Failed to load favorite restaurants:', error.message);
//       restaurantsContainer.innerHTML = '<p>Failed to load favorite restaurants. Please try again later.</p>';
//     }
//   },
  
//   // Spy on function to monitor if it's called
//   monitorFunction: function(func) {
//     return jest.spyOn(Presenter, func);
//   }
// };

// export default Presenter;
