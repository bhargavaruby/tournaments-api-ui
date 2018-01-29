import { Form } from 'mobx-react-form';

class SignUpForm extends Form {
  setup() {
    return {
      fields: ['user.email', 'user.password', 'user.password_confirmation'],
      labels: {
        'user.email': 'Email',
        'user.password': 'Password',
        'user.password_confirmation': 'Password confirmation'
      }
    };
  }
}

export default SignUpForm;
