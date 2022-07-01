import styled from "styled-components"
import { Link } from "react-router-dom";
import { useState } from "react";
import { DataGrid, ptBR } from "@mui/x-data-grid";

const Container = styled.div`
    width: clamp(600px, calc(100% - 40px), 1042px);
    height: fit-content;
    //-webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
    //box-shadow: 2px 4px 10px 1px rgba(201, 201, 201, 0.47);
    padding: 20px;
    color: gray;

    .cellWithImg {
        display: flex;
        align-items: center;

        .cellImg {
        width: 32px;
        height: 32px;
        border-radius: 50%;
        object-fit: cover;
        margin-right: 20px;
        }
    }

    .cellWithStatus {
        padding: 5px;
        border-radius: 5px;

        &.active {
            background-color: rgba(0, 128, 0, 0.05);
            color: green;
        }
        &.pending {
            background-color: rgba(255, 217, 0, 0.05);
            color: goldenrod;
        }
        &.passive {
            background-color: rgba(255, 0, 0, 0.05);
            color: crimson;
        }
    }

    .cellAction {
        display: flex;
        align-items: center;
        gap: 15px;

        .viewButton {
            padding: 2px 5px;
            border-radius: 5px;
            color: darkblue;
            border: 1px dotted rgba(0, 0, 139, 0.596);
            cursor: pointer;
        }
        
        .deleteButton {
            padding: 2px 5px;
            border-radius: 5px;
            color: crimson;
            border: 1px dotted rgba(220, 20, 60, 0.6);
            cursor: pointer;
        }
    }
`;

const TitleArea = styled.div`
    //width: 100%;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .title {
        font-size: 16px;
        font-weight: 500;
    }

    .addButton {
        color: green;
        font-size: 16px;
        font-weight: 400;
        border: 1px solid green;
        padding: 5px;
        border-radius: 5px;
        cursor: pointer;
    }
`;


const userRows = [
    {
      id: 1,
      username: "Snow",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      status: "active",
      email: "1snow@gmail.com",
      age: 35,
    },
    {
      id: 2,
      username: "Jamie Lannister",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "2snow@gmail.com",
      status: "passive",
      age: 42,
    },
    {
      id: 3,
      username: "Lannister",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "3snow@gmail.com",
      status: "pending",
      age: 45,
    },
    {
      id: 4,
      username: "Stark",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "4snow@gmail.com",
      status: "active",
      age: 16,
    },
    {
      id: 5,
      username: "Targaryen",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "5snow@gmail.com",
      status: "passive",
      age: 22,
    },
    {
      id: 6,
      username: "Melisandre",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "6snow@gmail.com",
      status: "active",
      age: 15,
    },
    {
      id: 7,
      username: "Clifford",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "7snow@gmail.com",
      status: "passive",
      age: 44,
    },
    {
      id: 8,
      username: "Frances",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "8snow@gmail.com",
      status: "active",
      age: 36,
    },
    {
      id: 9,
      username: "Roxie",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "snow@gmail.com",
      status: "pending",
      age: 65,
    },
    {
      id: 10,
      username: "Roxie",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "snow@gmail.com",
      status: "active",
      age: 65,
    },
  ];


const Datatable = ({title}) => {
    const [data, setData] = useState(userRows);

    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id));
    };

    const userColumns = [
        { field: "id", headerName: "ID", width: 70 },
        {
          field: "user",
          headerName: "User",
          width: 230,
          renderCell: (params) => {
            return (
              <div className="cellWithImg">
                <img className="cellImg" src={params.row.img} alt="avatar" />
                {params.row.username}
              </div>
            );
          },
        },
        {
          field: "email",
          headerName: "Email",
          width: 230,
        },
      
        {
          field: "age",
          headerName: "Age",
          width: 100,
        },
        {
          field: "status",
          headerName: "Status",
          width: 160,
          renderCell: (params) => {
            return (
              <div className={`cellWithStatus ${params.row.status}`}>
                {params.row.status}
              </div>
            );
          },
        },
      ];

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
                <div
                  className="deleteButton"
                  onClick={() => handleDelete(params.row.id)}
                >
                  Delete
                </div>
              </div>
            );
          },
        },
      ];

  return (
    <Container>
        <TitleArea><span className="title">{title}</span><Link to="/usuarios/novo" className="addButton">Adicionar</Link></TitleArea>
        <DataGrid
            className="datagrid"
            rows={data}
            columns={userColumns.concat(actionColumn)}
            pageSize={9}
            checkboxSelection
            autoHeight={true}
            localeText={ptBR.components.MuiDataGrid.defaultProps.localeText}
        />
    </Container>
  )
}

export default Datatable