<script>
  import { onDestroy, onMount } from "svelte";
  import { fade, slide, scale } from "svelte/transition";
  import { flip } from "svelte/animate";
  import pollStore from "./../stores/PollStore.js";
  import DetailPoll from "./DetailPoll.svelte";

  export let polls = [];

  const unsub = pollStore.subscribe((data) => {
    polls = data;
  });

  onMount(() => {});

  onDestroy(() => {
    unsub();
  });
</script>

<div class="poll-list">
  {#each $pollStore as poll (poll.id)}
    <div in:fade out:scale|local animate:flip={{ duration: 500 }}>
      <DetailPoll {poll} on:vote />
    </div>
  {/each}
</div>

<style>
  .poll-list {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
  }
</style>
