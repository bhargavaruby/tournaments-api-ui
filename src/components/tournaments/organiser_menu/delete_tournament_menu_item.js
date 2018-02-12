import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { inject, observer } from 'mobx-react/index';
import autobind from 'autobind-decorator';
import { ListItemIcon, ListItemText, MenuItem } from 'material-ui';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import routes from '../../../utils/routes';
import styles from './icons.scss';

@withRouter
@inject('store')
@observer
class DeleteTournamentMenuItem extends Component {
  @autobind
  async deleteTournament() {
    await this.props.store.organisedTournamentsStore.deleteTournament(
      this.props.tournament.id
    );
    if (this.props.location.pathname === routes.organisedTournaments()) {
      const organisedTournamentsStore = this.props.store
        .organisedTournamentsStore;
      organisedTournamentsStore.getTournaments(organisedTournamentsStore.page);
    } else {
      this.props.history.push(routes.organisedTournaments());
    }
    this.props.store.uiStore.setAlert(
      'You have successfully deleted a tournament.'
    );
  }

  render() {
    return (
      <MenuItem onClick={this.deleteTournament}>
        <ListItemIcon className={styles.delete}>
          <FontAwesomeIcon
            className={styles['menu-icon']}
            icon="trash-alt"
            fixedWidth
          />
        </ListItemIcon>
        <ListItemText primary="Delete" />
      </MenuItem>
    );
  }
}

DeleteTournamentMenuItem.propTypes = {
  tournament: PropTypes.object.isRequired
};

export default DeleteTournamentMenuItem;
