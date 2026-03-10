function startZainOS() {
  const bootLog = document.createElement('div')
  bootLog.id = 'boot-log';
  document.body.appendChild(bootLog);

  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  delay = 0

  const bootMessages = [
    "Mounted Portfolio Filesystem",
    "Started Device Manager",
    "Initialized Display Interface",
    "Loaded Font Renderer",
    "Starting Window Compositor",
    "Initialized Terminal Subsystem",
    "Loading Project Index",
    "Loading Skills Database",
    "Registering Command Handlers",
    "Coffee Levels Critically Low",
    "Initializing User Interface Services",
    "Warming up JavaScript Engine",
    "Feeding the Hamsters",
    "Welcome to ZainOS",
    "Checking System Integrity",
    "Preparing Desktop Environment",
    "Launching Terminal Interface",
    "Starting ZainOS User Session",
    "Calibrating Developer Ego",
    "Ready for Commands",
    "Finalizing Environment Settings",
    "Initializing Portfolio Modules",
    "Starting Interactive Shell",
    "System Ready"
  ];
  max = 700
  min = 300

  function log(msg) {
      bootLog.innerHTML += msg + '<br>';
  }
  function ok(msg) {
      bootLog.innerHTML += '[  <span style="color: #00ff00;">OK</span>  ] ';
      log(msg);
  }

  function warn(msg) {
      bootLog.innerHTML += '[ <span style="color: #ffff00;">WARN</span> ] ';
      log(msg);
  }

  function failed(msgStorage) {
      bootLog.innerHTML += '[<span style="color: #ff0000;">FAILED</span>] ';
      log(msg);
  }

  for (let i = 0; i < bootMessages.length; i++) {
    delay += getRandomIntInclusive(min, max);
    if (i === 13) {
      setTimeout(() => {
        log('<span style="color: #00ffff">' + bootMessages[i] + '</span>');
      }, delay);
      max = 200
      min = 100
      continue;
    }
    if (i === 9) {
      setTimeout(() => {
        warn(bootMessages[i]);
      }, delay);
      continue;
    }
      setTimeout(() => {
          ok(bootMessages[i]);
      }, delay);
  }

  setTimeout(() => {
    bootLog.remove();
    localStorage.setItem('zainosBooted', 'true');
  }, delay + 500);
}
if (localStorage.getItem('zainosBooted') !== 'true') {
  startZainOS();
}

function startTerminal() {
  const terminal = document.body.appendChild(document.createElement('div'));
  terminal.id = 'terminal';
  terminal.innerHTML += '<span style="color: #00ffff">Type "help" for a list of commands.</span><br>';
  const titlebar = document.createElement('div');
  titlebar.id = 'titlebar';
  titlebar.innerHTML = '<span style="color: #00ffff;">ZainOS Terminal</span>';
  document.body.insertBefore(titlebar, terminal);
}
function createNewline() {
  const newline = document.createElement('div');
  promptSpan = document.createElement('span');
  inputField = document.createElement('span');
  inputField.contentEditable = true;
  inputField.spellcheck = false;
  inputField.id = 'input-field';
  promptSpan.textContent = 'zain@zainOS:~$ ';
  newline.appendChild(promptSpan);
  terminal.appendChild(newline);
  newline.appendChild(inputField);
  inputField.focus();
  inputField.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const command = inputField.textContent.trim();
      processCommand(command);
      inputField.contentEditable = false;
      createNewline();
    }
  });

}


function processCommand(command) {
  const output = document.createElement('div');
  switch (command) {
    case 'help':
      output.innerHTML = '<span style="color: #00ffff">Available commands: help, about, clear</span>';
      break;
    case 'about':
      output.innerHTML = '<span style="color: #00ffff">ZainOS - A Portfolio Operating System by Zain</span>';
      break;
    case 'clear':
      terminal.innerHTML = '';
      return;
    default:
      output.innerHTML = `<span style="color: #ff0000">Command not found: ${command}</span>`;
  }
  terminal.appendChild(output);
}
if (localStorage.getItem('zainosBooted') !== 'true') {
setTimeout(() => {
  startTerminal();
  createNewline();
}, delay + 1000);
} else {
  startTerminal();
  createNewline();
}


