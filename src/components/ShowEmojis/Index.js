import React from 'react';
import styles from './Style.js';
import { withStyles } from '@material-ui/core';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
}

function EachEmojis(arrayEmojis, classes, handleChangeEmoticon){
  const values = arrayEmojis.map((value, index) => {
    return <button className={classes.emoji} key={index} value={value} onClick={handleChangeEmoticon}>{value}</button>
  })
  return values
}

function ShowEmojis(props) {
    const { classes } = props
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const arrayFaceEmojis = ['😀', '😃', '😄', '😁', '😆', '😅', '🤣', '😂', '🙂', '🙃', '😉', '😊', '😇', '🥰', '😍', '🤩', '😘', '😗', '😚', '😙', '😋', '😛', '😜', '🤪', '😝', '🤑', '🤗', '🤭', '🤫', '🤔', '🤐', '🤨', '😐', '😑', '😶', '😶', '😏', '😒', '🙄', '😬', '😮', '🤥', '😌', '😔', '😪', '🤤', '😴', '😷', '🤒', '🤕', '🤢', '🤮', '🤧', '🥵', '🥶', '🥴', '😵', '😵', '🤯', '🤠', '🥳', '😎', '🤓', '🧐', '😕', '😟', '🙁', '☹️', '😮', '😯', '😲', '😳', '🥺', '😦', '😧', '😨', '😰', '😥', '😢', '😭', '😱', '😖', '😣', '😞', '😓', '😩', '😫', '🥱', '😤', '😡', '😠', '🤬'];

    const arrayAnimalsEmojis = ['🐵','🐒','🦍','🦧','🐶','🐕','🦮','🐕‍🦺','🐩','🐺','🦊','🦝','🐱','🐈','🐈‍','🦁','🐯','🐅','🐆','🐴','🐎','🦄','🦓','🦌','🐮','🐂','🐃','🐄','🐷','🐖','🐗','🐽','🐏','🐑','🐐','🐪','🐫','🦙','🦒','🐘','🦏','🦛','🐭','🐁','🐀','🐹','🐰','🐇','🐿️','🦔','🦇','🐻','🐻','🐨','🐼','🦥','🦦','🦨','🦘','🦡','🐾','🦃','🐔','🐓','🐣','🐤','🐥','🐦','🐧','🕊️','🦅','🦆','🦢','🦉','🦩','🦚','🦜','🐸','🐊','🐢','🦎','🐍','🐲','🐉','🦕','🦖','🐳','🐋','🐬','🐟','🐠','🐡','🦈','🐙','🐚','🐌','🦋','🐛','🐜','🐝','🐞','🦗','🕷️','🕸️','🦂','🦟','🦠','💐','🌸','💮','🏵️','🌹','🥀','🌺','🌻','🌼','🌷','🌱','🌲','🌳','🌴','🌵','🌾','🌿','☘️','🍀','🍁','🍂','🍃'];

    const arraySportEmojis = ['⚽','🏀', '🏈', '⚾', '🥎', '🎾', '🏐', '🏉', '🎱', '🥏', '🏓', '🏸', '🥅', '🏒', '🏑', '🏏', '🥍', '🥌', '⛳', '🏹', '🎣', '🤿', '🥊', '🥋', '⛸', '🎿', '🛷', '⛷', '🏂', '🏋️‍♀️', '🏋', '🏋️‍♂️', '🤺', '🤼‍♀️', '🤼', '🤼‍♂️', '🤸‍♀️', '🤸', '🤸‍♂️', '⛹️‍♀️', '⛹', '⛹️‍♂️', '🤾‍♀️', '🤾', '🤾‍♂️', '🧗‍♀️', '🧗', '🧗‍♂️', '🏌️‍♀️', '🏌', '🏌️‍♂️', '🧘‍♀️', '🧘', '🧘‍♂️', '🧖‍♀️', '🧖', '🧖‍♂️', '🏄‍♀️', '🏄', '🏄‍♂️', '🏊‍♀️', '🏊', '🏊‍♂️', '🤽‍♀️', '🤽', '🤽‍♂️', '🚣‍♀️', '🚣', '🚣‍♂️', '🏇', '🚴‍♀️', '🚴', '🚴‍♂️', '🚵‍♀️', '🚵', '🚵‍♂️', '🎽', '🎖', '🏅', '🥇', '🥈', '🥉', '🏆', '🎲', '🧩', '♟', '🎯', '🎳', '🪀'];

    const arrayFootEmojis = ['🍏', '🍎', '🍐', '🍊', '🍋', '🍌', '🍉', '🍇', '🍓', '🍈', '🍒', '🍑', '🥭', '🍍', '🥥', '🥝', '🍅', '🥑', '🍆', '🌶', '🥒', '🥬', '🥦', '🧄', '🧅', '🌽', '🥕', '🥗', '🥔', '🍠', '🥜', '🍯', '🍞', '🥐', '🥖', '🥨', '🥯', '🥞', '🧇', '🧀', '🍗', '🍖', '🥩', '🍤', '🥚', '🍳', '🥓', '🍔', '🍟', '🌭', '🍕', '🍝', '🥪', '🌮', '🌯', '🥙', '🧆', '🍜', '🥘', '🍲', '🥫', '🧂', '🧈', '🍥', '🍣', '🍱', '🍛', '🍙', '🍚', '🍘', '🥟', '🍢', '🍡', '🍧', '🍨', '🍦', '🍰', '🎂', '🧁', '🥧', '🍮', '🍭', '🍬', '🍫', '🍿', '🍩', '🍪', '🥠', '🥮', '☕', '🍵', '🥣', '🍼', '🥤', '🧃', '🧉', '🥛', '🍺', '🍻', '🍷', '🥂', '🥃', '🍸', '🍹', '🍾', '🍶', '🧊' , '🥄', '🍴', '🍽', '🥢', '🥡'];

    const arrayTravelEmojis = ['🚗', '🚙', '🚕', '🛺', '🚌', '🚎', '🏎' ,'🚓', '🚑', '🚒', '🚐', '🚚', '🚛', '🚜', '🏍', '🛵', '🚲', '🦼', '🦽', '🛴', '🛹', '🚨', '🚔', '🚍', '🚘', '🚖', '🚡', '🚠', '🚟', '🚃', '🚋', '🚝', '🚄', '🚅', '🚈', '🚞', '🚂', '🚆', '🚇', '🚊', '🚉', '🚁', '🛩', '✈', '🛫', '🛬', '🪂', '💺', '🛰', '🚀', '🛸', '🛶', '⛵', '🛥', '🚤', '⛴', '🛳', '🚢', '⚓', '⛽', '🚧', '🚏', '🚦', '🚥', '🛑', '🎡', '🎢', '🎠', '🏗', '🌁', '🗼', '🏭', '⛲', '🎑', '⛰', '🏔', '🗻', '🌋', '🗾', '🏕', '⛺', '🏞', '🛣', '🛤', '🌅', '🌄', '🏜', '🏖', '🏝', '🌇', '🌆', '🏙', '🌃', '🌉', '🌌', '🌠', '🎇', '🎆', '🏘', '🏰', '🏯', '🏟', '🗽', '🏠', '🏡', '🏚', '🏢', '🏬', '🏣', '🏤', '🏥', '🏦', '🏨', '🏪', '🏫', '🏩', '💒', '🏛', '⛪', '🕌', '🛕', '🕍', '🕋', '⛩'];

    return (
        <Box className={classes.boxContainer}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} centered={props.modal}>
                    <Tab label="😀" />
                    <Tab label="🐒" />
                    <Tab label="⚽" />
                    <Tab label="🍔" />
                    <Tab label="🚗" />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>{EachEmojis(arrayFaceEmojis, classes, props.handleChangeEmoticon)}</TabPanel>
            <TabPanel value={value} index={1}>{EachEmojis(arrayAnimalsEmojis, classes, props.handleChangeEmoticon)}</TabPanel>
            <TabPanel value={value} index={2}>{EachEmojis(arraySportEmojis, classes, props.handleChangeEmoticon)}</TabPanel>
            <TabPanel value={value} index={3}>{EachEmojis(arrayFootEmojis, classes, props.handleChangeEmoticon)}</TabPanel>
            <TabPanel value={value} index={4}>{EachEmojis(arrayTravelEmojis, classes, props.handleChangeEmoticon)}</TabPanel>
        </Box>
    );
}
export default withStyles(styles)(ShowEmojis);