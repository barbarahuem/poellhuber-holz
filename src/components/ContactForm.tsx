"use client";

import React from "react";
import { TextField, Button } from "@mui/material";
import { useForm, Controller } from "react-hook-form";

import { useState } from "react";

export default function ContactForm() {
  const { control, handleSubmit } = useForm();
  const [formData, setFormData] = useState(null);

  const onSubmit = (data: any) => {
    setFormData(data);
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="name"
        control={control}
        defaultValue=""
        render={({ field }: { field: any }) => (
          <TextField {...field} label="Name" fullWidth required />
        )}
      />
      <Controller
        name="email"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <TextField {...field} label="Email" type="email" fullWidth required />
        )}
      />

      <Controller
        name="message"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <TextField
            {...field}
            label="Message"
            multiline
            rows={4}
            fullWidth
            required
          />
        )}
      />

      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </form>
  );
}
