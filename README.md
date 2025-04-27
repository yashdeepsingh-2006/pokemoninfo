# 🌟 Pokémon Info Explorer

A modern web application that lets you explore detailed information about Pokémon and characters from the series. Built with Next.js 14, this app provides a seamless experience for discovering your favorite Pokémon and characters!

## ✨ Key Features

- **Dual Search System**:
  - Pokémon Search: Simply type a Pokémon name and press Enter
  - Character Search: Use `/ch` prefix to search for characters (e.g., `/ch brock`)
- **AI-Powered Suggestions**: Get smart corrections for misspelled Pokémon names
- **Rich Information Display**:
  - Comprehensive Pokémon stats and abilities
  - Multiple sprite views (Official, Front, Back)
  - Character profiles with teams and specialties
- **Responsive Design**: Works seamlessly across all devices
- **Real-time Data**: Instant access to PokéAPI and character database

## 🚀 Getting Started

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/pokemoninfo.git
cd pokemoninfo
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**
Create a `.env.local` file:
```env
NEXT_PUBLIC_GEMINI_API_KEY=your_gemini_api_key_here
```

4. **Run development server**
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## 💡 How to Use

### Pokémon Search
1. Type a Pokémon name in the search bar
2. Press Enter to view detailed information
3. Explore different views using the sprite selection buttons

### Character Search
1. Type `/ch` followed by a character name (e.g., `/ch brock`)
2. Press Enter to view character details
3. Discover character roles, teams, and specialties

## 🛠 Tech Stack

- **Frontend**: Next.js 14
- **Styling**: Tailwind CSS
- **State Management**: React Context API
- **Data Sources**: 
  - PokéAPI for Pokémon data
  - Custom JSON database for character information
- **AI Integration**: Google Gemini API for name suggestions
- **Development Tools**: ESLint, PostCSS

## 📁 Project Structure
```
pokemoninfo/
├── src/
│   └── app/
│       ├── components/          # React components
│       │   ├── Easteregg.js    # Character display component
│       │   ├── Footer.js       # Footer component
│       │   ├── Home.js         # Main Pokemon display
│       │   ├── Loader.js       # Loading animation
│       │   ├── Nav.js          # Navigation bar
│       │   ├── Search.js       # Search functionality
│       │   └── Welcome.js      # Landing page
│       │
│       ├── context/            # Global state management
│       │   └── SearchContext.js # Search state provider
│       │
│       ├── utils/              # Utility functions
│       │   ├── ai.js          # AI integration helpers
│       │   └── easteregg.json # Character database
│       │
│       ├── direct/             # Route pages
│       │   ├── about/         # About page
│       │   ├── contact/       # Contact page
│       │   └── easter/        # Character route
│       │
│       ├── layout.js          # Root layout
│       └── page.js           # Entry point
│
├── public/                    # Static assets
│   ├── Home_logo.png         # App logo
│   └── logo.png              # Nav logo
│
├── .env.local                # Environment variables
├── .gitignore               # Git ignore rules
├── package.json             # Dependencies and scripts
├── postcss.config.js        # PostCSS configuration
├── README.md                # Project documentation
└── tailwind.config.js       # Tailwind CSS configuration
```

### Key Directories and Files

- **/src/app/components/**: All React components
  - Organized by functionality
  - Each component has a single responsibility
  - Reusable UI elements

- **/src/app/context/**: State management
  - Global application state
  - Search functionality context
  - Shared data management

- **/src/app/utils/**: Helper functions
  - AI integration utilities
  - Character data storage
  - Common functions

- **/src/app/direct/**: Page routes
  - Separate routes for different pages
  - Clean URL structure
  - Easy navigation

- **/public/**: Static assets
  - Images and icons
  - Public resources
  - Cached assets

## ⚙️ Core Features

- **Search System**
  - Press-Enter-to-Search functionality
  - Character search with `/ch` prefix
  - AI-powered name corrections
  
- **Data Display**
  - Multiple sprite views
  - Comprehensive stats
  - Character profiles
  - Team information

- **UI/UX**
  - Responsive design
  - Loading states
  - Error handling
  - User feedback

## 👥 Team & Roles

- **Yashdeep Singh** - Project Lead & Core Development
  - Initial project setup
  - AI integration with Gemini API
  - Core features implementation
  - Bug fixes and maintenance

- **Om Kamboj** - Backend & Integration
  - Contact and About pages
  - Easter egg component
  - Data restructuring
  - Evolution data management

- **Rakshit Sharma** - UI/UX & Frontend Features
  - Home component updates
  - Loading states implementation
  - Frontend features enhancement
  - Global styling and layouts

- **Rehan Khanchi** - Search & Navigation
  - Search functionality
  - Navigation components
  - Character database
  - Documentation (README)

- **Tarshit Gupta** - Frontend & Asset Management
  - File structure optimization
  - Navigation bar updates
  - Global CSS styling
  - Asset management

## 🔄 Future Updates

- [ ] Advanced search filters
- [ ] Compare Pokémon feature
- [ ] More character information
- [ ] Team builder functionality
- [ ] Battle simulation

## 🤝 Contributing

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- PokéAPI for Pokémon data
- Google Gemini API for AI features
- Next.js team for the framework
- All contributors and team members

---

Made with ❤️ by the Pokémon Info Explorer team
