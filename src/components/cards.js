import React, {Component} from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, Button } from 'reactstrap';


class Cards extends Component {
  render() {
      return (
        <div className="row">


        {this.props.dvds.map((item) => {
          return (
          <div className="col-md-3" key={item.id}>
           <Card>
              <CardImg top width="100%"
              src={item.image}
              alt={item.name}
              />
              <CardBody>
                <CardTitle>{item.name}</CardTitle>
                <CardText>{item.content}</CardText>
                <Button color="success" >Ver</Button>
              </CardBody>
            </Card>
          </div>
           );
        })}
        </div>
      );
  }
}


export default Cards;
