// Main Application Entry Point

document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM Content Loaded - Initializing BG3 Character Generator');
    
    try {
        // Initialize the UI Controller
        UIController.init();
        console.log('UIController initialized');
        
        // Set up event listeners for mode buttons
        const withoutBtn = document.getElementById('mode-without-origins');
        const withBtn = document.getElementById('mode-with-origins');
        const generateBtn = document.getElementById('generate-btn');
        
        if (!withoutBtn || !withBtn || !generateBtn) {
            console.error('Required buttons not found in DOM');
            return;
        }
        
        withoutBtn.addEventListener('click', () => {
            console.log('Without origins button clicked');
            UIController.onModeSelect('without');
        });
        
        withBtn.addEventListener('click', () => {
            console.log('With origins button clicked');
            UIController.onModeSelect('with');
        });
        
        // Set up event listener for generate button
        generateBtn.addEventListener('click', () => {
            console.log('Generate button clicked');
            UIController.onGenerateClick();
        });
        
        console.log('BG3 Character Generator initialized successfully');
    } catch (error) {
        console.error('Error initializing application:', error);
    }
});
