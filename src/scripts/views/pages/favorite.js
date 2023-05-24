import RestoranFavoriteIdb from '../../data/restoranfavorite-idb';
import { createTemplateResto } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
      <div class="content">
        <h2 class="content__heading">Restoran Yang Kamu Suka</h2>
        <div id="restaurants" class="restaurants">
        </div>
      </div>
    `;
  },

  async afterRender() {
    const restaurants = await RestoranFavoriteIdb.getAllResto();
    const restoContainer = document.querySelector('#restaurants');
    if (restaurants.length) {
      restaurants.forEach((restaurant) => {
        restoContainer.innerHTML += createTemplateResto(restaurant);
      });
    } else {
      restoContainer.innerHTML = `
        <div class="restaurant-item__not__found">Tidak ada restoran untuk ditampilkan</div>
      `;
    }
  },
};

export default Favorite;
