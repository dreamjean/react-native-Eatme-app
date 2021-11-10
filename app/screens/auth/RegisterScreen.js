import { useState } from "react";
import * as Yup from "yup";

import { AuthContainer, TextButton } from "../../components";
import {
  // ErrorMessage,
  Form,
  FormField,
  SubmitButton,
} from "../../components/form";
import routes from "../../navigation/routes";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email("Invalid Email").label("Email"),
  username: Yup.string().required().label("Username"),
  password: Yup.string()
    .required()
    .min(5)
    .max(50)
    .matches(/\w*[a-z]\w*/, "Password must have a small letter")
    .matches(/\d/, "Password must have a number")
    .label("Password"),
});

const RegisterScreen = ({ navigation }) => {
  const [securePassword, setSeurePassword] = useState(true);
  const [inputs] = useState([]);

  const focusNextField = (nextField) => inputs[nextField].focus();

  return (
    <AuthContainer
      title="Letting started"
      subTitle="Create an account continue!"
    >
      <Form
        initialValues={{ email: "", username: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        {/* <ErrorMessage error={error} visible={error} /> */}
        <FormField
          allowFontScaling={false}
          autoCapitalize="none"
          autoCompleteType="email"
          autoCorrect={false}
          blurOnSubmit={false}
          clearButtonMode="while-editing"
          errorIcon="x-circle"
          keyboardAppearance="default"
          keyboardType="email-address"
          leftIcon="mail"
          name="email"
          onSubmitEditing={() => focusNextField("username")}
          placeholder="Email"
          returnKeyLabel="next"
          returnKeyType="next"
          rightIcon="check-circle"
          textContentType="emailAddress"
        />
        <FormField
          allowFontScaling={false}
          autoCapitalize="none"
          autoCompleteType="username"
          autoCorrect={false}
          blurOnSubmit={false}
          errorIcon="x-circle"
          keyboardAppearance="default"
          keyboardType="default"
          leftIcon="user"
          name="username"
          onSubmitEditing={() => focusNextField("password")}
          onRef={(input) => (inputs["username"] = input)}
          placeholder="Name"
          returnKeyLabel="next"
          returnKeyType="next"
          rightIcon="check-circle"
          textContentType="username"
        />
        <FormField
          allowFontScaling={false}
          autoCapitalize="none"
          autoCompleteType="password"
          autoCorrect={false}
          blurOnSubmit={false}
          errorIcon="x-circle"
          keyboardAppearance="default"
          keyboardType="default"
          leftIcon="lock"
          maxLength={50}
          name="password"
          onPress={() => setSeurePassword((prev) => !prev)}
          onRef={(input) => (inputs["password"] = input)}
          placeholder="Password"
          returnKeyLabel="go"
          returnKeyType="go"
          rightIcon={securePassword ? "eye-off" : "eye"}
          secureTextEntry={securePassword}
          textContentType="password"
        />
        <SubmitButton title="Sign up" />
        <TextButton
          caption="Already have an account? "
          title="Sign in"
          onPress={() => navigation.navigate(routes.LOGIN)}
        />
      </Form>
    </AuthContainer>
  );
};

export default RegisterScreen;
