import React from "react";

const EditModal = ({
  editSection,
  editProfile,
  handleInputChange,
  handleSave,
  setIsModalOpen,
}) => {
  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-8 rounded-md shadow-md w-1/2">
        <h2 className="text-2xl font-bold mb-4">Edit {editSection}</h2>
        <div className="grid grid-cols-2 gap-4">
          {editSection === "Personal Information" && (
            <>
              <input
                type="text"
                name="firstName"
                value={editProfile.firstName}
                onChange={handleInputChange}
                placeholder="First Name"
                className="border rounded-md p-2"
              />
              <input
                type="text"
                name="lastName"
                value={editProfile.lastName}
                onChange={handleInputChange}
                placeholder="Last Name"
                className="border rounded-md p-2"
              />
              <input
                type="text"
                name="gender"
                value={editProfile.gender}
                onChange={handleInputChange}
                placeholder="Gender"
                className="border rounded-md p-2"
              />
              <input
                type="number"
                name="age"
                value={editProfile.age}
                onChange={handleInputChange}
                placeholder="Age"
                className="border rounded-md p-2"
              />
              <input
                type="text"
                name="address"
                value={editProfile.address}
                onChange={handleInputChange}
                placeholder="Address"
                className="border rounded-md p-2 col-span-2"
              />
            </>
          )}
          {editSection === "Contact Information" && (
            <>
              <input
                type="email"
                name="email"
                value={editProfile.email}
                onChange={handleInputChange}
                placeholder="Email"
                className="border rounded-md p-2"
              />
              <input
                type="text"
                name="phone"
                value={editProfile.phone}
                onChange={handleInputChange}
                placeholder="Phone"
                className="border rounded-md p-2"
              />
            </>
          )}
          {editSection === "Bio" && (
            <textarea
              name="bio"
              value={editProfile.bio}
              onChange={handleInputChange}
              placeholder="Bio"
              className="border rounded-md p-2 col-span-2"
            />
          )}
          {editSection === "Preferred Language" && (
            <input
              type="text"
              name="preferredLanguage"
              value={editProfile.preferredLanguage}
              onChange={handleInputChange}
              placeholder="Preferred Language"
              className="border rounded-md p-2 col-span-2"
            />
          )}
          {editSection === "Interested Topic" && (
            <input
              type="text"
              name="interestedTopic"
              value={editProfile.interestedTopic}
              onChange={handleInputChange}
              placeholder="Interested Topic"
              className="border rounded-md p-2 col-span-2"
            />
          )}
          {editSection === "Social Media" && (
            <input
              type="text"
              name="socialMedia"
              value={editProfile.socialMedia}
              onChange={handleInputChange}
              placeholder="Social Media"
              className="border rounded-md p-2 col-span-2"
            />
          )}
          {editSection === "Education" && (
            <input
              type="text"
              name="education"
              value={editProfile.education}
              onChange={handleInputChange}
              placeholder="Education"
              className="border rounded-md p-2 col-span-2"
            />
          )}
          {editSection === "Work Experience" && (
            <input
              type="text"
              name="workExperience"
              value={editProfile.workExperience}
              onChange={handleInputChange}
              placeholder="Work Experience"
              className="border rounded-md p-2 col-span-2"
            />
          )}
        </div>
        <div className="flex justify-end mt-4">
          <button
            className="bg-gray-500 text-white px-4 py-2 rounded mr-2"
            onClick={() => setIsModalOpen(false)}
          >
            Cancel
          </button>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={handleSave}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
