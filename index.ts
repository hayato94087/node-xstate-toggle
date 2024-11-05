import { createActor, SnapshotFrom } from "xstate";
import { toggleMachine } from "./state-machine";

const actor = createActor(toggleMachine, {
  input: {
    initialCount: 0,
    maxCount: 4,
  },
 });

actor.subscribe({
  next: (snapshot: SnapshotFrom<typeof actor>) => {
    const now = new Date();
    const japanTime = now.toLocaleString("ja-JP", {
      timeZone: "Asia/Tokyo",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    });
    console.log(
      `ステート:${snapshot.value}, \tカウンター:${snapshot.context.count}, \t現在時間:${japanTime}`
    );
  },
  error: (err: unknown) => {
    console.error(err);
  },
});

actor.start();

// actor.send({ type: "TOGGLE" });
// actor.send({ type: "TOGGLE" });
// actor.send({ type: "TOGGLE" });
// actor.send({ type: "TOGGLE" });
// actor.send({ type: "TOGGLE" });
// actor.send({ type: "TOGGLE" });
// actor.send({ type: "TOGGLE" });
// actor.send({ type: "TOGGLE" });
// actor.send({ type: "TOGGLE" });
// actor.send({ type: "TOGGLE" });
// actor.send({ type: "TOGGLE" });
// actor.send({ type: "RESET" });

// await new Promise((resolve) => setTimeout(resolve, 2000));

// actor.send({ type: "TOGGLE" });

actor.send({ type: "TOGGLE" });
await new Promise((resolve) => setTimeout(resolve, 4000));

actor.stop();