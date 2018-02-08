import React, { Component } from 'react';
import { inject, observer } from 'mobx-react/index';
import autobind from 'autobind-decorator';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Modal,
  Typography
} from 'material-ui';
import styles from '../../../styles/modals.scss';
import PlayerForm from '../../../forms/player_form';
import ArrayInput from '../../forms/array_input';

@inject('store')
@observer
class EditResultsModal extends Component {
  componentWillMount() {
    this.form = new PlayerForm();
    this.form.submitImpl = this.submitImpl;
    this.form.set({ player: this.props.player });
    this.field = this.form.$('player.result_values');
  }

  @autobind
  async submitImpl() {
    await this.props.player.update(this.form.values());
    this.props.store.uiStore.setAlert('You have successfully updated results.');
    this.props.onClose();
  }

  render() {
    return (
      <Modal open={this.props.open} onClose={this.props.onClose}>
        <Card className={styles.contents}>
          <form onSubmit={this.form.onSubmit}>
            <CardContent>
              <Typography type="headline">
                Edit results for {this.props.player.competitor_id.name}{' '}
              </Typography>
              <ArrayInput
                field={this.form.$('player.result_values')}
                allowDuplicates={true}
              />
            </CardContent>
            <CardActions>
              <Button color="primary" style={{ flex: 1 }} type="submit">
                Update
              </Button>
            </CardActions>
          </form>
        </Card>
      </Modal>
    );
  }
}

export default EditResultsModal;