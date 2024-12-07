'use client'
import React, { useState } from 'react';
import { Field, useFormikContext } from 'formik';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@radix-ui/react-select';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

type Option = {
  value: string | number;
  label: string;
};

type FieldProps = {
  type: string; // Type of the field (e.g., "text", "date", "select", etc.)
  name: string; // Formik field name
  id: string; // Field ID
  placeholder?: string; // Placeholder for text inputs
  options?: Option[]; // Options for dropdown fields
};

const FieldProfile = ({ type, name, id, placeholder, options }: FieldProps) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const { setFieldValue } = useFormikContext(); // Formik hook to set field value

  if (type === 'date') {
    // Render DatePicker for type "date"
    return (
      <div className="relative">
        <DatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          placeholderText={placeholder || 'Select a date'}
          className="mt-1 block w-full px-3 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary text-textprimary"
        />
      </div>
    );
  }

  if (type === 'select' && options) {
    // Render Select Dropdown for type "select"
    return (
      <Select
        onValueChange={(value) => {
          setFieldValue(name, value); // Update Formik's value for the select field
        }}
      >
        <SelectTrigger className="mt-1 block w-full px-3 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary text-textprimary">
          <SelectValue placeholder={placeholder || 'Select an option'} />
        </SelectTrigger>
        <SelectContent className="bg-white border border-gray-200 rounded-md shadow-md p-2">
          {options.map((option) => (
            <SelectItem
              key={option.value}
              value={option.value.toString()}
              className="px-3 py-2 rounded-md hover:bg-gray-100 cursor-pointer"
            >
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    );
  }

  // Default Input Field
  return (
    <Field
      type={type}
      name={name}
      id={id}
      placeholder={placeholder}
      className="mt-1 block w-full px-3 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary text-textprimary"
    />
  );
};

export default FieldProfile;

