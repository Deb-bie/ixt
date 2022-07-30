import "./DataTable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../data/Data";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
// import useFetch from "../../hooks/useFetch";
// import axios from "axios";

const DataTable = ({columns}) => {
//   const location = useLocation();
//   const path = location.pathname.split("/")[1];
//   const [list, setList] = useState();
//   const { data, loading, error } = useFetch(`/${path}`);

//   useEffect(() => {
//     setList(data);
//   }, [data]);

  const handleDelete = (id) => {
    // try {
    //   await axios.delete(`/${path}/${id}`);
    //   setList(list.filter((item) => item._id !== id));
    // } catch (err) {}
    setData(data.filter((item) => item.id !== id));
  };

const [data, setData] = useState(userRows)

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/users/test" style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <div className="deleteButton" onClick={() => handleDelete(params.row._id)}>Delete</div>
          </div>
        );
      },
    },
  ];


  return (
    <div className="datatable">
      <div className="datatableTitle">
        {/* {path} */}
        {/* <Link to={`/${path}/new`} className="link"> */}
        <Link to='/users/new' style={{ textDecoration: "none"}} className="link">
          Add New
        </Link>
          
        {/* </Link> */}
      </div>
      <DataGrid
        className="datagrid"
        // rows={list}
        // columns={columns.concat(actionColumn)} 
        rows={userRows}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
        // getRowId={(row) => row._id}
      />
    </div>
  );
};

export default DataTable;