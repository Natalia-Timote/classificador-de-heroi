const heroNameInput = document.getElementById("heroName");
const heroValueInput = document.getElementById("heroValue");
const classifyBtn = document.getElementById("classifyBtn");
const result = document.querySelector(".result");
let heroLevel = "";


function classifyHero(heroValue) {
    if (heroValue < 1000) {
        heroLevel = "Ferro";
    } else if (1001 <= heroValue <= 2000) {
        heroLevel = "Bronze";
    } else if (2001 <= heroLevel <= 5000) {
        heroLevel = "Prata";
    } else if (5001 <= heroLevel <= 7000) {
        heroLevel = "Ouro";
    } else if (7001 <= heroLevel <= 8000) {
        heroLevel = "Platina";
    } else if (8001 <= heroLevel <= 9000) {
        heroLevel = "Ascendente";
    } else if (9001 <= heroLevel <= 10000) {
        heroLevel = "Imortal";
    } else if (heroLevel > 10001) {
        heroLevel = "Radiante";
    }
}

classifyBtn.addEventListener("click", () => {
    const heroName = heroNameInput.value;
    const heroValue = Number(heroValueInput.value);

    classifyHero(heroValue);

    result.textContent = `O herói ${heroName} possui ${heroValue} pontos de experiência e está no nível ${heroLevel}.`
})
