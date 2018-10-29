import styles from './Details.less';

import React from 'react';

export default class Details extends React.Component {
  constructor() {
    super();
    this.state = {
      asyncComponent: null
    };
  }

  componentDidMount() {
    import('./AsyncComponent').then(asyncComponent => {
      this.setState({
        asyncComponent
      });
    });
  }

  render() {
    const AsyncComponent = this.state.asyncComponent;

    return (
      <h1 className={styles.root}>
        Welcome to the Details page
        {AsyncComponent ? <AsyncComponent /> : 'loading...'}
      </h1>
    );
  }
}
