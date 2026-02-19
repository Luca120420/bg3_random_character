// GameData Module - Contains all static game data for BG3 Character Generator

const GameData = {
    // Origin options for each mode
    origins: {
        withOriginCharacters: [
            "Astarion", "Lae'Zel", "Gale", "Cuorescuro", 
            "Wyll", "Karlach", "Oscura Pulsione", "Personalizzata"
        ],
        withoutOriginCharacters: ["Oscura Pulsione", "Personalizzata"]
    },

    // Races and their subraces
    races: {
        "Elfo": ["Elfo Alto", "Elfo dei Boschi"],
        "Tiefling": ["Tiefling di Asmodeus", "Tiefling di Mefistofele", "Tiefling di Zariel"],
        "Drow": ["Drow di Lolth", "Drow di Seldarine"],
        "Umano": ["Non Esistente"],
        "Githyanki": ["Non Esistente"],
        "Nano": ["Nano Dorato", "Nano degli Scudi", "Duergar"],
        "Mezzelfo": ["Mezzelfo Alto", "Mezzelfo dei Boschi", "Mezzodrow"],
        "Halfling": ["Halfling Piedelesto", "Halfling Cuoreforte"],
        "Gnomo": ["Gnomo delle Rocce", "Gnomo delle Foreste", "Gnomo delle Profondità"],
        "Dragonide": [
            "Nero", "Blu", "Ottone",
            "Bronzo", "Rame", "Oro",
            "Verde", "Rosso", "Argento",
            "Bianco"
        ],
        "Mezzorco": ["Non Esistente"]
    },

    // Classes and their subclass options
    classes: {
        "Barbaro": { hasSubclass: false, subclass: "Non Esistente" },
        "Bardo": {
            hasSubclass: true,
            subclassType: "instrument",
            options: ["Tamburo da Braccio", "Flauto", "Liuto", "Lira", "Violino"]
        },
        "Chierico": {
            hasSubclass: true,
            subclassType: "domain",
            options: [
                "Dominio della Vita", "Dominio della Luce", "Dominio dell'Inganno",
                "Dominio della Conoscenza", "Dominio della Natura",
                "Dominio della Tempesta", "Dominio della Guerra"
            ]
        },
        "Druido": { hasSubclass: false, subclass: "Non Esistente" },
        "Guerriero": {
            hasSubclass: true,
            subclassType: "fighting style",
            options: [
                "Tiro con l'Arco", "Difesa", "Duellare",
                "Combattere con Armi possenti", "Protezione",
                "Combattere con Due Armi"
            ]
        },
        "Monaco": { hasSubclass: false, subclass: "Non Esistente" },
        "Paladino": {
            hasSubclass: true,
            subclassType: "oath",
            options: ["Giuramento di Devozione", "Giuramento degli Antichi", "Giuramento di Vendetta"]
        },
        "Ranger": {
            hasSubclass: true,
            subclassType: "favored enemy",
            options: [
                "Cacciatore di Taglie", "Custode del Velo", "Spezzamagie",
                "Cavaliere Ranger", "Persecutore Consacrato"
            ]
        },
        "Ladro": { hasSubclass: false, subclass: "Non Esistente" },
        "Stregone": {
            hasSubclass: true,
            subclassType: "origin",
            options: ["Magia Selvaggia", "Discendenza Draconica", "Stregoneria della Tempesta"]
        },
        "Warlock": {
            hasSubclass: true,
            subclassType: "patron",
            options: ["L'Immondo", "Il Grande Antico", "Il Signore Fatato"]
        },
        "Mago": { hasSubclass: false, subclass: "Non Esistente" }
    },

    // Backgrounds
    backgrounds: [
        "Accolito", "Ciarlatano", "Criminale", "Intrattenitore",
        "Eroe Popolare", "Artigiano di Gilda", "Nobile", "Forestiero",
        "Sapiente", "Soldato", "Monello"
    ],

    // Cantrips by class
    cantrips: {
        "Bardo": [
            "Beffa Crudele", "Interdizione alle Lame", "Mano Magica", "Colpo Accurato",
            "Amicizia", "Luci Danzanti", "Luce", "Illusione Minore"
        ],
        "Chierico": [
            "Taumaturgia", "Fiamma Sacra", "Guida", "Resistenza",
            "Luce", "Interdizione alle Lame", "Produrre Fiamma"
        ],
        "Druido": [
            "Guida", "Spruzzo Velenoso", "Produrre Fiamma", "Resistenza",
            "Randello Incantato", "Frusta di spine"
        ],
        "Stregone": [
            "Interdizione alle Lame", "Fiotto Acido", "Mano Magica", "Spruzzo Velenoso",
            "Colpo Accurato", "Amicizia", "Luci Danzanti", "Dardo di Fuoco", "Luce",
            "Raggio di Gelo", "Stretta Folgorante", "Illusione Minore", "Tocco Gelido"
        ],
        "Warlock": [
            "Interdizione alle Lame", "Tocco Gelido", "Deflagrazione Occulta", "Amicizia",
            "Mano Magica", "Illusione Minore", "Spruzzo Velenoso", "Colpo Accurato"
        ],
        "Mago": [
            "Fiotto Acido", "Tocco Gelido", "Dardo di Fuoco", "Spruzzo Velenoso",
            "Raggio di Gelo", "Stretta Folgorante", "Interdizione alle Lame", "Amicizia",
            "Luci Danzanti", "Luce", "Mano Magica", "Illusione Minore", "Colpo Accurato"
        ]
    },

    // Spells by class
    spells: {
        "Bardo": [
            "Amicizia con gli Animali", "Anatema", "Charme su Persone", "Cura Ferite",
            "Camuffare sé stesso", "Sussurri Dissonanti", "Luminescenza", "Caduta Morbida",
            "Parola Guaritrice", "Eroismo", "Passo Veloce", "Sonno",
            "Parlare con gli Animali", "Risata Incontenibile di Tasha", "Onda Tonante"
        ],
        "Stregone": [
            "Mani Brucianti", "Charme su Persone", "Globo Cromatico", "Spruzzo Colorato",
            "Camuffare sé Stesso", "Ritirata Rapida", "Vita Falsata", "Caduta Morbida",
            "Nube di Nebbia", "Coltello di Ghiaccio", "Salto Potenziato", "Armatura Magica",
            "Dardo Incantato", "Raggio di Infermità", "Scudo", "Sonno",
            "Onda Tonante", "Dardo Stregato"
        ],
        "Warlock": [
            "Armatura di Agathys", "Fame di Hadar", "Mani Brucianti", "Charme su Persone",
            "Comando", "Ritirata Rapida", "Intimorire Infernale", "Sortilegio",
            "Protezione dal Bene e dal Male", "Dardo Stregato"
        ],
        "Mago": [
            "Mani Brucianti", "Charme su Persone", "Globo Cromatico", "Spruzzo Colorato",
            "Camuffare sé Stesso", "Ritirata Rapida", "Vita Falsata", "Caduta Morbida",
            "Trova Famiglio", "Nube di Nebbia", "Unto", "Coltello di Ghiaccio",
            "Salto Potenziato", "Passo Veloce", "Armatura Magica", "Dardo Incantato",
            "Protezione dal Bene e dal Male", "Raggio di Infermità", "Scudo", "Sonno",
            "Risata Incontenibile di Tasha", "Onda Tonante", "Dardo Stregato"
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
            race: "Elfo",
            subrace: "Elfo Alto",
            class: null, // Random
            background: "Predefinito",
            deity: null,
            imageUrl: "https://bg3.wiki/w/images/1/1b/Portrait_Astarion.png"
        },
        "Cuorescuro": {
            race: "Mezzelfo",
            subrace: "Elfo Alto",
            class: "Chierico",
            background: "Predefinito",
            deity: "Shar",
            imageUrl: "https://bg3.wiki/w/images/thumb/1/14/Edward-vanderghote-shadowheart.jpg/600px-Edward-vanderghote-shadowheart.jpg.webp?20240208192049"
        },
        "Lae'Zel": {
            race: "Githyanki",
            subrace: "Non Esistente",
            class: "Guerriero",
            background: "Predefinito",
            deity: null,
            imageUrl: "https://bg3.wiki/w/images/8/86/Portrait_Lae%27zel.png"
        },
        "Gale": {
            race: "Umano",
            subrace: "Non Esistente",
            class: "Mago",
            background: "Predefinito",
            deity: null,
            imageUrl: "https://bg3.wiki/w/images/thumb/c/c0/Edward-vanderghote-gale-portrait.png/375px-Edward-vanderghote-gale-portrait.png.webp?20231218190359"
        },
        "Wyll": {
            race: "Umano",
            subrace: "Non Esistente",
            class: "Warlock",
            background: "Predefinito",
            deity: null,
            imageUrl: "https://bg3.wiki/w/images/thumb/f/fc/Edward-vanderghote-wyll.jpeg/600px-Edward-vanderghote-wyll.jpeg.webp?20240213111815"
        },
        "Karlach": {
            race: "Tiefling",
            subrace: "Tiefling di Zariel",
            class: null, // Random
            background: "Predefinito",
            deity: null,
            imageUrl: "https://bg3.wiki/w/images/thumb/2/2a/Edward-vanderghote-karlach.jpg/600px-Edward-vanderghote-karlach.jpg.webp?20240208192228"
        },
        "Oscura Pulsione": {
            race: null, // Random
            subrace: null, // Random
            class: null, // Random
            background: "Perseguitato",
            deity: null,
            imageUrl: "https://img.game8.co/3744734/0084153d1d60e6e5e9b9f5d564b014e5.png/show"
        },
        "Personalizzata": {
            race: null, // Random
            subrace: null, // Random
            class: null, // Random
            background: null, // Random
            deity: null,
            imageUrl: "https://therightpathok.org/wp-content/uploads/2019/05/male-silhouette-copy.jpg"
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
