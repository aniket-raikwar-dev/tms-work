import React, { useState, useEffect } from "react";
import { Modal } from "antd";
import Banner from "../assets/userBackgroundBanner.png"

const EmployeeDetailModal = ({ isOpen, onCancel, userId, handleOk }) => {
  const [empData, setEmpData] = useState({});

  useEffect(() => {
    console.log("userID: ", userId);
    fetch(`https://dummyjson.com/users/${userId}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("data: ", data);
        setEmpData(data);
      })
      .catch((error) => {
        console.log("error: ", error);
      });
  }, [userId]);
  return (
    <Modal
      title="Employee Details"
      open={isOpen}
      onCancel={onCancel}
      onOk={handleOk}
    >
      <div className="detail-view-container">
        <div className="emp-banner">
          <img src={Banner} alt="" />
        </div>
        <div className="emp-profile">
          <img src={empData?.image} alt="profile" />
        </div>
        <div className="emp-tech-role">{empData?.company?.title}</div>

        <div className="emp-content">
          <div className="emp-content-item">
            <p>Name:</p>
            <h3>
              {empData?.firstName} {empData?.lastName}
            </h3>
          </div>
          <div className="emp-content-item">
            <p>Username:</p>
            <h3>{empData?.username}</h3>
          </div>

          <div className="emp-content-item">
            <p>Phone No:</p>
            <h3>{empData?.phone}</h3>
          </div>
          <div className="emp-content-item">
            <p>Gander:</p>
            <h3>{empData?.gender}</h3>
          </div>
          <div className="emp-content-item">
            <p>Company:</p>
            <h3>{empData?.company?.name}</h3>
          </div>
          <div className="emp-content-item">
            <p>Birth Date:</p>
            <h3>{empData?.birthDate}</h3>
          </div>
          <div className="emp-content-item">
            <p>Eye Color:</p>
            <h3>{empData?.eyeColor}</h3>
          </div>
          <div className="emp-content-item">
            <p>Hair Color:</p>
            <h3>{empData?.hair?.color}</h3>
          </div>
          <div className="emp-content-item">
            <p>Address:</p>
            <h3>{empData?.address?.address}</h3>
          </div>
          <div className="emp-content-item">
            <p>Postal Code:</p>
            <h3>{empData?.address?.postalCode}</h3>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default EmployeeDetailModal;
