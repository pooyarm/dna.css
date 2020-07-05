import React from 'react'

const Padding = () => {
  const classNames = [
    'p--0',
    'p--2',
    'p--4',
    'p--6',
    'p--8',
    'p--10',
    'p--12',
    'p--14',
    'p--16',
    'p--18',
    'p--20',
    'p--24',
    'p--28',
    'p--32',
    'p--36',
    'p--40',
  ]

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

export default Padding
