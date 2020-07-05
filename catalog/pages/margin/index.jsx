import React from 'react'

const Margin = () => {
  const classNames = [
    'm--0',
    'm--2',
    'm--4',
    'm--6',
    'm--8',
    'm--10',
    'm--12',
    'm--14',
    'm--16',
    'm--18',
    'm--20',
    'm--24',
    'm--28',
    'm--32',
    'm--36',
    'm--40',
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

export default Margin
