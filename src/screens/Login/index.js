import React from "react";
import {
  Container, Title, Text,
} from "native-base";
import {
  Container,
  Content,
  Text,
  Item,
  Input,
  Button,
  View,
  Icon,
} from "native-base";
import { Field, reduxForm, formValueSelector } from "redux-form";

class LoginForm extends React.PureComponent {
  render() {
    return (
      <Container>
        <Content>
          <Title>
            <Text>
                This is the home screen
            </Text>
          </Title>
        </Content>
      </Container>
    );
  }
}

export default LoginForm;
