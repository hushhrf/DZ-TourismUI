import React, { useState } from 'react';
import axios from 'axios';

const BookForm = () => {
  const [formData, setFormData] = useState({
    roomId: '1',
    checkInDate: '',
    checkOutDate: '',
    adults: '1',
    children: '0'
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevFormData) => {
      if (name === 'adults') {
        const adults = Math.max(1, Number(value));
        return { ...prevFormData, adults: adults.toString() };
      } else if (name === 'children') {
        const children = Math.max(0, Number(value));
        return { ...prevFormData, children: children.toString() };
      } else {
        return { ...prevFormData, [name]: value };
      }
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.checkInDate || !formData.checkOutDate) {
      setError('Please fill in all fields.');
      return;
    }

    console.log(formData);

    try {
      const response = await axios.post('/api/v1/Booking/roomBooking', formData);
      console.log('Booking successful', response.data);
      setError('');
      alert('Booking successful!');
    } catch (error) {
      console.error('Error booking room', error);
      setError('Failed to book room. Please try again.');
    }
  };

  return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
          <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">Book a Room</h2>
          <p className="text-center text-gray-600 mb-6">Fill in the details below to book your room.</p>
          <form onSubmit={handleSubmit}>
            <div className="space-y-6">
              <div className="relative">
                <input
                    type="date"
                    name="checkInDate"
                    id="checkInDate"
                    className="block w-full px-4 py-2 text-sm text-gray-900 bg-transparent border-b-2 border-gray-300 focus:border-blue-600 focus:outline-none"
                    value={formData.checkInDate}
                    onChange={handleChange}
                    required
                />
                <label
                    htmlFor="checkInDate"
                    className="absolute left-4 top-2 text-sm text-gray-500 transition-transform transform -translate-y-6 scale-75 origin-0 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:translate-y-6 peer-focus:scale-75"
                >
                  Check-in Date
                </label>
              </div>
              <div className="relative">
                <input
                    type="date"
                    name="checkOutDate"
                    id="checkOutDate"
                    className="block w-full px-4 py-2 text-sm text-gray-900 bg-transparent border-b-2 border-gray-300 focus:border-blue-600 focus:outline-none"
                    value={formData.checkOutDate}
                    onChange={handleChange}
                    required
                />
                <label
                    htmlFor="checkOutDate"
                    className="absolute left-4 top-2 text-sm text-gray-500 transition-transform transform -translate-y-6 scale-75 origin-0 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:translate-y-6 peer-focus:scale-75"
                >
                  Check-out Date
                </label>
              </div>
              <div className="relative">
                <input
                    type="number"
                    name="adults"
                    id="adults"
                    className="block w-full px-4 py-2 text-sm text-gray-900 bg-transparent border-b-2 border-gray-300 focus:border-blue-600 focus:outline-none"
                    value={formData.adults}
                    onChange={handleChange}
                    min="1"
                    required
                />
                <label
                    htmlFor="adults"
                    className="absolute left-4 top-2 text-sm text-gray-500 transition-transform transform -translate-y-6 scale-75 origin-0 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:translate-y-6 peer-focus:scale-75"
                >
                  Adults
                </label>
              </div>
              <div className="relative">
                <input
                    type="number"
                    name="children"
                    id="children"
                    className="block w-full px-4 py-2 text-sm text-gray-900 bg-transparent border-b-2 border-gray-300 focus:border-blue-600 focus:outline-none"
                    value={formData.children}
                    onChange={handleChange}
                    min="0"
                    required
                />
                <label
                    htmlFor="children"
                    className="absolute left-4 top-2 text-sm text-gray-500 transition-transform transform -translate-y-6 scale-75 origin-0 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:translate-y-6 peer-focus:scale-75"
                >
                  Children
                </label>
              </div>

              {error && <div className="text-red-500 text-center">{error}</div>}

              <div className="flex flex-col space-y-5">
                <div>
                  <button
                      type="submit"
                      className="flex flex-row items-center justify-center text-center w-full border rounded-xl outline-none py-5 bg-blue-700 border-none text-white text-sm shadow-sm"
                  >
                    Book Room
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
  );
};

export default BookForm;
