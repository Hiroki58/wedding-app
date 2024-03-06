import { Button, Container, Stack, TextField } from '@mui/material'
import React from 'react'
import { useForm } from 'react-hook-form'
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import AlertDialog from '../assets/dialog';
import { useState } from "react";

export default function Question() {
  const { register, handleSubmit } = useForm();
  const [result, setResult] = useState(false);
  const [firstName, setFirstName] = useState("");

  const onSubmit = (data, e) => {
    console.log(data, e);
    setFirstName(data.firstName);
    setResult(true);
  }
  const onError = (errors, e) => console.log(errors, e)

  return (
    <Container maxWidth="sm" sx={{ pt: 5, backgroundColor: "#FFEEFF" }}>
      {result ? <AlertDialog title={"Thank you " + firstName + " for answering our questions."} content={<Button color='secondary' href="/">
        Back to main page
      </Button>} /> : null}
      <AlertDialog title="Thank you for visiting our website." content="Please answer the following questions." />
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
        <TextField
          required
          label="Do you have allergies?"
          {...register('allergies')}
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
        {/* <FormControlLabel
          control={<Checkbox {...register("plusOne")} />}
          sx={{
            color: pink[800],
            '&.Mui-checked': {
              color: pink[600],
            },
          }}
          label="Plus One"
          labelPlacement="end"
        /> */}
        <FormControl>
          <FormLabel id="radio-buttons-group-label">Plus One</FormLabel>
          <RadioGroup
            row
            aria-labelledby="radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel value="yes" control={<Radio {...register("plusOne")} />} label="yes" />
            <FormControlLabel value="no" control={<Radio {...register("plusOne")} />} label="no" />
          </RadioGroup>
        </FormControl>
        <FormControl>
          <FormLabel id="radio-buttons-group-label">Will you join the brunch next morning?</FormLabel>
          <RadioGroup
            row
            aria-labelledby="radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel value="yes" control={<Radio {...register("brunch")} />} label="yes" />
            <FormControlLabel value="no" control={<Radio {...register("brunch")} />} label="no" />
          </RadioGroup>
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