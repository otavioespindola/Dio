function getCavaleirosDeBronze(map) {
    let bronze = [];
    for([key, value] of map) {
        if (value === "Bronze") {
            bronze.push(key)
        }
    }
    return bronze
}

const cavaleiros = new Map();

cavaleiros.set("Seya", "Bronze");
cavaleiros.set("Hyoga", "Bronze");
cavaleiros.set("Shiryu", "Bronze");
cavaleiros.set("Shun", "Bronze");
cavaleiros.set("Aldebaran", "Ouro");
cavaleiros.set("Shion", "Negra de Hades");
cavaleiros.set("Aiolia", "Ouro");


console.log(getCavaleirosDeBronze(cavaleiros));
