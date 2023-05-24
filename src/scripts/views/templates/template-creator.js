import CONFIG from '../../globals/config';

const createDetailResto = (restaurant) => `
<div>
  <h2 class="restaurant__name">${restaurant.name}</h2>
  <img loading="lazy" crossorigin="anonymous" class="img__resto" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" />
  <div class="info_resto">
  <h3>INFORMASI</h3>
  <h4>Alamat : ${restaurant.address} , Kota ${restaurant.city}</h4>
  <h4>Rating : ${restaurant.rating}</h4>
  <h4>Jenis : ${restaurant.categories.map((category) => category.name).join(', ')}</h4>
  <h4>Makanan : ${restaurant.menus.foods.map((food) => food.name).join(', ')}</h4>
  <h4>Minuman : ${restaurant.menus.drinks.map((drink) => drink.name).join(', ')}</h4>
</div>

<div class="restaurant__description">
  <h3>Description</h3>
  <p>${restaurant.description}</p>
</div>

<div class="restaurant__description">
  <h3>Customer Reviews</h3>
  <p>${restaurant.customerReviews.map((customer) => customer.review).join(', ')}</p>
</div>
`;

const createTemplateResto = (restaurant) => `
  <div class="resto_item">
    <div class="resto_item__header">
        <img loading="lazy" crossorigin="anonymous" class="resto_item__header__img" alt="${restaurant.name}"
        src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}">
    </div>

    <div tabindex="0" class="resto-item">
          <h3 class="resto__name"><a href="${`/#/detail/${restaurant.id}`}">${restaurant.name}</a></h3>
          <p class="resto__rating__score" >Rating : ⭐️${restaurant.rating}</p>
          <p class="resto__kota" >Kota : ${restaurant.city}</p>
          <p class="resto__descript">${restaurant.description}</p>
    </div>
  </div>
  `;

const createTemplateLikeButton = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
   <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createTemplateUnlikeButton = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createTemplateResto,
  createDetailResto,
  createTemplateLikeButton,
  createTemplateUnlikeButton,
};
