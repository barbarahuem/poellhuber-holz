"use client";

import React, { useState } from "react";
import { TextField, Button, CircularProgress } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

type ContactFormData = {
  email: string;
  name: string;
  surname: string;
  plz: string;
  city: string;
  message: string;
  phone?: string;
  product?: string;
  quantity?: number;
};

type ContactFormProps = {
  hasText?: boolean;
  product?: string;
  quantity?: number;
};

export default function ContactForm({
  hasText = true,
  product,
  quantity,
}: ContactFormProps) {
  const { control, handleSubmit, reset } = useForm<ContactFormData>();
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  const onSubmit = async (data: ContactFormData) => {
    setIsLoading(true);
    setIsFinished(false);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        reset();
        setHasError(false);
        setIsFinished(true);
      } else {
        setHasError(true);
        setIsFinished(false);
      }
    } catch (error) {
      console.error("Fehler beim Senden:", error);
    } finally {
      setIsLoading(false);
      setIsFinished(true);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      {hasText && (
        <>
          <h3 className="text-left mt-1">Anfragen</h3>
          <p className="text-left">
            Sie erreichen uns telefonisch unter +436509506002 oder mit
            nachstehendem E-Mail Formular:
          </p>
        </>
      )}

      <Controller
        name="product"
        control={control}
        defaultValue={product || ""}
        render={({ field }) => <input type="hidden" {...field} />}
      />
      <Controller
        name="quantity"
        control={control}
        defaultValue={quantity || 1}
        render={({ field }) => <input type="hidden" {...field} />}
      />

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
          rules={{
            required: "PLZ ist erforderlich",
            pattern: {
              value: /^[0-9]+$/,
              message: "PLZ darf nur Zahlen enthalten",
            },
          }}
          render={({ field, fieldState: { error } }) => (
            <TextField
              {...field}
              label="PLZ"
              fullWidth
              required
              error={!!error}
              helperText={error ? error.message : ""}
            />
          )}
        />
        <Controller
          name="city"
          control={control}
          defaultValue=""
          rules={{
            required: "Ort ist erforderlich",
            pattern: {
              value: /^[A-Za-zÄÖÜäöüß\s-]+$/,
              message: "Muss ein valider Ort sein",
            },
          }}
          render={({ field, fieldState: { error } }) => (
            <TextField
              {...field}
              label="Ort"
              fullWidth
              required
              error={!!error}
              helperText={error ? error.message : ""}
            />
          )}
        />
      </div>
      <Controller
        name="phone"
        control={control}
        defaultValue=""
        rules={{
          pattern: {
            value: /^[0-9+\s]*$/,
            message: "Nur Zahlen, + und Leerzeichen erlaubt",
          },
        }}
        render={({ field, fieldState: { error } }) => (
          <TextField
            {...field}
            label="Telefonnummer (optional)"
            fullWidth
            error={!!error}
            helperText={error ? error.message : ""}
          />
        )}
      />
      <Controller
        name="message"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <TextField
            {...field}
            label="Nachricht"
            multiline
            rows={8}
            fullWidth
            required
          />
        )}
      />
      {hasError && (
        <p style={{ color: "red" }}>
          Fehler beim Senden der Email. Versuchen Sie es später noch einmal.
        </p>
      )}
      {isFinished && (
        <>
          <MailOutlineIcon style={{ fontSize: "3rem" }} className="m-auto" />
          <p>
            Vielen Dank für Ihre Nachricht! Wir haben soeben eine
            Bestätigungs-E-Mail an Sie versendet und werden Ihre Anfrage so
            rasch wie möglich bearbeiten.
          </p>
        </>
      )}
      <Button
        type="submit"
        variant="contained"
        color="primary"
        style={{ width: "50%", height: "50px", margin: "0 auto" }}
      >
        {isLoading ? (
          <CircularProgress size={24} color="inherit" />
        ) : (
          "Anfragen"
        )}
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
