import '../src/index.scss';

const component = () => {
  const element = document.createElement('div');

  element.innerHTML = ['Hello', 'world'].join(' ');

  return element;
}

document.body.appendChild(component());
