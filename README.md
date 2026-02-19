# BG3 Character Generator

A beautiful, user-friendly web application for generating random Baldur's Gate 3 characters. This tool transforms the original Python-based character generator into an interactive browser experience with enhanced visuals and customizable character portraits.

## Features

### Two Generation Modes

- **Script senza personaggi Origine** (Without Origin Characters): Generates only Dark Urge or Custom characters with a 50/50 probability split
- **Script con personaggi origine** (With Origin Characters): Includes all 8 origin options with weighted probability (80% for Dark Urge/Custom, 20% for named origins)

### Complete Character Generation

The generator creates fully randomized characters with:

- **Origin Selection**: Choose from Astarion, Lae'Zel, Gale, Shadowheart, Wyll, Karlach, Dark Urge, or Custom
- **Race & Subrace**: 11 races with their respective subraces (Elf, Tiefling, Drow, Human, Githyanki, Dwarf, Half-Elf, Halfling, Gnome, Dragonborn, Half-Orc)
- **Class & Subclass**: 12 classes with appropriate subclass options (Barbarian, Bard, Cleric, Druid, Fighter, Monk, Paladin, Ranger, Rogue, Sorcerer, Warlock, Wizard)
- **Background**: 11 backgrounds including Accolito, Criminale, Soldato, and more
- **Cantrips & Spells**: Class-appropriate spell selection with duplicate prevention
- **Racial Cantrips**: Additional cantrips for High Elves and High Half-Elves
- **Deity**: Random deity selection for Clerics (21 deities available)
- **Natural Explorer**: Specialized terrain/skill for Rangers (5 options)
- **Alignment**: All 9 D&D alignments (Lawful Good to Chaotic Evil)

### Origin Character Rules

Named origin characters maintain their canonical attributes:
- **Shadowheart**: High Elf Cleric who worships Shar
- **Lae'Zel**: Githyanki Fighter
- **Gale**: Wizard with appropriate spells
- **Wyll**: Warlock with appropriate cantrips and spells
- **Astarion**: High Elf with randomized class
- **Karlach**: Predefined race with randomized attributes

### Customizable Character Portraits

- Default character images for all origin characters
- Editable URL field to customize character portraits
- Automatic fallback for invalid or missing images
- Support for external image hosting

## How to Run Locally

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, or Edge)
- No build tools or dependencies required!

### Running the Application

1. **Clone or download this repository**
   ```bash
   git clone <repository-url>
   cd bg3-character-generator
   ```

2. **Open the application**
   - Simply open `index.html` in your web browser
   - Or use a local development server:
     ```bash
     # Using Python 3
     python -m http.server 8000
     
     # Using Node.js (if you have http-server installed)
     npx http-server
     ```
   - Navigate to `http://localhost:8000` in your browser

3. **Start generating characters!**
   - Select your preferred generation mode
   - Click "Generate Character"
   - Customize the character portrait URL if desired
   - Generate as many characters as you want

## File Structure

```
bg3-character-generator/
├── index.html                 # Main HTML file with semantic structure
├── css/
│   ├── styles.css            # Main stylesheet with BG3-inspired design
│   └── responsive.css        # Responsive design for mobile/tablet/desktop
├── js/
│   ├── gameData.js           # All BG3 game data (races, classes, spells, etc.)
│   ├── characterGenerator.js # Core randomization logic and generation engine
│   ├── uiController.js       # UI management and DOM manipulation
│   └── app.js                # Application entry point and event listeners
├── script_to_convert.py      # Original Python script (reference)
├── .gitignore                # Git exclusions (.kiro/, node_modules/, etc.)
└── README.md                 # This file
```

### Module Descriptions

**gameData.js**
- Contains all static game data from the original Python script
- Defines races, subraces, classes, subclasses, backgrounds, spells, cantrips, deities, and alignments
- Provides data access methods for the generator
- Maintains Italian terminology from the original script

**characterGenerator.js**
- Implements weighted probability logic for origin selection
- Handles race/subrace and class/subclass randomization
- Manages cantrip and spell selection with duplicate prevention
- Applies origin-specific predefined attributes
- Returns complete character objects

**uiController.js**
- Manages all user interface interactions
- Handles mode selection and button states
- Updates character sheet display with generated data
- Manages character image placeholders and URL editing
- Provides smooth scrolling and visual feedback

**app.js**
- Initializes the application on page load
- Sets up event listeners for all interactive elements
- Coordinates between UI and generation modules

## Deployment

This is a static web application with no backend requirements, making deployment simple and flexible.

### Deployment Options

**GitHub Pages**
1. Push your code to a GitHub repository
2. Go to Settings → Pages
3. Select your branch (usually `main`)
4. Your site will be available at `https://yourusername.github.io/bg3-character-generator`

**Netlify**
1. Create a free account at [netlify.com](https://www.netlify.com)
2. Drag and drop your project folder
3. Your site will be live instantly with a custom URL

**Vercel**
1. Create a free account at [vercel.com](https://vercel.com)
2. Import your GitHub repository or upload files
3. Deploy with zero configuration

**Any Static Hosting Service**
- Simply upload all files to any web hosting service
- No server-side processing required
- Works with AWS S3, Azure Static Web Apps, Cloudflare Pages, etc.

## Technical Details

### Technology Stack

- **Frontend**: Vanilla JavaScript (ES6+)
- **Markup**: HTML5 with semantic elements
- **Styling**: CSS3 with Grid and Flexbox
- **No Dependencies**: No frameworks or build tools required
- **Browser Support**: All modern browsers (Chrome, Firefox, Safari, Edge)

### Design Philosophy

- **Dark Fantasy Aesthetic**: Inspired by Baldur's Gate 3's visual style
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Accessibility**: ARIA labels, keyboard navigation, high contrast ratios
- **Performance**: Fast loading, sub-2-second character generation
- **Maintainability**: Modular code structure with clear separation of concerns

### Game Logic Accuracy

This web application maintains 100% functional parity with the original Python script:
- All 11 races with their respective subraces
- All 12 classes with their respective subclasses
- All spell lists and cantrip lists
- All 21 deities and 5 Natural Explorer options
- Exact Italian terminology from the original
- Weighted probability distributions for origin selection

## Original Python Script

This web application is based on the Python script `script_to_convert.py` included in this repository. The original script was created for Google Colab and provided the foundation for all game data and randomization logic.

**Original Script Location**: [Google Colab Notebook](https://colab.research.google.com/drive/1bm8Ps3L-_8V0vakBrkvSkYGy1fHOs6SX)

The web version enhances the original with:
- Beautiful, interactive user interface
- Customizable character portraits
- Responsive design for all devices
- Instant character generation without running Python
- Easy sharing and deployment

## Contributing

Contributions are welcome! If you'd like to add features or fix bugs:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is provided as-is for personal use and enjoyment. Baldur's Gate 3 and all related content are property of Larian Studios and Wizards of the Coast.

## Acknowledgments

- Original Python script creator
- Larian Studios for Baldur's Gate 3
- The BG3 community for character portraits and resources
- [BG3 Wiki](https://bg3.wiki) for character portrait images

---

**Enjoy creating your random BG3 characters!** 🎲⚔️🐉
