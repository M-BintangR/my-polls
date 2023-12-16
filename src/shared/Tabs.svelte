<script>
  import { createEventDispatcher } from "svelte";

  export let items;
  export let activeItem;

  const dispatch = createEventDispatcher();
</script>

<div class="tabs">
  <ul>
    {#each items as item}
      <li>
        <div
          on:click={() => dispatch("tabChange", item)}
          class:active={item == activeItem}
        >
          {item}
        </div>
      </li>
    {/each}
  </ul>
</div>

<style>
  .tabs {
    margin-bottom: 40px;
  }
  ul {
    display: flex;
    justify-content: center;
    padding: 0;
    list-style-type: none;
    gap: 20px;
  }
  li {
    margin: 0;
    font-size: 18px;
    color: #555;
    cursor: pointer;
  }
  .active {
    color: #d91b42;
    border-bottom: 2px solid;
    padding-bottom: 8px;
  }
</style>
