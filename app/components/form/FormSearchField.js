import { useFormikContext } from "formik";
import React from "react";

import SearchInput from "../SearchInput";
import ErrorMessage from "./ErrorMessage";

const FormSearchField = ({ name, ...rest }) => {
  const {
    setFieldValue,
    setFieldTouched,
    handleSubmit,
    errors,
    touched,
    values,
  } = useFormikContext();

  return (
    <>
      <SearchInput
        error={errors[name]}
        onBlur={() => setFieldTouched(name)}
        onChangeText={(text) => setFieldValue(name, text)}
        onEndEditing={handleSubmit}
        touched={touched[name]}
        value={values[name]}
        {...rest}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

export default FormSearchField;
