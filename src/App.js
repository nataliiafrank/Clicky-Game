import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import ImageGrid from './components/ImageGrid/ImageGrid';
import images from "./images";

class App extends Component {
  state = {
    score: 0,
    topScore: 0,
    status: "Click an image to begin!",
    images,
    clickedImages: []
  }

  // Function for handling click event
  onImageclick = (event) => {
    const target = event.target;

    let id = (target.dataset.id);

    this.setState({
      score: this.state.score + 1,
      clickedImages: [
        ...this.state.clickedImages,
        id,
      ],
    })

  }

  render() {
    return (
      <div className="App">
        <Navbar 
          score={this.state.score}
          topScore={this.state.topScore}
          status={this.state.status}
        />
        <Header />
        <ImageGrid images={this.state.images} imgClick={this.onImageclick}/>


      </div>
    );
  }
}

export default App;
