import "./userList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { userRows } from "./dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import React from "react";

export default function UserList() {
  var userList=[]
  function getUser() {
    const url = `http://localhost:8081/users`;
    console.log(url)
      axios.get(url).then(
          (response) => {
              userList = response.data;
              console.log(userList)
              setData(userList)
              console.log('Processing Request');
              // return result
          });
    }
  React.useEffect(()=>{
    getUser()
  },[])
 
  console.log(userList)
  const [data, setData] = useState(userList);
  const handleDelete = (id) => {
    axios.delete(`http://localhost:8081/delete/${id}`).then(()=>setData(data.filter((item) => item.id !== id)));
    alert("Deleted Successfully")
  };
  
  function deleteUser(id){

  }

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "user",
      headerName: "User",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            {`${params.row.firstName} ${params.row.lastName}`}
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 200 },
    {
      field: "active",
      headerName: "Status",
      width: 120,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            {params.row.active?"Active":"Inactive"}
          </div>
        );
      }
    },
    // {
    //   field: "transaction",
    //   headerName: "Transaction Volume",
    //   width: 160,
    // },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/user/" + params.row.id}>
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="userListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="userList">
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
      />
    </div>
  );
  }
