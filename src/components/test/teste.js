const baralho = [
  { id: 'a2', type: 'damage', value: 2, image: 'a2.png' }, // ♠
  { id: 'a3', type: 'damage', value: 3, image: 'a3.png' },
  { id: 'a4', type: 'damage', value: 4, image: 'a4.png' },
  { id: 'a5', type: 'damage', value: 5, image: 'a5.png' },
  { id: 'a6', type: 'damage', value: 6, image: 'a6.png' },
  { id: 'a7', type: 'damage', value: 7, image: 'a7.png' },
  { id: 'a8', type: 'damage', value: 8, image: 'a8.png' },
  { id: 'a9', type: 'damage', value: 9, image: 'a9.png' },
  { id: 'a10', type: 'damage', value: 10, image: 'a10.png' },
  { id: 'aJ', type: 'damage', value: 12, image: 'aJ.png' },
  { id: 'aQ', type: 'damage', value: 13, image: 'aQ.png' },
  { id: 'aK', type: 'damage', value: 14, image: 'aK.png' },
  { id: 'aA', type: 'damage', value: 11, image: 'aA.png' },

  { id: 'c2', type: 'damage', value: 2, image: 'c2.png' }, // ♣
  { id: 'c3', type: 'damage', value: 3, image: 'c3.png' },
  { id: 'c4', type: 'damage', value: 4, image: 'c4.png' },
  { id: 'c5', type: 'damage', value: 5, image: 'c5.png' },
  { id: 'c6', type: 'damage', value: 6, image: 'c6.png' },
  { id: 'c7', type: 'damage', value: 7, image: 'c7.png' },
  { id: 'c8', type: 'damage', value: 8, image: 'c8.png' },
  { id: 'c9', type: 'damage', value: 9, image: 'c9.png' },
  { id: 'c10', type: 'damage', value: 10, image: 'c10.png' },
  { id: 'cJ', type: 'damage', value: 12, image: 'cJ.png' },
  { id: 'cQ', type: 'damage', value: 13, image: 'cQ.png' },
  { id: 'cK', type: 'damage', value: 14, image: 'cK.png' },
  { id: 'cA', type: 'damage', value: 11, image: 'cA.png' },

  { id: 'd2', type: 'weapon', value: 2, image: 'd2.png' }, // ♦
  { id: 'd3', type: 'weapon', value: 3, image: 'd3.png' },
  { id: 'd4', type: 'weapon', value: 4, image: 'd4.png' },
  { id: 'd5', type: 'weapon', value: 5, image: 'd5.png' },
  { id: 'd6', type: 'weapon', value: 6, image: 'd6.png' },
  { id: 'd7', type: 'weapon', value: 7, image: 'd7.png' },
  { id: 'd8', type: 'weapon', value: 8, image: 'd8.png' },
  { id: 'd9', type: 'weapon', value: 9, image: 'd9.png' },
  { id: 'd10', type: 'weapon', value: 10, image: 'd10.png' },
  { id: 'dJ', type: 'weapon', value: 12, image: 'dJ.png' },
  { id: 'dQ', type: 'weapon', value: 13, image: 'dQ.png' },
  { id: 'dK', type: 'weapon', value: 14, image: 'dK.png' },
  { id: 'dA', type: 'weapon', value: 11, image: 'dA.png' },

  { id: 'h2', type: 'heal', value: 2, image: 'h2.png' }, // ♥
  { id: 'h3', type: 'heal', value: 3, image: 'h3.png' },
  { id: 'h4', type: 'heal', value: 4, image: 'h4.png' },
  { id: 'h5', type: 'heal', value: 5, image: 'h5.png' },
  { id: 'h6', type: 'heal', value: 6, image: 'h6.png' },
  { id: 'h7', type: 'heal', value: 7, image: 'h7.png' },
  { id: 'h8', type: 'heal', value: 8, image: 'h8.png' },
  { id: 'h9', type: 'heal', value: 9, image: 'h9.png' },
  { id: 'h10', type: 'heal', value: 10, image: 'h10.png' },
  { id: 'hJ', type: 'heal', value: 12, image: 'hJ.png' },
  { id: 'hQ', type: 'heal', value: 13, image: 'hQ.png' },
  { id: 'hK', type: 'heal', value: 14, image: 'hK.png' },
  { id: 'hA', type: 'heal', value: 11, image: 'hA.png' },

  { id: 'jF', type: 'heal', value: 5, image: 'jF.png' },
  { id: 'jB', type: 'weapon', value: 5, image: 'jB.png' },
];

let deckRestante = baralho.length;
let vida = 20;
let cartasMesa = 0;

function shuffle(array) { // fisher-yates shuffle @https://bost.ocks.org/mike/shuffle/
  var m = array.length, t, i;

  while (m) {
    i = Math.floor(Math.random() * m--);
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }
  return array;
}

let embaralhado = shuffle(baralho);

function diminuirVida(dano) {
  vida = vida - dano;
  console.log(vida);
}

function aumentarVida(cura) {
  vida = vida + cura;
  vida > 20 ? (vida = 20) : vida;
  console.log(vida);
}

function showDungeon(embaralhado) {
  if (embaralhado.length < 4) {
    console.log('Não há mais cartas no baralho');
    return;
  }

  console.log( embaralhado.slice(0, 4).map(carta => carta.id).join(', '));
}
// Aprender sobre o método acima
// ler https://bost.ocks.org/mike/shuffle/
