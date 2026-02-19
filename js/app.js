// Main Application Entry Point

document.addEventListener('DOMContentLoaded', () => {
    // Initialize the UI Controller
    UIController.init();
    
    // Set up event listeners for mode buttons
    document.getElementById('mode-without-origins').addEventListener('click', () => {
        UIController.onModeSelect('without');
    });
    
    document.getElementById('mode-with-origins').addEventListener('click', () => {
        UIController.onModeSelect('with');
    });
    
    // Set up event listener for generate button
    document.getElementById('generate-btn').addEventListener('click', () => {
        UIController.onGenerateClick();
    });
    
    // Set up event listener for image URL input
    document.getElementById('image-url-input').addEventListener('change', (e) => {
        UIController.onImageUrlChange(e.target.value);
    });
    
    console.log('BG3 Character Generator initialized');
});
