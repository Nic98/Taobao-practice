import React from 'react'; 
import '../Styles/Card.scss';
import { Card } from 'antd';

const { Meta } = Card;

interface DescCardProps {
  image: string;
  title: string;
  promotion: string;
  price: number;
}

export default function ProductCard(props: DescCardProps) { 
  const { image, title, promotion, price } = props;
  return (
    <Card
      className="card"
      hoverable
      style={{ width: 240, height:344 }}
      cover={<img alt="example" src={image} style={{ width: 240, height: 240 }} />}
    >
      <Meta title={title} description={promotion } />
      <div></div>
    </Card>
  );
}
