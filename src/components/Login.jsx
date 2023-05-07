import { useState } from 'react';
import axios from 'axios';

const LoginForm = ({ onLogin }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post('https://api.escuelajs.co/api/v1/auth/login', formData)
      .then((response) => {
        console.log(response.data);
        onLogin(response.data);
        setFormData({
            email: '',
            password: '', 
        })
      })
      .catch((error) => {
        console.error(error);
        alert('Login failed. Please try again.');
      });
  };

  return (
   <div className='container'>
     <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          className="form-control"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          className="form-control"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          required
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Login
      </button>
    </form>
   </div>
  );
};

export default LoginForm;
