import React from 'react';
import '../App.css';
import Listitem from './Listitem';
import Navlinks from './Navlinks';
/* eslint-disable */
class Totallistdata extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [],
      currentItem: {
        text: "",
        key: ""
      }

    }
    this.handleInput = this.handleInput.bind(this)
    this.addItem = this.addItem.bind(this)
    this.deleteItem = this.deleteItem.bind(this)
    this.setUpdate = this.setUpdate.bind(this)

  }
  handleInput(e) {
    this.setState({
      currentItem: {
        text: e.target.value,
        key: Date.now()
      }
    })
  }
  addItem(e) {
    e.preventDefault();
    const newitem = this.state.currentItem;
    if (newitem !== "") {
      const newitems = [...this.state.items, newitem];
      this.setState({
        items: newitems,
        currentItem: {
          text: "",
          key: ""
        }

      })
    }
  }
  deleteItem(deletekey) {
    const filteritems = this.state.items.filter(item =>
      item.key !== deletekey)
    this.setState({
      items: filteritems
    })
  }

  setUpdate(text, key) {
    console.log("items:" + this.state.items);
    const items = this.state.items;
    items.map(item => {
      if (item.key === key) {
        console.log(item.key + "    " + key)
        item.text = text;
      }
    })
    this.setState({
      items: items
    })
  }
  render() {
    return (
          <div className="container" >
             <Navlinks/>
      <div className="mainbody">
        <header >
          <h1>TODO list of the day</h1>
          <form id="to-do-app" onSubmit={this.addItem}>
            <p >
              <input type="text" value={this.state.currentItem.text} placeholder="Enter the text" onChange={this.handleInput} />
              <button type="submit">Add</button>
            </p>
          </form>
        </header>
        <Listitem items={this.state.items} deleteItem={this.deleteItem} setUpdate={this.setUpdate}></Listitem>
      </div>
      </div>
    )
  }

}

export default Totallistdata;
