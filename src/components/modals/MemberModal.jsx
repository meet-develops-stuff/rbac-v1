import React from "react";

const MemberModal = ({ member, onClose }) => {
  return (
    <div className="fixed inset-0 mt-24 bg-gray-900 bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">{member.name}</h2>
        <img src={member.image} alt={member.name} className="size-24 rounded-full object-cover mx-auto mb-4" />
        <p className="text-gray-600 mb-2"><strong>Email:</strong> {member.email}</p>
        <p className="text-gray-600 mb-2"><strong>Bio:</strong> {member.bio}</p>
        <p className="text-gray-600 mb-2"><strong>Location:</strong> {member.location}</p>
        <p className="text-gray-600 mb-2"><strong>Access Level:</strong> {member.accessLevel}</p>
        <p className="text-gray-600 mb-2"><strong>Permissions:</strong> {member.permissions.join(", ")}</p>
        <p className="text-gray-600 mb-2"><strong>Department(s):</strong> {member.department}</p>
        <p className="text-gray-600 mb-4"><strong>Skills:</strong> {member.skills.join(", ")}</p>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 w-full"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default MemberModal;
