import React, { useCallback } from "react";
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button'

const Track = (props) => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    maxWidth: 400,
  }));
  
  const addTrack = useCallback(
    (event) => {
      props.onAdd(props.track);
    },
    [props.onAdd, props.track]
  );

  const removeTrack = useCallback(
    (event) => {
      props.onRemove(props.track);
    },
    [props.onRemove, props.track]
  );

  const renderAction = () => {
    if (props.isRemoval) {
      return (
        <Button className="Track-action" onClick={removeTrack} variant="contained" color="primary" style={{maxWidth: '30px', maxHeight: '30px', minWidth: '30px', minHeight: '30px'}}>
          -
        </Button>
      );
    }
    return (
      <Button className="Track-action" onClick={addTrack} variant="contained" color="primary" style={{maxWidth: '30px', maxHeight: '30px', minWidth: '30px', minHeight: '30px'}}>
        +
      </Button>
    );
  };

  return (
    <div className="Track">
      <Box sx={{ flexGrow: 1, overflow: 'hidden', px: 3 }}>
      <Item
        sx={{
          my: 1,
          mx: 0,
          p: 1.5,
        }}
      >
        <Stack sx={{ minWidth: 0 }} spacing={2} direction="row" alignItems="flex-start">
          <Avatar src={props.track.image} />
          <Stack sx={{ minWidth: 0, width: '100%' }} spacing={0} direction="column" alignItems="flex-start">
            <Typography noWrap sx={{width: '75%' }} align={'left'}>{props.track.name}</Typography>
            <Typography noWrap sx={{width: '75%' }} align={'left'}>{props.track.artist}</Typography>
          </Stack>
          <Stack alignItems="flex-end">
            {renderAction()}
          </Stack>
        </Stack>
      </Item>
    </Box>
    </div>
  );
};

export default Track;
