import React, { Fragment } from 'react';

class StorePicker extends React.Component {
  render() {
    return (
      <Fragment>
        {/* Comment */}
        {/* <p>Sibling</p> */}
        <form className="store-selector">
          <h2>Enter a Store</h2>
          <input type="text" required placeholder="Store Name" />
          <button type="submit">Visit Store</button>
        </form> 
      </Fragment>
    );
  }
}

export default StorePicker;