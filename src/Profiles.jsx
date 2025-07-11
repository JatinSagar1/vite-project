import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const Profiles = ({ data }) => {
  const { id } = useParams();
  const [user] = data.filter((ele) => ele.id === Number(id));

  const [uploadedImage, setUploadedImage] = useState(null);
  const [dragging, setDragging] = useState(false);

  if (!user) return <h3>Loading...</h3>;

  const handleImageChange = (file) => {
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const onFileDrop = (e) => {
    e.preventDefault();
    setDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleImageChange(e.dataTransfer.files[0]);
    }
  };

  const avatarUrl = uploadedImage || `https://i.pravatar.cc/150?u=${user.email}`;

  return (
    <div className="profile-box animate-fade-in">
      <div
        className={`drop-zone ${dragging ? "drag-over" : ""}`}
        onDragOver={(e) => {
          e.preventDefault();
          setDragging(true);
        }}
        onDragLeave={() => setDragging(false)}
        onDrop={onFileDrop}
      >
        <img src={avatarUrl} alt="Avatar" className="avatar" />
        <p>Drag & drop an image here<br />or click to upload</p>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => handleImageChange(e.target.files[0])}
          style={{ display: "none" }}
          id="upload"
        />
        <label htmlFor="upload" className="upload-btn">Choose File</label>
      </div>

      <h2>@{user.username}</h2>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Phone:</strong> {user.phone}</p>
      <p><strong>Website:</strong> {user.website}</p>
      <p><strong>City:</strong> {user.address?.city}</p>
    </div>
  );
};

export default Profiles;
