const baralho = [
  { id: "♠1", tipo: "cura", valor: 1, imagem: "espadas_1.png" },
  { id: "♠2", tipo: "cura", valor: 2, imagem: "espadas_2.png" },
  { id: "♠3", tipo: "cura", valor: 3, imagem: "espadas_3.png" },
  { id: "♠4", tipo: "cura", valor: 4, imagem: "espadas_4.png" },
  { id: "♠5", tipo: "cura", valor: 5, imagem: "espadas_5.png" },
  { id: "♠6", tipo: "cura", valor: 6, imagem: "espadas_6.png" },
  { id: "♠7", tipo: "cura", valor: 7, imagem: "espadas_7.png" },
  { id: "♠8", tipo: "cura", valor: 8, imagem: "espadas_8.png" },
  { id: "♠9", tipo: "cura", valor: 9, imagem: "espadas_9.png" },
  { id: "♠10", tipo: "cura", valor: 10, imagem: "espadas_10.png" },
  { id: "♠A", tipo: "cura", valor: 11, imagem: "espadas_a.png" },
  { id: "♠J", tipo: "cura", valor: 12, imagem: "espadas_j.png" },
  { id: "♠Q", tipo: "cura", valor: 13, imagem: "espadas_q.png" },
  { id: "♠K", tipo: "cura", valor: 14, imagem: "espadas_k.png" },

  { id: "♣1", tipo: "dano", valor: 1, imagem: "paus_1.png" },
  { id: "♣2", tipo: "dano", valor: 2, imagem: "paus_2.png" },
  { id: "♣3", tipo: "dano", valor: 3, imagem: "paus_3.png" },
  { id: "♣4", tipo: "dano", valor: 4, imagem: "paus_4.png" },
  { id: "♣5", tipo: "dano", valor: 5, imagem: "paus_5.png" },
  { id: "♣6", tipo: "dano", valor: 6, imagem: "paus_6.png" },
  { id: "♣7", tipo: "dano", valor: 7, imagem: "paus_7.png" },
  { id: "♣8", tipo: "dano", valor: 8, imagem: "paus_8.png" },
  { id: "♣9", tipo: "dano", valor: 9, imagem: "paus_9.png" },
  { id: "♣10", tipo: "dano", valor: 10, imagem: "paus_10.png" },
  { id: "♣A", tipo: "dano", valor: 11, imagem: "paus_a.png" },
  { id: "♣J", tipo: "dano", valor: 12, imagem: "paus_j.png" },
  { id: "♣Q", tipo: "dano", valor: 13, imagem: "paus_q.png" },
  { id: "♣K", tipo: "dano", valor: 14, imagem: "paus_k.png" },

  { id: "♦1", tipo: "arma", valor: 1, imagem: "ouros_1.png" },
  { id: "♦2", tipo: "arma", valor: 2, imagem: "ouros_2.png" },
  { id: "♦3", tipo: "arma", valor: 3, imagem: "ouros_3.png" },
  { id: "♦4", tipo: "arma", valor: 4, imagem: "ouros_4.png" },
  { id: "♦5", tipo: "arma", valor: 5, imagem: "ouros_5.png" },
  { id: "♦6", tipo: "arma", valor: 6, imagem: "ouros_6.png" },
  { id: "♦7", tipo: "arma", valor: 7, imagem: "ouros_7.png" },
  { id: "♦8", tipo: "arma", valor: 8, imagem: "ouros_8.png" },
  { id: "♦9", tipo: "arma", valor: 9, imagem: "ouros_9.png" },
  { id: "♦10", tipo: "arma", valor: 10, imagem: "ouros_10.png" },
  { id: "♦A", tipo: "arma", valor: 11, imagem: "ouros_a.png" },
  { id: "♦J", tipo: "arma", valor: 12, imagem: "ouros_j.png" },
  { id: "♦Q", tipo: "arma", valor: 13, imagem: "ouros_q.png" },
  { id: "♦K", tipo: "arma", valor: 14, imagem: "ouros_k.png" },

  { id: "♥1", tipo: "cura", valor: 1, imagem: "copas_1.png" },
  { id: "♥2", tipo: "cura", valor: 2, imagem: "copas_2.png" },
  { id: "♥3", tipo: "cura", valor: 3, imagem: "copas_3.png" },
  { id: "♥4", tipo: "cura", valor: 4, imagem: "copas_4.png" },
  { id: "♥5", tipo: "cura", valor: 5, imagem: "copas_5.png" },
  { id: "♥6", tipo: "cura", valor: 6, imagem: "copas_6.png" },
  { id: "♥7", tipo: "cura", valor: 7, imagem: "copas_7.png" },
  { id: "♥8", tipo: "cura", valor: 8, imagem: "copas_8.png" },
  { id: "♥9", tipo: "cura", valor: 9, imagem: "copas_9.png" },
  { id: "♥10", tipo: "cura", valor: 10, imagem: "copas_10.png" },
  { id: "♥A", tipo: "cura", valor: 11, imagem: "copas_a.png" },
  { id: "♥J", tipo: "cura", valor: 12, imagem: "copas_j.png" },
  { id: "♥Q", tipo: "cura", valor: 13, imagem: "copas_q.png" },
  { id: "♥K", tipo: "cura", valor: 14, imagem: "copas_k.png" }
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

function showDungeon (embaralhado) {
  if (embaralhado.length < 4) {
    console.log('Não há mais cartas no baralho');
    return;
  }

  console.log( embaralhado.slice(0, 4).map(carta => carta.id).join(', '));
}
// Aprender sobre o método acima
// ler https://bost.ocks.org/mike/shuffle/

