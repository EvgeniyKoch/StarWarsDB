import React, { Component } from 'react';

import Spiner from '../Spiner/Spiner';

const withData = (View) => {
  return class extends Component {
    
    state = {
      data: null
    }
  
    componentDidMount() {
      console.log(this.props.getData)
      this.props.getData()
        .then((data) => {
          this.setState( { data })
        });
    }
    
    render() {
      const { data } = this.state;  
      if (!data) {
        return <Spiner />;
      }

      return  <View {...this.props} data={data} />;
    }
  }
};

export default withData;