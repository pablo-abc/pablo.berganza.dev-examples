<script>
  import { getContext } from 'svelte'
  import { createEventDispatcher } from 'svelte'
  import {
    Modal,
    Form,
    TextInput,
    ToastNotification,
  } from 'carbon-components-svelte'

  const pokemonService = getContext('pokemonService')

  $: searchService = $pokemonService.children.search

  export let open = false
  let pokemon = ''

  const dispatch = createEventDispatcher()

  function onSubmit() {
    if (!pokemon) return
    dispatch('submit', pokemon)
    open = false
    pokemon = ''
  }
</script>

<Modal
  bind:open
  hasForm
  modalHeading="Add a Pokemon"
  primaryButtonText=Add
  secondaryButtonText=Cancel
  primaryButtonDisabled={!pokemon}
  on:click:button--secondary="{() => open = false}"
  on:close
  on:close="{() => pokemon = ''}"
  on:submit={onSubmit}
  on:open
  >
  <Form>
    <TextInput labelText="Pokemon" placeholder="charizard" bind:value={pokemon} />
  </Form>
</Modal>

{#if $searchService?.matches('error')}
  <div class="error">
    <ToastNotification title="Error" caption="There was an error while fetching the pokemon" />
  </div>
{/if}

<style>
  .error {
    position: absolute;
    bottom: 0;
    right: 0;
  }
</style>
