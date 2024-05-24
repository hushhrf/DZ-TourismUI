import React from 'react';
import apiRequest from '../../lib/apiRequest.js';

const Logout = () => {
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await apiRequest.post('/api/v1/auth/logout');
            if (response.status === 200) {
                // Remove the token from storage
                localStorage.removeItem('accessToken');
                // Redirect to login page
                window.location.href = '/login';
            } else {
                // Handle error
                console.error('Logout failed');
            }
        } catch (error) {
            // Handle error
            console.error('Logout failed', error);
        }
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <button
                onClick={handleSubmit}
                className="px-4 py-2 border border-white text-white bg-transparent rounded-md hover:bg-white hover:text-black transition duration-300"
            >
                Logout
            </button>
        </div>
    );
};

export default Logout;