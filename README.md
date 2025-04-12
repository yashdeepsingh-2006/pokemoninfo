# 🌟 Pokémon Info Explorer

A modern web application built with Next.js 14 that lets you explore detailed Pokémon information. Simply press Enter after typing a Pokémon's name to discover everything about your favorite Pokémon!

## ✨ Key Features

- Smart Search: Enter a Pokémon name and press Enter to fetch details
- Real-time Data: Instant access to PokéAPI data
- Responsive Design: Works seamlessly on all devices
- Context-based State Management: Efficient data handling using React Context

## 🛠 Tech Stack

- Frontend Framework: Next.js 14
- Styling: Tailwind CSS
- State Management: React Context API
- Data Source: PokéAPI
- Development Tools: 
  - ESLint
  - PostCSS
  - TypeScript configurations

## 📁 Project Structure
```
pokemoninfo/
├── src/
│   └── app/
│       ├── components/
│       │   ├── Search.js          # Search input component
│       │   ├── Main.js            # Main layout wrapper
│       │   ├── Nav.js             # Navigation bar
│       │   ├── Footer.js          # Footer with team links
│       │   └── Home.js            # Homepage component
│       ├── context/
│       │   └── SearchContext.js    # Global state management
│       ├── direct/
│       │   └── about/
│       │       └── page.js         # About page
│       ├── ClientLayout.js         # Client-side layout wrapper
│       ├── globals.css            # Global styles
│       ├── layout.js              # Root layout with fonts
│       └── page.js                # App entry point
├── public/
│   └── assets/                    # Static assets
├── node_modules/                  # Dependencies
├── .gitignore                     # Git ignore file
├── package.json                   # Project configuration
├── package-lock.json             # Dependency lock file
├── README.md                     # Project documentation
├── postcss.config.js            # PostCSS configuration
├── tailwind.config.js           # Tailwind CSS configuration
└── eslint.config.mjs            # ESLint configuration

```

## 🚀 Getting Started

1. Clone the repository
bash
git clone https://github.com/yourusername/pokemoninfo.git


2. Install dependencies
bash
cd pokemoninfo
npm install


3. Run development server
bash
npm run dev


4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 💡 How to Use

1. Type a Pokémon name in the search bar
2. Press Enter to search
3. View comprehensive information about the Pokémon
4. Explore different Pokémon by searching again

## ⚙ Core Functionality

- Search System: Press-Enter-to-Search functionality
- Data Fetching: Real-time API calls to PokéAPI
- State Management: Context API for global state
- Responsive UI: Mobile-first design approach

## 👥 Team Members

- Yashdeep Singh - Project Lead & Frontend Development
- Om Kamboj - Backend Integration
- Rakshit Sharma - UI/UX Design
- Rehan Khanchi - Frontend Development
- Tarshit Gupta - API Integration

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the Project
2. Create your Feature Branch (git checkout -b feature/AmazingFeature)
3. Commit your Changes (git commit -m 'Add some AmazingFeature')
4. Push to the Branch (git push origin feature/AmazingFeature)
5. Open a Pull Request

## 📧 Contact

For questions or feedback, please reach out to the team lead:
- Email: [your-email@example.com]
- GitHub: [@yourusername]

## 🙏 Acknowledgments

- PokéAPI for providing comprehensive Pokémon data
- Next.js team for the excellent framework
- Contributors and team members for their dedication

---

Note: This project is continuously evolving. Check back for updates and new features!