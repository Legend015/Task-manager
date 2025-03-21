import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import {
  Dashboard,
  Assignment,
  Business,
  Task,
  Analytics,
  AutoAwesomeMotionSharp,
  Add,
  Verified,
  AutoMode,
  TrendingUp,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import logo from "../assets/logo.png";

const Sidebar = () => {
  return (
    <Drawer variant="permanent" className="sidebar">
      {/* Sidebar Header */}
      <div className="sidebar-header">
        <img src={logo} alt="Logo" className="sidebar-logo" />
        <Typography variant="h6" className="sidebar-title">
          Task Manager
        </Typography>
      </div>

      {/* Sidebar Sections */}
      <div className="sidebar-content">
        {/* Dashboard Section */}
        <List className="sidebar-list">
          <Typography className="sidebar-heading">Dashboard</Typography>
          <ListItem component={Link} to="/dashboard" className="sidebar-link">
            <ListItemIcon>
              <Dashboard />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem>
          <ListItem component={Link} to="/report" className="sidebar-link">
            <ListItemIcon>
              <Assignment />
            </ListItemIcon>
            <ListItemText primary="Report" />
          </ListItem>
        </List>

        {/* Records Section */}
        <List className="sidebar-list">
          <Typography className="sidebar-heading">Records</Typography>
          <ListItem component={Link} to="/company" className="sidebar-link">
            <ListItemIcon>
              <Business />
            </ListItemIcon>
            <ListItemText primary="Company" />
          </ListItem>
          <ListItem component={Link} to="/tasks" className="sidebar-link">
            <ListItemIcon>
              <Task />
            </ListItemIcon>
            <ListItemText primary="Tasks" />
          </ListItem>
        </List>

        {/* Pipelines Section */}
        <List className="sidebar-list">
          <Typography className="sidebar-heading">Pipelines</Typography>
          <ListItem
            component={Link}
            to="/opportunities"
            className="sidebar-link"
          >
            <ListItemIcon>
              <TrendingUp />
            </ListItemIcon>
            <ListItemText primary="Opportunities" />
          </ListItem>
          <ListItem component={Link} to="/deals" className="sidebar-link">
            <ListItemIcon>
              <Verified />
            </ListItemIcon>
            <ListItemText primary="Deals" />
          </ListItem>
          <ListItem component={Link} to="/items" className="sidebar-link">
            <ListItemIcon>
              <AutoAwesomeMotionSharp />
            </ListItemIcon>
            <ListItemText primary="Items" />
          </ListItem>
          <ListItem
            component={Link}
            to="/new-pipeline"
            className="sidebar-link"
          >
            <ListItemIcon>
              <Add />
            </ListItemIcon>
            <ListItemText primary="New Pipeline" />
          </ListItem>
        </List>

        {/* Applications Section */}
        <List className="sidebar-list">
          <Typography className="sidebar-heading">Applications</Typography>
          <ListItem component={Link} to="/automations" className="sidebar-link">
            <ListItemIcon>
              <AutoMode />
            </ListItemIcon>
            <ListItemText primary="Automations" />
          </ListItem>
          <ListItem component={Link} to="/analytics" className="sidebar-link">
            <ListItemIcon>
              <Analytics />
            </ListItemIcon>
            <ListItemText primary="Analytics" />
          </ListItem>
        </List>
      </div>
    </Drawer>
  );
};

export default Sidebar;
