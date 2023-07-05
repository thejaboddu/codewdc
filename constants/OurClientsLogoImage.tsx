import client1 from 'public/assets/images/client1.png';
import client2 from 'public/assets/images/client2.png';
import client3 from 'public/assets/images/client3.png';
import client4 from 'public/assets/images/client4.png';


export interface OurClientsLogoImageInterface {
  url: any
  id: string
  alt:string
  width: number
  height: number
}

export const OurClientsLogoImageInterface: OurClientsLogoImageInterface[] = [
  { url: client1,  alt:'', width:228, height:85, id: '1'},
  {  url: client2,  alt:'', width:160, height:101, id: '2'},
  { url: client3,  alt:'', width:214, height:113, id: '3'},
  {  url: client4,  alt:'', width:253, height:84, id: '4'},
  {  url: client1, alt:'', width:228, height:85, id: '5'},
  {  url: client2,  alt:'', width:160, height:101, id: '6'},
  {  url: client3, alt:'', width:214, height:113, id: '7'},
  
]