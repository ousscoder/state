import React, { Component } from 'react'

export default class counter extends Component {

    constructor(props){
        super(props)
        this.state={
          seconds:0
        }
    }
    componentDidMount(){
        setInterval(() => {
          this.setState({seconds:this.state.seconds+1})
        }, 1000);
      }

      render() {
        return (
          <div className='msg'>
            <h4>This Profile has been here for {this.state.seconds} seconds</h4>
          </div>
        
        )
      }
    }