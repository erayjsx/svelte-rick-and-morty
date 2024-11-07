<script>
  // @ts-nocheck

  import "../app.css";
  import Header from "../components/Header.svelte";
  import Layout from "../components/Layout.svelte";

  import { characterStore } from "../store/store";

  $: ({ characters, loading, error } = $characterStore);
</script>

<svelte:head>
  <title>Here goes your page title</title>
  <meta name="description" content="Here goes your page description" />
</svelte:head>

<Layout>
  <h1 class="text-3xl font-bold mb-4">Characters</h1>

  <div class="flex flex-wrap gap-4">
    {#each characters?.results as character}
      <a
        href="/characters/12"
        class="p-4 rounded-lg w-48 transition hover:border-black border"
      >
        <!-- svelte-ignore a11y_missing_attribute -->
        <img src={character.image} class="w-full rounded-lg mb-3" />
        <h2 class="font-bold">{character.name}</h2>
        <p>{character.species} - {character.gender}</p>
      </a>
    {/each}
  </div>
</Layout>
