"use client";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

type QuantitySelectorProps = {
  quantity: number;
  setQuantity: (value: number) => void;
  quantityOptions: number[];
};

export default function QuantitySelector({
  quantity,
  setQuantity,
  quantityOptions,
}: QuantitySelectorProps) {
  function handleChange(e: SelectChangeEvent) {
    const value = Number(e.target.value);
    setQuantity(value);
  }

  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">Menge</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={String(quantity)}
        label="Menge"
        onChange={handleChange}
      >
        {quantityOptions.map((option) => (
          <MenuItem key={option} value={option}>
            {String(option).replace(".", ",")}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
