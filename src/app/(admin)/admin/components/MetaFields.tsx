"use client";
import React from "react";
import { TextField, Box, Typography } from "@mui/material";

type MetaType = "title" | "description" | "keywords";

interface MetaFieldProps {
  label: string;
  name: string;
  type: MetaType;
  value: string;
  onChange: (val: string) => void;
  className?: string; // ✅ control width/layout
}

// Validation logic per type
const getValidation = (type: MetaType, length: number) => {
  if (type === "description") {
    if (length === 0) return { msg: "", color: "text.secondary" };
    if (length < 120) return { msg: "Too short", color: "error.main" };
    if (length >= 120 && length <= 150) return { msg: "Perfect length", color: "success.main" };
    if (length > 150 && length <= 160) return { msg: "Slightly long", color: "warning.main" };
    return { msg: "Too long", color: "error.main" };
  }

  if (type === "title") {
    if (length === 0) return { msg: "", color: "text.secondary" };
    if (length < 30) return { msg: "Too short", color: "error.main" };
    if (length >= 30 && length <= 60) return { msg: "Perfect length", color: "success.main" };
    if (length > 60 && length <= 70) return { msg: "Slightly long", color: "warning.main" };
    return { msg: "Too long", color: "error.main" };
  }

  if (type === "keywords") {
    if (length === 0) return { msg: "", color: "text.secondary" };
    if (length < 5) return { msg: "Add more keywords", color: "error.main" };
    if (length >= 5 && length <= 10) return { msg: "Good keyword count", color: "success.main" };
    if (length > 10 && length <= 15) return { msg: "Quite a lot", color: "warning.main" };
    return { msg: "Too many keywords", color: "error.main" };
  }

  return { msg: "", color: "text.secondary" };
};

const MetaField: React.FC<MetaFieldProps> = ({ label, name, type, value, onChange, className }) => {
  const { msg, color } = getValidation(type, value.length);

  return (
    <Box className={className} mb={2}>
      <TextField
        fullWidth
        multiline={type === "description"}
        minRows={type === "description" ? 3 : 1}
        label={label}
        name={name}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        variant="outlined"
      />

      <Box display="flex" justifyContent="space-between" mt={0.5}>
        <Typography variant="caption" sx={{ color }}>
          {msg}
        </Typography>
        <Typography variant="caption" color="text.secondary">
          {value.length} characters
        </Typography>
      </Box>
    </Box>
  );
};

export default MetaField;
