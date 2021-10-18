<script>
  import ListItem from "../components/ListItem.svelte";

  let things = [
    { id: 1, name: "apple" },
    { id: 2, name: "banana" },
    { id: 3, name: "carrot" },
    { id: 4, name: "doughnut" },
    { id: 5, name: "egg" },
  ];

  function handleClick() {
    things = things.slice(1);
  }
</script>

<h1>List</h1>
<button on:click={handleClick}> Remove first thing </button>
<ul>
  {#each things as thing (thing.id)}
    <ListItem name={thing.name} />
  {/each}
</ul>
