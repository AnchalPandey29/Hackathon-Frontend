import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Swal from 'sweetalert2';
import Header from './Header';
import * as Yup from "yup";

const Contact = () => {

  const userSubmit = async (formdata, { setSubmitting }) => {
    console.log(formdata);
    setSubmitting(true);
    const res = await fetch(`http://localhost:5000/contact/add`, {
      method: "POST",
      body: JSON.stringify(formdata),
      headers: { "Content-Type": "application/json" },
    });

    console.log(res.status)
    setSubmitting(false);

    if (res.status === 201) {
      Swal.fire({
        icon: "success",
        title: 'Success',
        text: 'Thank You '
      })
    } else {
      Swal.fire({
        icon: "error",
        title: 'Error',
        text: 'Please try again'
      })
    }
  }

  const ContactSchema = Yup.object().shape({
    name: Yup.string().required("Name is required").max(14, "Name must be at most 14 characters"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    message: Yup.string().max(100, "Message limit exceeded").required("Message is required"),
  });

  return (
    <>
      <Header />
      <div className='row  p-3 py-5' style={{ backgroundColor: "#5ac1db" }}>
        <div className='col-md-5 mt-5 mx-auto mb-5' style={{ color: "white" }}>
          <h2>Contact us</h2>
          <h5>We are here to help you and answer any questions you may have. Here is how to reach us!</h5>
        </div>
        <div className='col-md-5 text-center '>
          <img src="https://i0.wp.com/pages.milaap.org/wp-content/uploads/2022/01/Contact_illustration.png?w=328&ssl=1" alt="" />
        </div>
      </div>
      <Formik
        initialValues={{ name: '', email: '', message: '', copy: true }}
        validationSchema={ContactSchema} // Added the validation schema here
        onSubmit={userSubmit}
      >
        {({ isSubmitting }) => (
          <div className='m-5'>
            <Form className='card p-5 ' style={{ height: "fit-content" }}>
              <div className='px-5'>
                <p className="h4">Let us know what you think</p>
                <div className='row mt-5'>
                  <div className='col-md-6'>
                    {/* Name input */}
                    <div className="form-outline mb-4">
                      <Field type="text" className="form-control" name="name" placeholder="Name" />
                      <ErrorMessage name="name" component="div" className="error-message" />
                    </div>
                  </div>
                  <div className='col-md-6'>
                    {/* Email input */}
                    <div className="form-outline mb-4">
                      <Field type="email" className="form-control" name="email" placeholder="Email" />
                      <ErrorMessage name="email" component="div" className="error-message" />
                    </div>
                  </div>
                </div>
                {/* Message input */}
                <div className="form-outline mb-4" data-mdb-input-init="">
                  <Field as="textarea" className="form-control" id="textAreaExample" rows={4} name="message" placeholder="Message" />
                 
                  <ErrorMessage name="message" component="div" className="error-message" />
                </div>
                
                {/* Submit button */}
                <button type="submit" disabled={isSubmitting} className="btn btn-block mb-4" style={{ backgroundColor: "#5ac1db", color: "#fffefe", width: "200px" }}>Send</button>
              </div>
            </Form>
          </div>
        )}
      </Formik>
    </>
  )
}

export default Contact;
