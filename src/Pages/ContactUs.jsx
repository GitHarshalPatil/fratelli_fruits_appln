import React, { useEffect, useState } from 'react'
import '../Styles/ContactUs.css'
import axios from 'axios';
// import 'react-toastify/dist/ReactToastify.css';
// import { toast,ToastContainer } from 'react-toastify';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    subject: '',
    enquiryType: 'Agronomy Enquiry', // Default value
    message: '',
  });
  const [errorAlert, setErrorAlert] = useState(false);
  const [formDataList, setFormDataList] = useState([]);
  const [updateId, setUpdateId] = useState(null); // Add this line

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (updateId) {
        // If updateId has a value, it means we're updating an existing record
        await updateFormData(updateId, formData);
        setUpdateId(null); // Reset updateId after the update
      } else {
        // If updateId is null, it means we're submitting a new record
        const response = await axios.post('http://localhost:8080/contact/contact-data', formData);
        setFormDataList((prevList) => [...prevList, response.data]);
      }
  
      // Show a success notification
      toast.success('Data submitted successfully!', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
  
      // Reset the form data
      setFormData({
        name: '',
        email: '',
        contact: '',
        subject: '',
        enquiryType: 'Agronomy Enquiry',
        message: '',
      });
  
      // You can handle success, show a message, or redirect the user as needed.
      setErrorAlert(false); // Reset error alert state
    }

    // try {
    //   // Post form data to the backend
    //   const response = await axios.post('http://localhost:8080/contact/contact-data', formData);
    //   console.log('Data added successfully:', response.data);

    //   // Update formDataList with the newly added data
    //   setFormDataList((prevList) => [...prevList, response.data]); // Comment explaining the change
    //   // Show a success notification
    //   //    <ToastContainer
    //   //    position="top-right"
    //   //    autoClose={3000}
    //   //    hideProgressBar={false}
    //   //    newestOnTop={false}
    //   //    closeOnClick
    //   //    rtl={false}
    //   //    pauseOnFocusLoss
    //   //    draggable
    //   //    pauseOnHover
    //   //  />
    //   toast.success('Data submitted successfully!', {
    //     position: 'top-right',
    //     autoClose: 3000, // Notification will close after 3 seconds
    //     hideProgressBar: false,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     draggable: true,
    //   });
    //   alert("data submit successfullly", response.data)

    //   // You can handle success, show a message, or redirect the user as needed.
    //   setErrorAlert(false); // Reset error alert state
    // } 
    
    catch (error) {
      if (error.response && error.response.status === 409) {
        console.error('Error adding data:', error.response.data);
        // Display an alert if the email is already in use
        setErrorAlert(true);
      } else {
        console.error('Unexpected error:', error);
        // Handle other types of errors if needed.
      }
    }
  };
  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   try {
  //     const response = await axios.post('http://localhost:8080/contact/contact-data', formData);
  //     console.log('Data added successfully:', response.data);
  //     // You can handle success, show a message, or redirect the user as needed.
  //     setErrorAlert(false); // Reset error alert state
  //   } catch (error) {
  //     if (error.response && error.response.status === 409) {
  //       console.error('Error adding data:', error.response.data);
  //       // Display an alert if the email is already in use
  //       setErrorAlert(true);
  //     } else {
  //       console.error('Unexpected error:', error);
  //       // Handle other types of errors if needed.
  //     }
  //   }
  // };

  useEffect(() => {
    // Fetch contact data from the API
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/contact/get-contact-data');
        setFormDataList(response.data);
      } catch (error) {
        console.error('Error fetching contact data:', error);
      }
    };
    fetchData();
  }, []); // Empty dependency array ensures the effect runs only once after component mount

  // const deleteFormData = async (_id) => {
  //   // Implement the logic to delete data based on the given id
  //   try {
  //     // Example: Uncomment and modify based on your backend API for deleting data
  //     await axios.delete(`http://localhost:8080/contact/delete/:_id/${_id}`);
  //     console.log(`Data with id ${_id} deleted successfully`);
  //     // After deletion, you can update the state or refetch data if needed
  //   } catch (error) {
  //     console.error(`Error deleting data with id ${_id}:`, error);
  //   }
  // };

  // const handleChange = (e) => {
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  // };
  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   try {
  //     const response = await axios.post('http://localhost:8080/contact/contact-data', formData);
  //     console.log('Data added successfully:', response.data);
  //     // You can handle success, show a message, or redirect the user as needed.
  //   } catch (error) {
  //     console.error('Error adding data:', error);
  //     // Handle errors, show a message, or log as needed.
  //   }
  // };

  const deleteFormData = async (_id) => {
    // Display a confirmation alert before proceeding with deletion
    const confirmDelete = window.confirm('Are you sure you want to delete this record?');
    if (confirmDelete) {
      try {
        // Send delete request to the backend
        await axios.delete(`http://localhost:8080/contact/delete/${_id}`);
        console.log("Data with id  deleted successfully");
        // Update formDataList by removing the deleted data
        setFormDataList((prevList) => prevList.filter((formData) => formData._id !== _id));
        // You can show a success message or perform other actions after deletion
      } catch (error) {
        console.error("Error deleting data with id", error);
        // Handle errors or show an error message if needed
      }
    }
  };

  const updateFormData = async (_id, updatedData) => {
    try {
      // Send a PUT request to update the data
      const response = await axios.put(`http://localhost:8080/contact/update/${_id}`, updatedData);
      // Update formDataList with the newly updated data
      setFormDataList((prevList) =>
        prevList.map((formData) => (formData._id === _id ? response.data.Data : formData))
      );
      // Show a success notification
      toast.success('Data updated successfully!', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } catch (error) {
      console.error('Error updating data:', error);
      // Handle errors or show an error message if needed
    }
  };
  const handleUpdateClick = (_id, formData) => {
    // Set the form data with the values of the selected record
    setFormData({
      name: formData.name,
      email: formData.email,
      contact: formData.contact,
      subject: formData.subject,
      enquiryType: formData.enquiryType,
      message: formData.message,
    });
    // Save the ID of the selected record to use in the update function
    setUpdateId(_id);
  };
  return (
    <div>
      {/* Start Map */}
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <h3 className="text-center heading">Contact Us</h3>
          </div>
        </div>
      </div>
      <section>
        <div className="container map">
          <div className="row">
            <div className="col-md-12 col-lg-12 d-flex justify-content-center">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3745.0711507087262!2d73.99045667474729!3d20.17276281662881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdddadb1b81ff11%3A0x48e4719d7970579!2sFratelli%20Fruits!5e0!3m2!1sen!2sin!4v1704576418430!5m2!1sen!2sin"
                width="800" height="450" style={{ border: "0" }} allowFullScreen="" loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Map --> */}

      {/* Start Form */}
      <div className="container main">
        <h2>Contact Form</h2>
        {errorAlert && (
          <div className="alert alert-danger" role="alert">
            Enquiry already submitted with this email.
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              className="form-control"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-control"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="contact">Contact:</label>
            <input
              type="text"
              id="contact"
              name="contact"
              className="form-control"
              value={formData.contact}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="subject">Subject:</label>
            <input
              type="text"
              id="subject"
              name="subject"
              className="form-control"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group d-flex">
            <label style={{ paddingRight: "30px" }}>Enquiry Type:</label>
            <div className="form-check">
              <input
                type="radio"
                id="agronomyEnquiry"
                name="enquiryType"
                value="Agronomy Enquiry"
                checked={formData.enquiryType === 'Agronomy Enquiry'}
                onChange={handleChange}
                className="form-check-input"
              />
              <label htmlFor="agronomyEnquiry" className="form-check-label" style={{ paddingRight: "30px" }}>
                Agronomy Enquiry
              </label>
            </div>
            <div className="form-check">
              <input
                type="radio"
                id="productEnquiry"
                name="enquiryType"
                value="Product Enquiry"
                checked={formData.enquiryType === 'Product Enquiry'}
                onChange={handleChange}
                className="form-check-input"
              />
              <label htmlFor="productEnquiry" className="form-check-label">
                Product Enquiry
              </label>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              className="form-control"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          {/* <div className="form-group">
          <label htmlFor="enquiryType">Enquiry Type:</label>
          <select
            id="enquiryType"
            name="enquiryType"
            className="form-control"
            value={formData.enquiryType}
            onChange={handleChange}
            required
          >
            <option value="Agronomy Enquiry">Agronomy Enquiry</option>
            <option value="Product Enquiry">Product Enquiry</option>
          </select>
        </div> */}

          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
      <br /><br />

      <div className="table-responsive container-fluid">
        <h3>Contact Data</h3>
        <table className="table table-dark table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Contact</th>
              <th>Subject</th>
              <th>EnquiryType</th>
              <th>Message</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {formDataList.map((formData) => (
              <tr key={formData.id} className="table-primary">
                <td>{formData.name}</td>
                <td>{formData.email}</td>
                <td>{formData.contact}</td>
                <td>{formData.subject}</td>
                <td>{formData.enquiryType}</td>
                <td>{formData.message}</td>
                <td>
                  <div className="mt-1" p-2>
                    <button
                      className="btn btn-danger" style={{marginRight:"20px"}}
                      onClick={() => deleteFormData(formData._id)}
                    >
                      Delete
                    </button>
                    <button
                      className="btn btn-warning ml-2"
                      onClick={() => handleUpdateClick(formData._id, formData)}
                    >
                      Update
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  )
}

export default ContactUs