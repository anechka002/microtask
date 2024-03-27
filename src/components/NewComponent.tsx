import React from 'react';

type TopCarsType = {
  manufacturer: string
  model: string
}

function NewComponent() {
  const topCars: Array<TopCarsType> = [
    {manufacturer:'BMW', model:'m5cs'},
    {manufacturer:'Mercedes', model:'e63s'},
    {manufacturer:'Audi', model:'rs6'},
  ]
  return (
    <table>
      
      {topCars.map((c, index)=>{
        return(
          <tr key={index}>
            <th>{c.manufacturer}</th>
            <th>{c.model}</th>
          </tr>
        )
      })}
      
    </table>
  )
}

export default NewComponent