const boot_log = document.createElement('div')
boot_log.id = 'boot_log';
document.body.appendChild(boot_log);

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
    boot_log.innerHTML += msg + '<br>';
}
function ok(msg) {
    boot_log.innerHTML += '[  <span style="color: #00ff00;">OK</span>  ] ';
    log(msg);
}

function warn(msg) {
    boot_log.innerHTML += '[ <span style="color: #ffff00;">WARN</span> ] ';
    log(msg);
}

function failed(msg) {
    boot_log.innerHTML += '[<span style="color: #ff0000;">FAILED</span>] ';
    log(msg);
}

for (let i = 0; i < bootMessages.length; i++) {
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
  delay += getRandomIntInclusive(min, max);
    setTimeout(() => {
        ok(bootMessages[i]);
    }, delay);
}

setTimeout(() => {
  boot_log.remove();
}, bootMessages.length * 400);
