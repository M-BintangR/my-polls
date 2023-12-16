<script>
  import CreatePolls from "./components/CreatePolls.svelte";
  import Footer from "./components/Footer.svelte";
  import Header from "./components/Header.svelte";
  import PollList from "./components/PollList.svelte";
  import Tabs from "./shared/Tabs.svelte";

  let items = ["Current Polls", "Add New Poll"];
  let activeItem = "Current Polls";
  let polls = [
    {
      id: 1,
      question: "Python",
      aswerA: "Python",
      aswerB: "Python",
      votesA: 9,
      votesB: 10,
    },
  ];

  const tabChange = (e) => {
    activeItem = e.detail;
  };

  const handleAdd = (e) => {
    polls = [e.detail, ...polls];
    activeItem = "Current Polls";
  };
</script>

<Header />
<main>
  <Tabs on:tabChange={tabChange} {items} {activeItem} />
  {#if activeItem == "Current Polls"}
    <PollList {polls} />
  {:else if activeItem == "Add New Poll"}
    <CreatePolls on:add={handleAdd} />
  {/if}
</main>
<Footer />

<style>
  main {
    max-width: 960px;
    margin: 40px auto;
  }
</style>
