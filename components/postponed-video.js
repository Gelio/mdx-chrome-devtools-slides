import React, { Component } from 'react';
import { updaters, withDeck } from 'mdx-deck';

class PostponedVideo extends Component {
  constructor(props) {
    super(props);

    this.videoRef = React.createRef();

    const { update, index } = props.deck;
    const { setSteps } = updaters;
    update(setSteps(index, 1));
  }

  get _video() {
    return this.videoRef.current;
  }

  componentDidMount() {
    this._resetVideo();
    this._updateVideoBasedOnStep();
  }

  componentDidUpdate() {
    this._updateVideoBasedOnStep();
  }

  render() {
    return <video ref={this.videoRef} {...this.props} />;
  }

  _updateVideoBasedOnStep() {
    const { step } = this.props.deck;

    if (step === 0) {
      this._video.pause();
    } else if (step === 1) {
      this._video.play();
    }
  }

  _resetVideo() {
    this._video.load();
  }
}

export default withDeck(PostponedVideo);
