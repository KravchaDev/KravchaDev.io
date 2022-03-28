/**
 _  __                    _
 | |/ /                   | |
 | ' / _ __ __ ___   _____| |__   __ _
 |  < | '__/ _` \ \ / / __| '_ \ / _` |
 | . \| | | (_| |\ V / (__| | | | (_| |
 |_|\_\_|  \__,_| \_/ \___|_| |_|\__,_|
 **/

const BLACKLISTED_KEY_CODES = [38];
const COMMANDS = {
  help:
    'Supported commands:<br> <span class="code">about</span>, <span class="code">experience</span>, <span class="code">education</span>, <span class="code">skills</span>, <span class="code">contact</span>, <span class="code">clear</span>',
  about:
    "Danila Kravchenko -- <span class=\"code\">CS student</span>",
  skills:
    '<span class="code">Languages:</span> C/C++/Rust, Ruby, Golang<br><span class="code">Technologies:</span> Git, SQL, Docker, Vim<br><span class="code">Frameworks:</span> Ruby on Rails<br><span class="code">OS:</span> CentOS, Ubuntu, Astra<br><span class="code">Disciplines:</span> Cybersecurity, System Engineering, Networks, Coding',
  education:
    ">Irkutsk Aviation Technical School <br>>Web-Development",
  resume: "<a href='./resume.pdf' class='success link'>resume.pdf</a>",
  experience: "6 months --> Irkutsk Aviation Technical Shcool --> SysAdmin.",
  contact:
    "You can contact me on any of following links:<br><a href='https://www.t.me/kravchadev' class='success link'>Telegram</a>",
  clear:
    "<br> <br> <br> <br> <br> <br> <br> <br> <br> <br>"
};
let userInput, terminalOutput;

const app = () => {
  userInput = document.getElementById("userInput");
  terminalOutput = document.getElementById("terminalOutput");
  document.getElementById("dummyKeyboard").focus();
  console.log("Application loaded");
};

const execute = function executeCommand(input) {
  let output;
  input = input.toLowerCase();
  if (input.length === 0) {
    return;
  }
  output = `<div class="terminal-line"><span class="success">➜</span> <span class="directory">~</span> ${input}</div>`;
  if (!COMMANDS.hasOwnProperty(input)) {
    output += `<div class="terminal-line">no such command: ${input}</div>`;
    console.log("Oops! no such command");
  } else {
    output += COMMANDS[input];
  }

  terminalOutput.innerHTML = `${
    terminalOutput.innerHTML
  }<div class="terminal-line">${output}</div>`;
  terminalOutput.scrollTop = terminalOutput.scrollHeight;
};

const key = function keyEvent(e) {
  const input = userInput.innerHTML;

  if (BLACKLISTED_KEY_CODES.includes(e.keyCode)) {
    return;
  }

  if (e.key === "Enter") {
    execute(input);
    userInput.innerHTML = "";
    return;
  }

  userInput.innerHTML = input + e.key;
};

const backspace = function backSpaceKeyEvent(e) {
  if (e.keyCode !== 8 && e.keyCode !== 46) {
    return;
  }
  userInput.innerHTML = userInput.innerHTML.slice(
    0,
    userInput.innerHTML.length - 1
  );
};

document.addEventListener("keydown", backspace);
document.addEventListener("keypress", key);
document.addEventListener("DOMContentLoaded", app);


/**
     _  __                    _
    | |/ /                   | |
    | ' / _ __ __ ___   _____| |__   __ _
    |  < | '__/ _` \ \ / / __| '_ \ / _` |
    | . \| | | (_| |\ V / (__| | | | (_| |
    |_|\_\_|  \__,_| \_/ \___|_| |_|\__,_|
**/