<script>
  import { pokemonService } from '../machine'
  import { Button } from 'carbon-components-svelte'

  $: pokemon = $pokemonService.context.selectedPokemon
</script>

<h1>{pokemon.name}</h1>
<img src="{pokemon.sprites.front_default}" />
<div>
  <Button kind=secondary on:click="{() => pokemonService.send('HOME')}">Go back</Button>
</div>

<style>
  h1 {
    text-transform: capitalize;
  }
</style>
