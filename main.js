//Implemente uma função que receba uma lista de alunos de isw-008 (nome, ra, notaP1, notaP2). 

//Exemplo: {nome:"Diego", ra:"005083231101",notaP1:10,notaP2:8}

//Essa função deverá: 
/* 
    a) Mostrar na tela os alunos. - JS
    b) Notas Menores que 6 em vermelho, maiores ou iguais em azul - HTML, CSS
    c) A media da P1 da turma
    d) A media da P2 da turma
    e) A média de cada Aluno
    f) A quantidades de aprovados
    g) A quantidade de reprovados
    h) Tudo em uma Tabela
*/
function createLsAlunos(){
    var lsAluno = [{
        "nome": "Maria",
        "ra": "009876543210",
        "notaP1": 2,
        "notaP2": 5
      },
      {
        "nome": "Lucas",
        "ra": "001234567890",
        "notaP1": 8,
        "notaP2": 9
      },
      {
        "nome": "Juliana",
        "ra": "002345678901",
        "notaP1": 7,
        "notaP2": 2
      },
      {
        "nome": "Pedro",
        "ra": "003456789012",
        "notaP1": 4,
        "notaP2": 8
      },
      {
        "nome": "Ana",
        "ra": "004567890123",
        "notaP1": 6,
        "notaP2": 7
      },
      {
        "nome": "Gustavo",
        "ra": "006789012345",
        "notaP1": 8,
        "notaP2": 8
      },
      {
        "nome": "Carla",
        "ra": "007890123456",
        "notaP1": 7,
        "notaP2": 2
      },
      {
        "nome": "Rafael",
        "ra": "008901234567",
        "notaP1": 4,
        "notaP2": 9
      },
      {
        "nome": "Camila",
        "ra": "009012345678",
        "notaP1": 8,
        "notaP2": 7
      },
      {
        "nome": "Bruno",
        "ra": "010123456789",
        "notaP1": 7,
        "notaP2": 8
      },
      {
        "nome": "Mariana",
        "ra": "011234567890",
        "notaP1": 10,
        "notaP2": 9
      },
      {
        "nome": "Rodrigo",
        "ra": "012345678901",
        "notaP1": 8,
        "notaP2": 7
      },
      {
        "nome": "Beatriz",
        "ra": "013456789012",
        "notaP1": 4,
        "notaP2": 8
      }];
      return lsAluno;
}

function lista_Siga(lsAluno){
    var mediaAluno = 0;
    var nota = "good"; // or bad
    var qtdAproved = 0;
    var qtdReproved = 0;
    var htmlCode = "<tr>";

    for(let i = 0; i < lsAluno.length; i++){
        mediaAluno = (lsAluno[i].notaP1 + lsAluno[i].notaP2) / 2;

        htmlCode += "<td>" + lsAluno[i].nome + "</td>" 
                +  "<td>" + lsAluno[i].ra + "</td>";

        nota = (lsAluno[i].notaP1 < 6) ? "bad" : "good";
        htmlCode += "<td class='" + nota + "'><span>" + lsAluno[i].notaP1 + "</span></td>";

        nota = (lsAluno[i].notaP2 < 6) ? "bad" : "good";
        htmlCode += "<td class='" + nota + "'><span>" + lsAluno[i].notaP2 + "</span></td>";

        nota = (mediaAluno < 6) ? "bad" : "good";
        htmlCode += "<td class='" + nota + "'><span>" + mediaAluno + "</span></td>";

        if(nota === "bad"){
            htmlCode += "<td><i class='fa-solid fa-x'></i></td>";
            qtdReproved += 1;
        }else{
            htmlCode += "<td><i class='fa-solid fa-check'></i></td>";
            qtdAproved += 1;
        }
        htmlCode += "</tr>";
    }
    let aproved = document.getElementById("qtdAproved");
    aproved.innerHTML = qtdAproved;
    let reproved = document.getElementById("qtdReproved");
    reproved.innerHTML = qtdReproved;

    let tbody = document.getElementById("listaAlunos");
    tbody.innerHTML = htmlCode;
}