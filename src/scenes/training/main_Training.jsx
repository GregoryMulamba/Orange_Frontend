// src/scenes/training/Training.js
import React, { useState } from "react";
import { Box, TextField, MenuItem, Typography, Card, CardContent, Grid } from "@mui/material";
import Header from "../../components/Header";
import { directions, employeurs, trainingData } from "../../data/mockData";

const Main_Training = () => {
  const [filters, setFilters] = useState({
    employeur: "",
    direction: "",
  });

  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Dummy data for training statistics
  const trainingStats = {
    onlineTraining: 20,
    offlineTraining: 10,
    participants: 150,
    participationRate: "75%",
  };

  return (
    <Box m="20px">
         <Header title="DASHBOARD DE FORMATION" subtitle="Vue d'ensemble des formations" />

      <Box display="flex" justifyContent="space-between" mb="20px">
        <TextField
          select
          label="Employeur"
          name="employeur"
          value={filters.employeur}
          onChange={handleFilterChange}
          variant="outlined"
          sx={{ width: "48%", color: "orange" }} // Couleur orange
        >
          {employeurs.map((employeur) => (
            <MenuItem key={employeur.value} value={employeur.value}>
              {employeur.label}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          select
          label="Direction"
          name="direction"
          value={filters.direction}
          onChange={handleFilterChange}
          variant="outlined"
          sx={{ width: "48%", color: "black" }} // Couleur noire
        >
          {directions.map((direction) => (
            <MenuItem key={direction.value} value={direction.value}>
              {direction.label}
            </MenuItem>
          ))}
        </TextField>
      </Box>

      <Grid container spacing={3}>
        <Grid item xs={12} md={3}>
          <Card>
            <CardContent>
              <Typography variant="h5" sx={{ color: "orange" }}>
                Formations en ligne
              </Typography> {/* Couleur orange */}
              <Typography variant="h2">{trainingStats.onlineTraining}</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={3}>
          <Card>
            <CardContent>
              <Typography variant="h5" sx={{ color: "orange" }}>
                Formations hors ligne
              </Typography> {/* Couleur orange */}
              <Typography variant="h2">{trainingStats.offlineTraining}</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={3}>
          <Card>
            <CardContent>
              <Typography variant="h5" sx={{ color: "orange" }}>
                Participants
              </Typography> {/* Couleur orange */}
              <Typography variant="h2">{trainingStats.participants}</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={3}>
          <Card>
            <CardContent>
              <Typography variant="h5" sx={{ color: "orange" }}>
                Taux de participation
              </Typography> {/* Couleur orange */}
              <Typography variant="h2">{trainingStats.participationRate}</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      
      <Box mt="20px">
        <Typography variant="h5" mb="10px">Liste des Formations</Typography>
        <Grid container spacing={3}>
          {trainingData.map((training) => (
            <Grid item xs={12} md={6} lg={4} key={training.id}>
              <Card>
                <CardContent>
                  <Typography variant="h6">{training.title}</Typography>
                  <Typography>{training.description}</Typography>
                  <Typography>{`Date de début: ${training.startDate}`}</Typography>
                  <Typography>{`Date de fin: ${training.endDate}`}</Typography>
                  <Typography>{`Nombre de jours: ${training.days}`}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Main_Training;
