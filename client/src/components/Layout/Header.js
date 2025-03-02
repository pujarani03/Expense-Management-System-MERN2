import { Button } from 'antd';
import React,{useState,useEffect} from 'react';
import { Link, useNavigate } from "react-router-dom";
import { message} from 'antd';

 const Header = () => {
  const [loginUser,setLoginUser] = useState('');
  const navigate = useNavigate();
  useEffect(() => {
    const users = JSON.parse(localStorage.getItem('user'));
    if(user){
      setLoginUserloginUser(user);
    }
  },[]);

  const logoutHandler = () =>{
    localStorage.removeItem("user");
    message.success("Logout Successfully");
    Navigate("/login");
  };
    return (
<>
<nav classname="navbar navbar-expand-lg bg-body-tertiary">
  <div classname="container-fluid">
    <button classname="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span classname="navbar-toggler-icon">
      </span>
    </button>
    <div classname="collapse navbar-collapse" id="navbarTogglerDemo01">
          <Link classname="navbar-brand" to="/">Expense Management</Link>
      <ul classname="navbar-nav ms-auto mb-2 mb-lg-0">
        <li classname="nav-item">
          <p className="nav-link">{loginUser && loginUser.name}</p> {""}</li>
        <li classname="nav-item">
          <Button classNames="btn btn-primary"
          onClick={logoutHandler}
          >Logout</Button>
        </li>
      </ul>
    </div>
  </div>
</nav>
</>
    );
 };

 export default Header;