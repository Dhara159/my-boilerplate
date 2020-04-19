import React from 'react';

import './ErrorBoundary.scss';

class ErrorBoundary extends React.Component {
  constructor() {
    super();

    this.state = {
      hasErrored: false
    }
  }

  static getDerivedStateFromError(error) {
    return { hasErrored: true };
  };

  componentDidCatch(error, info) {
    console.error(error);
  }

  render() {
    return this.state.hasErrored ?
      (
        <div className="ErrorImageOverlay">
          <div className="ErrorImageContainer"></div>
          <h2 className="ErrorImageText"> Oops, you found a broken page <span role='img' area-label='error-display'> &#9888; </span> </h2>
        </div>
      ) :
      this.props.children;
  }
};

export default ErrorBoundary;