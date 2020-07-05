import React from 'react'

const Color = () => {
  return (
    <table>
      <thead>
        <tr>
          <th>background</th>
          <th>font color</th>
        </tr>
      </thead>
      <tbody>
        {['primary', 'secondary', 'red', 'green', 'foreground', 'background'].map((color, index) => (
          <React.Fragment key={index}>
            {new Array(['primary', 'secondary'].includes(color)? 9 : 5).fill(0).map((_value, colorIndex) => {
              const bg = `bg--${color}--${colorIndex}`
              const fc = `fc--${color}--${colorIndex}`
              return (
                <tr key={colorIndex}>
                  <td className={bg}>
                    {`.${bg}`}
                  </td>
                  <td className={fc}>
                    {`.${fc}`}
                  </td>
                </tr>
              )
            })}
          </React.Fragment>
        ))}
      </tbody>
    </table>
  )
}

export default Color
