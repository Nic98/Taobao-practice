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
    <Card
      hoverable
      style={}
    >

    </Card>
  );
}
