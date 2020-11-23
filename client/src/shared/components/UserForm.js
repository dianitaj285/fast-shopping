import styled from "styled-components";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Card } from "./Card";
import { ActionButton } from "./ActionButton";
import { COLORS } from "shared";

const userSchema = Yup.object().shape({
  name: Yup.string("Don't include special characters, only letters").required(
    "You should type your name"
  ),
  id: Yup.number("Don't include special characters, only numbers").required(
    "You shuld type your document"
  ),
  address: Yup.string().required("You should type your address"),
  phone: Yup.number("Don't include special characters, only numbers"),
  email: Yup.string("Type a valid email")
    .email("Invalid email")
    .required("You shoul type your email"),
});

const initialValues = { name: "", id: "", address: "", phone: "", email: "" };

export function UserForm({ onSubmit }) {
  return (
    <Card>
      <Formik
        onSubmit={onSubmit}
        initialValues={initialValues}
        validationSchema={userSchema}
      >
        {(formik) => (
          <Form onReset={formik.handleReset} onSubmit={formik.handleSubmit}>
            <Title>Customer Information</Title>
            <InputContainer>
              <Label>First Name*</Label>
              <Field as={Input} name="name" />
              <ErrorMessage name="name" />
              <Label>ID*</Label>
              <Field as={Input} name="id" />
              <ErrorMessage name="id" />
              <Label>Address*</Label>
              <Field as={Input} name="address" />
              <ErrorMessage name="address" />
              <Label>Phone Number</Label>
              <Field as={Input} name="phone" />
              <ErrorMessage name="phone" />
              <Label>Email*</Label>
              <Field as={Input} name="email" />
              <ErrorMessage name="email" />
            </InputContainer>
            <ActionButton
              text="Place Order"
              disabled={!(formik.isValid && formik.dirty)}
              type="submit"
            ></ActionButton>
          </Form>
        )}
      </Formik>
    </Card>
  );
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

const Label = styled.label`
  font-weight: 300;
`;

const Input = styled.input`
  border: 2px solid ${COLORS.backgroundGrey};
  border-radius: 3px;
  outline: none;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

const Title = styled.p`
  font-size: 1.3rem;
  font-weight: 400;
  margin-bottom: 5px;
`;
