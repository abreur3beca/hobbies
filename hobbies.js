//atividade 1 e desafio 1
const hobbies = ["desenhar", "dormir", "cozinhar"];

hobbies.push("ler");
hobbies.push("correr");
    console.log(hobbies);

hobbies.forEach(function(hobby) {
    console.log("Olá, eu sou o hobby " + hobby + "!");
    });

//atividade 2
const bookTitles = hobbies.map(function(hobby) {
    return "O incrível mundo de " + hobby;
    });
    console.log(bookTitles);

//desafio 2
const catalogos = ["As mil partes do meu coração","Tartarugas até lá embaixo","A culpa é das estrelas"];
const catalogo = catalogos.map(function(livros) {
    return "No meu catálago tem:" + livros
    });
    console.log(catalogo);

//atividade 3
const dHobbies = hobbies.filter(function(hobby) {
    return hobby[0] === "d";
    } );
    console.log(dHobbies);

//desafio 3
//o critério para esse filtro é hobbys que começam com a letra "C".
const cHobbies = hobbies.filter(function(hobby) {
    return hobby[0] === "c";
    } );
    console.log(cHobbies);
    
//Atividade 4 e desafio
const runningPosition = hobbies.findIndex(function(hobby) {
    return hobby === "correr";
    });

const cookingPosition = hobbies.findIndex(function(hobby) {
    return hobby === "cozinhar";
    });
    console.log("Correr está na posição: " + runningPosition + ". Cozinhar está na posição: " + cookingPosition);

//Atividade 5.1
const allHobbies = hobbies.reduce(function(accumulator, hobby) {
    return accumulator + ", " + hobby; 
    });
    console.log("Meus hobbies são: " + allHobbies);

//desafio 5.1
const myHobbies = hobbies.reduce(function(accumulator, hobby) {
    return accumulator + ", " + hobby; 
    });
    console.log("O que eu gosto de fazer no meu tempo livre é: " + myHobbies);

//Atividade 5.2
const hasVHobby = hobbies.some(function(hobby) {
    return hobby[0] === 'v'; 
    });
    console.log("Eu tenho um hobby que começa com 'v'? " + hasVHobby);

//desafio 5.2
const hasMaior = hobbies.some(function(hobby) 
    { return hobby.length > 8; 
    });
    console.log("Algum hobby possui mais que 8 letras? " + hasMaior);

//Atividade 6
const allShort = hobbies.every(function(hobby) 
    { return hobby.length < 15; 
    });
    console.log("Todos os meus hobbies têm menos de 15 letras? " + allShort);

//desafio 6
const allMinusculas = hobbies.every(function(hobby) 
    { return hobby === hobby.toLowerCase(); 
    });
    console.log("Todos os meus hobbies começam com letras minúsculas? " + allMinusculas);

//Atividade 7
const fiveLetterHobby = hobbies.find(function(hobby) {
    return hobby.length === 5; });
    console.log("Meu primeiro hobby com 5 letras é: " + fiveLetterHobby);

//desafio 7
const letterZHobby = hobbies.find(function(hobby) {
    return hobby.includes ("z"); });
    console.log("Meu hobby que contém a letra z é: " + letterZHobby);


//Atividade 8 
    const firstThreeHobbies = hobbies.slice(0, 3);  
    console.log("Meus três primeiros hobbies são: ", firstThreeHobbies);

//desafio 8
    const secondFourthHobbies = hobbies.slice(1, 4); 
    console.log("Meus hobbies do segundo ao quarto são: ", secondFourthHobbies);