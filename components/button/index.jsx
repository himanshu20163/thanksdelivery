import React from 'react'

export const Buttoncomponent = (props) => {
  return (
        <button className='good_advsior-btn' 
        style={{borderStyle:"none",boxShadow:"none",color:`${props.color}`,width:'250px',backgroundColor:`${props.bg}`}}>
            {props.title_data}
        </button>
  )
}