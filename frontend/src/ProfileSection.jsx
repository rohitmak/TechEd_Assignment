import React from "react";

const ProfileSection = ({ profile, openModal }) => {
  return (
    <div className="w-3/4 p-8">
      <h1 className="text-2xl font-bold">Profile</h1>
      <div className="bg-white p-6 shadow-md rounded-md mt-4">
        <h2 className="text-lg font-semibold mb-2">Personal Information</h2>
        <div className="grid grid-cols-2 gap-4">
          <p>
            <strong>First Name:</strong> {profile?.firstName}
          </p>
          <p>
            <strong>Last Name:</strong> {profile?.lastName}
          </p>
          <p>
            <strong>Age:</strong> {profile?.age}
          </p>
          <p>
            <strong>Gender:</strong> {profile?.gender}
          </p>
          <p className="col-span-2">
            <strong>Address:</strong> {profile?.address}
          </p>
        </div>
        <button
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
          onClick={() => openModal("Personal Information")}
        >
          Edit
        </button>
      </div>

      <div className="bg-white p-6 shadow-md rounded-md mt-4">
        <h2 className="text-lg font-semibold mb-2">Contact Information</h2>
        <p>
          <strong>Email:</strong> {profile?.email}
        </p>
        <p>
          <strong>Phone:</strong> {profile?.phone}
        </p>
        <button
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
          onClick={() => openModal("Contact Information")}
        >
          Edit
        </button>
      </div>

      <div className="bg-white p-6 shadow-md rounded-md mt-4">
        <h2 className="text-lg font-semibold mb-2">Bio</h2>
        <p>{profile?.bio}</p>
        <button
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
          onClick={() => openModal("Bio")}
        >
          Edit
        </button>
      </div>

      <div className="bg-white p-6 shadow-md rounded-md mt-4">
        <h2 className="text-lg font-semibold mb-2">Preferred Language</h2>
        <p>{profile?.preferredLanguage}</p>
        <button
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
          onClick={() => openModal("Preferred Language")}
        >
          Edit
        </button>
      </div>

      <div className="bg-white p-6 shadow-md rounded-md mt-4">
        <h2 className="text-lg font-semibold mb-2">Interested Topic</h2>
        <p>{profile?.interestedTopic}</p>
        <button
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
          onClick={() => openModal("Interested Topic")}
        >
          Edit
        </button>
      </div>

      <div className="bg-white p-6 shadow-md rounded-md mt-4">
        <h2 className="text-lg font-semibold mb-2">Social Media</h2>
        <p>{profile?.socialMedia}</p>
        <button
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
          onClick={() => openModal("Social Media")}
        >
          Edit
        </button>
      </div>

      <div className="bg-white p-6 shadow-md rounded-md mt-4">
        <h2 className="text-lg font-semibold mb-2">Education</h2>
        <p>{profile?.education}</p>
        <button
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
          onClick={() => openModal("Education")}
        >
          Edit
        </button>
      </div>

      <div className="bg-white p-6 shadow-md rounded-md mt-4">
        <h2 className="text-lg font-semibold mb-2">Work Experience</h2>
        <p>{profile?.workExperience}</p>
        <button
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
          onClick={() => openModal("Work Experience")}
        >
          Edit
        </button>
      </div>
    </div>
  );
};

export default ProfileSection;
