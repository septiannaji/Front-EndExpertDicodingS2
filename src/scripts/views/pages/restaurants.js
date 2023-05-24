import RestoranDBSource from '../../data/restorandb-source';
import { createTemplateResto } from '../templates/template-creator';

const Restos = {
  async render() {
    return `
      <div class="content">
        <h2 class="content__heading">Restoran</h2>
        <div id="restaurants" class="restaurants">
        </div>
      </div>
    `;
  },

  async afterRender() {
    const restos = await RestoranDBSource.daftarRestoran();
    const restosContainer = document.querySelector('#restaurants');
    restos.forEach((restaurant) => {
      restosContainer.innerHTML += createTemplateResto(restaurant);
    });
  },
};

export default Restos;
