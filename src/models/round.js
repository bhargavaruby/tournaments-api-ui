import { types, getEnv, flow } from 'mobx-state-tree';
import Player from './player';
import apiRoutes from '../utils/api_routes';

const Round = types
  .model('Round', {
    id: types.identifier(types.string),
    competitors_limit: types.number,
    created_at: types.string,
    tables_count: types.number,
    players: types.maybe(types.array(Player))
  })
  .actions(self => {
    const { apiClient } = getEnv(self);

    return {
      update: flow(function* update(data) {
        const response = yield apiClient.patch(apiRoutes.round(self.id), {
          authenticate: true,
          data: data
        });
        Object.assign(self, response.data.round);
      })
    };
  });

export default Round;
