import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <>
  <nav class="navbar">
  <div class="navbar-left">
    <a href="?" class="logo">
      <span class="logo-blue">job</span><span class="logo-black">Ringer</span>
      <span class="tagline">India's Job Portal</span>
    </a>
  </div>
  <div class="navbar-center">
    <span class="slogan">BRINGING YOU <span class="highlight">THE PERFECT JOB</span></span>
  </div>
  <div class="navbar-right">
    <a href="?" class="nav-link">Active Employers</a>
    <a href="?" class="nav-link">Pricing</a>
    <button class="login-button jobseeker">Jobseeker Login</button>
    <button class="login-button employer">Employer Login</button>
  </div>
</nav>

    <div class="search-bar">
  <label class="search-label">Search Job</label>
  <input type="text" class="search-input" placeholder="Type keyword.." />
  <select class="search-select">
    <option>Select Location</option>
    <option>New York</option>
    <option>San Francisco</option>
    <option>Los Angeles</option>
  </select>
  <select class="search-select">
    <option>Select Experience</option>
    <option>0-1 Years</option>
    <option>2-3 Years</option>
    <option>4+ Years</option>
  </select>
  <select class="search-select">
    <option>Select Salary</option>
    <option>₹0-1 Lakh</option>
    <option>₹1-2 Lakh</option>
    <option>₹2+ Lakh</option>
  </select>
  <button class="search-button">Search</button>
</div>

  </>
  );
};

export default Header;
