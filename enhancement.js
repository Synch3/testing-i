let enhancer = {
    success: function(item) {
        let newitem = {...item}
        if (checkEnhancement(newitem) && checkDurability(newitem)) {
            if (checkEnchancement(newitem) === "normalitem") {newitem.integerenhancement++}
            else if (checkEnchancement(newitem) === "legendaryitem") {newitem.integerenhancement++,
            legendaryItemName(newitem)
            return newitem}
        }
         else return "Not a valid item."   
    },
    fail: function(item) {
        let newitem = {...item}
        if (checkEnhancement(newitem) && checkDurability(newitem)) {
            if (checkEnchancement(newitem) === "normalitem") {
                newitem.durability -= 5 
                return newitem}
            else if (checkEnchancement(newitem) === "legendaryitem") {
                newitem.integerenhancement--,
                newitem.durability -=10,
                legendaryItemName(newitem)
                return newitem}
        }
         else return "Not a valid item." 
    },
    repair: function(item) {
        let newitem = {...item}
        if (checkEnhancement(newitem) && checkDurability(newitem)) {
        newitem.durability = 100
        return newitem}
        else return "Not a valid item." 
    },
}

function checkName(item) {
    if (typeof item.name === "string") {
        return 1
    } else return 0
}

function checkType(item) {
    
}

function checkEnhancement(item) {
    if (0 <= item.integerenchancement <= 14) {return "normalitem"}
    else if (15 <= item.integerenchancement <= 20) {return "legendaryitem"}
    else return 0
}

function checkDurability(item) {
    if (checkEnchancement(item) === "normalitem" && 100 >= item.durability >= 20)  {return 1}
    else if (checkEnchancement(item) === "legendaryitem" && 100 >= item.durability >= 0) {return 1}
    else return 0
}

function legendaryItemName(item) {
    if (item.integerenhancement = 16) {item.stringenhancement="PRI"}
    else if (item.integerenhancement = 17) {item.stringenhancement="DUO"}
    else if (item.integerenhancement = 18) {item.stringenhancement="TRI"}
    else if (item.integerenhancement = 19) {item.stringenhancement="TET"}
    else if (item.integerenhancement = 20) {item.stringenhancement="PEN"}
}



let badassSword = {
    displayname: function() {
        return `${this.stringenhancement} ${this.name}`
    },
    name: "Badass Sword",
    type: "sword",
    durability: 100,
    integerenhancement: 1,
    stringenhancement: `+${this.integerenhancement}`
}

let badassArmor = {
    displayname: function() {
        return `${this.stringenhancement} ${this.name}`
    },
    name: "Badass Armor",
    type: "armor",
    durability: 100,
    integerenhancement: 1,
    stringenhancement: `+${this.integerenhancement}`
}

