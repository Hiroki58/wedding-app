import { Button, Container, Stack, TextField } from '@mui/material'
import React from 'react'
import { useForm } from 'react-hook-form'
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
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export default function Question() {
  const validationSchema = Yup.object().shape({
    email: Yup.string().required("email Address is required"),
    firstname: Yup.string().required("First name is required"),
    lastname: Yup.string().required("Last name is required"),
    allergies: Yup.string().required("Please write 'No' if you don't have allergies."),
    plusone: Yup.string().required("Check is required"),
  });
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(validationSchema)
  });
  const [result, setResult] = useState(false);
  const [firstName, setFirstName] = useState("");

  const onSubmit = (data, e) => {
    console.log(data, e);
    setFirstName(data.firstName);
    setResult(true);
  }
  const onError = (errors, e) => console.log(errors, e)

  return (
    <Container maxWidth="sm" sx={{ backgroundColor: "white" }}>
      {result ? <AlertDialog title={"Thank you " + firstName + " for answering our questions."} content={<Button color='secondary' href="/">
        Back to main page
      </Button>} /> : null}
      <AlertDialog title="Thank you for visiting our website." content="Please answer the following questions." />
      <Stack spacing={3}>
        <TextField
          required
          name='email'
          label="email address"
          type="email"
          error={!!errors.email}
          helperText={errors.email ? errors.email.message : ""}

          {...register('email')}
        />
        <TextField
          required
          name="firstname"
          error={!!errors.firstname}
          label="First name"
          helperText={errors.firstname ? errors.firstname.message : ""}
          {...register('firstName')}
        />
        <TextField
          required
          name='lastname'
          label="Last name"
          error={!!errors.lastname}
          helperText={errors.lastname ? errors.lastname.message : ""}
          {...register('lastName')}
        />
        <TextField
          name='allergies'
          required
          label="Do you have allergies?"
          error={!!errors.allergies}
          helperText={errors.allergies ? errors.allergies.message : ""}

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
        <FormControl>
          <FormLabel id="radio-buttons-group-label">Plus One</FormLabel>
          <RadioGroup
            row
            aria-labelledby="radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel value="yes" control={<Radio {...register("plusOne")} />} label={<span style={{ color: "grey" }}>
              Yes
            </span>} />
            <FormControlLabel value="no" control={<Radio {...register("plusOne")} />} label={<span style={{ color: "grey" }}>
              No
            </span>} />
          </RadioGroup>
        </FormControl>
        <FormControl>
          <FormLabel id="radio-buttons-group-label">Will you join the brunch next morning?</FormLabel>
          <RadioGroup
            row
            aria-labelledby="radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel value="yes" control={<Radio {...register("brunch")} />} label={<span style={{ color: "grey" }}>
              Yes
            </span>} />
            <FormControlLabel value="no" control={<Radio {...register("brunch")} />} label={<span style={{ color: "grey" }}>
              No
            </span>} />
          </RadioGroup>
        </FormControl>
        <Button
          color="primary"
          variant="outlined"
          size="small"
          type="submit"
          onClick={handleSubmit(onSubmit, onError)}
          sx={{ backgroundColor: 'white' }}
        >
          submit
        </Button>
      </Stack>
    </Container>
  );
}