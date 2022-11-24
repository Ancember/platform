import App from './App.svelte'

const target = document.getElementById('app');

const props = {
  hello: 'Привет',
  world: 'мир'
}

new App({target, props})

export default null