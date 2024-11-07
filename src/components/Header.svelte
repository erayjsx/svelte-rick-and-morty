<script>
  // @ts-nocheck
  import { ReadCvLogo, GithubLogo, ArrowBendUpRight } from "phosphor-svelte";

  import { page } from "$app/stores";

  $: pathname = $page.url.pathname;

  const menu = [
    {
      title: "Home",
      pathname: "/",
    },
    {
      title: "Characters",
      pathname: "/characters",
    },
    {
      title: "Locations",
      pathname: "/locations",
    },
    {
      title: "Episodes",
      pathname: "/episodes",
    },
  ];
</script>

<header class="h-20 w-full border-b px-4 top-0 bg-white sticky flex row">
  <div
    class="max-w-screen-lg w-full mx-auto justify-between flex row items-center"
  >
    <a href="/">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmRituBykJDfbBMeNym2UaQ9awQ1HgbN-JfQ&s"
        alt=""
        class="h-12"
      /></a
    >
    <nav class="space-x-2 flex-2 max-lg:hidden">
      {#each menu as item}
        <a
          href={item.pathname}
          title={item.title}
          class={pathname == item.pathname
            ? "bg-black px-3 py-2 rounded-full text-white"
            : "hover:bg-gray-200 transition px-3 py-2 rounded-full"}
          >{item.title}</a
        >
      {/each}
    </nav>

    <nav class="flex items-center gap-3">
      <a href="/">
        <ReadCvLogo size={28} />
      </a>
      <a href="/">
        <GithubLogo size={28} />
      </a>
      <a href="/">
        <ArrowBendUpRight size={28} />
      </a>
    </nav>
  </div>
</header>
