<script setup>

</script>

<template>

  <section id="dungeon">
    <button id="deck">
      <img src="/src/assets/backs/red.svg" alt="">
    </button>

    <div>
      <img class="card" src="/src/assets/blank_card.svg" alt="">
      <img class="card" src="/src/assets/blank_card.svg" alt="">
      <img class="card" src="/src/assets/blank_card.svg" alt="">
      <img class="card" src="/src/assets/blank_card.svg" alt="">
    </div>
  </section>
 </template>

<style scoped>
#dungeon {
  display: flex;
  justify-content: space-around;
  margin-top: 15vh;

  div {
    display: flex;
  }
}
#deck {
  height: fit-content;
  margin: 2vh;
  border-style: none;
  border-radius: 5%;
  box-shadow: -1px 1px 2px 1px rgba(0, 0, 0, 0.2);

  cursor: pointer;
  
  img {
    height: 20vh;
    display: block;
  }
}

.card {
  height: 20vh;
  display: block;
  margin: 2vh;
}
</style>
