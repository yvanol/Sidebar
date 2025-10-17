// src/App.jsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import Inbox from "./pages/Inbox";
import RequestedMessages from "./pages/RequestedMessages";
import UnreadMessages from "./pages/UnreadMessages";
import AllMessages from "./pages/AllMessages";
import Calendar from "./pages/Calendar";
import Tables from "./pages/Tables";
import Analytics from "./pages/Analytics";
import Support from "./pages/Support";
import Settings from "./pages/Settings";
import General from "./pages/General";
import Security from "./pages/Security";
import NotificationsPage from "./pages/NotificationsPage";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="inbox">
            <Route index element={<Inbox />} />
            <Route path="requested" element={<RequestedMessages />} />
            <Route path="unread" element={<UnreadMessages />} />
            <Route path="all" element={<AllMessages />} />
          </Route>
          <Route path="calendar" element={<Calendar />} />
          <Route path="tables" element={<Tables />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="support" element={<Support />} />
          <Route path="settings">
            <Route index element={<Settings />} />
            <Route path="general" element={<General />} />
            <Route path="security" element={<Security />} />
            <Route path="notifications" element={<NotificationsPage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;