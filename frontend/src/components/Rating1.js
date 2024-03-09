import React, { useState } from 'react'
import { Rating } from 'react-simple-star-rating'

export function Rating1(props) {
  const [rating, setRating] = useState(0)

  // Catch Rating value
  const handleRating = (rate=props.number) => {
    setRating(rate)

    // other logic
  }
  // Optinal callback functions
  const onPointerEnter = () => console.log('Enter')
  const onPointerLeave = () => console.log('Leave')
  const onPointerMove = (value=props.number, index=props.number) => console.log(value, index)

  return (
    <div className='App'>
      <Rating
        onClick={handleRating}
        onPointerEnter={onPointerEnter}
        onPointerLeave={onPointerLeave}
        onPointerMove={onPointerMove}
        /* Available Props */
      />
    </div>
  )
}