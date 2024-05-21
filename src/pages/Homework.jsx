import React, { useState } from 'react';

const Homework = () => {
  const [selectedCountry, setSelectedCountry] = useState('');
  const [cities, setCities] = useState([]);

  const countryToCities = {
    china: ['Beijing', 'Shanghai', 'Guangzhou'],
    nepal: ['Kathmandu', 'Pokhara', 'Lalitpur'],
    india: ['Delhi', 'Mumbai', 'Bangalore'],
  };

  const handleCountryChange = (event) => {
    const country = event.target.value;
    setSelectedCountry(country);
    setCities(countryToCities[country] || []);
  };

  return (
    <div>
      <label htmlFor="country">Select a Country:</label>
      <select id="country" value={selectedCountry} onChange={handleCountryChange}>
        <option value="">Select Country</option>
        <option value="china">China</option>
        <option value="nepal">Nepal</option>
        <option value="india">India</option>
      </select>

      {selectedCountry && (
        <div>
          <label htmlFor="city">Select City:</label>
          <select id="city">
            <option value="">Select City</option>
            {cities.map((city) => (
              <option key={city} value={city.toLowerCase()}>
                {city}
              </option>
            ))}
          </select>
        </div>
      )}
    </div>
  );
};

export default Homework;
