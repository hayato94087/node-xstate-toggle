import { assign, setup } from "xstate";

/* eslint-plugin-xstate-include */

type ToggleEvent = { type: "TOGGLE" };

type ToggleContext = {
  count: number;
 };

export const toggleMachine = setup({
  types: {} as {
    context: ToggleContext;
    events: ToggleEvent;
  },
  actions: {
    incrementCount: assign({
      count: ({ context }) => context.count + 1,
    }),
  },
}).createMachine({
  id: "toggle",
  initial: "inactive",
  context: {
    count: 0,
  },
  states: {
    inactive: {
      on: {
        TOGGLE: {
          actions: 'incrementCount',
          target: 'active',
        },
      },
    },
    active: {
      on: { TOGGLE: 'inactive' },
    },
  },
});