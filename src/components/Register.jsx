import { useState } from 'react';
import axios from 'axios';

const RegistrationForm = (props) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    avatar: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    
  };

 
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post('https://api.escuelajs.co/api/v1/users/', formData)
      .then((response) => {
        console.log(response.data);
        alert('Registration successful!');
        setFormData({
          name: '',
          email: '',
          password: '',
          avatar: ''
        });
        if (props.onRegistration) {
          props.onRegistration(formData.name);
        }
      })
      .catch((error) => {
        console.error(error);
        alert('Registration failed. Please try again later.');
      });
  };
  
  return (
   <div className='container'>
     <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          className="form-control"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          required
        />
      </div>

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
      <div className="form-group mb-5">
        <label htmlFor="password">URL</label>
        <input
          type="url"
          className="form-control"
          id="avatar"
          name="avatar"
          value={formData.avatar}
          onChange={handleInputChange}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Register
      </button>
    </form>
   </div>
  );
};

export default RegistrationForm;
