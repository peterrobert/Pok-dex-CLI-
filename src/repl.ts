import { createInterface } from "node:readline";
import { getCommands } from "./registry.js";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt:"Pokedex >",
});
 
 export const cleanInput = (input: string): string[] => {
   const trimmedInput = input.trim().toLowerCase()
  return trimmedInput.split(/\s+/)
}

const callCommands = (input: string): void => {
  const commands = getCommands();
  const args = cleanInput(input);
  const commandName = args[0];

  if (commands[commandName]) {
    commands[commandName].callback(commands);
  } else {
    console.log(`Unknown command: ${commandName}`);
  }
}

export const startREPL = ():void => {
   rl.prompt();
   rl.on("line", (input: string): void => {
     if(input === "") return rl.prompt();
     callCommands(input);
     rl.prompt()
   })
}