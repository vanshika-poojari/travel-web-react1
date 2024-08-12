import React, { useState } from 'react';


const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    password: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let formErrors = {};

    if (!formData.name) formErrors.name = "Name is required";
    if (!formData.email) {
      formErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      formErrors.email = "Invalid email format";
    }
    if (!formData.contact) formErrors.contact = "Contact number is required";
    if (!formData.password) formErrors.password = "Password is required";

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      setErrors({});
      console.log('Form data submitted:', formData);
      // Handle form submission logic here (e.g., API call)
    }
  };

  return (
    <div >
            <img className = "img-cont" src = "./assets/sky.jpg" />

    <form className="signup-form" onSubmit={handleSubmit}>
      <div >
       <h1 className = "signup-text">Sign Up!</h1> 
        <input
          type="text"
          id="name1"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <span className="error">{errors.name}</span>}
      </div>
      <div>
        <input
          type="email"
          id="email1"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <span className="error">{errors.email}</span>}
      </div>
      <div>
        <input
          type="text"
          id="contact1"
          name="contact"
          placeholder="Contact Number"
          value={formData.contact}
          onChange={handleChange}
        />
        {errors.contact && <span className="error">{errors.contact}</span>}
      </div>
      <div>
        <input
          type="password"
          id="password1"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
        {errors.password && <span className="error">{errors.password}</span>}
      </div>
      
      <button className="btn-signup" type="submit">Sign Up</button>
  
    </form>
    </div>
  );
};

export default Signup;