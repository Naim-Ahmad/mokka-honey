import React from "react";
import { Form } from "react-bootstrap";
import headerImage from "../../Assets/bannar-min.jpg";
import HeaderAll from "../../Components/HeaderAll";

export default function Login() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const userEmail = e.target.userEmail.value;
    const userPassword = e.target.userPassword.value;

    const userInfo = {
      userEmail,
      userPassword,
    };
    console.log(userInfo);
  };
  
  return (
    <>
      <HeaderAll imageUrl={headerImage}>দয়া করে লগইন করুন</HeaderAll>
      <div className="container">
        <div className="w-50 mx-auto py-5 px-4 my-4 bg-light rounded">
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="fw-bold">ই-মেইল এড্রেস</Form.Label>
              <Form.Control
                type="email"
                name="userEmail"
                placeholder="test@example.com"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label className="fw-bold">পাসওয়ার্ড</Form.Label>
              <Form.Control
                type="password"
                name="userPassword"
                placeholder="******"
              />
            </Form.Group>

            <button type="submit" className="my-btn w-100">
              লগইন
            </button>
          </Form>
          <hr className="bg-primary text-primary my-4" />
          <div>
            <button className="btn btn-outline-warning text-black w-100 rounded-pill fw-bold">
              <i className="fa-brands mx-2 text-black fa-google"></i>গুগল দিয়ে
              লগইন করুন
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
