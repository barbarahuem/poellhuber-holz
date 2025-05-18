"use client";

import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import { useForm, Controller } from "react-hook-form";

type ContactFormData = {
  email: string;
  name: string;
  surname: string;
  plz: string;
  city: string;
  message: string;
};

export default function ContactForm({ hasText = true }: { hasText?: boolean }) {
  const { control, handleSubmit } = useForm<ContactFormData>();
  const [formData, setFormData] = useState<ContactFormData | null>(null);

  const onSubmit = (data: ContactFormData) => {
    setFormData(data);
    console.log(formData); // TODO: change
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      {hasText && (
        <>
          <h3 className="text-left mt-1">Anfragen</h3>
          <p className="font-left mr-34">
            Sie erreichen uns telefonisch unter +43 650 9506002 oder mit
            nachstehendem E-Mail Formular:
          </p>
        </>
      )}

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
          render={({ field }) => (
            <TextField {...field} label="Vorname" fullWidth required />
          )}
        />
        <Controller
          name="surname"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField {...field} label="Nachname" fullWidth required />
          )}
        />
      </div>
      <div className="flex gap-4">
        <Controller
          name="plz"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField {...field} label="PLZ" fullWidth required />
          )}
        />
        <Controller
          name="city"
          control={control}
          defaultValue=""
          render={({ field }) => (
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

      <Button
        type="submit"
        variant="contained"
        color="primary"
        style={{ width: "50%", height: "50px", margin: "0 auto" }}
      >
        Anfragen
      </Button>
      {hasText && (
        <p style={{ textAlign: "center", fontSize: "0.8rem", color: "grey" }}>
          Nach Erhalt der Anfrage kümmern wir uns um Ihr Anliegen und melden uns
          mit einem Angebot zurück.
        </p>
      )}
    </form>
  );
}
