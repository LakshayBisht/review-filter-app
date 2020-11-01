import React from 'react'
import countryData from '../countryCode.json';

const FIlterByCountry = (props) => {
  const tableData = props.countries;
  return (
    <table style={{width:'100%'}}>
    <colgroup>
      <col span='1' style={{width: '60%'}}/>
      <col span='1' style={{width: '40%'}}/>
    </colgroup>
    <tbody id='filter-by-country'>
      {tableData.map(row => (
        <tr data-value={row.countryName} key={row.countryName} style={{backgroundColor: (props.filteredCountry === row.countryName) ? '#e5e5e5' : '#ffffff'}}>
          <td><span className={'flag-icon flag-icon-' + countryData[row.countryName].toLowerCase()} style={{borderRadius:'3px', marginRight:'10px'}}></span>{row.countryName}</td>
          <td style={{textAlign:'right'}}>{row.value}</td>
        </tr>
      ))}
    </tbody>
  </table>

  )
}

export default FIlterByCountry
