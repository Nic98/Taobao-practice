import React from 'react'; 
import '../Styles/Card.scss';
import { Card } from 'antd';

const { Meta } = Card;

interface DescCardProps {
  image: string;
  title?: string;
  promotion: string;
  price: number;
}

type Props {= DescCardProps;}

export default function ProductCard(props: Props) {
  
  const {image, title, promotion, price } = props;
  return (
    <Card
      className="card"
      hoverable
      cover={<img alt="example" src={image} style={{ paddingTop: 3, borderRadius: 4, width: 230, height: 230 }} />}
    >
      <Meta title={title} description={promotion} />
      <div className='price'> {"¥" + price} </div>
    </Card>
  );

}
