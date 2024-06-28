// # 2️⃣ Calculadora de partidas Rankeadas
// **O Que deve ser utilizado**

// - Variáveis
// - Operadores
// - Laços de repetição
// - Estruturas de decisões
// - Funções

// ## Objetivo:

// Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
// depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)

// ## Saída

// Ao final deve se exibir uma mensagem:
// "O Herói tem de saldo de **{saldoVitorias}** está no nível de **{rank}**"

// Bons estudos 😉
// console.log("rodando");

var estatisticas = {
  vitorias: 150,
  derrotas: 100,
};

let saldoVitoriasOfc = estatisticas.vitorias - estatisticas.derrotas;

var rank = {
  // Se vitórias for menor do que 10 = Ferro
  0: {
    min: 0,
    max: 10,
    nome: "Ferro",
  },
  // Se vitórias for entre 11 e 20 = Bronze
  1: {
    min: 11,
    max: 20,
    nome: "Bronze",
  },
  // Se vitórias for entre 21 e 50 = Prata
  2: {
    min: 21,
    max: 50,
    nome: "Prata",
  },
  // Se vitórias for entre 51 e 80 = Ouro
  3: {
    min: 51,
    max: 80,
    nome: "Ouro",
  },
  // Se vitórias for entre 81 e 90 = Diamante
  4: {
    min: 81,
    max: 90,
    nome: "Diamante",
  },
  // Se vitórias for entre 91 e 100= Lendário
  5: {
    min: 91,
    max: 100,
    nome: "Lendário",
  },
  // Se vitórias for maior ou igual a 101 = Imortal
  6: {
    min: 101,
    max: 0,
    nome: "Imortal",
  },
};

const saldoVitorias = (estatisticas) => {
  let saldo = estatisticas.vitorias - estatisticas.derrotas;
  console.log(saldo);

  if (saldo >= 0) {
    let nomeRank;

    for (var e in rank) {
      //   console.log("entrando no for");
      //   console.log(e);
      //   console.log(rank[e]);
      if (rank[e].min == 0) {
        if (saldo <= rank[e].max) {
          //   console.log(rank[e].nome);
          nomeRank = rank[e].nome;
          //   return;
        }
      } else if (rank[e].max == 0) {
        if (saldo >= rank[e].min) {
          //   console.log(rank[e].nome);
          nomeRank = rank[e].nome;
          //   return;
        }
      } else {
        if (rank[e].min <= saldo && rank[e].max >= saldo) {
          //   console.log(rank[e].nome);
          nomeRank = rank[e].nome;
          //   return;
        }
      }
    }

    // console.log(nomerank);
    return nomeRank;
  } else {
    console.log("Não existe");

    nomeRank = "MADEIRA";
    return nomeRank;
  }
};

let textoRank = saldoVitorias(estatisticas);

// console.log(textorank);
console.log(
  `O Herói tem de saldo de **${saldoVitoriasOfc}** está no nível de **${textoRank}**`
);
