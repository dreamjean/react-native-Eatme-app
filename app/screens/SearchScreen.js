import React from "react";
import styled from "styled-components";
import * as Yup from "yup";

import { Form, FormSearchField } from "../components";

let validationSchema = Yup.object().shape({
  searchQuery: Yup.string(),
});

const SearchScreen = () => {
  return (
    <Container>
      <Form
        initialValues={{ searchQuery: "" }}
        validationSchema={validationSchema}
        onSubmit={(values) => console.log(values)}
      >
        <FormSearchField name="searchQuery" />
      </Form>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;

export default SearchScreen;
