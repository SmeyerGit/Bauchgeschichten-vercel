import React, { useState } from 'react';
import './booking_section.css'; // Import der CSS-Datei

const BookingSection: React.FC = () => {
  const [arrivalDate, setArrivalDate] = useState<string>('');
  const [departureDate, setDepartureDate] = useState<string>('');
  const [isBookingComplete, setIsBookingComplete] = useState<boolean>(false);

  const handleBooking = () => {
    if (arrivalDate && departureDate) {
      setIsBookingComplete(true);
      alert(`Ihre Reservierung vom {arrivalDate} bis {departureDate} wurde bestätigt!`);
    } else {
      alert('Bitte füllen Sie alle Felder aus.');
    }
  };

  return (
    <section className="booking-section">
      <h2>Urlaub planen</h2>
      <div className="booking-form">
        <label htmlFor="arrival">Anreise:</label>
        <input
          type="date"
          id="arrival"
          value={arrivalDate}
          onChange={(e) => setArrivalDate(e.target.value)}
        />

        <label htmlFor="departure">Abreise:</label>
        <input
          type="date"
          id="departure"
          value={departureDate}
          onChange={(e) => setDepartureDate(e.target.value)}
        />

        <button onClick={handleBooking}>Buchen</button>

        {isBookingComplete && (
          <p className="booking-confirmation">
            Ihre Reservierung vom {arrivalDate} bis {departureDate} wurde bestätigt!
          </p>
        )}
      </div>
    </section>
  );
};

export default BookingSection;
