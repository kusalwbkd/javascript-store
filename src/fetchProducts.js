import { setupStore } from './store.js';
import { allProductsUrl } from './utils.js';

const fetchProducts = async () => {

    const response=await fetch(allProductsUrl).catch((err)=>console.log(err))
  if(response){
    return await response.json()
  }

    return response
};

export default fetchProducts;
