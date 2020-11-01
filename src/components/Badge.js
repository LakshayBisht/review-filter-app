import React from 'react'

const Badge = (props) => {
  return (
    <div style={{border:'1px solid black', padding:'2px 5px', display:'inline-block', borderRadius:'5px', ...props.style}}>
      {props.value}
    </div>
  )
}

export default Badge
