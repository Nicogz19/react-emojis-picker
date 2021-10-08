import React from 'react';
import styles from './Style.js';
import { withStyles } from '@material-ui/core';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import { Grid } from '@mui/material';
import EmojisModal from '../EmojisModal/Index';

import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';

function EmojiPicker(props) {
    const { classes } = props
    return (
        <Grid container justify="space-between" className={classes.messageContainer}>
            <FormControl sx={{ ml: '5%', width: '90%' }} variant="outlined" className={classes.formControlContainer}>
                <InputLabel>Message</InputLabel>
                <OutlinedInput
                    name="template_mensaje" 
                    onBlur={(e) => props.handleChangeMensajeWhatsapp(e)} 
                    defaultValue={props.mensaje} 
                    key={props.mensaje} 
                    // fullWidth
                    multiline
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                onClick={props.showEmojis}
                                // onMouseDown={props.showEmojis}
                                edge="end"
                            >
                                <EmojiEmotionsIcon className={classes.emojiSmile}/>
                            </IconButton>
                        </InputAdornment>
                    }
                    label="Message"
                />
            </FormControl>
            {props.show ?
                <EmojisModal handleChangeEmoticon={props.handleChangeEmoticon}/>
            : null}
        </Grid>
    );
}
export default withStyles(styles)(EmojiPicker);