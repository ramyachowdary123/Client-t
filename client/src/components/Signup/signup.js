import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios, { Axios } from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import logo from '../src/PFX Watch Black.png'

function Signup() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");
  const [gender, setgender] = useState("");
  const [confirmPasword, setconfirmPasword] = useState("");
  let navigate = useNavigate();
  const [data, Setdata] = useState([]);


  const usersData = {
    name: name,
    email: email,
    phoneNumber: phoneNumber,
    gender: gender,
    password: password,
    confirmPasword: confirmPasword
  }
  const onSubmitForm = (e) => {
    e.preventDefault();

    if (name && email && phoneNumber && gender && password && confirmPasword !== "") {
      axios
        .post("http://localhost:4446/auth/signup", usersData)
        .then((response) => {
          Setdata(response.data);

          console.log(usersData);

          if (response.status === 200) {
            toast.success("Registration Successfull", {
              position: "top-right",
              autoClose: 1000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
            });

            setTimeout(function () {
              navigate("/");
            }, 3000);

          }
        })
        .catch((error) => {
          toast.error("enter new email", {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
          console.log(error.response.userData)

        });
    }
    else {
      toast.warning("Enter the Required Details");
    }
  };
  //siva

  return (
    <div>
      <div className="container">
        <div className="row">
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
          {/* Same as */}
          <ToastContainer />
          <form className="card text-start" style={{ marginTop: "150px" }} onClick={onSubmitForm}>
            <img src={logo} className="w-25 image-logo" />
            <div className="row">

              <div className="col-md-6">
                <label>Name</label>
                <input type="text" placeholder="Enter name" onChange={(e) => setname(e.target.value)}
                  value={name} className="form-control" />
              </div>
              <div className="col-md-6">
                <label>Email</label>
                <input type="email" placeholder="Enter email" onChange={(e) => setemail(e.target.value)}
                  value={email} className="form-control" />
              </div>
              <div className="col-md-6">
                <label>PhoneNumber</label>
                <input type="text" placeholder="Enter phonenumber" onChange={(e) => setphoneNumber(e.target.value)}
                  value={phoneNumber} className="form-control" />
              </div>
              <div className="col-md-6">
                <label>Gender</label>
                <input type="text" placeholder="Enter gender" onChange={(e) => setgender(e.target.value)}
                  value={gender} className="form-control" />
              </div>
              <div className="col-md-6">
                <label>Password</label>
                <input type="password" placeholder="Enter password" onChange={(e) => setpassword(e.target.value)}
                  value={password} className="form-control" />
              </div>
              <div className="col-md-6">
                <label>ConfirmPassword</label>
                <input type="password" placeholder="Enter confirmpassword" onChange={(e) => setconfirmPasword(e.target.value)}
                  value={confirmPasword} className="form-control" />
              </div>
              <button className="signup w-25">Signup</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Signup;