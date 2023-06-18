import React, { useState } from "react";
import '../../src/App.css';
import { useNavigate } from "react-router-dom";
import HostelCard from "./HostelCard";

const Homepage = () => {

  const [location, setLocation] = useState('all');
  const [price, setPrice] = useState(0);
  const [filteredHostels, setFilteredHostels] = useState([]);

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };
  const searchHostels = (event) => {
    event.preventDefault(); 
    const transformedLocation = location.toLowerCase().replace(" ", "-");
    const filteredHostels = getFilteredHostels(transformedLocation, price);

    // Display filtered hostels
    setFilteredHostels([...filteredHostels]);
  };

  const getFilteredHostels = (location, price) => {
    
    const filteredHostels = hostels.filter((hostel) => {
      const hostelLocation = hostel.location.toLowerCase().replace(' ', '-');
      const priceRange = parseInt(hostel.price) <= parseInt(price);

      return (location === 'all' || hostelLocation === location) ;
    });

    return filteredHostels;
  };



const hostels = [
  {
    name: "The Learning Lodge",
    location: "Acharya Vihar",
    price: "Rs. 2500/month",
    image: "hostel1.jpg",
    amenities: "WiFi, Laundry, AC",
    description: "Discover the epitome of student living at The Learning Lodge, Acharya Vihar's finest hostel. Experience a harmonious blend of comfort, convenience, and a vibrant community for an unparalleled academic journey."
  },
  {
    name: "The Knowledge Nest",
    location: "Jaydev Vihar",
    price: "Rs. 3000/month",
    image: "hostel2.jpg",
    amenities: "WiFi, Parking, Gym",
    description: "Located in the heart of Jaydev Vihar, The Knowledge Nest sets the benchmark for student accommodations. Immerse yourself in a dynamic environment that promotes learning, connections, and unforgettable experiences."
  },
  {
    name: "The Academic Inn",
    location: "Patia",
    price: "Rs. 2350/month",
    image: "hostel3.jpg",
    amenities: "WiFi, Study Room",
    description: "Embrace a world-class student living experience at The Academic Inn. Unwind in well-appointed spaces, engage in collaborative learning, and create lifelong memories in the vibrant community of Patia."
  },
  {
    name: "The Study Oasis",
    location: "Baramunda",
    price: "Rs. 2800/month",
    image: "hostel4.jpg",
    amenities: "WiFi, Library, 24/7 Security",
    description: "Nestled in the serene surroundings of Baramunda, The Study Oasis offers a tranquil haven for students seeking an ideal blend of peacefulness, academic support, and recreational opportunities."
  }
 
];

    const navigate = useNavigate();
   const handleLogin = () => {
      navigate('/login');
    };
    const handleRegister = () => {
        navigate('/register');
      };
  return (
    <div>
      <header className="banner">
        <div class="banner-content">
          <h1>AcadNest</h1>
          <p class="tagline">Find your academic home</p>
          <div class="button-container">
            <div class="right-buttons">
              <button>Contact</button>
              <button>About</button>
            </div>
            <div class="right-buttons">
              <button onClick={handleLogin}>Login</button>
              <button onClick={handleRegister}>Sign Up</button>
            </div>
          </div>
        </div>
      </header>

      <main>
      <section>
     <div>
  <h2>Search for hostels</h2>
  <form id="searchForm">
    <div className="select-container">
      <label htmlFor="location">Location:</label>
      <select id="location" value={location} onChange={handleLocationChange}>
        <option value="all">All</option>
        <option value="Acharya Vihar">Acharya Vihar</option>
        <option value="Jaydev Vihar">Jaydev Vihar</option>
        <option value="Patia">Patia</option>
        <option value="Baramunda">Baramunda</option>
      </select>
    </div>
    <div className="select-container">
      <label htmlFor="price">Price:</label>
      <input type="range" id="price" min={0} max={5000} step={100} defaultValue={0} onChange={handlePriceChange}/>
      <span id="priceValue">Any</span>
    </div>
    <button type="submit" onClick={searchHostels}>Search</button>
  </form>
  <section>
    <h2>Our Hostels</h2>
    <div className="hostel-cards" id="hostelCards">
    {filteredHostels.length > 0 ? (
                  filteredHostels.map((hostel, index) => (
                    <HostelCard key={index} hostel={hostel} />
                  ))
                ) : (
                  <p>No hostels found</p>
                )}
    </div>
  
  </section></div>

    </section>
      </main>
 
      <footer>
        <p>&copy; 2023 AcadNest</p>
      </footer>
    </div>
  );
};

export default Homepage;
