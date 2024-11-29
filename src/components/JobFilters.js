import React from "react";
import "./JobFilters.css";

const JobFilters = () => {
  return (
    <div className="filters">
      <div className="filter-section">
        <h3>Filters</h3>
        <div className="filter-input">
          <input
            type="text"
            placeholder="Type keyword and press enter"
            className="keyword-input"
          />
        </div>
        <div className="filter-category">
          <p>Experience</p>
          <p>+</p>
        </div>
        <div className="filter-category">
          <p>Work Mode</p>
          <p>+</p>
        </div>
        <div className="filter-category">
          <p>Job Type</p>
          <p>+</p>
        </div>
      </div>
      <div className="quick-search">
        <h3>Quick Job search 🔍</h3>
        <div className="tags">
          {[
            "#Fresher",
            "#Work From Home",
            "#WFH",
            "#IT",
            "#HR",
            "#Back Office",
            "#BPO Jobs",
            "#ITES",
            "#Finance",
            "#Accounts",
          ].map((tag, index) => (
            <span className="tag" key={index}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobFilters;
