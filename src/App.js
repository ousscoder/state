import React from 'react'
import { Button } from 'react-bootstrap'
import Counter from './component/Counter'
import Profile from './component/Profile'


export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state=({
      show:false
    })
  }

  tetbadel=()=>{
this.setState({show:!this.tetbadel.show})
  }

  render() {
    return (
      <div className='c'>

        <Counter/>
        
<Button onClick={this.tetbadel} >show</Button>
{ this.state.show? <Profile img="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg " width="70px" height="300px" name="web dev" bio="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, quia!" />
: null}

      </div>
    )
  }
}
