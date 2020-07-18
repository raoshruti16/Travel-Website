import React from 'react';
import './master.css';

class PhotoEntry extends React.Component {

  render() {

    // console.log("this.props.caption = " + this.props.caption);
    // console.log("this.props.location = " + this.props.location);
    // console.log("this.props.src = " + this.props.src);
    // console.log("-------------------------------");
    const img_path = "../" + this.props.src +".jsx";
    const image_path = "../images/" + this.props.src;

    return <div className="photo-entry-block" >
              <a href={image_path}>
                 <img className="photo-img" src={image_path} alt={image_path} />
              </a>
              <h5>{this.props.caption}</h5>
              <h6>{this.props.location}</h6>
              <button className="button3"><a href={img_path} className="ok">View</a></button>
           </div>
  }

}

export default PhotoEntry;
