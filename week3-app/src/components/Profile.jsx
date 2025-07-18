import React from 'react';

const Profile = ({firstName, lastName, age}) => {
    return (
        <div className="max-w-sm mx-auto mt-6 p-6 bg-white rounded-2xl shadow-lg border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
                {firstName} {lastName}
            </h2>
            <p className="text-gray-600">Age: {age}</p>
        </div>
    );
};

export default Profile;