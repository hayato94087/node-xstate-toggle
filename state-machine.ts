import { setup } from "xstate";

type ToggleEvent = { type: "toggle" };

export const toggleMachine = setup({
  types: {} as {
    events: ToggleEvent;
  },
}).createMachine({
  id: "toggle",
  initial: "Inactive",
  states: {
    Inactive: {
      on: {
        toggle: "Active",
      },
    },
    Active: {
      on: { toggle: "Inactive" },
    },
  },
});