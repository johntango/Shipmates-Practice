export function practiceMessage(name = "crewmate", shipName) {
  const assignment = shipName ? ` You are assigned to ${shipName}.` : "";

  return `Welcome aboard, ${name}.${assignment}`;
}

export function crewSummary(names) {
  if (names.length === 0) {
    return "No crewmates assigned.";
  }

  return `Crewmates: ${names.join(", ")}.`;
}
