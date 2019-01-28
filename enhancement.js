let enhancer = {
    success: function(item) {
        if () {
            
        }
        else if (item.type = "armor") {
            
        }
    },
    fail: function(item) {

    },
    repair: function(item) {

    },
}

function checkName(item) {
    if (typeof item.name === "string") {
        return 1
    } else return 0
}

function checkType(item) {
    if 
}

function checkDurability(item) {
    if (checkEnchancement(item) === "normalitem" && item.durability >= 20)  {return 1}
    else if (checkEnchancement(item) === "legendaryitem" && item.durability >= 0) {return 1}
    else return 0
}

function checkEnhancement(item) {
    if (0 <= item.integerenchancement <= 14) {return "normalitem"}
    else if (15 <= item.integerenchancement <= 20) {return "legendaryitem"}
    else return 0
}



let badassSword = {
    name: "Badass Sword",
    type: "sword",
    durability: 100,
    integerenhancement: 1,
    stringenhancement: "+1"
}

let badassArmor = {
    name: "Badass Armor",
    type: "armor",
    durability: 100,
    integerenhancement: 1,
    stringenhancement: "+1"
}