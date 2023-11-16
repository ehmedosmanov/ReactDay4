import React from 'react'

const Card = ({id, title,price,category,image}) => {

    return (
    <div key={id} className='card'>
        <img src={image} alt="" />
        <h1>{title}</h1>
        <p>{category}</p>
        <span>{price}</span>            
    </div>
  )
}

export default Card