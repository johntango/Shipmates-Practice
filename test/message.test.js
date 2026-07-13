import assert from "node:assert/strict";
import test from "node:test";

import { practiceMessage } from "../src/message.js";

test("returns a message for the default crewmate", () => {
  assert.equal(practiceMessage(), "Welcome aboard, crewmate.");
});

test("includes a supplied crewmate name", () => {
  assert.equal(practiceMessage("Scout"), "Welcome aboard, Scout.");
});
