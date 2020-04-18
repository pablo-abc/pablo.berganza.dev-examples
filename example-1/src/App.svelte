<script>
  let message = 'Hello world!'

  function onInput(event) {
    message = event.target.value
  }
</script>

<p>{message}</p>

<input value={message} on:input={onInput}>
