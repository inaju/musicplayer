import React from "react";
import john from "./images/john.jpg";
import "./Account.css";
function Account() {
  return (
    <div className="account">
      <img src={john} alt="" srcset="" />
      <h4>John Snow</h4>
      <p>Johnsnow@gmail.com</p>
    </div>
  );
}

export default Account;
