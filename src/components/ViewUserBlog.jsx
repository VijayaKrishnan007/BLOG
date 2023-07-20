import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";
import DataTableInstance from "../uitils/DataTableUtils";
import './userStyles.css'

// interface UserBlogs{
//     id: Number;
//     username:string;
//     title: String;
//     body:string;
//     imageUrl:string;
// }

const ViewUserBlog = (props) => {

    
  const table = props.table;
  const location = useLocation();
const userProfiles = [
    {userName: "Bret",
    imageUrl: 'https://picsum.photos/300'
    },
    {userName: "Antonette",
    imageUrl: 'https://picsum.photos/301'
    },
    {userName: "Samantha",
    imageUrl: 'https://picsum.photos/302'
    },
    {userName: "Karianne",
    imageUrl: 'https://picsum.photos/303'
    },
    {userName: "Kamren",
    imageUrl: 'https://picsum.photos/304'
    },
    {userName: "Leopoldo_Corkery",
    imageUrl: 'https://picsum.photos/305'
    },
    {userName: "Elwyn.Skiles",
    imageUrl: 'https://picsum.photos/306'
    },
    {userName: "Maxime_Nienow",
    imageUrl: 'https://picsum.photos/307'
    },
    {userName: "Delphine",
    imageUrl: 'https://picsum.photos/309'
    },
    {userName: "Moriah.Stanton",
    imageUrl: 'https://picsum.photos/310'
    }
]
  const [adminAccess, setAdminAccess] = useState(false);
  const username = localStorage.getItem('username');


  const blogUsers =[
    {
       id: 1,
      username: "Bret",
      adminUser: "Yes",
    },
    {
      id: 2,
      username: "Antonette",
      adminUser: "No",
    },
    {
      id: 3,
      username: "Samantha",
      adminUser: "No",
    },
    {
      id: 4,
      username: "Karianne",
      adminUser: "No",
    },
    {
      id: 5,
      username: "Kamren",
      adminUser: "No",
    },
    {
      id: 6,
      username: "Leopoldo_Corkery",
      adminUser: "No",
    },
    {
      id: 7,
      username: "Elwyn.Skiles",
      adminUser: "Yes",
    },
    {
      id: 8,
      username: "Maxime_Nienow",
      adminUser: "No",
    },
    {
      id: 9,
      username: "Delphine",
      adminUser: "Yes",
    },
    {
      id: 10,
      username: "Moriah.Stanton",
      adminUser: "No",
    }
  ];

  useEffect(() => {
    console.log("FilterAdminUser Called")
    filterAdminAccessUser();
  }, []);

  const filterAdminAccessUser = () => {
    console.log("AdminUserFilter Called")
    const adminUser = blogUsers.filter((user) => user.username === username)
    if(adminUser[0].adminUser === 'Yes') {
      setAdminAccess(true);
    } else {
      setAdminAccess(false);
    }
  }

  const mapUserList = userProfiles.map(profile => (
    <div className="row">
        <span>{profile.userName}</span>
        <img className="imageStyles" src={profile.imageUrl}/>
    </div>
  ))

  return (
    <div className="scrollbar">
      {mapUserList}
    </div>
  );
};

export default ViewUserBlog;

ViewUserBlog.propTypes = {
  table: PropTypes.instanceOf(DataTableInstance).isRequired,
};
