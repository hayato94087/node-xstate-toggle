import { assign, setup } from "xstate";

/* eslint-plugin-xstate-include */

type ToggleEvent = { type: "TOGGLE" };

type ToggleContext = {
  count: number;
  maxCount: number;
};

type ToggleInput = {
  initialCount?: number;
  maxCount: number;
};

export const toggleMachine = setup({
  types: {} as {
    context: ToggleContext;
    events: ToggleEvent;
    input: ToggleInput;
  },
  actions: {
    incrementCount: assign({
      count: ({ context }) => context.count + 1,
    }),
  },
  guards: {
    isLessThanMaxCount: ({ context }) => context.count < context.maxCount,
  },
}).createMachine({
  /** @xstate-layout N4IgpgJg5mDOIC5QBcD2UoBswDoCWAdgIYDGyeAbmAMQAqA8gOKMAyAogNoAMAuoqAAdUsPOVQF+IAB6IAjAFYAHDlkB2WYtUAWLbIBsq1QCYjigDQgAnnIDMslTflajW+QE5ZuvfPkBfXxZoGNg4pORUdEysnLySQiJiEkjSiEZcqjg2hu6eWd5cChbWCIr2NiYeivKqenqyaTb+ASAEqBBwkkFYYHHConjikjIIALR6RYhj-oHo3fjEZJQ9yfH9g8nDzhMlGVzeboqmhnpZh9MgXSFhS70JA0mgwzY2XDgHWja1bm5KXlrbijcOHk+0OmhqpyMTV8QA */
  id: "toggle",
  initial: "inactive",
  context: ({ input }) => ({
    count: input.initialCount ?? 0,
    maxCount: input.maxCount,
  }),
  states: {
    inactive: {
      on: {
        TOGGLE: {
          guard: "isLessThanMaxCount",
          actions: "incrementCount",
          target: "active",
        },
      },
    },
    active: {
      on: { TOGGLE: "inactive" },
    },
  },
});
