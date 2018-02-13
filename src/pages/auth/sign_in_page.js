import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { inject } from 'mobx-react/index';
import autobind from 'autobind-decorator';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography
} from 'material-ui';
import SignInForm from '../../forms/sign_in_form';
import TextInput from '../../components/forms/text_input';
import routes from '../../utils/routes';

@withRouter
@inject('store')
class SignInPage extends Component {
  componentWillMount() {
    this.form = new SignInForm();
    this.form.submitImpl = this.submitImpl;
  }

  @autobind
  async submitImpl() {
    await this.props.store.sessionStore.signIn(this.form.values());
    this.props.history.push(routes.tournaments());
    this.props.store.uiStore.setAlert('You have successfully signed in.');
  }

  render() {
    return (
      <Grid container justify="center">
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Card>
            <form onSubmit={this.form.onSubmit}>
              <CardContent>
                <Typography variant="headline">Sign in</Typography>
                <TextInput field={this.form.$('email')} autoFocus required />
                <TextInput
                  field={this.form.$('password')}
                  type="password"
                  required
                />
              </CardContent>
              <CardActions>
                <Button color="primary" style={{ flex: 1 }} type="submit">
                  Submit
                </Button>
              </CardActions>
            </form>
          </Card>
        </Grid>
      </Grid>
    );
  }
}

export default SignInPage;
