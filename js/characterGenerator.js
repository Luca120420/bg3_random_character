// CharacterGenerator Module - Core randomization logic

const CharacterGenerator = {
    // Main generation method
    generate(mode, customProbabilities = null) {
        const character = {};
        
        // Select origin based on mode and custom probabilities
        character.origin = this.selectOrigin(mode, customProbabilities);
        
        // Apply origin-specific predefined attributes
        const originDef = GameData.originDefinitions[character.origin];
        
        // Select race and subrace
        character.race = originDef.race || this.selectRace();
        character.subrace = originDef.subrace || this.selectSubrace(character.race);
        
        // Select class and subclass
        character.class = originDef.class || this.selectClass();
        character.subclass = this.selectSubclass(character.class);
        
        // Select background
        character.background = originDef.background || this.selectBackground(character.origin);
        
        // Select cantrips (class + racial)
        const cantripResult = this.selectCantrips(character.class, character.subrace);
        character.cantrips = cantripResult.classCantrips;
        character.racialCantrip = cantripResult.racialCantrip;
        
        // Select spells
        character.spells = this.selectSpells(character.class);
        
        // Select deity
        character.deity = originDef.deity || this.selectDeity(character.class, character.origin);
        
        // Select natural explorer
        character.naturalExplorer = this.selectNaturalExplorer(character.class);
        
        // Select alignment
        character.alignment = this.selectAlignment();
        
        // Set image URL
        character.imageUrl = originDef.imageUrl;
        
        return character;
    },

    // Helper: Random choice from array
    randomChoice(array) {
        return array[Math.floor(Math.random() * array.length)];
    },

    // Helper: Select unique items from array
    selectUniqueItems(pool, count) {
        const selected = [];
        const available = [...pool];
        
        for (let i = 0; i < count && available.length > 0; i++) {
            const index = Math.floor(Math.random() * available.length);
            selected.push(available[index]);
            available.splice(index, 1);
        }
        
        return selected;
    },

    // Select origin with weighted probability
    selectOrigin(mode, customProbabilities = null) {
        const origins = GameData.getOriginOptions(mode);
        
        if (customProbabilities) {
            // Use custom probabilities
            return this.selectWithCustomProbabilities(origins, customProbabilities);
        }
        
        // Use default probabilities
        if (mode === "with") {
            // 80% for Oscura Pulsione + Personalizzata (40% each)
            // 20% for named origins (split among 6)
            const random = Math.random();
            if (random < 0.4) return "Oscura Pulsione";
            if (random < 0.8) return "Personalizzata";
            
            // Remaining 20% for named origins
            const namedOrigins = origins.filter(o => o !== "Oscura Pulsione" && o !== "Personalizzata");
            return this.randomChoice(namedOrigins);
        } else {
            // 50/50 split between Oscura Pulsione and Personalizzata
            return Math.random() < 0.5 ? "Oscura Pulsione" : "Personalizzata";
        }
    },

    // Select origin using custom probabilities
    selectWithCustomProbabilities(origins, probabilities) {
        const random = Math.random() * 100; // Random number between 0 and 100
        let cumulative = 0;
        
        for (const origin of origins) {
            cumulative += probabilities[origin] || 0;
            if (random <= cumulative) {
                return origin;
            }
        }
        
        // Fallback to last origin if something goes wrong
        return origins[origins.length - 1];
    },

    // Select random race
    selectRace() {
        return this.randomChoice(GameData.getRaceList());
    },

    // Select subrace based on race
    selectSubrace(race) {
        const subraces = GameData.getSubraces(race);
        return this.randomChoice(subraces);
    },

    // Select random class
    selectClass() {
        return this.randomChoice(GameData.getClassList());
    },

    // Select subclass based on class
    selectSubclass(className) {
        const options = GameData.getSubclassOptions(className);
        if (!options) {
            return "Non Esistente";
        }
        return this.randomChoice(options);
    },

    // Select background based on origin
    selectBackground(origin) {
        if (origin === "Oscura Pulsione") {
            return "Perseguitato";
        }
        if (origin === "Personalizzata") {
            return this.randomChoice(GameData.backgrounds);
        }
        return "Predefinito";
    },

    // Select cantrips (class + racial)
    selectCantrips(className, subrace) {
        const result = {
            classCantrips: [],
            racialCantrip: "No"
        };

        // Class cantrips
        const cantripCounts = {
            "Bardo": 2,
            "Chierico": 3,
            "Druido": 2,
            "Stregone": 4,
            "Warlock": 2,
            "Mago": 3
        };

        const count = cantripCounts[className];
        if (count) {
            const cantripPool = GameData.getCantrips(className);
            result.classCantrips = this.selectUniqueItems(cantripPool, count);
        } else {
            result.classCantrips = ["No"];
        }

        // Racial cantrip for Elfo Alto and Mezzelfo Alto
        if (subrace === "Elfo Alto" || subrace === "Mezzelfo Alto") {
            const wizardCantrips = GameData.getCantrips("Mago");
            const allCantrips = result.classCantrips[0] === "No" ? [] : result.classCantrips;
            
            // Select a racial cantrip that's not already in class cantrips
            const availableRacialCantrips = wizardCantrips.filter(c => !allCantrips.includes(c));
            if (availableRacialCantrips.length > 0) {
                result.racialCantrip = this.randomChoice(availableRacialCantrips);
            }
        }

        return result;
    },

    // Select spells based on class
    selectSpells(className) {
        const spellCounts = {
            "Bardo": 4,
            "Stregone": 2,
            "Warlock": 2,
            "Mago": 6
        };

        // Chierico and Druido have prepared spells
        if (className === "Chierico" || className === "Druido") {
            return ["Predefinito"];
        }

        const count = spellCounts[className];
        if (count) {
            const spellPool = GameData.getSpells(className);
            return this.selectUniqueItems(spellPool, count);
        }

        return ["No"];
    },

    // Select deity for Clerics
    selectDeity(className, origin) {
        if (origin === "Cuorescuro") {
            return "Shar";
        }
        if (className === "Chierico") {
            return this.randomChoice(GameData.deities);
        }
        return "No";
    },

    // Select natural explorer for Rangers
    selectNaturalExplorer(className) {
        if (className === "Ranger") {
            return this.randomChoice(GameData.naturalExplorer);
        }
        return "No";
    },

    // Select random alignment
    selectAlignment() {
        return this.randomChoice(GameData.alignments);
    }
};
