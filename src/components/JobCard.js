import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { BsClock } from "react-icons/bs";
import "./JobCard.css";
import './JobFilters.css';


const JobCard = ({ job }) => {
  return (
    <div className="job-card">
      <div className="job-card-header">
        <h3>{job.title}</h3>
        <span className="in-office">In Office</span>
      </div>
      <p className="company">{job.company}</p>
      <div className="job-info">
        <p>
          <BsClock /> {job.experience}
        </p>
        <p>{job.salary}</p>
        <p>{job.type}</p>
      </div>
      <div className="location">
        <FaMapMarkerAlt /> {job.location}
      </div>
      <p className="key-skills">Key Skills: {job.keySkills}</p>
      <p className="open-to-hire">Open To Hire: {job.openToHire}</p>
      <div className="job-card-footer">
        <span className="posted-time">Posted {job.postedTime}</span>
        <div className="action-buttons">
          <button>Share</button>
          <button>Save</button>
          <button className="apply-button">APPLY</button>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
