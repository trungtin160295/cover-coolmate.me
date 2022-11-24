import React from 'react';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';

export default function Tets() {
    const {
      register,
      formState: { errors },
      handleSubmit
    } = useForm({
      criteriaMode: "all"
    });
    const onSubmit = (data) => console.log(data);
  
    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>ErrorMessage</h1>
        <input
          {...register("sđt", {
            required: "This input is required.",
            pattern: {
              value: /\d+/,
              message: "This input is number only."
            },
            maxLength: {
              value: 5,
              message: "This input must exceed 10 characters"
            },
            minLength: {
              value: 5,
              message: "This input must exceed 10 characters"
            }
          })}
        />
        <ErrorMessage
          errors={errors}
          name="sđt"
          render={({ messages }) => {
            console.log("messages", messages);
            return messages
              ? Object.entries(messages).map(([type, message]) => (
                  <p key={type}>{message}</p>
                ))
              : null;
          }}
        />
  
      

        <input
          {...register("111", {
            required: "This input is required.",
            pattern: {
              value: /\d+/,
              message: "This input is number only."
            },
            maxLength: {
              value: 5,
              message: "This input must exceed 10 characters"
            },
            minLength: {
              value: 5,
              message: "This input must exceed 10 characters"
            }
          })}
        />
        <ErrorMessage
          errors={errors}
          name="111"
          render={({ messages }) => {
            console.log("messages", messages);
            return messages
              ? Object.entries(messages).map(([type, message]) => (
                  <p key={type}>{message}</p>
                ))
              : null;
          }}
        />
  
        <input type="submit" />
      </form>
    );
  }