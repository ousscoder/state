import React, { Component } from 'react'
import { Card } from 'react-bootstrap'

export default class profile extends Component {




  render() {
    return (
      <div className='pro'>

<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={this.props.img} />
      <Card.Body>
        <Card.Title> {this.props.name} </Card.Title>
        <Card.Text>
         {this.props.bio}
        </Card.Text>

      </Card.Body>
    </Card>


      </div>
    )
  }


}

