import React from 'react'

const Font = () => {
  let classNames = [];
  for (let index = 0; index < 12; index++) {
    classNames.push(`fs--${index}`)
  }

  return (
    <>
      {classNames.map((className, index) => (
        <div className={className} key={index}>
          {`.${className}`}
        </div>
      ))}
    </>
  )
}

export default Font
