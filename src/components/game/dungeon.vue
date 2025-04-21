<script setup>

</script>

<template>

  <section id="dungeon">
    <button id="deck">
      <img src="/src/assets/backs/red.svg" alt="">
    </button>

    <div >
      <img class="card" src="/src/assets/blank_card.svg" alt="">
      <img class="card" src="/src/assets/blank_card.svg" alt="">
      <img class="card" src="/src/assets/blank_card.svg" alt="">
      <img class="card" src="/src/assets/blank_card.svg" alt="">
    </div>
  </section>

  <section id="player">
    <div id="life">
      <img  src="/src/assets/heart.svg" alt="">
      <p>30</p>
    </div>

    <div id="weapon">
      <img class="card" src="/src/assets/blank_card.svg" alt="">
    </div>
  </section>

 </template>

<style scoped>
#dungeon {
  display: flex;
  justify-content: space-between;
  padding: 10vh 10vw;

  div {
    display: flex;
  }
}

#deck {
  height: fit-content;
  margin: 2vh;
  border-style: none;
  border-radius: 5%;
  box-shadow: -1px 1px 10px 7px rgba(0, 0, 0, 0.2);

  cursor: pointer;
  
  img {
    height: 25vh;
    display: block;
  }
}

.card {
  height: 25vh;
  display: block;
  margin: 2vh;
  box-shadow: -1px 1px 10px 5px rgba(0, 0, 0, 0.2);
}

#player {
  display: flex;
  justify-content: space-between;
  padding: 10vh 7.5vw;
}

#life {
  display: flex;
  
  img {
    justify-content: center;
    width: 18vw;
    filter: drop-shadow(5px 3px 7px rgba(0 0 0 / 0.4));
  }

  p {
    display: flex;
    height: fit-content;
    position: relative;
    top: 30%;
    right: 50%;
    z-index: 1;

    font-size: 6rem;
    font-weight: 600;
    color: white;
    font-family: "Modern Antiqua", serif;
  }
}

#weapon {
  width: 60.5%;
}

</style>
