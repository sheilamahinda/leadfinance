import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./resources.css";

// Sidebar Component
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <img src="/path-to-logo.png" alt="Nativo English Logo" />
      </div>
      <ul className="sidebar-menu">
        <li>
          <Link to="/">Dashboard</Link>
        </li>
        <li>
          <Link to="/courses">Courses</Link>
        </li>
        <li>
          <Link to="/downloads">Downloads</Link>
        </li>
        <li>
          <Link to="/grade">Grade</Link>
        </li>
        <li>
          <Link to="/teachers">Teachers</Link>
        </li>
        <li>
          <Link to="/payment">Payment</Link>
        </li>
        <li>
          <Link to="/support">Support Services</Link>
        </li>
        <li>
          <Link to="/messages">Messages</Link>
        </li>
        <li>
          <Link to="/meetings">Conference Meeting</Link>
        </li>
        <li className="sidebar-upgrade">
          <button className="upgrade-btn">Upgrade</button>
        </li>
      </ul>
    </div>
  );
};

// Navbar Component
const Navbar = () => {
  return (
    <header className="navbar">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/courses">Courses</Link>
          </li>
          <li>
            <Link to="/profile">Profile/Dashboard</Link>
          </li>
        </ul>
        <button className="contact-btn">Contact</button>
      </nav>
    </header>
  );
};

// Download Card Component
const DownloadCard = ({ title, description, imgSrc, instructor }) => {
  const isHandsOn = title.includes("Hands-on");

  const handlePlay = () => {
    // Functionality for the play button
    alert(`Playing content for: ${title}`);
  };

  return (
    <div className="download-card">
      <img src={imgSrc} alt={title} className="card-image" />
      <div className="card-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <p>Instructor: {instructor}</p>
        {isHandsOn && (
          <button className="play-button" onClick={handlePlay}>
            ▶ Play
          </button>
        )}
        <div className="download-buttons">
          <button onClick={() => alert(`Opening: ${title}`)}>Open</button>
          <button onClick={() => alert(`Downloading: ${title}`)}>Download</button>
        </div>
      </div>
    </div>
  );
};


// Downloads Component
const Downloads = ({ downloads, format }) => {
  // Filter downloads based on the selected format
  const filteredDownloads = downloads.filter((item) => {
    if (format === "PDF") {
      return item.title.includes("PDF"); // Example condition to check for PDFs
    } else if (format === "Hands-on Sessions") {
      return item.title.includes("Hands-on"); // Example condition for hands-on sessions
    }
    return true; // Return all if format is not recognized
  });

  return (
    <div className="downloads-list">
      {filteredDownloads.length > 0 ? (
        filteredDownloads.map((item, index) => (
          <DownloadCard key={index} {...item} />
        ))
      ) : (
        <p>No downloads available for this format.</p>
      )}
    </div>
  );
};

// Main Resources Component
const Resources = () => {
  const [downloads, setDownloads] = useState([
    {
      title: "Listening and Comprehension (PDF)",
      description: "Networking; Introduction to Networking",
      imgSrc: "/pdfff.png", // Path to PDF
      instructor: "Dr. Siele",
    },
    {
      title: "Basic Grammar and Vocabulary (Hands-on)",
      description: "Introduction to UI/UX Designing with Amos",
      imgSrc: "/ix.png", // Path to image or relevant file
      instructor: "Amos",
    },
    {
      title: "Everyday Conversations (PDF)",
      description: "Information systems; introduction to Information Systems",
      imgSrc: "/pdfff.png", // Path to PDF
      instructor: "Dr. Kogo",
    },
  ]);

  const [isFormVisible, setIsFormVisible] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [selectedFormat, setSelectedFormat] = useState("PDF");

  const handleCreateItem = () => {
    setIsFormVisible(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newDownload = {
      title: newTitle,
      description: newDescription,
      imgSrc: "/pdfff.png", // Set default image src
      instructor: "New Instructor", // Set default instructor
    };

    setDownloads((prevDownloads) => [...prevDownloads, newDownload]);
    setIsFormVisible(false); // Hide the form after submission
    setNewTitle(""); // Reset title input
    setNewDescription(""); // Reset description input
  };

  const handleCloseModal = () => {
    setIsFormVisible(false);
    setNewTitle("");
    setNewDescription("");
  };

  const handleFormatChange = (e) => {
    setSelectedFormat(e.target.value);
  };

  return (
    <div className="resources-container">
      {/* Create Item Button */}
      <div className="create-item-btn-container">
        <button className="create-item-btn" onClick={handleCreateItem}>
          Create Item
        </button>
      </div>

      {/* New Item Modal */}
      {isFormVisible && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>Create New Item</h3>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Title"
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
                required
              />
              <textarea
                placeholder="Description"
                value={newDescription}
                onChange={(e) => setNewDescription(e.target.value)}
                required
              ></textarea>
              <button type="submit">Add Item</button>
              <button type="button" onClick={handleCloseModal}>Cancel</button>
            </form>
          </div>
        </div>
      )}

      {/* Downloads Header with Dropdown */}
      <div className="downloads-header">
        <h2>Downloads</h2>
        <div className="dropdown">
          <select value={selectedFormat} onChange={handleFormatChange}>
            <option value="PDF">PDF</option>
            <option value="Hands-on Sessions">Hands-on Sessions</option>
          </select>
        </div>
      </div>

      {/* Downloads List with Selected Format */}
      <Downloads downloads={downloads} format={selectedFormat} />
    </div>
  );
};

export default Resources;








    
   