import React, { Component } from 'react';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  TextField,
  Typography
} from 'material-ui';

class SignInPage extends Component {
  render() {
    return (
      <Grid container justify="center">
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Card>
            <CardContent>
              <Typography type="headline">Sign In</Typography>
              <TextField id="email" label="Email" margin="normal" fullWidth />
              <TextField
                id="password"
                label="Password"
                margin="normal"
                fullWidth
              />
            </CardContent>
            <CardActions>
              <Button color="primary" style={{ flex: 1 }}>
                Submit
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    );
  }
}

export default SignInPage;