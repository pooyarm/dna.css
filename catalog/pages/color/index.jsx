import React from 'react'

const Color = () => {
  return (
    <>
      {['primary', 'secondary', 'red', 'green', 'foreground', 'background'].map((color, index) => (
        <React.Fragment key={index}>
          {new Array(['primary', 'secondary'].includes(color)? 9 : 5).fill(0).map((_value, colorIndex) => {
            const className = `bg--${color}--${colorIndex}`
            return (
              <div className={className} key={colorIndex}>
                {`.${className}`}
              </div>
            )
          })}
        </React.Fragment>
      ))}
    </>
  )
}

export default Color
