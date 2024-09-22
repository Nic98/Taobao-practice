import React from 'react'; 
import '../Styles/Card.scss';


interface DescCardProps {
  image: string;
  title: string;
  price: number;
}

export default function Card(props: DescCardProps) { 
  const {image, title, price} = props;
}
