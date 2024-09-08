import React, { useState } from "react";
import './App.css';  

const availableFlights = [
  { origin: "New York", destination: "Paris", date: "2024-09-03", price: 450 },
  { origin: "Los Angeles", destination: "Tokyo", date: "2024-09-10", price: 700 },
  { origin: "Madrid", destination: "Berlin", date: "2024-09-12", price: 300 },
  { origin: "New York", destination: "London", date: "2024-09-15", price: 500 },
  { origin: "Mexico City", destination: "Buenos Aires", date: "2024-09-18", price: 600 },
];

const FlightSearch = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [filterByOrigin, setFilterByOrigin] = useState(false);
  const [origin, setOrigin] = useState("");
  const [filterByDestination, setFilterByDestination] = useState(false);
  const [destination, setDestination] = useState("");
  const [filterByMaxPrice, setFilterByMaxPrice] = useState(false);
  const [maxPrice, setMaxPrice] = useState("");

  const handleSearch = () => {
    let filteredFlights = availableFlights;

    if (startDate && endDate) {
      filteredFlights = filteredFlights.filter(flight =>
        new Date(flight.date) >= new Date(startDate) && new Date(flight.date) <= new Date(endDate)
      );
    }

    if (filterByOrigin && origin) {
      filteredFlights = filteredFlights.filter(flight => flight.origin.toLowerCase().includes(origin.toLowerCase()));
    }

    if (filterByDestination && destination) {
      filteredFlights = filteredFlights.filter(flight => flight.destination.toLowerCase().includes(destination.toLowerCase()));
    }

    if (filterByMaxPrice && maxPrice) {
      filteredFlights = filteredFlights.filter(flight => flight.price <= parseFloat(maxPrice));
    }

    return filteredFlights;
  };

  return (
    <div className="container">
      <h1>Flight Search</h1> {/* Título centrado */}
      <div className="form-container">
        <h2>Search Flights</h2>
        <label>Start Date:</label>
        <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
        <br />
        <label>End Date:</label>
        <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
        <br />
        <input type="checkbox" checked={filterByOrigin} onChange={(e) => setFilterByOrigin(e.target.checked)} />
        <label>Filter by Origin</label>
        {filterByOrigin && (
          <input type="text" placeholder="Enter origin" value={origin} onChange={(e) => setOrigin(e.target.value)} />
        )}
        <br />
        <input type="checkbox" checked={filterByDestination} onChange={(e) => setFilterByDestination(e.target.checked)} />
        <label>Filter by Destination</label>
        {filterByDestination && (
          <input type="text" placeholder="Enter destination" value={destination} onChange={(e) => setDestination(e.target.value)} />
        )}
        <br />
        <input type="checkbox" checked={filterByMaxPrice} onChange={(e) => setFilterByMaxPrice(e.target.checked)} />
        <label>Filter by Max Price</label>
        {filterByMaxPrice && (
          <input type="number" placeholder="Enter max price" value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} />
        )}
        <br />
        <button onClick={handleSearch}>Search Flights</button>
      </div>

      <h2>Available Flights</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Origin</th>
            <th>Destination</th>
            <th>Date</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {handleSearch().map((flight, index) => (
            <tr key={index}>
              <td>{flight.origin}</td>
              <td>{flight.destination}</td>
              <td>{flight.date}</td>
              <td>${flight.price.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FlightSearch;
