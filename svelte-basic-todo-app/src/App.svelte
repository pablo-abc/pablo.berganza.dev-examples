<script>
  let todos = [], value = '';
  let filter = 'all';
  $: filtered = todos.filter(todo => {
    if (filter === 'checked') return todo.checked
    if (filter === 'unchecked') return !todo.checked
    return todo
  })
  function addTodo() {
    if (!value) return;
    todos = [...todos, { value, id: Date.now(), checked: false }];
    value = '';
  }
</script>

<form>
  <label for=all>
    <input type=radio id=all value=all bind:group={filter}>
    All
  </label>
  <label for=checked>
    <input type=radio id=checked value=checked bind:group={filter}>
    Checked
  </label>
  <label for=unchecked>
    <input type=radio id=unchecked value=unchecked bind:group={filter}>
    Unchecked
  </label>
</form>
<form on:submit|preventDefault={addTodo}>
  <input bind:value>
  <button type=submit>Add Todo</button>
</form>
<ul>
  {#each filtered as todo, i (todo.id)}
    <li>
      <input
        id={todo.id}
        type="checkbox"
        bind:checked={todo.checked}
        >
      {todo.value}
    </li>
  {/each}
</ul>

<style>
  label {
      display: inline-block;
      margin: 0 10px;
  }
  li {
      list-style: none;
  }
</style>
