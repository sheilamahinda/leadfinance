// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import CommunicationPage from "./CommunicationPage";
import LoginPage from "./LoginPage";
import Pdash, { Dashboard } from "./pdash";
import Teacher from "./Teacher";
import Conference from "./Conference";
import Pay from "./pay";
import Resources from "./resources";
import SignUp from "./SignUp";
import "./App.css";
import DashboardLayout from "./components/Layout";
import NotFound from "./components/NotFound";
import Profiles from "./ProfileCard";
import { Grade } from "./Grade";
import BudgetPlanner from "./BudgetPlanner";
import ContactForm from "./ContactForm";
import LeadershipPractice from "./LeadershipPractice"; // Import LeadershipPractice component
import Chatbot from "./Chatbot"; // Import Chatbot component
import ServicesPage from "./ServicesPage"; // Import ServicesPage component at the top

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/LoginPage" element={<LoginPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route
          path="/dashboard"
          element={
            <DashboardLayout>
              <Dashboard />
            </DashboardLayout>
          }
        />
        <Route
          path="/communicate"
          element={
            <DashboardLayout>
              <CommunicationPage />
            </DashboardLayout>
          }
        />
        <Route
          path="/teacher"
          element={
            <DashboardLayout>
              <Teacher />
            </DashboardLayout>
          }
        />
        <Route
          path="/Conference"
          element={
            <DashboardLayout>
              <Conference />
            </DashboardLayout>
          }
        />
        <Route
          path="/pay"
          element={
            <DashboardLayout>
              <Pay />
            </DashboardLayout>
          }
        />
        <Route
          path="/resources"
          element={
            <DashboardLayout>
              <Resources />
            </DashboardLayout>
          }
        />
        <Route
          path="/grades"
          element={
            <DashboardLayout>
              <Grade />
            </DashboardLayout>
          }
        />
        <Route path="/SignUp" element={<SignUp />} />
        <Route
          path="/profiles"
          element={<Profiles />}
        />
        <Route
          path="/contact"
          element={
            <DashboardLayout>
              <ContactForm />
            </DashboardLayout>
          }
        />
        <Route
          path="/budget-planner"
          element={
            <DashboardLayout>
              <BudgetPlanner />
            </DashboardLayout>
          }
        />
        <Route
          path="/leadership-practice" // New route for Leadership Practice
          element={
            <DashboardLayout>
              <LeadershipPractice />
            </DashboardLayout>
          }
        />
        <Route
          path="/chat"
          element={
            <DashboardLayout>
              <Chatbot />
            </DashboardLayout>
          }
        />
        <Route
          path="*"
          element={
            <DashboardLayout>
              <NotFound />
            </DashboardLayout>
          }
        />
        
      </Routes>
    </Router>
  );
}

export default App;
