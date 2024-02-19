import * as React from 'react';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import SlideshowRoundedIcon from '@mui/icons-material/SlideshowRounded';
import CodeRoundedIcon from '@mui/icons-material/CodeRounded';
import DataObjectRoundedIcon from '@mui/icons-material/DataObjectRounded';
import TitleIcon from '@mui/icons-material/Title';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';

const actions = [
  { icon: <InsertPhotoOutlinedIcon />, name: 'Add an image' },
  { icon: <SlideshowRoundedIcon />, name: 'Add a video' },
  { icon: <CodeRoundedIcon />, name: 'Add an embed' },
  { icon: <DataObjectRoundedIcon />, name: 'Add a new code block' },
  { icon: <TitleIcon />, name: 'Add a Title' },
  { icon: <DescriptionOutlinedIcon />, name: 'Add Description' },
];

export default function ControlledOpenSpeedDial({setItemType}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const newInput = (type) => {
    setOpen(false)
    if(type==='Add an image'){
        setItemType('img')
    }
    if(type==='Add a video'){
        setItemType('video')
    }
    if(type==='Add an embed'){
        setItemType('embed')
    }
    if(type==='Add a new code block'){
        setItemType('code')
    }
    if(type==='Add a Title'){
        setItemType('title')
    }
    if(type==='Add Description'){
        setItemType('description')
    }
    
  }

  return (
    <Box sx={{ width: 320, transform: 'translateZ(0px)', flexGrow: 1 }}>
      <SpeedDial
        ariaLabel="SpeedDial controlled open example"
        sx={{ position: 'absolute', top: 16, left: 16 }}
        icon={<SpeedDialIcon />}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
        direction="right" 
      >
        {actions.map((action) => (
        <SpeedDialAction
        key={action.name}
        icon={action.icon}
        tooltipTitle={action.name}
        onClick={() => newInput(action.name)}
      />
        ))}
      </SpeedDial>
    </Box>
  );
}
