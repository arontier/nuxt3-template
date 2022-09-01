import { defineStore } from 'pinia';

interface Counter {
  count: number;
  type: string;
}

export const useCounter = defineStore('counter', {
  state: (): Counter => ({
    count: 0,
    type: 'increase',
  }),
  actions: {
    increment() {
      this.count++;
    },
  },
});
