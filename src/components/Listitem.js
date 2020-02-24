import React from 'react';
import './Listitem.css';

function Listitem(props) {
    const items = props.items;
    const listitems = items.map(item => {
        return <div className="list" key={items.key}>
            {/* <p>{item.text}</p> to display only text but if u want to make it to edital thn we neeed to put in input text*/}
            {/*<input type="text" value={item.text} key={item.key} onChange={(e)=>{props.setUpdate(e.target.value,item.key)}}/>*/}
            <input type="text" id={item.key} value={item.text} onChange={(e) => { props.setUpdate(e.target.value, item.key) }} />
            <button type="button" onClick={() => props.deleteItem(item.key)}> Delete </button>
        </div>
    })
    return (
        <div> {listitems}</div>
    )
}
export default Listitem

