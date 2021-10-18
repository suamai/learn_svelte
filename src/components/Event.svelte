<script>
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  function sayHello() {
    dispatch("hello", {
      text: "Hello!",
    });
  }
</script>

<button on:click={sayHello}> Click to say hello </button>
