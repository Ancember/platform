import App from './App.svelte'
import EnterModal from './components/enter/EnterModal.svelte'

const targetApp = document.getElementById('app')
const targetEnterModal = document.getElementById('enter-modal')

const props = {
  hello: 'Привет',
  world: 'мир'
}

new App({target: targetApp, props})
new EnterModal({target:targetEnterModal})
export default null