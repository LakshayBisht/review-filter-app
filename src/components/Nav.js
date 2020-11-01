import React from 'react'
import './Nav.css';

const Nav = (props) => {
  const products = props.products;
  return (
    <div className='nav' onClick={props.handler}>
      <div className="dropdown searchproduct">
        product
        <button className="mainmenubtn">{props.product}</button>
        <i className='fa fa-chevron-down' style={{position:'absolute', top: '25px', left: '95%'}}></i>
        <div className="dropdown-child">
          {products.map(p => <a className='product' key={p}>{p}</a>)}
        </div>
      </div>
      <div className="dropdown translation">
        translation
        <button className="mainmenubtn">{'English'}</button>
        <i className='fa fa-chevron-down' style={{position:'absolute', top: '23px', left: '85%'}}></i>
        <div className="dropdown-child">
          <a>{'English'}</a>
        </div>
      </div>
      <div className="dropdown sorting">
        filter
        <button className="mainmenubtn">{props.newestOldest}</button>
        <i className='fa fa-chevron-down' style={{position:'absolute', top: '23px', left: '85%'}}></i>
        <div className="dropdown-child">
          {['Newest First', 'Oldest First'].map(p => <a className='sort' key={p}>{p}</a>)}
        </div>
      </div>
    </div>
  )
}

export default Nav
