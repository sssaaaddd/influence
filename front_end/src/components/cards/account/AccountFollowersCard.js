import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import AssistantIcon from '@material-ui/icons/Assistant'
import IncreaseIcon from '@material-ui/icons/TrendingUp'
import DecreaseIcon from '@material-ui/icons/TrendingDown'
import FollowersIcon from '@material-ui/icons/Contacts'
import BasicChart from '../../diagrams/BasicChart'
import green from "@material-ui/core/es/colors/green";
import config from "../../../config/config";
import addRegression from "../../diagrams/RegressionTools";
import Assistant from "../../assistant/Assistant";

const styles = theme => ({
    card: {
        // maxWidth: 400,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    actions: {
        display: 'flex',
    },
    expand: {
        transform: 'rotate(0deg)',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
        marginLeft: 'auto',
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatarRed: {
        backgroundColor: red[500],
    },
    avatarGreen: {
        backgroundColor: green[500],
    },
    increaseGreen: {
        color: "green",
    },
    decreaseRed: {
        color: "red",
    },
});

class AccountFollowersCard extends React.Component {
    render() {
        const {classes, theme, generalData} = this.props;
        const regression = addRegression(generalData, "followers_count", config.prediction);
        let growth = generalData[generalData.length - config.prediction - 1].followers_count - generalData[generalData.length - config.prediction - 2].followers_count;
        let avatar;
        let growthIndicator;
        if (growth > 0) {
            avatar = (
                <Avatar className={classes.avatarGreen}>
                    <FollowersIcon/>
                </Avatar>
            );
            growthIndicator = (
                <IncreaseIcon className={classes.increaseGreen}/>
            );
        }
        else {
            avatar = (
                <Avatar className={classes.avatarRed}>
                    <FollowersIcon/>
                </Avatar>
            );
            growthIndicator = (
                <DecreaseIcon className={classes.decreaseRed}/>
            );
        }

        return (
            <div>
                <Card className={classes.card}>
                    <CardHeader
                        avatar={avatar}
                        action={
                            <Assistant generalData={generalData} regression={regression} assistantComponent={null}/>
                        }
                        title={generalData[generalData.length - config.prediction - 1].followers_count + " followers"}
                        subheader={
                            <div>
                                {growthIndicator}{growth}
                            </div>
                        }
                    />
                    <BasicChart data={generalData} graph={"followers_count"} color={theme.colorPrimary}/>
                </Card>
            </div>
        );
    }
}

AccountFollowersCard.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
    generalData: PropTypes.object.isRequired,
};

export default withStyles(styles, {withTheme: true})(AccountFollowersCard);
