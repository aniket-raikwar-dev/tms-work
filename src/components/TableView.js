import React from "react";
import { Table, Dropdown } from "antd";

const items = [
  {
    key: "11",
    label: <p>Edit</p>,
  },
  {
    key: "22",
    label: <p>Flag</p>,
  },
  {
    key: "33",
    label: <p>Delete</p>,
  },
];

const TableView = ({ data, showModal }) => {
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text, record) => (
        <div onClick={() => showModal(record?.id)} className="table-name">
          <div className="profile">
            <img src={record?.profilePhoto} alt={text} />
          </div>
          <div style={{ color: "#3030fb" }}>{text}</div>
        </div>
      ),
    },
    {
      title: "Role",
      dataIndex: "techRole",
      key: "techRole",
    },
    {
      title: "Company",
      dataIndex: "company",
      key: "company",
    },
    {
      title: "Department",
      dataIndex: "department",
      key: "department",
    },
    {
      title: "Phone No.",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Gender",
      dataIndex: "gender",
      key: "gender",
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: (text, record) => (
        <Dropdown
          menu={{ items }}
          placement="bottomRight"
          trigger={["click"]}
          arrow
        >
          <div className="more-option">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 3C11.175 3 10.5 3.675 10.5 4.5C10.5 5.325 11.175 6 12 6C12.825 6 13.5 5.325 13.5 4.5C13.5 3.675 12.825 3 12 3ZM12 18C11.175 18 10.5 18.675 10.5 19.5C10.5 20.325 11.175 21 12 21C12.825 21 13.5 20.325 13.5 19.5C13.5 18.675 12.825 18 12 18ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z"></path>
            </svg>
          </div>
        </Dropdown>
      ),
    },
  ];
  return (
    <Table columns={columns} dataSource={data} pagination={{ pageSize: 10 }} />
  );
};

export default TableView;
