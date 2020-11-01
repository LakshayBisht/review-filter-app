import React from 'react'
import './Aside.css'
import Rating from './FilterByRating';
import Version from './FilterByVersion'
import Country from './FilterByCountry';

const Wrapper = (params) => {
  return (
    <div className="wrapper">
      <div className="heading">{params.icon}{' '}{params.heading}</div>
      <div className="fitercontent">
        {params.children}
      </div>
    </div>
  )
}

const time = ['All time', 'This week', 'This month', 'This year'];

const Aside = (props) => {
  return (
    <div className='aside' id='custom-scroll' onClick={props.filterHandler}>
      <div style={{position:'relative'}}>
        <i className='fa fa-search' style={{position:'absolute', top: '25px', left: '5px'}}></i>
        <input className='search' placeholder='search' type="text"/>
      </div>
      <div className="drop">
        <i className='fa fa-calendar-alt' style={{position:'absolute', top: '5px', left: '5px'}}/>
        <span className='timevalue'>{props.filters.time}</span>
        <i className='fa fa-chevron-down' style={{position:'absolute', top: '5px', left: '90%'}}></i>
        <div className='drop-child'>
          {time.map(t => <a key={t} className='time'>{t}</a>)}
        </div>
      </div>
      <Wrapper heading='Filter by Rating' icon={<i className='fa fa-caret-down'></i>}>
        <Rating ratings={props.filterData.ratings} filteredRating={props.filters.rating}/>
      </Wrapper>
      <Wrapper heading='Filter by Version' icon={<i className='fa fa-caret-down'></i>}>
        <Version versions={props.filterData.versions} filteredVersion={props.filters.version}/>
      </Wrapper>
      <Wrapper heading='Filter by Country' icon={<i className='fa fa-caret-down'></i>}>
        <Country countries={props.filterData.countries} filteredCountry = {props.filters.countryName}/>
      </Wrapper>
    </div>
  )
}

export default Aside
