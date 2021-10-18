<script>
  let promise = new Promise((resolve) => setTimeout(() => resolve(5), 5000));
</script>

{#await promise}
  <p>...waiting</p>
{:then number}
  <p>The number is {number}</p>
{:catch error}
  <p class="error">{error.message}</p>
{/await}

<style>
  .error {
    color: red;
  }
</style>
