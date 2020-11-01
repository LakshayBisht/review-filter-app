import { makeStyles } from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import React from 'react'
import './Main.css';
import Review from './Review';

const useStyles = makeStyles({
  root : {
    margin: '30px 40px',
  }
})
const Main = (props) => {
  const classes = useStyles();
  const [lo, hi] = [props.page * 10 - 10, props.page * 10];
  const totalReviews = props.reviews.length;
  const totalPages = Math.ceil(totalReviews / 10);
  return (
    <div className='main'>
      <div className="topheading">
        <div className="lable">{`viewing ${lo + 1}-${hi > totalReviews ? totalReviews : hi} of ${totalReviews} Reviews`}</div>
        <div className="download">
          <i className='fa fa-wifi'></i>
          <i className='fa fa-code'></i>
          <i className='fa fa-download'></i>
        </div>
        <div className="alert">
          <i className='fa fa-bell'></i>
          <span>Create Alert</span>
          <i className='fa fa-caret-down'></i>
        </div>
      </div>
      {props.reviews.slice(lo, hi).map(review => <Review key={review.id} review={review}/>)}
      <Pagination classes={{root: classes.root}} count={totalPages} page={props.page} showFirstButton showLastButton onChange={props.pageChangeHandler}/>
    </div>
  )
}

export default Main
