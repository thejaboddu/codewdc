import img_client_1 from '../public/assets/images/img_client_1.png';

export interface PeopleTalkListInterface {
    id: number
    name: string
    location: string
    info: string
    img:any
    
  }
  
  export const PeopleTalkListInterface: PeopleTalkListInterface[] = [
    {   id: 1, 
        name: 'John Martian',
        location: 'New York, USA',
        info: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.',
        img: img_client_1,
    },
    {   id: 2, 
        name: 'John Martian',
        location: 'New York, USA',
        info: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.',
        img: img_client_1,
    },
    {   id: 3, 
        name: 'John Martian',
        location: 'New York, USA',
        info: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.',
        img: img_client_1,
    },
    {   id: 4, 
        name: 'John Martian',
        location: 'New York, USA',
        info: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.',
        img: img_client_1,
    },
  ]