import React, { Component } from 'react';

class MainComponent extends Component {
  constructor(props) {
    super(props);
  }

  mainComp() {
    const { samples, photos } = this.props;
    return (
      <div>
        {photos.map((elem, i) => <img key={i} src={elem.picture.large} />)}
      </div>
    );
  }


  render() {
    return (
      this.mainComp()
    );
  }
}

export default MainComponent;