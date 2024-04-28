import React from "react";
import { Formik } from "formik";
import Swal from "sweetalert2";
import axios from "axios";
import "./AddCourse.css";

const AddCourse = () => {
  const CourseSubmit = async (formdata, { setSubmitting }) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/courses",
        formdata
      );
      console.log("Course Added Successfully:", response.data);

      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Course Added Successfully",
      });
    } catch (error) {
      console.error("Error adding course:", error);
    }
    setSubmitting(false);
  };

  return (
    <div className="add-course-container">
      <div className="top-banner" style={{background:"#5ac1db"}}></div>

      <div className="add-course-form">
        <div className="card">
          <div className="card-body">
            <h3 className="text-center">Add Course</h3>
            <hr className="divider" />

            <Formik
              initialValues={{
                title: "",
                department: "",
                description: "",
                deadlineDate: "",
                image_link: "",
              }}
              onSubmit={CourseSubmit}
            >
              {({ values, handleSubmit, handleChange, isSubmitting }) => (
                <form onSubmit={handleSubmit}>
                  <label htmlFor="title">Course Title</label>
                  <input
                    id="title"
                    name="title"
                    type="text"
                    value={values.title}
                    onChange={handleChange}
                  />

                  <label htmlFor="description">Description</label>
                  <textarea
                    id="description"
                    name="description"
                    value={values.description}
                    onChange={handleChange}
                    cols="30"
                    rows="5"
                  ></textarea>

                  <label htmlFor="image_link">Image Link</label>
                  <input
                    id="image_link"
                    name="image_link"
                    type="text"
                    value={values.image_link}
                    onChange={handleChange}
                  />

                  <label htmlFor="deadlineDate">Date</label>
                  <input
                    id="deadlineDate"
                    name="deadlineDate"
                    type="date"
                    value={values.deadlineDate}
                    onChange={handleChange}
                  />

                  <label htmlFor="department">Department</label>
                  <select
                    id="department"
                    name="department"
                    value={values.department}
                    onChange={handleChange}
                  >
                    <option value="">Select Department</option>
                    <option value="Web Development">Web Development</option>
                    <option value="Personal Development">
                      Personal Development
                    </option>
                    <option value="Data Science">Data Science</option>
                  </select>

                  <div className="submit-button-container">
                    <button type="submit" disabled={isSubmitting}>
                      {isSubmitting ? "Submitting..." : "Submit"}
                    </button>
                  </div>
                </form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCourse;
