import products1 from '../public/assets/images/products1.png';
import products2 from '../public/assets/images/products2.png';
import products3 from '../public/assets/images/products3.png';
import products4 from '../public/assets/images/products4.png';
import products5 from '../public/assets/images/products5.png';
import products6 from '../public/assets/images/products6.png';
import products7 from '../public/assets/images/products7.png';
import products8 from '../public/assets/images/products8.png';

export interface ProductsListInterface {
    title: string
    imgurl: any
    id: number
  }
  
  export const ProductsListInterface: ProductsListInterface[] = [
    { title: 'MICR Chequebooks, Dividend/ Interest Warrants', imgurl:products1, id: 1},
    { title: 'MICR Chequebooks, Dividend/ Interest Warrants', imgurl:products2, id: 2},
    { title: 'MICR Chequebooks, Dividend/ Interest Warrants', imgurl:products3, id: 3},
    { title: 'MICR Chequebooks, Dividend/ Interest Warrants', imgurl:products4, id: 4},
    { title: 'MICR Chequebooks, Dividend/ Interest Warrants', imgurl:products5, id: 5},
    { title: 'MICR Chequebooks, Dividend/ Interest Warrants', imgurl:products6, id: 6},
    { title: 'MICR Chequebooks, Dividend/ Interest Warrants', imgurl:products7, id: 7},
    { title: 'MICR Chequebooks, Dividend/ Interest Warrants', imgurl:products8, id: 8},    
]