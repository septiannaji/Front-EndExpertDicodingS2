import API_ENDPOINT from '../globals/api-endpoint';

class RestoranDBSource {
  static async daftarRestoran() {
    const response = await fetch(API_ENDPOINT.RESTAURANTS);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async detailRestaurant(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    return response.json();
  }
}

export default RestoranDBSource;
