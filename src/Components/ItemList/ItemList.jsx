import React, { Component } from 'react';
import './ItemLIst.css';
import Spiner from '../Spiner/Spiner';

export default class ItemList extends Component {

  state = {
    itemList: null
  }

  componentDidMount() {
    const { getData } = this.props;
      getData()
      .then((itemList) => {
        this.setState( { itemList })
      });
  }

  renderItems(arr) {
    return arr.map((item) => {
      const { id } = item;
      const label = this.props.children(item);
      return (
        <li
          className="list-group-item"
          key={id}
          onClick={() => this.props.onItemSelected(id)}>
          {label}
        </li>
      )
    });
  }

  render() {

    const { itemList } = this.state;
    if (!itemList) {
      return <Spiner />
    }

    const item = this.renderItems(itemList);
    return (
      <ul className="item-list list-group">
        {item}
      </ul>
    );
  }
}