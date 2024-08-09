import React from "react";
export default function Map(){
    const cars = [
        {id: 1, brand: 'Ford'},
        {id: 2, brand: 'BMW'},
        {id: 3, brand: 'Audi'}
      ];
    return(
<><ul>
    <li>
{cars.map((car) => car.brand)}</li>
</ul>
</>
    )
}