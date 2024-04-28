import React, { useState, useEffect } from "react";
import axios from "axios";
import "./CourseBrowse.css";
import bannerImg from "../assets/banner.jpg";
const CourseBrowse = () => {
  const [searchKeyword, setSearchKeyword] = useState("");
  const [courseList, setCourseList] = useState([]);
  const [filteredCourseList, setFilteredCourseList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchCourses();
  }, [courseList]);

  const fetchCourses = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/courses");
      setCourseList(response.data);
      setFilteredCourseList(response.data);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching courses:", error);
    }
  };

  const handleSearch = (keyword) => {
    setSearchKeyword(keyword);
    if (keyword.trim() === "") {
      setFilteredCourseList(courseList);
    } else {
      const filteredCourses = courseList.filter((course) =>
        course.title.toLowerCase().includes(keyword.toLowerCase())
      );
      setFilteredCourseList(filteredCourses);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/courses/${id}`);
      setCourseList(courseList.filter((course) => course._id !== id));
      setFilteredCourseList(
        filteredCourseList.filter((course) => course._id !== id)
      );
    } catch (error) {
      console.error("Error deleting course:", error);
    }
  };

  return (
    <div className="course-browse-container">
      <div className="top-banner">
        <img src={bannerImg} alt="Banner" className="banner-image" />
        <div className="banner-text">
          <h1>Welcome to Course Browse</h1>
          <p>Discover and explore a wide range of courses</p>
        </div>
      </div>
      <div className="course-header">
        <h2>Browse Courses</h2>
        <div className="search-container">
          <input
            type="text"
            value={searchKeyword}
            onChange={(e) => handleSearch(e.target.value)}
            placeholder="Search by course name"
          />
        </div>
        <a href="/addCourse" className="add-course-button">
          Add Course
        </a>
      </div>
      {isLoading ? (
        <div className="loading-spinner">Loading...</div>
      ) : filteredCourseList.length === 0 ? (
        <div className="no-course-found">No Course Found</div>
      ) : (
        <div className="course-list">
          {filteredCourseList.map((course) => (
            <div className="course-card" key={course._id}>
              <img src={course.image_link} alt={course.title} />
              <div className="course-details">
                <h3>{course.title}</h3>
                <p>{course.description}</p>
                <p>Date: {new Date(course.date).toLocaleDateString()}</p>
                <button
                  className="delete-button"
                  onClick={() => handleDelete(course.course_id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CourseBrowse;
