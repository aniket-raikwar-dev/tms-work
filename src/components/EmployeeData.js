import React, { useState, useEffect } from "react";
import TableView from "./TableView";
import GridView from "./GridView";
import EmployeeDetailModal from "./EmployeeDetailModal";

const EmployeeData = () => {
  const [data, setData] = useState([]);
  const [isTableView, setIsTableView] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState(null);

  const showModal = (id) => {
    setSelectedUserId(id);
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const toggleView = (boolean) => {
    if (boolean) {
      setIsTableView(boolean);
    } else {
      setIsTableView(boolean);
    }
  };

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((data) => {
        const updatedData = data.users.slice(0, 10).map((item) => ({
          id: item.id,
          profilePhoto: item?.image,
          name: `${item.firstName} ${item.lastName}`,
          techRole: item?.company?.title,
          company: item?.company?.name,
          department: item?.company?.department,
          phone: item.phone,
          age: item.age,
          gender: item.gender,
        }));
        setData(updatedData);
      })
      .catch((error) => {
        console.log("error: ", error);
      });
  }, []);


  return (
    <div className="emp-container">
      <div className="emp-header-container">
        <h2>Employee Data</h2>
        <div className="toggle-view">
          <div
            onClick={() => toggleView(false)}
            className={isTableView ? "" : "selected-view"}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M14 10V14H10V10H14ZM16 10H21V14H16V10ZM14 21H10V16H14V21ZM16 21V16H21V20C21 20.5523 20.5523 21 20 21H16ZM14 3V8H10V3H14ZM16 3H20C20.5523 3 21 3.44772 21 4V8H16V3ZM8 10V14H3V10H8ZM8 21H4C3.44772 21 3 20.5523 3 20V16H8V21ZM8 3V8H3V4C3 3.44772 3.44772 3 4 3H8Z"></path>
            </svg>
            Grid View
          </div>
          <div
            onClick={() => toggleView(true)}
            className={isTableView ? "selected-view" : ""}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M4 8H20V5H4V8ZM14 19V10H10V19H14ZM16 19H20V10H16V19ZM8 19V10H4V19H8ZM3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3Z"></path>
            </svg>
            Table View
          </div>
        </div>
      </div>

      <div className="scrollable-container">
        {isTableView ? (
          <TableView data={data} showModal={showModal} />
        ) : (
          <GridView data={data} showModal={showModal} />
        )}
      </div>
      <EmployeeDetailModal
        isOpen={isModalOpen}
        onCancel={handleCancel}
        userId={selectedUserId}
        handleOk={handleOk}
      />
    </div>
  );
};

export default EmployeeData;
