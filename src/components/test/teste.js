const baralho = [
  { id: 's2', type: 'damage', value: 2, image: '../../assets/fronts/s2.png' }, // ♠
  { id: 's3', type: 'damage', value: 3, image: '../../assets/fronts/s3.png' },
  { id: 's4', type: 'damage', value: 4, image: '../../assets/fronts/s4.png' },
  { id: 's5', type: 'damage', value: 5, image: '../../assets/fronts/s5.png' },
  { id: 's6', type: 'damage', value: 6, image: '../../assets/fronts/s6.png' },
  { id: 's7', type: 'damage', value: 7, image: '../../assets/fronts/s7.png' },
  { id: 's8', type: 'damage', value: 8, image: '../../assets/fronts/s8.png' },
  { id: 's9', type: 'damage', value: 9, image: '../../assets/fronts/s9.png' },
  { id: 's10', type: 'damage', value: 10, image: '../../assets/fronts/s10.png' },
  { id: 'sJ', type: 'damage', value: 11, image: '../../assets/fronts/sJ.png' },
  { id: 'sQ', type: 'damage', value: 12, image: '../../assets/fronts/sQ.png' },
  { id: 'sK', type: 'damage', value: 13, image: '../../assets/fronts/sK.png' },
  { id: 'sA', type: 'damage', value: 14, image: '../../assets/fronts/sA.png' },

  { id: 'c2', type: 'damage', value: 2, image: '../../assets/fronts/c2.png' }, // ♣
  { id: 'c3', type: 'damage', value: 3, image: '../../assets/fronts/c3.png' },
  { id: 'c4', type: 'damage', value: 4, image: '../../assets/fronts/c4.png' },
  { id: 'c5', type: 'damage', value: 5, image: '../../assets/fronts/c5.png' },
  { id: 'c6', type: 'damage', value: 6, image: '../../assets/fronts/c6.png' },
  { id: 'c7', type: 'damage', value: 7, image: '../../assets/fronts/c7.png' },
  { id: 'c8', type: 'damage', value: 8, image: '../../assets/fronts/c8.png' },
  { id: 'c9', type: 'damage', value: 9, image: '../../assets/fronts/c9.png' },
  { id: 'c10', type: 'damage', value: 10, image: '../../assets/fronts/c10.png' },
  { id: 'cJ', type: 'damage', value: 11, image: '../../assets/fronts/cJ.png' },
  { id: 'cQ', type: 'damage', value: 12, image: '../../assets/fronts/cQ.png' },
  { id: 'cK', type: 'damage', value: 13, image: '../../assets/fronts/cK.png' },
  { id: 'cA', type: 'damage', value: 14, image: '../../assets/fronts/cA.png' },

  { id: 'd2', type: 'weapon', value: 2, image: '../../assets/fronts/d2.png' }, // ♦
  { id: 'd3', type: 'weapon', value: 3, image: '../../assets/fronts/d3.png' },
  { id: 'd4', type: 'weapon', value: 4, image: '../../assets/fronts/d4.png' },
  { id: 'd5', type: 'weapon', value: 5, image: '../../assets/fronts/d5.png' },
  { id: 'd6', type: 'weapon', value: 6, image: '../../assets/fronts/d6.png' },
  { id: 'd7', type: 'weapon', value: 7, image: '../../assets/fronts/d7.png' },
  { id: 'd8', type: 'weapon', value: 8, image: '../../assets/fronts/d8.png' },
  { id: 'd9', type: 'weapon', value: 9, image: '../../assets/fronts/d9.png' },
  { id: 'd10', type: 'weapon', value: 10, image: '../../assets/fronts/d10.png' },
  { id: 'dJ', type: 'weapon', value: 11, image: '../../assets/fronts/dJ.png' },
  { id: 'dQ', type: 'weapon', value: 12, image: '../../assets/fronts/dQ.png' },
  { id: 'dK', type: 'weapon', value: 13, image: '../../assets/fronts/dK.png' },
  { id: 'dA', type: 'weapon', value: 14, image: '../../assets/fronts/dA.png' },

  { id: 'h2', type: 'heal', value: 2, image: '../../assets/fronts/h2.png' }, // ♥
  { id: 'h3', type: 'heal', value: 3, image: '../../assets/fronts/h3.png' },
  { id: 'h4', type: 'heal', value: 4, image: '../../assets/fronts/h4.png' },
  { id: 'h5', type: 'heal', value: 5, image: '../../assets/fronts/h5.png' },
  { id: 'h6', type: 'heal', value: 6, image: '../../assets/fronts/h6.png' },
  { id: 'h7', type: 'heal', value: 7, image: '../../assets/fronts/h7.png' },
  { id: 'h8', type: 'heal', value: 8, image: '../../assets/fronts/h8.png' },
  { id: 'h9', type: 'heal', value: 9, image: '../../assets/fronts/h9.png' },
  { id: 'h10', type: 'heal', value: 10, image: '../../assets/fronts/h10.png' },
  { id: 'hJ', type: 'heal', value: 11, image: '../../assets/fronts/hJ.png' },
  { id: 'hQ', type: 'heal', value: 12, image: '../../assets/fronts/hQ.png' },
  { id: 'hK', type: 'heal', value: 13, image: '../../assets/fronts/hK.png' },
  { id: 'hA', type: 'heal', value: 14, image: '../../assets/fronts/hA.png' },

  { id: 'jF', type: 'heal', value: 5, image: '../../assets/fronts/jF.png' },
  { id: 'jB', type: 'weapon', value: 5, image: '../../assets/fronts/jB.png' },
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
