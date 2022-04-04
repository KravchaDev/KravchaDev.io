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
  'Supported commands:<br> <span class="code">about</span> - information about me <br> <span class="code">experience</span> - my pet-project and commercial experience <br> <span class="code">education</span> - my education <br> <span class="code">skills</span> - my skills/tools/os <br> <span class="code">contact</span> - my contact info <br> <span class="code">clr</span> - this command clean terminal <br> <span class="code">ifconfig</span> - puts domain name server <br> <span class="code">whois</span> - utilit puts info about domain name',
  about:
    
  "Danila Kravchenko -- <span class=\"sys\">CS student</span>",
  skills:
    
  '<span class="sys">Languages:</span> C/C++/Rust, Ruby, Golang<br><span class="sys">Technologies:</span> Git, SQL, Docker, Vim<br><span class="sys">Frameworks:</span> Ruby on Rails<br><span class="sys">OS:</span> CentOS, Ubuntu, Astra<br><span class="sys">Disciplines:</span> Cybersecurity, System Engineering, Networks, Coding',
  education:
  ">Irkutsk Aviation Technical School <br>>Web-Development",

  resume: 
  "<a href='./resume.pdf' class='success link'>resume.pdf</a>",

  experience: 
  "6 months --> Irkutsk Aviation Technical Shcool --> SysAdmin.",

  contact:
    "You can contact me on any of following links:<br><a href='https://www.t.me/kravchadev' class='success link'>Telegram</a>",
 
  clr:
    "<br> <br> <br> <br> <br> <br> <br> <br> <br> <br>",

  ifconfig:
    '<span class="sys">domain:</span> devopskravcha.engineer',

  whois:
    '<span class="sys">domain:</span> devopskravcha.engineer <br><span class="sys">owner:</span> Danila Kravchenko <br><span class="sys">contact info:</span> owner@devopskravcha.engineer <br><span class="sys">buy date:</span> Feburary, 2022 <br><span class="sys">name server:</span> ns1.name.com'
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
    output += `<div class="terminal-line"><span class="error">system~</span> no such command: ${input}</div>`;
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