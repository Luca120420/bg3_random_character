// UIController Module - Manages UI interactions and display

const UIController = {
    currentMode: "without",
    currentCharacter: null,

    // Initialize the UI
    init() {
        this.setMode("without"); // Default mode
    },

    // Handle mode selection
    onModeSelect(mode) {
        this.setMode(mode);
    },

    // Set the current mode and update UI
    setMode(mode) {
        this.currentMode = mode;

        // Update button states
        const withoutBtn = document.getElementById('mode-without-origins');
        const withBtn = document.getElementById('mode-with-origins');

        withoutBtn.classList.remove('active');
        withBtn.classList.remove('active');

        if (mode === "without") {
            withoutBtn.classList.add('active');
        } else {
            withBtn.classList.add('active');
        }
    },

    // Handle generate button click
    onGenerateClick() {
        // Generate character
        const character = CharacterGenerator.generate(this.currentMode);
        this.currentCharacter = character;

        // Display character
        this.displayCharacter(character);
    },

    // Display character on the page
    displayCharacter(character) {
        // Show character sheet
        const characterSheet = document.getElementById('character-sheet');
        characterSheet.classList.remove('hidden');

        // Update all display elements
        document.getElementById('origin-display').textContent = character.origin;
        document.getElementById('race-display').textContent = character.race;
        document.getElementById('subrace-display').textContent = character.subrace;
        document.getElementById('class-display').textContent = character.class;
        document.getElementById('subclass-display').textContent = character.subclass;
        document.getElementById('background-display').textContent = character.background;

        // Display cantrips
        this.displayList('cantrips-display', character.cantrips);

        // Display racial cantrip
        document.getElementById('racial-cantrip-display').textContent = character.racialCantrip;

        // Display spells
        this.displayList('spells-display', character.spells);

        // Display deity
        document.getElementById('deity-display').textContent = character.deity;

        // Display natural explorer
        document.getElementById('explorer-display').textContent = character.naturalExplorer;

        // Display alignment
        document.getElementById('alignment-display').textContent = character.alignment;

        // Update image
        this.updateImage(character.imageUrl);

        // Scroll to character sheet
        characterSheet.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    },

    // Display a list of items with numbering
    displayList(elementId, items) {
        const element = document.getElementById(elementId);

        if (items[0] === "No" || items[0] === "Predefinito") {
            element.textContent = items[0];
        } else {
            // Create numbered list
            const numberedList = items.map((item, index) => `${index + 1}. ${item}`).join(', ');
            element.textContent = numberedList;
        }
    },

    // Update character image
    updateImage(url) {
        const imgElement = document.getElementById('character-image');
        const inputElement = document.getElementById('image-url-input');

        if (url && this.isValidUrl(url)) {
            imgElement.src = url;
            inputElement.value = url;
        } else {
            // Use fallback placeholder
            imgElement.src = 'https://via.placeholder.com/400x500/3a3a3a/d4af37?text=Custom+Character';
            inputElement.value = '';
        }
    },

    // Handle image URL change
    onImageUrlChange(newUrl) {
        if (this.currentCharacter) {
            this.currentCharacter.imageUrl = newUrl;
            this.updateImage(newUrl);
        }
    },

    // Validate URL format
    isValidUrl(string) {
        try {
            new URL(string);
            return true;
        } catch (_) {
            return false;
        }
    }
};
