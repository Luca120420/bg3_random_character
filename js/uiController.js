// UIController Module - Manages UI interactions and display

const UIController = {
    currentMode: "without",
    currentCharacter: null,
    originProbabilities: {},

    // Initialize the UI
    init() {
        this.setMode("without"); // Default mode
        this.initializeProbabilities();
    },

    // Initialize default probabilities
    initializeProbabilities() {
        // Default probabilities for "without" mode
        this.originProbabilities.without = {
            "Oscura Pulsione": 50,
            "Personalizzata": 50
        };

        // Default probabilities for "with" mode
        this.originProbabilities.with = {
            "Astarion": 3.33,
            "Lae'Zel": 3.33,
            "Gale": 3.33,
            "Cuorescuro": 3.33,
            "Wyll": 3.33,
            "Karlach": 3.33,
            "Oscura Pulsione": 40,
            "Personalizzata": 40
        };
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

        // Update probability controls
        this.updateProbabilityControls(mode);
    },

    // Update probability controls based on mode
    updateProbabilityControls(mode) {
        try {
            const controlsSection = document.getElementById('probability-controls');
            const slidersContainer = document.getElementById('probability-sliders');

            if (!controlsSection || !slidersContainer) {
                console.error('Probability controls elements not found');
                return;
            }

            // Show controls
            controlsSection.classList.remove('hidden');

            // Clear existing sliders
            slidersContainer.innerHTML = '';

            // Get origins for current mode
            const origins = GameData.getOriginOptions(mode);
            const probabilities = this.originProbabilities[mode];

            console.log('Creating sliders for mode:', mode, 'origins:', origins);

            // Create slider for each origin
            origins.forEach(origin => {
                const sliderDiv = document.createElement('div');
                sliderDiv.className = 'probability-slider';

                const headerDiv = document.createElement('div');
                headerDiv.className = 'slider-header';

                const label = document.createElement('span');
                label.className = 'slider-label';
                label.textContent = origin;

                const valueSpan = document.createElement('span');
                valueSpan.className = 'slider-value';
                const safeOriginId = origin.replace(/[^a-zA-Z0-9]/g, '-');
                valueSpan.id = `value-${safeOriginId}`;
                valueSpan.textContent = `${probabilities[origin].toFixed(1)}%`;

                headerDiv.appendChild(label);
                headerDiv.appendChild(valueSpan);

                const slider = document.createElement('input');
                slider.type = 'range';
                slider.className = 'slider-input';
                slider.min = '0';
                slider.max = '100';
                slider.step = '0.1';
                slider.value = probabilities[origin];
                slider.id = `slider-${safeOriginId}`;

                // Add event listener
                slider.addEventListener('input', (e) => {
                    this.onProbabilityChange(origin, parseFloat(e.target.value));
                });

                sliderDiv.appendChild(headerDiv);
                sliderDiv.appendChild(slider);
                slidersContainer.appendChild(sliderDiv);
            });

            console.log('Probability controls updated successfully');
        } catch (error) {
            console.error('Error updating probability controls:', error);
        }
    },

    // Handle probability change
    onProbabilityChange(origin, newValue) {
        const mode = this.currentMode;
        this.originProbabilities[mode][origin] = newValue;

        // Update display
        const valueSpan = document.getElementById(`value-${origin.replace(/[^a-zA-Z0-9]/g, '-')}`);
        valueSpan.textContent = `${newValue.toFixed(1)}%`;

        // Normalize probabilities to sum to 100%
        this.normalizeProbabilities(mode, origin);
    },

    // Normalize probabilities to sum to 100%
    normalizeProbabilities(mode, changedOrigin) {
        try {
            const probabilities = this.originProbabilities[mode];
            const origins = Object.keys(probabilities);
            
            // Calculate total
            const total = origins.reduce((sum, origin) => sum + probabilities[origin], 0);
            
            if (total === 0) {
                // Reset to equal distribution
                const equalValue = 100 / origins.length;
                origins.forEach(origin => {
                    probabilities[origin] = equalValue;
                });
            } else if (total !== 100) {
                // Normalize all values proportionally
                const factor = 100 / total;
                origins.forEach(origin => {
                    probabilities[origin] = probabilities[origin] * factor;
                });
            }

            // Update all sliders and displays
            origins.forEach(origin => {
                const safeOriginId = origin.replace(/[^a-zA-Z0-9]/g, '-');
                const slider = document.getElementById(`slider-${safeOriginId}`);
                const valueSpan = document.getElementById(`value-${safeOriginId}`);
                
                if (slider && valueSpan) {
                    slider.value = probabilities[origin];
                    valueSpan.textContent = `${probabilities[origin].toFixed(1)}%`;
                }
            });
        } catch (error) {
            console.error('Error normalizing probabilities:', error);
        }
    },

    // Get current probabilities for character generation
    getCurrentProbabilities() {
        return this.originProbabilities[this.currentMode];
    },

    // Handle generate button click
    onGenerateClick() {
        // Generate character with custom probabilities
        const character = CharacterGenerator.generate(this.currentMode, this.getCurrentProbabilities());
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

        if (url && this.isValidUrl(url)) {
            imgElement.src = url;
        } else {
            // Use fallback SVG data URI
            imgElement.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='500'%3E%3Crect fill='%233a3a3a' width='400' height='500'/%3E%3Ctext fill='%23d4af37' font-family='Arial' font-size='24' x='50%25' y='50%25' text-anchor='middle' dominant-baseline='middle'%3EPersonaggio Personalizzato%3C/text%3E%3C/svg%3E";
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
