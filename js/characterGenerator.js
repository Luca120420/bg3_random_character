// CharacterGenerator Module - Core randomization logic

const CharacterGenerator = {
    // Main generation method
    generate(mode) {
        const character = {};
        
        // Select origin based on mode
        character.origin = this.selectOrigin(mode);
        
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
    selectOrigin(mode) {
        const origins = GameData.getOriginOptions(mode);
        
        if (mode === "with") {
            // 80% for Dark Urge + Custom (40% each)
            // 20% for named origins (split among 6)
            const random = Math.random();
            if (random < 0.4) return "Dark Urge";
            if (random < 0.8) return "Custom";
            
            // Remaining 20% for named origins
            const namedOrigins = origins.filter(o => o !== "Dark Urge" && o !== "Custom");
            return this.randomChoice(namedOrigins);
        } else {
            // 50/50 split between Dark Urge and Custom
            return Math.random() < 0.5 ? "Dark Urge" : "Custom";
        }
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
        if (origin === "Dark Urge") {
            return "Perseguitato";
        }
        if (origin === "Custom") {
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
            "Bard": 2,
            "Cleric": 3,
            "Druid": 2,
            "Sorcerer": 4,
            "Warlock": 2,
            "Wizard": 3
        };

        const count = cantripCounts[className];
        if (count) {
            const cantripPool = GameData.getCantrips(className);
            result.classCantrips = this.selectUniqueItems(cantripPool, count);
        } else {
            result.classCantrips = ["No"];
        }

        // Racial cantrip for High Elf and High Half-Elf
        if (subrace === "High Elf" || subrace === "High Half-Elf") {
            const wizardCantrips = GameData.getCantrips("Wizard");
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
            "Bard": 4,
            "Sorcerer": 2,
            "Warlock": 2,
            "Wizard": 6
        };

        // Cleric and Druid have prepared spells
        if (className === "Cleric" || className === "Druid") {
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
        if (origin === "Shadowheart") {
            return "Shar";
        }
        if (className === "Cleric") {
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
