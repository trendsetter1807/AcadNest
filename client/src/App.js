import React from 'react';
import { Routes, Route, Navigate} from 'react-router-dom';
import Login from "./pages/Login";
import Register from "./pages/Register";
import HomePage from './pages/HomePage';
// import { element } from './../node_modules/@types/prop-types/index.d';

const App = () => {

  var hostels = [
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
    // Add more hostels here
  ];
  
  
  return (
    <>
          <Routes>
            <Route path="/" element={<ProtectedRoutes><HomePage hostels={hostels}/> </ProtectedRoutes>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register/>} />
          </Routes>
      
    </>
  );
};

export function ProtectedRoutes(props) {
  if (localStorage.getItem("user")) {
    return props.children;
  } else {
    return <Navigate to="/login" />;
  }
}

export default App;

