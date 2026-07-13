export function practiceMessage(name = "crewmate", shipName) {
  const assignment = shipName ? ` You are assigned to ${shipName}.` : "";

  return `Welcome aboard, ${name}.${assignment}`;
}
