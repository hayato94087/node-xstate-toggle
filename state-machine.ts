import { setup } from "xstate";

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
}).createMachine({
  id: "toggle",
  initial: "inactive",
  context: {
    count: 0,
  },
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