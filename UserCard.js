import React from "react";

const UserCard = ({ name, age, location, avatar }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md text-center w-80">
      <img
        src={avatar}
        alt={name}
        className="w-24 h-24 rounded-full mx-auto mb-4"
      />
      <h2 className="text-xl font-bold">{name}</h2>
      <p className="text-gray-600">{location}</p>
      <p className="text-gray-500">Age: {age}</p>
    </div>
  );
};

export default UserCard;
