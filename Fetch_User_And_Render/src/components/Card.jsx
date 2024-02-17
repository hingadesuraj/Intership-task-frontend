import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Card = ( ) => {
    const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get('https://randomuser.me/api/?page=1&results=1&seed=abc');
        setUserData(response.data.results[0]);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);
  return (
<div className="max-w-xs mx-auto bg-white shadow-md rounded-lg overflow-hidden flex">
      {userData && (
        <>
          <div className="w-1/3">
            <img
              className="w-full h-full object-cover"
              src={userData.picture.large}
              alt="User"
            />
          </div>
          <div className="w-2/3 p-4">
            <h1 className="text-xl font-semibold text-gray-800 mb-2">
              {userData.name.first} {userData.name.last}
            </h1>
            <p className="text-gray-600 mb-2">Gender: {userData.gender}</p>
            <p className="text-gray-600">Phone: {userData.phone}</p>
          </div>
        </>
      )}
    </div>
  )
}

export default Card