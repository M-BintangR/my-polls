<script>
  import Footer from "./components/Footer.svelte";
  import Header from "./components/Header.svelte";
  import Tabs from "./shared/Tabs.svelte";

  let items = ["Current Polls", "Add New Poll"];
  let activeItem = "Current Polls";

  const tabChange = (e) => {
    activeItem = e.detail;
  };
</script>

<Header />
<main>
  <Tabs on:tabChange={tabChange} {items} {activeItem} />
  {#if activeItem == "Current Polls"}
    <p>Poll List Component Goes Here</p>
  {:else if activeItem == "Add New Poll"}
    <p>Tambah Poll Baru</p>
  {/if}
</main>
<Footer />

<style>
  main {
    max-width: 960px;
    margin: 40px auto;
  }
</style>
