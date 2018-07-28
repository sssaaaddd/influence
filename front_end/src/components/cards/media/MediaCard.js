import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import TinyLineChart from "../../diagrams/chartTest";
import Grid from "@material-ui/core/es/Grid/Grid";
import Paper from "@material-ui/core/es/Paper/Paper";
import CardActions from "@material-ui/core/es/CardActions/CardActions";
import Button from "@material-ui/core/es/Button/Button";
import ThumbsUpIcon from "@material-ui/icons/ThumbUp"
import MediaLikesCard from './MediaLikesCard'
import MediaImpressionsCard from "./MediaImpressionsCard";
import MediaCommentsCard from "./MediaCommentsCard";
import MediaExpansionPanel from "./MediaExpansionPanel";

const styles = {
    card: {
        // minWidth: 275,
        display: "flex"
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    cover: {
        width: "10%",
    },
    title: {
        marginBottom: 16,
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    grid: {
        // paddingTop: 20,
    }
};

function MediaControlCard(props) {
    const {classes, theme, media} = props;

    return (
        <div>
            <Typography className={classes.title} color="textSecondary">
                {"Uploaded on " + media.data[media.data.length - 1].date.toDateString()}
            </Typography>
            <Card className={classes.card}>
                <CardMedia
                    className={classes.cover}
                    image={media.imageURL}
                    title="Live from space album cover"
                />
                <Grid container spacing={1} className={classes.grid}>
                    <Grid item md={4} xs={12}>
                        <MediaImpressionsCard media={media}/>
                    </Grid>
                    <Grid item md={4} xs={12}>
                        <MediaLikesCard media={media}/>
                    </Grid>
                    <Grid item md={4} xs={12}>
                        <MediaCommentsCard media={media}/>
                    </Grid>
                    <Grid item md={12}>
                        <MediaExpansionPanel media={media}/>
                    </Grid>
                </Grid>
            </Card>
        </div>
    );
}


MediaControlCard.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
    media: PropTypes.object.isRequired,
};

export default withStyles(styles, {withTheme: true})(MediaControlCard);