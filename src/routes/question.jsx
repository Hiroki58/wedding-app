import { Button, Container, NativeSelect, Stack, TextField } from '@mui/material'
import React from 'react'
import { useForm } from 'react-hook-form'
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { pink } from '@mui/material/colors';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

export default function Question() {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data, e) => console.log(data, e)
    const onError = (errors, e) => console.log(errors, e)
  
    return (
      <Container maxWidth="sm" sx={{ pt: 5 }} className='backdrop-blur-xl'>
      <Stack spacing={3}>
        <TextField
          required
          label="email address"
          type="email"
          {...register('email')}
        />
        <TextField
          required
          label="First name"
          {...register('firstName')}
        />
        <TextField
          required
          label="Last name"
          {...register('lastName')}
        />
        <FormControlLabel 
          control={<Checkbox {...register("plusOne")} />} 
          sx={{
            color: pink[800],
            '&.Mui-checked': {
              color: pink[600],
            },
          }}
          label="Plus One" 
          labelPlacement="end"
        />
       <FormControl fullWidth>
            <InputLabel id="select-label">How many kids will you bring?</InputLabel>
            <Select
              defaultValue={0}
              labelid="select-label"
              id="select"
              label="Select"
              {...register("kidsNum")}
            >
              <MenuItem value={0}>0</MenuItem>
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
              <MenuItem value={4}>4</MenuItem>
              <MenuItem value={5}>5</MenuItem>
              <MenuItem value={6}>6</MenuItem>
              <MenuItem value={7}>7</MenuItem>
              <MenuItem value={8}>8</MenuItem>
              <MenuItem value={9}>10</MenuItem>
              <MenuItem value={999}>The whole school</MenuItem>
            </Select>
        </FormControl>
        <Button
          color="primary"
          variant="contained"
          size="small"
          onClick={handleSubmit(onSubmit, onError)}
        >
          submit
        </Button>
      </Stack>
    </Container>
  );
}