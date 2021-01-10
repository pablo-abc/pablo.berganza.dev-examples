<script>
  import { setContext } from 'svelte'
  import Home from './pages/Home.svelte'
  import { pokemonMachine } from './machine'
  import useMachine from './use-machine'

  const pokemonService = useMachine(pokemonMachine)

  setContext('pokemonService', pokemonService)
</script>

<Home />
