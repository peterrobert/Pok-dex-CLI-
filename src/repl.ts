import { createInterface } from "node:readline";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt:"Pokedex >",
});
 
 export const cleanInput = (input: string): string[] => {
   const trimmedInput = input.trim().toLowerCase()
  return trimmedInput.split(/\s+/)
}

export const startREPL = ():void => {
   rl.prompt();
   rl.on("line", (input: string): void => {
     if(input === "") return rl.prompt();
     const commands = cleanInput(input);
     console.log(`Your command was: ${commands[0]}`)
     rl.prompt()
   })
}