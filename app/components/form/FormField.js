import { useFormikContext } from "formik";

import TextInput from "../TextInput";
import ErrorMessage from "./ErrorMessage";

const FormField = ({ name, isRemember, onRef, ...rest }) => {
  const { setFieldValue, setFieldTouched, errors, touched, values } =
    useFormikContext();

  return (
    <>
      <TextInput
        error={errors[name]}
        defaultValue={isRemember ? values[name] : ""}
        onBlur={() => setFieldTouched(name)}
        onChangeText={(text) => setFieldValue(name, text)}
        touched={touched[name]}
        value={values[name]}
        ref={onRef}
        {...rest}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

export default FormField;
