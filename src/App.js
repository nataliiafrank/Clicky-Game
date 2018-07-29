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
    const { score, topScore, clickedImages, images } = this.state; // destructuring this.state so we can use those variables 

    const target = event.target;
    let id = (target.dataset.id);

    if(this.state.clickedImages.includes(id)){
      this.setState({
        score: 0,
        status: "You guessed incorrectly",
        clickedImages: [],
        images: this.Shuffle(images)
      });
      return;
    } 
    else {
      this.setState({
        score: score + 1,
        clickedImages: [
          ...clickedImages,
          id,
        ],
        status: "You guessed correctly",
      });
    }

    this.setState({
      images: this.Shuffle(images),
      topScore: (score >= topScore) ? topScore + 1 : topScore,
    });
  }



  Shuffle = (images) => {
    let o = [...images];
    for(var j, x, i = o.length; i; j = parseInt(Math.random() * i, 10), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
  };


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
