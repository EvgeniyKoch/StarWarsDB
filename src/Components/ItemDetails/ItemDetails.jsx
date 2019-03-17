import React, { Component } from 'react';

import './ItemDetails.css';

const Record = ({ item, field, label }) => {
  return (
    <li className="list-group-item">
      <span className="term">{label}</span>
      <span>{item[field]}</span>
    </li>
  )
};

class ItemDetails extends Component {

  state = {
    item: null,
    image: null
  }
  
  componentDidMount() {
    this.updateItem();
  }

  componentDidUpdate(prevProps) {
    if (this.props.itemId !== prevProps.itemId) {
      this.updateItem();
    }
  }

  updateItem() {
    const { itemId, getData, getImageUrl } = this.props;

    if (!itemId) return;

    getData(itemId)
      .then((item) => {
        this.setState({ 
          item,
          image: getImageUrl(item)
        })
      })
  }

  render() {

    if (!this.state.item) {
      return <p style={
          {
            color:'coral',
            fontSize: '28px',
            textAlign: 'center'
          }
        }>Select a person from a list!</p>;
    };
 
    const { item, image } = this.state;
    const { name } = item;

    return (
      <div className="person-details card">
        <img className="person-image" src={image} alt={item}/>
        <div className="card-body">
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            {
              React.Children.map(this.props.children, (child) => {
                return React.cloneElement(child, { item })
              })
            }
          </ul>
        </div>
      </div>
    )
  }
}

export {
  Record,
  ItemDetails,
};
