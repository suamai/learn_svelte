<script lang="ts">
  import page from "page";

  const options = [
    { name: "Home", path: "/" },
    { name: "State", path: "/state" },
    { name: "List", path: "/list" },
    { name: "Promises", path: "/promises" },
    { name: "Bindings", path: "/bindings" },
  ];

  const handleClick = (to: string) => page(to);
</script>

<ul>
  {#each options as option}
    <li>
      <a href="/" on:click|preventDefault={() => handleClick(option.path)}>
        {option.name}
      </a>
    </li>
  {/each}
</ul>

<style>
  ul {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
  }
  li {
    display: block;
  }
</style>
