"use client";

import React, { useState, useEffect } from "react";
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
  deliveryType?: string;
  price?: string;
};

type ContactFormProps = {
  hasText?: boolean;
  product?: string;
  quantity?: number;
  deliveryType?: string;
  price?: string;
};

export default function ContactForm({
  hasText = true,
  product,
  quantity,
  deliveryType,
  price,
}: ContactFormProps) {
  const { control, handleSubmit, setValue } = useForm<ContactFormData>({
    defaultValues: {
      email: "",
      name: "",
      surname: "",
      plz: "",
      city: "",
      phone: "",
      message: "",
      product: product || "",
      quantity: quantity || 1,
      deliveryType: deliveryType || "",
      price: price || "",
    },
  });

  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    setValue("product", product || "");
    setValue("quantity", quantity || 1);
    setValue("deliveryType", deliveryType || "");
    setValue("price", price || "");
  }, [product, quantity, price, deliveryType, setValue]);

  const onFocus = () => {
    if (isFinished) {
      window.location.reload();
    }
  };

  const onSubmit = async (data: ContactFormData) => {
    setIsLoading(true);
    setHasError(false);
    setIsFinished(false);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setHasError(false);
        setIsFinished(true);
      } else {
        setHasError(true);
      }
    } catch (error) {
      setHasError(true);
      console.error("Fehler beim Senden:", error);
    } finally {
      setIsLoading(false);
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
        render={({ field }) => <input type="hidden" {...field} />}
      />
      <Controller
        name="quantity"
        control={control}
        render={({ field }) => <input type="hidden" {...field} />}
      />
      <Controller
        name="deliveryType"
        control={control}
        render={({ field }) => <input type="hidden" {...field} />}
      />
      <Controller
        name="price"
        control={control}
        render={({ field }) => <input type="hidden" {...field} />}
      />

      <Controller
        name="email"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <TextField
            {...field}
            label="Email"
            type="email"
            fullWidth
            required
            onFocus={onFocus}
          />
        )}
      />
      <div className="flex flex-col sm:flex-row gap-4">
        <Controller
          name="name"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <TextField
              {...field}
              label="Vorname"
              fullWidth
              required
              onFocus={onFocus}
            />
          )}
        />
        <Controller
          name="surname"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <TextField
              {...field}
              label="Nachname"
              fullWidth
              required
              onFocus={onFocus}
            />
          )}
        />
      </div>
      <div className="flex flex-col sm:flex-row gap-4">
        <Controller
          name="plz"
          control={control}
          rules={{
            required: "PLZ ist erforderlich",
            pattern: { value: /^\d{4}$/, message: "PLZ muss 4 Ziffern haben" },
          }}
          render={({ field, fieldState: { error } }) => (
            <TextField
              {...field}
              label="PLZ"
              fullWidth
              required
              error={!!error}
              helperText={error?.message}
              onFocus={onFocus}
            />
          )}
        />
        <Controller
          name="city"
          control={control}
          rules={{ required: "Ort ist erforderlich" }}
          render={({ field, fieldState: { error } }) => (
            <TextField
              {...field}
              label="Ort"
              fullWidth
              required
              error={!!error}
              helperText={error?.message}
              onFocus={onFocus}
            />
          )}
        />
      </div>
      <Controller
        name="phone"
        control={control}
        rules={{ required: "Telefonnummer ist erforderlich" }}
        render={({ field, fieldState: { error } }) => (
          <TextField
            {...field}
            label="Telefonnummer"
            fullWidth
            required
            error={!!error}
            helperText={error?.message}
            onFocus={onFocus}
          />
        )}
      />
      <Controller
        name="message"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            label="Nachricht"
            multiline
            rows={8}
            fullWidth
            onFocus={onFocus}
          />
        )}
      />

      {hasError && (
        <p className="text-red-600">
          Fehler beim Senden der Email. Versuchen Sie es später noch einmal oder
          kontaktieren Sie uns telefonisch.
        </p>
      )}
      {isFinished && (
        <div className="text-center">
          <MailOutlineIcon sx={{ fontSize: "3rem", margin: "auto" }} />
          <p>
            Vielen Dank für Ihre Nachricht! Wir haben soeben eine
            Bestätigungs-E-Mail an Sie versendet und werden Ihre Anfrage so
            rasch wie möglich bearbeiten.
          </p>
        </div>
      )}

      <Button
        type="submit"
        variant="contained"
        color="primary"
        disabled={isLoading}
        sx={{ width: { xs: "100%", sm: "50%" }, height: "50px", mx: "auto" }}
      >
        {isLoading ? (
          <CircularProgress size={24} color="inherit" />
        ) : (
          "Anfragen"
        )}
      </Button>

      {hasText && (
        <p className="text-center text-sm text-gray-500">
          Nach Erhalt der Anfrage kümmern wir uns um Ihr Anliegen und melden uns
          mit einem Angebot zurück.
        </p>
      )}
    </form>
  );
}
