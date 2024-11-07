<script>
  import Layout from "../../../components/Layout.svelte";
  import { ArrowLeft } from "phosphor-svelte";

  const goBack = () => {
    window.history.back();
  };
</script>

<Layout>
  <div class="flex row space-x-2 items-center">
    <button on:click={goBack}><ArrowLeft size={28} weight="bold" /></button>
    <h1 class="text-3xl font-bold">Detay</h1>
  </div>
</Layout>
