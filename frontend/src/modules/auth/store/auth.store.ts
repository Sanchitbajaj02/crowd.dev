import { defineStore } from 'pinia';
import state from './auth.state';
import actions from './auth.actions';

export const useAuthStore = defineStore(
  'auth',
  {
    state,
    actions,
  },
);