import React from 'react'; 
import '../Styles/Card.scss';
import { Card } from 'antd';

const { Meta } = Card;

interface DescCardProps {
  image: string;
  title: string;
  price: number;
}

export default function ProductCard(props: DescCardProps) { 
  const { image, title, price } = props;
  return (
    <div className="card">
      <img src={image} alt="bed" />
      <div className="card-content">
        <h2>{title}</h2>
        <p>{price}</p>
      </div>
    </div>
  );
}
