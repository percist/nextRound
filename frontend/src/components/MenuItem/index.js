import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteMenuItem } from "../../store/items";
// TODO: implement react-sortable-hoc documentation: https://www.npmjs.com/package/react-sortable-hoc

const MenuItem = ({ item, itemsToDisplay, setItemsToDisplay, siteId }) => {


  const dispatch = useDispatch();
  const [errors, setErrors] = useState([]);

  const handleMenuDelete = async (e) => {
    e.preventDefault();
    await dispatch(deleteMenuItem(siteId, item.id))
      .catch(res => {
        if (res.data && res.data.errors) setErrors(res.data.errors);
      })
    setItemsToDisplay([...itemsToDisplay.filter(setItem => setItem.id != item.id)]);
  }

  return (
    <div 
      className="menu-item"
      >        
      <ul>
        {errors.map((error, idx) => <li key={idx}>{error}</li>)}
      </ul>
      <div className="menu-item_image">
        {item.imgUrl && <img src={item.imgUrl} alt="site item" />}
      </div>
      <div className="menu-item_info">
        <div className="menu-item_info_title">
          <h2>{item.name}</h2>
        </div>

        <div className="menu-item_info_description">
          {item.description}
        </div>
        <div className="menu-item_info_price">
          Price: {`$${item.price / 100}`}
        </div>
        <button 
          id="menu-item_delete_button" 
          onClick={handleMenuDelete}
        >
          Delete
        </button>
      </div>
    </div>
  )
};

export default MenuItem;