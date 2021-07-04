import React from 'react';
import {
  Card, CardImg, CardBody,
  CardTitle
} from 'reactstrap';

const Card1 = ({image, title}) => {
  return (
    <div>
      <Card style={{backgroundColor:"rgb(230, 224, 224)"}}>
        
        <CardBody className="card" style={{backgroundColor:"rgb(230, 224, 224)",border:"0px",textAlign:"center"}} >
          <CardTitle  className="cardtitle" tag="h5">{title}</CardTitle>
        </CardBody>
        <CardImg top width="100%" src={image} alt="Card image cap" />
      </Card>
    </div>
  );
};

export default Card1;