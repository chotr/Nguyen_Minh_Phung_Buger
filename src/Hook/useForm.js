import React, { useState } from "react";

// custom hook: giúp làm viêc với form
// return về biến hocawcj data
// const {} = useform({user:"", email:""})
export default function useForm(initialValues) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  const handleChange = (evt) => {
    const { value, name } = evt.target;

    setValues((values) => ({
      ...values,
      [name]: value,
    }));
  };

  const handleBlur = (evt) => {
      const { value, name } = evt.target;

      if (!value) {
          setErrors((errors) => ({
              [name]: "this field is required",
          }))
      }
  }
  return { values,errors, handleChange, handleBlur };
}
