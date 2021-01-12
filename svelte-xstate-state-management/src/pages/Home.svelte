<script>
  import { pokemonService } from '../machine'
  import {
    Button,
    DataTable,
    Toolbar,
    ToolbarContent,
  } from 'carbon-components-svelte'
  import AddPokemonModal from '../components/AddPokemonModal.svelte'
  import RemovePokemonModal from '../components/RemovePokemonModal.svelte'

  let headers = [
    { key: 'id', value: 'ID' },
    { key: 'name', value: 'Name' },
    { key: 'base_experience', value: 'Base Experience' },
    { key: 'see_more', empty: true  },
  ]
  $: rows = $pokemonService.context.addedPokemon || []
  let selectedRowIds = []
  let addModalOpened = false
  let removeModalOpened = false

  function onSubmit({ detail }) {
    pokemonService.send('CONFIRM', { searchValue: detail.toLowerCase() })
  }

  function onDelete() {
    pokemonService.send('CONFIRM', { ids: selectedRowIds })
    selectedRowIds = []
  }
</script>

<DataTable
  title="Pokemon"
  description="The pokemons you have saved"
  selectable
  sortable
  bind:selectedRowIds
  {headers}
  {rows}
  >
  <Toolbar>
    <ToolbarContent>
      <Button on:click="{() => addModalOpened = true}">Add Pokemon</Button>
      <Button
        disabled={!selectedRowIds.length}
        kind=danger
        on:click="{() => removeModalOpened = true}"
        >
        Remove selected
      </Button>
    </ToolbarContent>
  </Toolbar>

  <span slot=cell let:cell let:row>
    {#if cell.key === 'see_more'}
      <Button kind=tertiary on:click="{() => pokemonService.send('DETAIL', { pokemon: row })}">
        See more
      </Button>
    {:else}
      {cell.value}
    {/if}
  </span>
</DataTable>

<AddPokemonModal
  bind:open={addModalOpened}
  on:submit={onSubmit}
  on:close="{() => pokemonService.send('CANCEL')}"
  on:open="{() => pokemonService.send('ADD_MODAL')}"
  />

<RemovePokemonModal
  bind:open={removeModalOpened}
  on:submit={onDelete}
  on:close="{() => pokemonService.send('CANCEL')}"
  on:open="{() => pokemonService.send('REMOVE_MODAL')}"
  />
