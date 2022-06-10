import styled from "styled-components";

export const Container = styled.div`
  min-height: calc(100vh - 60px);
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const FormContainer = styled.div`
  width: 290px;
  border-radius: 8px;
  margin-top: 50px;
`;

export const Icon = styled.div`
  font-size: 80px;
  color: #fff;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
export const CustomInput = styled.input`
  margin: 20px 0;
  height: 30px;
  background-color: transparent;
  border: none;
  border-bottom: 2px solid #e5e5e5;
  padding: 0 20px;
  outline: none;

  ::placeholder {
    color: #e5e5e5;
    font-size: large;
  }
`;
export const CustomButton = styled.button`
  color: black;
  background-color: #fcc976;
  border: none;
  height: 35px;
  border-radius: 5px;
  font-size: large;
  font-weight: 700;
  cursor: pointer;
`;
