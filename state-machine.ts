import { assign, setup } from "xstate";

/* eslint-plugin-xstate-include */

type ToggleEvent = { type: "TOGGLE" };

type ToggleContext = {
  count: number;
 };

 type ToggleInput = {
  initialCount?: number;
 };

export const toggleMachine = setup({
  types: {} as {
    context: ToggleContext;
    events: ToggleEvent;
   input:ToggleInput;
  },
  actions: {
    incrementCount: assign({
      count: ({ context }) => context.count + 1,
    }),
  },
}).createMachine({
  id: "toggle",
  initial: "inactive",
  context: ({ input }) => ({
    count: input.initialCount ?? 0,
  }),
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