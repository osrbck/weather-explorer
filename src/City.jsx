import React from 'react'

const City = ({city}) => {
  console.log(city);
    return (
      <div className='mt-10'>
      {city ? (
        <>
          <h1 className='text-9xl py-20 text-sky-400'>{city.main.temp}°</h1>
          <h1 className='text-6xl mb-5'>{city.name}</h1>
          <h1 className='text-2xl text-yellow-700'>{city.weather[0].main}</h1>
        </>
      ) : (
        <p className='text-2xl mt-5'>Enter City Name</p>
      )}
    </div>
  );
}

export default City