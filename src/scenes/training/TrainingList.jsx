// scenes/training/TrainingList.js
import React from 'react';
import { Box, Card, CardContent, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import { trainingData } from '../../data/mockData'; // Import mock training data

const TrainingList = () => {
  return (
    <Box m="20px">
      <Header title="LISTE DES FORMATIONS" subtitle="Toutes les formations disponibles" />
      <Box display="flex" flexDirection="column" gap="20px">
        {trainingData.map((training) => (
          <Card key={training.id}>
            <CardContent>
              <Typography variant="h5" component={Link} to={`/training/${training.id}`} sx={{ textDecoration: 'none', color: 'primary.main' }}>
                {training.title}
              </Typography>
              <Typography variant="body2">{training.description}</Typography>
              <Typography variant="body2">Date de début: {training.startDate}</Typography>
              <Typography variant="body2">Date de fin: {training.endDate}</Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default TrainingList;
