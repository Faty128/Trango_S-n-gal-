import React from 'react';
import { useState, useEffect } from 'react';
import '../seatselector/SeatSelector.css'; // Assuming you have a CSS file for styling

const seats = Array.from({ length: 30 }, (_, i) => ({ number: i + 1,
    status: 'available' }));

const SeatSelector = () => {
    const [selectedSeats, setSelectedSeats] = useState([]);
    const [timer, setTimer] = useState(300); // 5 minutes in seconds

    const reservedSeats = [2, 5, 10, 15]; // Example reserved seats

    useEffect(() => {
        const countdown = setInterval(() => {
            if (timer > 0) setTimer((prev) => prev - 1);
            else clearInterval(countdown);
        }, 1000);

        return () => clearInterval(countdown);
    }, [timer]);

     const toggleSeat = (number) => {
    if (reservedSeats.includes(number)) return;
    if (selectedSeats.includes(number)) {
      setSelectedSeats(selectedSeats.filter((s) => s !== number));
    } else {
      setSelectedSeats([...selectedSeats, number]);
    }
  };

  const calculatePrice = () => {
    const basePrice = 2500;
    const isNight = new Date().getHours() >= 20 || new Date().getHours() <= 6;
    return selectedSeats.length * (isNight ? basePrice + 500 : basePrice);
  };

  return (
    <div>
      <h3>Choississez vos places : </h3>
        <div className="bud">
            {seats.map(( { number }) => {
                const isReserved = reservedSeats.includes(number);
                const isSelected = selectedSeats.includes(number);
                let className = "seat";
                if (isReserved) 
                        className += " reserved";
                else if (isSelected) {
                        className += " selected";
                return (
                    <div
                        key={number}
                        className={className}
                        onClick={() => toggleSeat(number)}
                    >
                        {number}
                    </div>
                );
                }
    })}
        </div>
        <p>Temps restant : {Math.floor(timer / 60)} : {String(timer % 60).padStart(2, '0')}</p>
        <p>Total à payer : {calculatePrice()} FCFA</p>

        <button disabled={selectedSeats.lengh === 0}>Payer</button>
    </div>
  );
};

export default SeatSelector;
