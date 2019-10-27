const shell = require('shelljs');

export function toggle(pinNumber, duration) {
  shell.exec(`gatekeeper -p ${pinNumber} -d ${duration}`);
}