import React from 'react';
import { Rating } from '@material-ui/lab';

const Prog = params => {
  let per = params.bar + '%';
  return <div style={{display:'inline-block', height:'14px', width:per, backgroundColor:'rgba(0, 0, 0, 0.26)', borderRadius:'5px'}}></div>
}

const FilterByRating = (props) => {
  let tableData = props.ratings;
  return (
      <table style={{width:'100%'}}>
        <colgroup>
          <col span='1' style={{width: '40%'}}/>
          <col span='1' style={{width: '40%'}}/>
          <col span='1' style={{width: '20%'}}/>
        </colgroup>
        <tbody id='filter-by-rating'>
          {tableData.map(row => (
            <tr data-value={row.rating} key={row.rating} style={{backgroundColor: (props.filteredRating === row.rating) ? '#e5e5e5' : '#ffffff'}}>
              <td>
                <div><Rating value={parseInt(row.rating)} readOnly/></div>
              </td>
              <td><Prog bar={row.bar}/></td>
              <td style={{textAlign:'right'}}><div>{row.value}</div></td>
            </tr>
          ))}
        </tbody>
      </table>
  )
}

export default FilterByRating
