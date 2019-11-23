import _ from 'lodash';
import printMe from './button.js';

const name = 'htam'

function component() {
  const element = document.createElement('div');
  const btn = document.createElement('button');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', name], ' ');

  btn.innerHTML = 'Click me and check the div';
  btn.onclick = printMe;

  element.appendChild(btn);

  return element;
}

document.body.appendChild(component());
