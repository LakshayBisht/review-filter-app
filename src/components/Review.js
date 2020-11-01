import React from 'react'
import './Review.css'
import Badge from './Badge';
import { Rating } from '@material-ui/lab';
import { getDays } from '../functions'
import countryData from '../countryCode.json';

const Review = (props) => {
  const {appStoreName, rating, version, countryName, reviewHeading, reviewText, reviewDate, reviewUserName} = props.review;
  const flagIcon = 'flag-icon flag-icon-' + countryData[countryName].toLowerCase();
  return (
    <div className='card'>
      <div className="title">
        <Badge style={{width: '24px' ,backgroundColor:'purple', color:'purple'}} value='.'/>
        <Badge style={{backgroundColor:'silver'}} value={appStoreName}/>
        <div style={{display:'inline-block'}}>{reviewHeading}</div>
        <Badge style={{float:'right'}} value='Translated'/>
        <Rating value={parseInt(rating)} readOnly size='large'/>
      </div>
      <div className="content">
        {reviewText}
      </div>
      <div className="bottom">
        <span>{'by' + reviewUserName}</span>
        <span>{getDays(reviewDate)}</span>
        <span>{version}</span>
        <span className={flagIcon} style={{borderRadius:'3px'}}></span>
        <span>{countryName}</span>
        <span style={{float:'right',position:'relative'}}>{'share'}{' '}<i className='fa fa-chevron-down' style={{position:'absolute', top: '5px', left:'105%'}}></i>
</span>
        <span style={{float:'right'}}>reply</span>
      </div>
    </div>
  )
}

export default Review
