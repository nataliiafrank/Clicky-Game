import React, {Component} from 'react';
import './ImageGrid.css';
import Image from '../Image';

class ImageGrid extends Component {

    render(){
        return (
            <div>
                <div className="image-grid">
                    {this.props.images.map(images => (
                        <Image 
                            id={images.id}
                            key={images.id}
                            name={images.name}
                            image={images.image}
                            onClick={this.props.imgClick}
                        />
                    ))}
                </div>
            </div>
            
        )
    }
}

export default ImageGrid;