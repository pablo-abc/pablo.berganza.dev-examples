<script>
  import { getContext } from 'svelte'
  import {
    Modal,
  } from 'carbon-components-svelte'

  export let open = false

  function onSubmit() {
    open = false
  }
</script>

<Modal
  bind:open
  danger
  modalHeading="Remove Pokemon"
  primaryButtonText=Remove
  secondaryButtonText=Cancel
  on:click:button--secondary="{() => open = false}"
  on:close
  on:submit={onSubmit}
  on:submit
  on:open
  >
  <p>Are you sure you want to remove the selected pokemon?</p>
</Modal>
