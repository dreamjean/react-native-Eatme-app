import { useState } from "react";
import { Keyboard } from "react-native";
import styled from "styled-components/native";
import * as Yup from "yup";

import {
  AuthContainer,
  Button,
  CurrentSwitch,
  TextButton,
} from "../../components";
import {
  // ErrorMessage,
  Form,
  FormField,
  SubmitButton,
} from "../../components/form";
import { theme } from "../../config";
import routes from "../../navigation/routes";

const { fonts, colors } = theme;

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string()
    .required()
    .min(6)
    .max(50)
    .matches(/\w*[a-z]\w*/, "Password must have a small letter")
    .matches(/\d/, "Password must have a number")
    .label("Password"),
});

const LoginScreen = ({ navigation }) => {
  // const [error, setError] = useState();
  const [securePassword, setSeurePassword] = useState(true);
  const [isRemember, setIsRemember] = useState(false);
  const [inputs] = useState([]);

  const focusNextField = (nextField) => inputs[nextField].focus();

  const handleSubmit = async () => {
    Keyboard.dismiss();

    navigation.navigate("Home");
  };

  return (
    <AuthContainer
      otp
      title="Let's Sign You In"
      subTitle="Welcome back, you've been missed"
    >
      <Form
        initialValues={{ email: "", password: "" }}
        onSubmit={handleSubmit}
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
          isRemember={isRemember}
          keyboardAppearance="default"
          keyboardType="email-address"
          leftIcon="mail"
          name="email"
          onSubmitEditing={() => focusNextField("password")}
          placeholder="Email"
          returnKeyLabel="next"
          returnKeyType="next"
          rightIcon="check-circle"
          textContentType="emailAddress"
        />
        <FormField
          allowFontScaling={false}
          autoCapitalize="none"
          autoCompleteType="password"
          autoCorrect={false}
          blurOnSubmit={false}
          errorIcon={securePassword ? "eye-off" : "eye"}
          isRemember={isRemember}
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
        <Wrapper>
          <CurrentSwitch
            checked={isRemember}
            onPress={() => setIsRemember((prev) => !prev)}
          />
          <Button
            title="Forgot Password?"
            textStyle={{ fontFamily: fonts[3], color: colors.orange }}
            padding={6}
            onPress={() => navigation.navigate(routes.FORGOT_PASSWROD)}
          />
        </Wrapper>
        <SubmitButton title="Login" />
        <TextButton
          caption="Don't have an account? "
          title="Sign up."
          onPress={() => navigation.navigate(routes.REGISTER)}
        />
      </Form>
    </AuthContainer>
  );
};

const Wrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;

  ${({ theme: { space } }) => ({
    marginBottom: space.m1,
  })}
`;

export default LoginScreen;
