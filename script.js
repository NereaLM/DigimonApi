window.onload = () => {
    init();
}

const init = async () => {
    const characters = await getCharacters();
    console.log(characters)
    mappedCharacters(characters);
}

const getCharacters = async () => {
    const result = await fetch('https://digimon-api.vercel.app/api/digimon')
    const resultJson = await result.json();
    return resultJson;
}

const mappedCharacters = (characters) => {
    characters.map((character) => {
        return printCharacter({name: character.name, img: character.img})
    })
}

const printCharacter = (character) => {
    let characterContainer = document.querySelector('#characters');
    characterContainer.innerHTML += `<li id="${character.name}">
    <p>${character.name}</p>
    <img src=${character.img} alt=${character.img}/>
    </li>`
}
