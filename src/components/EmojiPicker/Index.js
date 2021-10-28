import React from 'react';
import styles from './Style.js';
import { withStyles } from '@material-ui/core';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import { Grid } from '@mui/material';
import ShowEmojis from '../ShowEmojis/Index';
import ShowEmojisModal from '../ShowEmojisModal/Index';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';

function EmojiPicker(props) {
    const { classes } = props
    return (
        <Grid container justify="space-between" className={classes.messageContainer}>
            <FormControl variant="outlined" className={classes.formControlContainer}>
                <InputLabel>Message</InputLabel>
                <OutlinedInput
                    name="template_mensaje" 
                    onChange={(e) => props.handleChangeMensajeWhatsapp(e)} 
                    // onFocus={props.hideEmojis}
                    value={props.mensaje} 
                    multiline
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                onClick={props.showEmojis}
                                edge="end"
                            >
                                <EmojiEmotionsIcon className={classes.emojiSmile}/>
                            </IconButton>
                        </InputAdornment>
                    }
                    label="Message"
                />
            </FormControl>
            {props.show && !props.modal?
                <ShowEmojis handleChangeEmoticon={props.handleChangeEmoticon} modal={props.modal}/>
            : null}
            {props.show && props.modal?
                <ShowEmojisModal handleChangeEmoticon={props.handleChangeEmoticon} showEmojis={props.showEmojis} show={props.show}/>
            : null}
        </Grid>
    );
}
export default withStyles(styles)(EmojiPicker);