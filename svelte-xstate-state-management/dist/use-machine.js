import { interpret } from '../web_modules/xstate.js'
import { onDestroy } from '../web_modules/svelte.js'

function useMachine(machine) {
  const service = interpret(machine).start()

  onDestroy(service.stop)

  return service
}

export default useMachine
