import assert from "node:assert/strict";
import test from "node:test";

import { crewSummary, practiceMessage } from "../src/message.js";

test("returns a message for the default crewmate", () => {
  assert.equal(practiceMessage(), "Welcome aboard, crewmate.");
});

test("includes a supplied crewmate name", () => {
  assert.equal(practiceMessage("Scout"), "Welcome aboard, Scout.");
});

test("optionally includes a ship assignment", () => {
  assert.equal(
    practiceMessage("Scout", "Endeavour"),
    "Welcome aboard, Scout. You are assigned to Endeavour.",
  );
});

test("returns an empty crew summary", () => {
  assert.equal(crewSummary([]), "No crewmates assigned.");
});

test("returns a crew summary with assigned names", () => {
  assert.equal(crewSummary(["Alice", "Bob"]), "Crewmates: Alice, Bob.");
});
