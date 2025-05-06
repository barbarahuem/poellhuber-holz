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
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <Controller
        name="email"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <TextField {...field} label="Email" type="email" fullWidth required />
        )}
      />
      <div className="flex gap-4">
        <Controller
          name="name"
          control={control}
          defaultValue=""
          render={({ field }: { field: any }) => (
            <TextField {...field} label="Vorname" fullWidth required />
          )}
        />
        <Controller
          name="surname"
          control={control}
          defaultValue=""
          render={({ field }: { field: any }) => (
            <TextField {...field} label="Nachname" fullWidth required />
          )}
        />
      </div>
      <div className="flex gap-4">
        <Controller
          name="plz"
          control={control}
          defaultValue=""
          render={({ field }: { field: any }) => (
            <TextField {...field} label="PLZ" fullWidth required />
          )}
        />
        <Controller
          name="city"
          control={control}
          defaultValue=""
          render={({ field }: { field: any }) => (
            <TextField {...field} label="Ort" fullWidth required />
          )}
        />
      </div>
      <Controller
        name="message"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <TextField
            {...field}
            label="Message"
            multiline
            rows={8}
            fullWidth
            required
          />
        )}
      />

      <Button type="submit" variant="contained" color="primary" style={{ width: "50%", margin: "0 auto" }}>
        Anfragen
      </Button>
      <p style={{ textAlign: "center", fontSize: "0.8rem", color: "grey" }}>
        Nach Erhalt der Anfrage kümmern wir uns um Ihr Anliegen und melden uns mit einem Angebot zurück.
      </p>
    </form>
  );
}
