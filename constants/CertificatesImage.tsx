import certificate1 from 'public/assets/images/certificate1.png';
import certificate2 from 'public/assets/images/certificate2.png';
import certificate3 from 'public/assets/images/certificate3.png';

export interface CertificatesImageInterface {
    url: any
    id: string
    alt:string
    width: number
    height: number
  }
  
  export const CertificatesImageInterface: CertificatesImageInterface[] = [
    { url:certificate1, alt:'', width:482, height:614, id: '1'},
    {  url: certificate2, alt:'', width:482, height:614,  id: '2'},
    { url: certificate3, alt:'', width:482, height:614,  id: '3'},
    
  ]