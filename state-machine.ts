import { setup } from "xstate";

/* eslint-plugin-xstate-include */

type ToggleEvent = { type: "TOGGLE" };

export const toggleMachine = setup({
  types: {} as {
    events: ToggleEvent;
  },
}).createMachine({
  id: "toggle",
  initial: "inactive",
  states: {
    inactive: {
      on: {
        TOGGLE: 'active',
      },
    },
    active: {
      on: { TOGGLE: 'inactive' },
    },
  },
});