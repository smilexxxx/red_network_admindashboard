import "../userList/userList.css";
import { DataGrid } from "@material-ui/data-grid";
//import { userRows } from "../../dummyData";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { userRequest } from "../../requestMethods";

export default function FeedbackList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getFeedback = async () => {
      try {
        const res = await userRequest.get("/feedbacks");
        setData(res.data);
        //console.log(res.data);
      } catch {}
    };
    getFeedback();
  }, []);

  const columns = [
    { field: "_id", headerName: "ID", width: 90 },
    {
      field: "user",
      headerName: "User",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img
              className="userListImg"
              src={
                params.row.avatar ||
                "https://crowd-literature.eu/wp-content/uploads/2015/01/no-avatar.gif"
              }
              alt=""
            />
            {params.row.username}
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 200 },
    {
      field: "message",
      headerName: " Message",
      width: 500,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/feedback/" + params.row._id}>
              <button className="userListEdit">View</button>
            </Link>
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
        getRowId={(row) => row._id}
        pageSize={8}
        checkboxSelection
      />
    </div>
  );
}
