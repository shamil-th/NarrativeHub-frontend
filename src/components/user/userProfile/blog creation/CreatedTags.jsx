import React from 'react'

const CreatedTags = ({tag, index, removeTag}) => {
  return (
    <div>
        <p>{tag}</p>
      <button onClick={()=>removeTag(index)}>delete</button>
    </div>
  )
}

export default CreatedTags