// App.js
import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import JobFilters from "./components/JobFilters";
import JobCard from "./components/JobCard";
import jobs from "./jobData"; // Import the jobs array
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <Header />
      <div className="content">
        <JobFilters />
        <div className="job-list">
          {jobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
