<script>
  import Home from './pages/Home.svelte'
  import Detail from './pages/Detail.svelte'
  import { pokemonService } from './machine'
</script>

{#if $pokemonService.matches('home')}
  <Home />
{:else if $pokemonService.matches('detail')}
  <Detail />
{/if}
