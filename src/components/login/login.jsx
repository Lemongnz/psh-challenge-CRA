import {
  Container,
  CustomButton,
  CustomInput,
  Form,
  FormContainer,
  Icon,
} from "./styles";
import { FiUser } from "react-icons/fi/index";

export default function Login() {
  return (
    <Container>
      <h1>Login</h1>
      <FormContainer>
        <Icon>
          <FiUser />
        </Icon>
        <Form>
          <CustomInput placeholder="Email"></CustomInput>
          <CustomInput placeholder="Password"></CustomInput>
          <CustomButton>Login</CustomButton>
        </Form>
      </FormContainer>
    </Container>
  );
}
