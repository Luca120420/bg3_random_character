// GameData Module - Contains all static game data for BG3 Character Generator

const GameData = {
    // Origin options for each mode
    origins: {
        withOriginCharacters: [
            "Astarion", "Lae'Zel", "Gale", "Shadowheart", 
            "Wyll", "Karlach", "Dark Urge", "Custom"
        ],
        withoutOriginCharacters: ["Dark Urge", "Custom"]
    },

    // Races and their subraces
    races: {
        "Elf": ["High Elf", "Wood Elf"],
        "Tiefling": ["Asmodeus Tiefling", "Mephistopheles Tiefling", "Zariel Tiefling"],
        "Drow": ["Lolth Drow", "Seldarine Drow"],
        "Human": ["Non Esistente"],
        "Githyanki": ["Non Esistente"],
        "Dwarf": ["Gold Dwarf", "Shield Dwarf", "Duergar"],
        "Half-Elf": ["High Half-Elf", "Wood Half-Elf", "Half-Drow"],
        "Halfling": ["Lightfoot Halfling", "Strongheart Halfling"],
        "Gnome": ["Rock Gnome", "Forest Gnome", "Deep Gnome"],
        "Dragonborn": [
            "Black Dragonborn", "Blue Dragonborn", "Brass Dragonborn",
            "Bronze Dragonborn", "Copper Dragonborn", "Gold Dragonborn",
            "Green Dragonborn", "Red Dragonborn", "Silver Dragonborn",
            "White Dragonborn"
        ],
        "Half-Orc": ["Non Esistente"]
    },

    // Classes and their subclass options
    classes: {
        "Barbarian": { hasSubclass: false, subclass: "Non Esistente" },
        "Bard": {
            hasSubclass: true,
            subclassType: "instrument",
            options: ["Flauto", "Violino", "Liuto", "Tamburo", "Corno"]
        },
        "Cleric": {
            hasSubclass: true,
            subclassType: "domain",
            options: [
                "Dominio della Vita", "Dominio della Luce", "Dominio dell'Inganno",
                "Dominio della Conoscenza", "Dominio della Natura",
                "Dominio della Tempesta", "Dominio della Guerra"
            ]
        },
        "Druid": { hasSubclass: false, subclass: "Non Esistente" },
        "Fighter": {
            hasSubclass: true,
            subclassType: "fighting style",
            options: [
                "Arciere", "Difesa", "Duellante",
                "Combattimento con Armi Grandi", "Protezione",
                "Combattimento con Due Armi"
            ]
        },
        "Monk": { hasSubclass: false, subclass: "Non Esistente" },
        "Paladin": {
            hasSubclass: true,
            subclassType: "oath",
            options: ["Giuramento di Devozione", "Giuramento degli Antichi", "Giuramento di Vendetta"]
        },
        "Ranger": {
            hasSubclass: true,
            subclassType: "favored enemy",
            options: [
                "Cacciatore di Taglie", "Custode", "Cacciatore di Mostri",
                "Ranger Keeper", "Ranger Stalker"
            ]
        },
        "Rogue": { hasSubclass: false, subclass: "Non Esistente" },
        "Sorcerer": {
            hasSubclass: true,
            subclassType: "origin",
            options: ["Magia Draconica", "Magia Selvaggia", "Magia delle Tempeste"]
        },
        "Warlock": {
            hasSubclass: true,
            subclassType: "patron",
            options: ["Il Folletto", "Il Grande Antico", "L'Infernale"]
        },
        "Wizard": { hasSubclass: false, subclass: "Non Esistente" }
    },

    // Backgrounds
    backgrounds: [
        "Accolito", "Ciarlatano", "Criminale", "Intrattenitore",
        "Eroe Popolare", "Artigiano di Gilda", "Nobile", "Forestiero",
        "Sapiente", "Soldato", "Monello"
    ],

    // Cantrips by class
    cantrips: {
        "Bard": [
            "Blade Ward", "Dancing Lights", "Friends", "Light",
            "Mage Hand", "Minor Illusion", "True Strike", "Vicious Mockery"
        ],
        "Cleric": [
            "Guidance", "Light", "Resistance", "Sacred Flame",
            "Thaumaturgy", "Produce Flame"
        ],
        "Druid": [
            "Guidance", "Produce Flame", "Resistance", "Shillelagh",
            "Thorn Whip", "Poison Spray"
        ],
        "Sorcerer": [
            "Acid Splash", "Blade Ward", "Chill Touch", "Dancing Lights",
            "Fire Bolt", "Friends", "Light", "Mage Hand", "Minor Illusion",
            "Poison Spray", "Ray of Frost", "Shocking Grasp", "True Strike"
        ],
        "Warlock": [
            "Blade Ward", "Chill Touch", "Eldritch Blast", "Friends",
            "Mage Hand", "Minor Illusion", "Poison Spray", "True Strike"
        ],
        "Wizard": [
            "Acid Splash", "Blade Ward", "Chill Touch", "Dancing Lights",
            "Fire Bolt", "Friends", "Light", "Mage Hand", "Minor Illusion",
            "Poison Spray", "Ray of Frost", "Shocking Grasp", "True Strike"
        ]
    },

    // Spells by class
    spells: {
        "Bard": [
            "Animal Friendship", "Bane", "Charm Person", "Cure Wounds",
            "Disguise Self", "Dissonant Whispers", "Faerie Fire", "Feather Fall",
            "Healing Word", "Heroism", "Hideous Laughter", "Identify",
            "Longstrider", "Sleep", "Speak with Animals", "Thunderwave"
        ],
        "Sorcerer": [
            "Burning Hands", "Charm Person", "Chromatic Orb", "Color Spray",
            "Disguise Self", "Expeditious Retreat", "False Life", "Feather Fall",
            "Fog Cloud", "Jump", "Mage Armor", "Magic Missile", "Ray of Sickness",
            "Shield", "Sleep", "Thunderwave", "Witch Bolt"
        ],
        "Warlock": [
            "Armor of Agathys", "Arms of Hadar", "Charm Person", "Expeditious Retreat",
            "Hellish Rebuke", "Hex", "Protection from Evil and Good", "Witch Bolt"
        ],
        "Wizard": [
            "Burning Hands", "Charm Person", "Chromatic Orb", "Color Spray",
            "Disguise Self", "Expeditious Retreat", "False Life", "Feather Fall",
            "Find Familiar", "Fog Cloud", "Grease", "Jump", "Longstrider",
            "Mage Armor", "Magic Missile", "Protection from Evil and Good",
            "Ray of Sickness", "Shield", "Sleep", "Thunderwave", "Witch Bolt"
        ]
    },

    // Deities for Clerics
    deities: [
        "Selune", "Bahamut", "Tempus", "Tyr", "Helm", "Ilmater",
        "Mystra", "Oghama", "Kelemvor", "Moradin", "Corellon Larethian",
        "Garl Glittergold", "Yondalla", "Lolth", "Gruumsh", "Tiamat",
        "Eilistraee", "Lathander", "Talos", "Tymora", "Mielikki"
    ],

    // Natural Explorer options for Rangers
    naturalExplorer: [
        "Ammaestratore di Bestie",
        "Segugio Urbano",
        "Viandante delle Terre Selvagge: Freddo",
        "Viandante delle Terre Selvagge: Fuoco",
        "Viandante delle Terre Selvagge: Veleno"
    ],

    // Alignments
    alignments: [
        "Legale Buono", "Neutrale Buono", "Caotico Buono",
        "Legale Neutrale", "Vero Neutrale", "Caotico Neutrale",
        "Legale Malvagio", "Neutrale Malvagio", "Caotico Malvagio"
    ],

    // Origin character definitions with predefined attributes
    originDefinitions: {
        "Astarion": {
            race: "Elf",
            subrace: "High Elf",
            class: null, // Random
            background: "Predefinito",
            deity: null,
            imageUrl: "https://bg3.wiki/w/images/1/1b/Portrait_Astarion.png"
        },
        "Shadowheart": {
            race: "Half-Elf",
            subrace: "High Elf",
            class: "Cleric",
            background: "Predefinito",
            deity: "Shar",
            imageUrl: "https://bg3.wiki/w/images/thumb/4/4c/Portrait_Shadowheart.png/350px-Portrait_Shadowheart.png"
        },
        "Lae'Zel": {
            race: "Githyanki",
            subrace: "Non Esistente",
            class: "Fighter",
            background: "Predefinito",
            deity: null,
            imageUrl: "https://bg3.wiki/w/images/thumb/5/52/Portrait_Laezel.png/350px-Portrait_Laezel.png"
        },
        "Gale": {
            race: "Human",
            subrace: "Non Esistente",
            class: "Wizard",
            background: "Predefinito",
            deity: null,
            imageUrl: "https://bg3.wiki/w/images/thumb/0/0a/Portrait_Gale.png/350px-Portrait_Gale.png"
        },
        "Wyll": {
            race: "Human",
            subrace: "Non Esistente",
            class: "Warlock",
            background: "Predefinito",
            deity: null,
            imageUrl: "https://bg3.wiki/w/images/thumb/1/1c/Portrait_Wyll.png/350px-Portrait_Wyll.png"
        },
        "Karlach": {
            race: "Tiefling",
            subrace: "Zariel Tiefling",
            class: null, // Random
            background: "Predefinito",
            deity: null,
            imageUrl: "https://bg3.wiki/w/images/thumb/5/59/Portrait_Karlach.png/350px-Portrait_Karlach.png"
        },
        "Dark Urge": {
            race: null, // Random
            subrace: null, // Random
            class: null, // Random
            background: "Perseguitato",
            deity: null,
            imageUrl: "https://bg3.wiki/w/images/thumb/d/d5/Portrait_DarkUrge.png/350px-Portrait_DarkUrge.png"
        },
        "Custom": {
            race: null, // Random
            subrace: null, // Random
            class: null, // Random
            background: null, // Random
            deity: null,
            imageUrl: "https://via.placeholder.com/400x500/3a3a3a/d4af37?text=Custom+Character"
        }
    },

    // Helper methods
    getOriginOptions(mode) {
        return mode === "with" 
            ? this.origins.withOriginCharacters 
            : this.origins.withoutOriginCharacters;
    },

    getSubraces(race) {
        return this.races[race] || [];
    },

    getSubclassOptions(className) {
        const classData = this.classes[className];
        if (!classData || !classData.hasSubclass) {
            return null;
        }
        return classData.options;
    },

    getCantrips(className) {
        return this.cantrips[className] || null;
    },

    getSpells(className) {
        return this.spells[className] || null;
    },

    getRaceList() {
        return Object.keys(this.races);
    },

    getClassList() {
        return Object.keys(this.classes);
    }
};
