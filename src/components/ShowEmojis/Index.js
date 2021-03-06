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

    const arrayFaceEmojis = ['๐', '๐', '๐', '๐', '๐', '๐', '๐คฃ', '๐', '๐', '๐', '๐', '๐', '๐', '๐ฅฐ', '๐', '๐คฉ', '๐', '๐', '๐', '๐', '๐', '๐', '๐', '๐คช', '๐', '๐ค', '๐ค', '๐คญ', '๐คซ', '๐ค', '๐ค', '๐คจ', '๐', '๐', '๐ถ', '๐ถ', '๐', '๐', '๐', '๐ฌ', '๐ฎ', '๐คฅ', '๐', '๐', '๐ช', '๐คค', '๐ด', '๐ท', '๐ค', '๐ค', '๐คข', '๐คฎ', '๐คง', '๐ฅต', '๐ฅถ', '๐ฅด', '๐ต', '๐ต', '๐คฏ', '๐ค ', '๐ฅณ', '๐', '๐ค', '๐ง', '๐', '๐', '๐', 'โน๏ธ', '๐ฎ', '๐ฏ', '๐ฒ', '๐ณ', '๐ฅบ', '๐ฆ', '๐ง', '๐จ', '๐ฐ', '๐ฅ', '๐ข', '๐ญ', '๐ฑ', '๐', '๐ฃ', '๐', '๐', '๐ฉ', '๐ซ', '๐ฅฑ', '๐ค', '๐ก', '๐ ', '๐คฌ'];

    const arrayAnimalsEmojis = ['๐ต','๐','๐ฆ','๐ฆง','๐ถ','๐','๐ฆฎ','๐โ๐ฆบ','๐ฉ','๐บ','๐ฆ','๐ฆ','๐ฑ','๐','๐โ','๐ฆ','๐ฏ','๐','๐','๐ด','๐','๐ฆ','๐ฆ','๐ฆ','๐ฎ','๐','๐','๐','๐ท','๐','๐','๐ฝ','๐','๐','๐','๐ช','๐ซ','๐ฆ','๐ฆ','๐','๐ฆ','๐ฆ','๐ญ','๐','๐','๐น','๐ฐ','๐','๐ฟ๏ธ','๐ฆ','๐ฆ','๐ป','๐ป','๐จ','๐ผ','๐ฆฅ','๐ฆฆ','๐ฆจ','๐ฆ','๐ฆก','๐พ','๐ฆ','๐','๐','๐ฃ','๐ค','๐ฅ','๐ฆ','๐ง','๐๏ธ','๐ฆ','๐ฆ','๐ฆข','๐ฆ','๐ฆฉ','๐ฆ','๐ฆ','๐ธ','๐','๐ข','๐ฆ','๐','๐ฒ','๐','๐ฆ','๐ฆ','๐ณ','๐','๐ฌ','๐','๐ ','๐ก','๐ฆ','๐','๐','๐','๐ฆ','๐','๐','๐','๐','๐ฆ','๐ท๏ธ','๐ธ๏ธ','๐ฆ','๐ฆ','๐ฆ ','๐','๐ธ','๐ฎ','๐ต๏ธ','๐น','๐ฅ','๐บ','๐ป','๐ผ','๐ท','๐ฑ','๐ฒ','๐ณ','๐ด','๐ต','๐พ','๐ฟ','โ๏ธ','๐','๐','๐','๐'];

    const arraySportEmojis = ['โฝ','๐', '๐', 'โพ', '๐ฅ', '๐พ', '๐', '๐', '๐ฑ', '๐ฅ', '๐', '๐ธ', '๐ฅ', '๐', '๐', '๐', '๐ฅ', '๐ฅ', 'โณ', '๐น', '๐ฃ', '๐คฟ', '๐ฅ', '๐ฅ', 'โธ', '๐ฟ', '๐ท', 'โท', '๐', '๐๏ธโโ๏ธ', '๐', '๐๏ธโโ๏ธ', '๐คบ', '๐คผโโ๏ธ', '๐คผ', '๐คผโโ๏ธ', '๐คธโโ๏ธ', '๐คธ', '๐คธโโ๏ธ', 'โน๏ธโโ๏ธ', 'โน', 'โน๏ธโโ๏ธ', '๐คพโโ๏ธ', '๐คพ', '๐คพโโ๏ธ', '๐งโโ๏ธ', '๐ง', '๐งโโ๏ธ', '๐๏ธโโ๏ธ', '๐', '๐๏ธโโ๏ธ', '๐งโโ๏ธ', '๐ง', '๐งโโ๏ธ', '๐งโโ๏ธ', '๐ง', '๐งโโ๏ธ', '๐โโ๏ธ', '๐', '๐โโ๏ธ', '๐โโ๏ธ', '๐', '๐โโ๏ธ', '๐คฝโโ๏ธ', '๐คฝ', '๐คฝโโ๏ธ', '๐ฃโโ๏ธ', '๐ฃ', '๐ฃโโ๏ธ', '๐', '๐ดโโ๏ธ', '๐ด', '๐ดโโ๏ธ', '๐ตโโ๏ธ', '๐ต', '๐ตโโ๏ธ', '๐ฝ', '๐', '๐', '๐ฅ', '๐ฅ', '๐ฅ', '๐', '๐ฒ', '๐งฉ', 'โ', '๐ฏ', '๐ณ', '๐ช'];

    const arrayFootEmojis = ['๐', '๐', '๐', '๐', '๐', '๐', '๐', '๐', '๐', '๐', '๐', '๐', '๐ฅญ', '๐', '๐ฅฅ', '๐ฅ', '๐', '๐ฅ', '๐', '๐ถ', '๐ฅ', '๐ฅฌ', '๐ฅฆ', '๐ง', '๐ง', '๐ฝ', '๐ฅ', '๐ฅ', '๐ฅ', '๐ ', '๐ฅ', '๐ฏ', '๐', '๐ฅ', '๐ฅ', '๐ฅจ', '๐ฅฏ', '๐ฅ', '๐ง', '๐ง', '๐', '๐', '๐ฅฉ', '๐ค', '๐ฅ', '๐ณ', '๐ฅ', '๐', '๐', '๐ญ', '๐', '๐', '๐ฅช', '๐ฎ', '๐ฏ', '๐ฅ', '๐ง', '๐', '๐ฅ', '๐ฒ', '๐ฅซ', '๐ง', '๐ง', '๐ฅ', '๐ฃ', '๐ฑ', '๐', '๐', '๐', '๐', '๐ฅ', '๐ข', '๐ก', '๐ง', '๐จ', '๐ฆ', '๐ฐ', '๐', '๐ง', '๐ฅง', '๐ฎ', '๐ญ', '๐ฌ', '๐ซ', '๐ฟ', '๐ฉ', '๐ช', '๐ฅ ', '๐ฅฎ', 'โ', '๐ต', '๐ฅฃ', '๐ผ', '๐ฅค', '๐ง', '๐ง', '๐ฅ', '๐บ', '๐ป', '๐ท', '๐ฅ', '๐ฅ', '๐ธ', '๐น', '๐พ', '๐ถ', '๐ง' , '๐ฅ', '๐ด', '๐ฝ', '๐ฅข', '๐ฅก'];

    const arrayTravelEmojis = ['๐', '๐', '๐', '๐บ', '๐', '๐', '๐' ,'๐', '๐', '๐', '๐', '๐', '๐', '๐', '๐', '๐ต', '๐ฒ', '๐ฆผ', '๐ฆฝ', '๐ด', '๐น', '๐จ', '๐', '๐', '๐', '๐', '๐ก', '๐ ', '๐', '๐', '๐', '๐', '๐', '๐', '๐', '๐', '๐', '๐', '๐', '๐', '๐', '๐', '๐ฉ', 'โ', '๐ซ', '๐ฌ', '๐ช', '๐บ', '๐ฐ', '๐', '๐ธ', '๐ถ', 'โต', '๐ฅ', '๐ค', 'โด', '๐ณ', '๐ข', 'โ', 'โฝ', '๐ง', '๐', '๐ฆ', '๐ฅ', '๐', '๐ก', '๐ข', '๐ ', '๐', '๐', '๐ผ', '๐ญ', 'โฒ', '๐', 'โฐ', '๐', '๐ป', '๐', '๐พ', '๐', 'โบ', '๐', '๐ฃ', '๐ค', '๐', '๐', '๐', '๐', '๐', '๐', '๐', '๐', '๐', '๐', '๐', '๐ ', '๐', '๐', '๐', '๐ฐ', '๐ฏ', '๐', '๐ฝ', '๐ ', '๐ก', '๐', '๐ข', '๐ฌ', '๐ฃ', '๐ค', '๐ฅ', '๐ฆ', '๐จ', '๐ช', '๐ซ', '๐ฉ', '๐', '๐', 'โช', '๐', '๐', '๐', '๐', 'โฉ'];

    return (
        <Box className={classes.boxContainer}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} centered={props.modal}>
                    <Tab label="๐" />
                    <Tab label="๐" />
                    <Tab label="โฝ" />
                    <Tab label="๐" />
                    <Tab label="๐" />
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