// import React from 'react';
// import { useState, useEffect } from 'react';
// import '../seatselector/SeatSelector.css'; // Assuming you have a CSS file for styling

// const seats = Array.from({ length: 30 }, (_, i) => ({ number: i + 1,
//     status: 'available' }));

// const SeatSelector = () => {
//     const [selectedSeats, setSelectedSeats] = useState([]);
//     const [timer, setTimer] = useState(300); // 5 minutes in seconds

//     const reservedSeats = [2, 5, 10, 15]; // Example reserved seats

//     useEffect(() => {
//         const countdown = setInterval(() => {
//             if (timer > 0) setTimer((prev) => prev - 1);
//             else clearInterval(countdown);
//         }, 1000);

//         return () => clearInterval(countdown);
//     }, [timer]);

//      const toggleSeat = (number) => {
//     if (reservedSeats.includes(number)) return;
//     if (selectedSeats.includes(number)) {
//       setSelectedSeats(selectedSeats.filter((s) => s !== number));
//     } else {
//       setSelectedSeats([...selectedSeats, number]);
//     }
//   };

//   const calculatePrice = () => {
//     const basePrice = 2500;
//     const isNight = new Date().getHours() >= 20 || new Date().getHours() <= 6;
//     return selectedSeats.length * (isNight ? basePrice + 500 : basePrice);
//   };

//   return (
//     <div>
//       <h3>Choississez vos places : </h3>
//         <div className="bud">
//             {seats.map(( { number }) => {
//                 const isReserved = reservedSeats.includes(number);
//                 const isSelected = selectedSeats.includes(number);
//                 let className = "seat";
//                 if (isReserved) 
//                         className += " reserved";
//                 else if (isSelected) {
//                         className += " selected";
//                 return (
//                     <div
//                         key={number}
//                         className={className}
//                         onClick={() => toggleSeat(number)}
//                     >
//                         {number}
//                     </div>
//                 );
//                 }
//     })}
//         </div>
//         <p>Temps restant : {Math.floor(timer / 60)} : {String(timer % 60).padStart(2, '0')}</p>
//         <p>Total à payer : {calculatePrice()} FCFA</p>

//         <button disabled={selectedSeats.lengh === 0}>Payer</button>
//     </div>
//   );
// };

// export default SeatSelector;

import React, { useState, useEffect } from 'react';
import './SeatSelector.css'; // pour couleurs personnalisées
import { Button } from 'react-bootstrap';

const seats = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  reserved: [2, 5, 8].includes(i + 1), // exemple places réservées
}));

function SeatSelector({ onSelectSeats }) {
  const [selected, setSelected] = useState([]);
  const [timer, setTimer] = useState(300); // 5 min

  // Timer
  useEffect(() => {
    if (selected.length > 0 && timer > 0) {
      const countdown = setInterval(() => setTimer((prev) => prev - 1), 1000);
      return () => clearInterval(countdown);
    }
  }, [selected, timer]);

  const toggleSeat = (id) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );
    onSelectSeats(id);
  };
    const calculatePrice = () => {
    const basePrice = 2500;
    const isNight = new Date().getHours() >= 20 || new Date().getHours() <= 6;
    return selected.length * (isNight ? basePrice + 500 : basePrice);
    };

  return (
    <div>
      <h5>Plan de véhicule</h5>
      <p>Temps restant : {Math.floor(timer / 60)}:{String(timer % 60).padStart(2, '0')}</p>
      <p>Total à payer : {calculatePrice()} FCFA</p>
        <p>Places sélectionnées : {selected.join(', ')}</p>
        <p>Places réservées : {seats.filter(seat => seat.reserved).map(seat => seat.id).join(', ')}</p>

      <div className="row row-cols-5 g-2">
        {seats.map((seat) => {
          const isSelected = selected.includes(seat.id);
          return (
            <div key={seat.id} className="col text-center">
              <Button className="seat-button"
                variant={
                  seat.reserved ? 'danger' :
                  isSelected ? 'success' :
                  'secondary'
                }
                disabled={seat.reserved}
                onClick={() => toggleSeat(seat.id)}
              >
                {seat.id}
              </Button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SeatSelector;
