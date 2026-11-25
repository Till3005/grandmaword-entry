const answer = "Finally.";

const render = (line: string) => line + "\n";
const print = (text: string) => process.stdout.write(text);

print(render(answer));
