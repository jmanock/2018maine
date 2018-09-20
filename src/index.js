import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {data} from './photo';

const app = document.getElementById('root');

class App extends React.Component{
  render(){
    return(
      <Tiles data={this.props.data} />
    );
  }
}

class Tiles extends React.Component{
  render(){
    return(
      <div className='tiles'>
        {this.props.data.map((data) => {
          return <Tile data={data} key={data.id} />
        })}
      </div>
    );
  }
}

class Tile extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      open:false,
      mouseOver:false
    };

    this.clickHandler = this.clickHandler.bind(this);
    this.mouseEnter = this.mouseEnter.bind(this);
    this.mouseLeave = this.mouseLeave.bind(this);
  }

  mouseEnter(e){
    e.preventDefault();
    if(this.state.mouseOver === false){
      this.setState({
        mouseOver:true
      });
    }
  }

  mouseLeave(e){
    e.preventDefault();
    if(this.state.mouseOver === true){
      this.setState({
        mouseOver:false
      });
    }
  }

  clickHandler(e){
    e.preventDefault();
    if(this.state.open === false){
      this.setState({
        open:true
      });
    }else{
      this.setState({
        open:false
      });
    }
  }

  render(){
    let tileStyle = {};

    if(this.state.open){
      tileStyle = {
        width:'62vw',
        height:'62vw',
        position:'absolute',
        left:'25%',
        margin:0,
        boxShadow:'0 0 40px 5px rgba(0,0,0,0.3)',
        transform:'none'
      };
    }else{
      tileStyle = {
        width:400,
        height:400
      };
    }

    return(
      <div className='tile'>
        <small>{this.props.data.name}</small>
        <img onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave} onClick={this.clickHandler} src={this.props.data.image} alt={this.props.data.name} style={tileStyle} />
      </div>
    );
  }
}

ReactDOM.render(<App data={data} />, app);
