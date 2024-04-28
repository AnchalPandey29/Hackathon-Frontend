import React from "react";
import "./AboutUs.css";
import saurabhImg from "../assets/saurabh.jpg"
import PriyanshuImg from "../assets/priya.jpg";
import AdrijaImg from "../assets/adrija.jpg";
import AnchalImg from "../assets/Anchal.jpg";
import RishiImg from "../assets/Rishab.jpg";


const AboutUs = () => {
  return (
    <div className="about-container">
      <div className="about-header">
        <h1>About Us</h1>
        <p>
          Discover who we are and what we aim to achieve with our Human Resource
          Management System.
        </p>
      </div>
      <div className="about-us">
        <h2>About Our HRMS</h2>
        <p>
          Our Human Resource Management System (HRMS) is designed to streamline
          HR processes, improve efficiency, and enhance employee engagement.
          Built with the latest technology, our system is flexible and scalable,
          catering to both small businesses and large enterprises.
        </p>
        <p>
          We believe in empowering HR professionals with tools that help them
          focus on what matters most: fostering a positive work environment and
          supporting employee development. Our HRMS integrates with existing
          software to provide a seamless experience, with features like payroll
          management, employee records, time tracking, and performance
          evaluations.
        </p>
      </div>
      <div className="about-mission">
        <h2>Our Mission</h2>
        <p>
          Our mission is to create a human resource management system that is
          user-friendly, efficient, and adaptable to the changing needs of
          modern workplaces. We aim to deliver a system that reduces the
          administrative burden on HR professionals, allowing them to focus on
          building a stronger organizational culture.
        </p>
        <p>
          We are committed to providing a solution that promotes transparency,
          encourages employee engagement, and facilitates effective
          communication across teams. Our mission is to make HR processes more
          efficient and enjoyable for everyone involved.
        </p>
      </div>
      <div className="about-team">
        <h2>Meet Our Team</h2>
        <div className="team-members">
          <div className="team-member">
            <img
              src={PriyanshuImg}
              alt="Team Member 1"
              className="team-photo"
            />
            <p>
              Priyanshu Agarwal
              <br /> 23MCA0257
            </p>
          </div>
          <div className="team-member">
            <img src={saurabhImg} alt="Team Member 2" className="team-photo" />
            <p>
              Saurabh Maddheshiya <br />
              23MCA0263
            </p>
          </div>
          <div className="team-member">
            <img src={AdrijaImg} alt="Team Member 3" className="team-photo" />
            <p>
              Adrija Dutta Roy <br />
              23MCA0295
            </p>
          </div>
          <div className="team-member">
            <img src={RishiImg} alt="Team Member 4" className="team-photo" />
            <p>Rishab Jaiswal <br /> 23MCA0254</p>
          </div>
          <div className="team-member">
            <img src={AnchalImg} alt="Team Member 5" className="team-photo" />
            <p style={{ padding: "2px" }}>Anchal Pandey <br /> 23MCA0246</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
