<script lang="ts">
  let count = 0;
  $: doubled = count * 2;

  $: console.log(`the count is ${count}`);

  function incrementCount() {
    count++;
  }
</script>

<button on:click={incrementCount}>
  Clicked {count}
  {count === 1 ? "time" : "times"}
</button>
<p>{count} doubled is {doubled}</p>
{#if !count}
  <p>Nothing yet...</p>
{:else if count > 10}
  <p>Over ten!</p>
{:else}
  <p>Less than ten...</p>
{/if}
