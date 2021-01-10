import { interpret } from 'xstate'
import { onDestroy } from 'svelte'

function useMachine(machine) {
  const service = interpret(machine).start()

  onDestroy(service.stop)

  return service
}

export default useMachine
