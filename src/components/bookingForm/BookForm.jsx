import React, { useState } from 'react';
import axios from 'axios';

const BookForm = () => {
    const [formData, setFormData] = useState({
      roomId:'1',
      checkInDate: '',
      checkOutDate: '',
      adults: '1', // Initialize to 1 to ensure there's at least 1 adult
      children: '0' // Initialize to 0 to ensure there are no negative children
    });
    const [error, setError] = useState('');
  
    const handleChange = (e) => {
      const { name, value } = e.target;
  
      setFormData((prevFormData) => {
        if (name === 'adults') {
          // Ensure adults is always >= 1
          const adults = Math.max(1, Number(value));
          return { ...prevFormData, adults: adults.toString() };
        } else if (name === 'children') {
          // Ensure children is always >= 0
          const children = Math.max(0, Number(value));
          return { ...prevFormData, children: children.toString() };
        } else {
          return { ...prevFormData, [name]: value };
        }
      });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      // Validate the form data
      if (!formData.checkInDate || !formData.checkOutDate) {
        setError('Please fill in all fields.');
        return;
      }
  
      console.log(formData);
    // Perform the API call
     try {
       const response = await axios.post('/api/v1/Booking/roomBooking', formData);

       console.log('Booking successful', response.data);
       setError(''); // Clear the error if the request is successful
       alert('Booking successful!');
     } catch (error) {
       console.error('Error booking room', error);
       setError('Failed to book room. Please try again.');
     }
  };

  return (
    <div>
      <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-12">
        <div className="relative bg-white px-6 pt-10 pb-9 shadow-xl mx-auto w-full max-w-lg rounded-2xl">
          <div className="mx-auto flex w-full max-w-md flex-col space-y-16">
            <div className="flex flex-col items-center justify-center text-center space-y-2">
              <div className="font-semibold text-3xl">
                <p>Book a Room</p>
              </div>
              <div className="flex flex-row text-sm font-medium text-gray-400">
                <p>Fill in the details below to book your room</p>
              </div>
            </div>

            <div>
              <form onSubmit={handleSubmit}>
                <div className="flex flex-col space-y-8">
                  <div className="relative z-0 w-full mb-5 group">
                    <input
                      type="date"
                      name="checkInDate"
                      id="checkInDate"
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      value={formData.checkInDate}
                      onChange={handleChange}
                      required
                    />
                    <label
                      htmlFor="checkInDate"
                      className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Check-in Date
                    </label>
                  </div>
                  <div className="relative z-0 w-full mb-5 group">
                    <input
                      type="date"
                      name="checkOutDate"
                      id="checkOutDate"
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      value={formData.checkOutDate}
                      onChange={handleChange}
                      required
                    />
                    <label
                      htmlFor="checkOutDate"
                      className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Check-out Date
                    </label>
                  </div>
                  <div className="relative z-0 w-full mb-5 group">
                    <input
                      type="number"
                      name="adults"
                      id="adults"
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      value={formData.adults}
                      onChange={handleChange}
                      required
                    />
                    <label
                      htmlFor="adults"
                      className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Adults
                    </label>
                  </div>
                  <div className="relative z-0 w-full mb-5 group">
                    <input
                      type="number"
                      name="children"
                      id="children"
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      value={formData.children}
                      onChange={handleChange}
                      required
                    />
                    <label
                      htmlFor="children"
                      className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
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
        </div>
      </div>
    </div>
  );
};

export default BookForm;
