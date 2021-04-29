import React from 'react';
import Style from './Cards.module.css';
import CountUp from 'react-countup';
import { Card,CardContent,Typography,Grid } from '@material-ui/core';

import { GiHastyGrave } from 'react-icons/gi';
import { MdLocalHospital } from 'react-icons/md';
import { AiFillLike } from 'react-icons/ai';

import { useSelector } from 'react-redux';
import { selectDaily } from '../covidSlice';

const Cards:React.FC = () => {
    const daily = useSelector(selectDaily);
    return (
        <div className={Style.container}>
            <Grid container spacing={1} justify="center">
                <Grid item xs={12} md={3} component={Card} className={Style.infected}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            <MdLocalHospital />
                            Infected persons
                        </Typography>
                        <Typography variant="h5">
                           <CountUp 
                            start={0}
                            end={daily[daily.length - 1].Confirmed}
                            duration={1.5}
                            separator=","
                           />
                        </Typography>
                    </CardContent>
                </Grid>
                <Grid item xs={12} md={3} component={Card} className={Style.recovered}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            <MdLocalHospital />
                            Recovered persons
                        </Typography>
                        <Typography variant="h5">
                           <CountUp 
                            start={0}
                            end={daily[daily.length - 1].Recovered}
                            duration={1.5}
                            separator=","
                           />
                        </Typography>
                    </CardContent>
                </Grid>
                <Grid item xs={12} md={3} component={Card} className={Style.deaths}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            <MdLocalHospital />
                            Dead persons
                        </Typography>
                        <Typography variant="h5">
                           <CountUp 
                            start={0}
                            end={daily[daily.length - 1].Deaths}
                            duration={1.5}
                            separator=","
                           />
                        </Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards;
