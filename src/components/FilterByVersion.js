import React from 'react'

const FilterByVersion = (props) => {
  const tableData = props.versions;
  return (
    <table style={{width:'100%'}}>
      <colgroup>
        <col span='1' style={{width: '60%'}}/>
        <col span='1' style={{width: '40%'}}/>
      </colgroup>
      <tbody id='filter-by-version'>
        {tableData.map(row => (
          <tr data-value={row.version} key={row.version} style={{backgroundColor: (props.filteredVersion === row.version) ? '#e5e5e5' : '#ffffff'}}>
            <td>{row.version}</td>
            <td style={{textAlign:'right'}}>{row.value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default FilterByVersion
