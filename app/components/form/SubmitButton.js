import { useFormikContext } from "formik";

import Button from "../Button";

const SubmitButton = ({ title }) => {
  const { handleSubmit } = useFormikContext();

  return (
    <Button title={title} primary marginVertical={15} onPress={handleSubmit} />
  );
};

export default SubmitButton;
