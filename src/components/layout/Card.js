import React from 'react';
import { Card, Typography, CardContent, CardMedia, Grid } from '@mui/material';
import CountUp from 'react-countup';
import PropTypes from 'prop-types';
import { makeStyles } from '@mui/styles';
import Images from 'components/assests';

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    justifyContent: 'center',
    '&.MuiGrid-root': {
      '& .MuiCard-root': {
        '&.Deaths': {
          borderBottom: '10px solid rgba(255,0,0,0.5)',
        },
        '&.Infected': {
          borderBottom: '10px solid rgba(75,192,192,0.2)',
        },

        '&.Recovered': {
          borderBottom: '10px solid  rgba(0,255,0,1)',
        },
      },
    },
  },
  icon: {
    '&.MuiCardMedia-img': {
      width: '3rem',
      height: '3rem',
      color: 'red',
    },
  },
}));

const CardItem = ({ data, name, lastUpdate }) => {
  const { recovered, death, infected } = Images; // importing images
  const classes = useStyles();
  return (
    <Grid item container md={3.5} sm={12} width="100%" className={classes.cardGrid}>
      <Card className={name} sx={{ width: '100%' }}>
        <CardContent>
          <Grid container alignItems="center" gap={2} flexWrap="nowrap">
            <Typography component="div" variant="h3">
              {name}
            </Typography>
            <CardMedia
              component="img"
              image={name === 'Deaths' ? death : name === 'Infected' ? infected : recovered}
              className={classes.icon}
            />
          </Grid>
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
