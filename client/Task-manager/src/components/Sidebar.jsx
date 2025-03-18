import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Divider,
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
      <div style={{ padding: "16px" }} className="sidebar-header">
        <img src={logo} alt="Logo" className="sidebar-logo" />
        <Typography variant="h6" className="sidebar-title">
          Task Manager
        </Typography>
      </div>

      {/* Dashboard Section */}
      <List className="sidebar-list">
        <Typography className="sidebar-heading">Dashboard</Typography>
        <ListItem
          button
          component={Link}
          to="/dashboard"
          className="sidebar-link"
        >
          <ListItemIcon>
            <Dashboard />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button component={Link} to="/report" className="sidebar-link">
          <ListItemIcon>
            <Assignment />
          </ListItemIcon>
          <ListItemText primary="Report" />
        </ListItem>
      </List>

      {/* Records Section */}
      <List className="sidebar-list">
        <Typography className="sidebar-heading">Records</Typography>
        <ListItem
          button
          component={Link}
          to="/company"
          className="sidebar-link"
        >
          <ListItemIcon>
            <Business />
          </ListItemIcon>
          <ListItemText primary="Company" />
        </ListItem>
        <ListItem button component={Link} to="/tasks" className="sidebar-link">
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
          button
          component={Link}
          to="/opportunities"
          className="sidebar-link"
        >
          <ListItemIcon>
            <TrendingUp />
          </ListItemIcon>
          <ListItemText primary="Opportunities" />
        </ListItem>
        <ListItem button component={Link} to="/deals" className="sidebar-link">
          <ListItemIcon>
            <Verified />
          </ListItemIcon>
          <ListItemText primary="Deals" />
        </ListItem>
        <ListItem button component={Link} to="/items" className="sidebar-link">
          <ListItemIcon>
            <AutoAwesomeMotionSharp />
          </ListItemIcon>
          <ListItemText primary="Items" />
        </ListItem>
        <ListItem
          button
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
        <ListItem
          button
          component={Link}
          to="/automations"
          className="sidebar-link"
        >
          <ListItemIcon>
            <AutoMode />
          </ListItemIcon>
          <ListItemText primary="Automations" />
        </ListItem>
        <ListItem
          button
          component={Link}
          to="/analytics"
          className="sidebar-link"
        >
          <ListItemIcon>
            <Analytics />
          </ListItemIcon>
          <ListItemText primary="Analytics" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
