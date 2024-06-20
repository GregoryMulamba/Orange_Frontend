// scenes/training/TrainingDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography, Button } from '@mui/material';
import Header from '../../components/Header';
import { trainingData } from '../../data/mockData'; // Import mock training data

const TrainingDetails = () => {
  const { id } = useParams();
  const training = trainingData.find((t) => t.id === id);

  if (!training) {
    return <Typography variant="h5">Formation non trouvée</Typography>;
  }

  return (
    <Box m="20px">
      <Header title={training.title} subtitle="Détails de la formation" />
      <Box>
        <Typography variant="h6">Description</Typography>
        <Typography variant="body1">{training.description}</Typography>
        <Typography variant="h6">Date de début</Typography>
        <Typography variant="body1">{training.startDate}</Typography>
        <Typography variant="h6">Date de fin</Typography>
        <Typography variant="body1">{training.endDate}</Typography>
        <Typography variant="h6">Nombre de jours</Typography>
        <Typography variant="body1">{training.days}</Typography>
        <Button variant="contained" color="primary" sx={{ mt: 2 }}>S'inscrire</Button>
      </Box>
    </Box>
  );
};

export default TrainingDetails;
