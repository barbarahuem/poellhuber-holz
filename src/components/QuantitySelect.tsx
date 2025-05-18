"use client";
import { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

export default function QuantitySelector() {
  const [quantity, setQuantity] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setQuantity(event.target.value as string);
  };
  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">Menge</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={quantity}
        label="Menge"
        onChange={handleChange}
      >
        <MenuItem value={10}>1</MenuItem>
        <MenuItem value={20}>2</MenuItem>
        <MenuItem value={30}>3</MenuItem>
      </Select>
    </FormControl>
  );
}
