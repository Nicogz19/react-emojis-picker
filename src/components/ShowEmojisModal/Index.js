import React from 'react';
import styles from './Style.js';
import { withStyles } from '@material-ui/core';
import Dialog from '@mui/material/Dialog';
import ShowEmojis from '../ShowEmojis/Index';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

function ShowEmojisModal(props) {
    const { classes } = props

    return (
        <Dialog className={classes.dialog} onClose={props.showEmojis} open={props.show}>
          <AppBar sx={{ position: 'relative' }}>
            <Toolbar>
              <IconButton
                edge="end"
                color="inherit"
                onClick={props.showEmojis}
                aria-label="close"
              >
                <CloseIcon />
              </IconButton>

            </Toolbar>
          </AppBar>
          <ShowEmojis handleChangeEmoticon={props.handleChangeEmoticon}/>
        </Dialog>
    );
}
export default withStyles(styles)(ShowEmojisModal);