import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import IconButton from "@material-ui/core/es/IconButton/IconButton";
import AssistantIcon from '@material-ui/icons/Assistant'
import Grid from "@material-ui/core/es/Grid/Grid";
import ClickAwayListener from "@material-ui/core/es/ClickAwayListener/ClickAwayListener";
import Tooltip from "@material-ui/core/es/Tooltip/Tooltip";
import Button from "@material-ui/core/es/Button/Button";
import DialogTitle from "@material-ui/core/es/DialogTitle/DialogTitle";
import DialogContent from "@material-ui/core/es/DialogContent/DialogContent";
import DialogContentText from "@material-ui/core/es/DialogContentText/DialogContentText";
import DialogActions from "@material-ui/core/es/DialogActions/DialogActions";
import Dialog from "@material-ui/core/es/Dialog/Dialog";
import withMobileDialog from "@material-ui/core/es/withMobileDialog/withMobileDialog";
import Hidden from "@material-ui/core/es/Hidden/Hidden";
import generalData from "../../testData/generalData";

const styles = theme => ({
    root: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
    },
    arrowPopper: {
        '&[x-placement*="bottom"] $arrowArrow': {
            top: 0,
            left: 0,
            marginTop: '-0.9em',
            width: '3em',
            height: '1em',
            '&::before': {
                borderWidth: '0 1em 1em 1em',
                borderColor: `transparent transparent ${theme.palette.grey[700]} transparent`,
            },
        },
        '&[x-placement*="top"] $arrowArrow': {
            bottom: 0,
            left: 0,
            marginBottom: '-0.9em',
            width: '3em',
            height: '1em',
            '&::before': {
                borderWidth: '1em 1em 0 1em',
                borderColor: `${theme.palette.grey[700]} transparent transparent transparent`,
            },
        },
        '&[x-placement*="right"] $arrowArrow': {
            left: 0,
            marginLeft: '-0.9em',
            height: '3em',
            width: '1em',
            '&::before': {
                borderWidth: '1em 1em 1em 0',
                borderColor: `transparent ${theme.palette.grey[700]} transparent transparent`,
            },
        },
        '&[x-placement*="left"] $arrowArrow': {
            right: 0,
            marginRight: '-0.9em',
            height: '3em',
            width: '1em',
            '&::before': {
                borderWidth: '1em 0 1em 1em',
                borderColor: `transparent transparent transparent ${theme.palette.grey[700]}`,
            },
        },
    },
    arrowArrow: {
        position: 'absolute',
        fontSize: 7,
        width: '3em',
        height: '3em',
        '&::before': {
            content: '""',
            margin: 'auto',
            display: 'block',
            width: 0,
            height: 0,
            borderStyle: 'solid',
        },
    },
});



class AccountCommentsAssistant extends React.Component {
    state = {
        arrowRef: null,
        open: false,
        message: "",
    };

    render() {
        const {classes, generalData, mediaData, regression} = this.props;

        return (
            <div>
                {regression.string}
            </div>
        );
    }
}

AccountCommentsAssistant.propTypes = {
    classes: PropTypes.object.isRequired,
    fullScreen: PropTypes.bool.isRequired,
};

export default (withStyles(styles)(AccountCommentsAssistant));