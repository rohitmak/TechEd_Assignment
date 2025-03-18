import React, { useState, useEffect } from "react";
import ProfileSection from "./ProfileSection";
import EditModal from "./EditModal";

const App = () => {
  const [profile, setProfile] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editProfile, setEditProfile] = useState({});
  const [editSection, setEditSection] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/profile")
      .then((res) => res.json())
      .then((data) => {
        setProfile(data);
        setEditProfile(data);
      });
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditProfile({ ...editProfile, [name]: value });
  };

  const handleSave = () => {
    fetch("http://localhost:5000/profile", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editProfile),
    })
      .then((res) => res.json())
      .then((data) => {
        setProfile(data);
        setIsModalOpen(false);
      });
  };

  const openModal = (section) => {
    setEditSection(section);
    setIsModalOpen(true);
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-md p-4 flex justify-between items-center">
        <div className="text-xl font-bold">SimpliTrain</div>
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="What would you like to learn?"
            className="border rounded-md p-2"
          />
          <div className="flex space-x-4">
            <a href="#" className="text-gray-600">
              Home
            </a>
            <a href="#" className="text-gray-600">
              Categories
            </a>
            <a href="#" className="text-gray-600">
              Chat
            </a>
            <a href="#" className="text-gray-600">
              Forum
            </a>
            <a href="#" className="text-gray-600">
              Notification
            </a>
          </div>
          <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
        </div>
      </nav>

      <div className="flex flex-grow">
        {/* Sidebar */}
        <div className="w-1/4 bg-white p-6 shadow-md">
          <div className="text-center">
            <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto"></div>
            <h2 className="mt-4 text-lg font-semibold">
              {profile?.firstName} {profile?.lastName}
            </h2>
            <p className="text-gray-600">Profile</p>
          </div>
          <div className="mt-6">
            <ul>
              <li className="p-2 text-gray-700 font-medium">Profile</li>
              <li className="p-2 text-gray-500">Education</li>
              <li className="p-2 text-gray-500">Work Experience</li>
            </ul>
          </div>
        </div>

        {/* Profile Section */}
        <ProfileSection profile={profile} openModal={openModal} />
      </div>

      {isModalOpen && (
        <EditModal
          editSection={editSection}
          editProfile={editProfile}
          handleInputChange={handleInputChange}
          handleSave={handleSave}
          setIsModalOpen={setIsModalOpen}
        />
      )}
    </div>
  );
};

export default App;
