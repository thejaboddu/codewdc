import certificate1 from '../public/assets/images/certificate1.png';
import certificate2 from '../public/assets/images/certificate2.png';
import certificate3 from '../public/assets/images/certificate3.png';

export interface SecurityFeaturesInterface {
    title: string
    id: number
    desc: string
    url:any
  }
  
  export const SecurityFeaturesInterface: SecurityFeaturesInterface[] = [
    
    { title: 'Security Paper',
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    url:certificate1,
    id: 1},
    { title: 'Microline Printing',
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    url:certificate2,
    id: 2},
    { title: 'High Security Borders',
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    url:certificate3,
    id: 3},
    { title: 'Prismatic Print',
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    url:certificate1,
    id: 4},
    { title: 'Invisible Printing',
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    url:certificate2,
    id: 5},
    { title: 'Hologram Strip Fusing',
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    url:certificate3,
    id: 6},
  ]