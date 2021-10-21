<script lang="ts">
  import page from "page";
  import type { SvelteComponent } from "svelte";
  import Layout from "./components/layout/Layout.svelte";

  import Home from "./pages/Home.svelte";
  import List from "./pages/List.svelte";
  import Promises from "./pages/Promises.svelte";
  import State from "./pages/State.svelte";
  import Bindings from "./pages/Bindings.svelte";
  import Options from "./pages/Options.svelte";

  let app: typeof SvelteComponent;
  page("/", () => (app = Home));
  page("/state", () => (app = State));
  page("/list", () => (app = List));
  page("/promises", () => (app = Promises));
  page("/bindings", () => (app = Bindings));
  page("/options", () => (app = Options));

  page.start();
</script>

<Layout>
  <svelte:component this={app} />
</Layout>
