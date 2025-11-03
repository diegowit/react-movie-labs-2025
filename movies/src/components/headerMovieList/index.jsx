import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router";

const Header = (props ) => {
  const title = props.title
    const navigate = useNavigate();

  return (
    <Paper 
      component="div" 
      sx={{
        display: "flex",
        justifyContent: "space-around",
        flexWrap: "wrap",
        color: "#E1D0B3",
        marginBottom: 1.5,
        background: '#703B3B'
      }}
      >
      <IconButton aria-label="go back" onClick={() => navigate(+1)}
  sx={{
    transition: 'transform 1s ease',
    '&:hover': {
      transform: 'translateX(-100px) scale(5.5)',
    },
  }}
><ArrowBackIcon color="#E1D0B3" fontSize="large" />
      </IconButton>

      <Typography variant="h4" component="h3">
        {title}
      </Typography>
      <IconButton aria-label="go forward" onClick={() => navigate(+1)}
  sx={{
    transition: 'transform 1s ease',
    '&:hover': {
      transform: 'translateX(100px) scale(5.5)',
    },
  }}>
        <ArrowForwardIcon color="#E1D0B3" fontSize="large" />
      </IconButton>
    </Paper>
  );
};

export default Header;
