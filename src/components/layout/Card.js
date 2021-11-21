import React from 'react';
import { Card, Typography, CardContent, Grid } from '@mui/material';
import CountUp from 'react-countup';
import PropTypes from 'prop-types';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    justifyContent: 'center',
    '&.MuiGrid-root': {
      '& .MuiCard-root': {
        '&.Deaths': {
          borderBottom: '10px solid rgba(75,192,192,1)',
        },
        '&.Infected': {
          borderBottom: '10px solid rgba(75,192,192,0.2)',
        },

        '&.Recovered': {
          borderBottom: '10px solid rgba(75,0,0,0.2)',
        },
      },
    },
  },
}));
const CardItem = ({ data, name, lastUpdate }) => {
  const classes = useStyles();
  return (
    <Grid item container md={3} sm={12} width="100%" className={classes.cardGrid}>
      <Card className={name} sx={{ width: '100%' }}>
        <CardContent>
          <Typography gutterBottom variant="h3">
            {name}
          </Typography>
          <CountUp start={0} end={data.value} duration={5} separator="," className="countUp" />

          <Typography gutterBottom variant="h6">
            {new Date(lastUpdate).toDateString()}
          </Typography>
          <Typography gutterBottom variant="h6">
            {`Number of ${name.toLowerCase()} cases from Covid 19`}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};
CardItem.propTypes = {
  data: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  lastUpdate: PropTypes.string.isRequired,
};

export default CardItem;
