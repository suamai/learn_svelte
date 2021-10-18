<script lang="ts">
  import Header from "./Header.svelte";
</script>

<header><Header /></header>
<main>
  <slot />
</main>

<style>
  header {
    display: flex;
    width: 100%;
    height: 150px;
  }
  main {
    width: 100%;
    height: 100%;
    text-align: center;
    padding: 1em;
    max-width: 1280px;
    margin: 0 auto;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
