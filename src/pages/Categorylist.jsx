import React from "react";
import { Table } from "antd";

const columns = [
  {
    title: "SNo",
    dataIndex: "key",
  },
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Product",
    dataIndex: "Product",
  },
  {
    title: "Status",
    dataIndex: "status",
  },
];
const data1 = [];
for (let i = 0; i < 46; i++) {
  data1.push({
    key: i,
    name: `Kasun Madushanka ${i}`,
    product: 32,
    status: `Horana road, Panadura . ${i}`,
  });
}

const Categorylist = () => {
  return (
    <div>
      <h3 className="mb-4">Product Categories</h3>
      <div>
        <Table columns={columns} dataSource={data1}></Table>
      </div>
    </div>
  );
};

export default Categorylist;
