<div align="center">

![Tawf Islamic Foundation Logo](public/images/tawftransparent.png)

# Tawf Islamic Foundation

*The non-profit, public-trust cornerstone of the Tawf ecosystem.*

**Generating legitimacy, trust, and genuine community ownership over ethical Web3 finance.**

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.2-646CFF?logo=vite)](https://vitejs.dev/)

</div>

---

## About

The **Tawf Islamic Foundation** is a non-profit organization dedicated to building ethical Web3 financial solutions grounded in Shariah-compliant principles. We serve as the public-trust cornerstone of the Tawf ecosystem, generating legitimacy, trust, and genuine community ownership.

### Our Mission

- Promote ethical finance through Web3 technology
- Ensure Shariah compliance in decentralized financial systems
- Build transparent and trustworthy governance structures
- Foster genuine community ownership and participation

### Project Structure

```
tawf-foundation/
├── public/
│   ├── images/          # Static images (logos, assets)
│   └── icons/           # Favicon and app icons
├── src/
│   ├── components/      # React components
│   │   ├── Layout.tsx   # Main layout with nav & footer
│   │   ├── Landing.tsx  # Homepage sections
│   │   └── Manifesto.tsx # Manifesto page
│   ├── styles/          # Global CSS files
│   ├── assets/          # React-imported assets
│   ├── App.tsx          # Root app component
│   └── main.tsx         # Application entry point
├── index.html           # HTML template
├── package.json         # Dependencies & scripts
├── tsconfig.json        # TypeScript config
└── vite.config.ts       # Vite build config
```

---

## Getting Started

### Prerequisites

- **Node.js** (v18 or higher)
- **npm** or **yarn** or **pnpm**

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/tawf-labs/tawf-foundation.git
   cd tawf-foundation
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

---

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server on port 3000 |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run TypeScript type checking |
| `npm run clean` | Remove dist folder |

---

## Tech Stack

- **Framework:** React 19 with TypeScript
- **Build Tool:** Vite 6
- **Routing:** React Router DOM v7
- **Styling:** Tailwind CSS v4
- **Animations:** Motion (Framer Motion)

---

## Pages

| Route | Description |
|-------|-------------|
| `/` | Landing page with mission, framework, governance & ecosystem |
| `/manifesto` | Full Tawf Islamic Foundation manifesto |

---

## Environment Variables

Create a `.env` file in the root directory (see `.env.example` for reference):

```env
# Add your environment variables here
```

---

## Contributing

We welcome contributions from the community! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## Contact

- **Website:** [tawf.foundation](https://tawf.foundation)
- **GitHub:** [@tawf-labs](https://github.com/tawf-labs)
- **Email:** contact@tawf.foundation

---

<div align="center">

**Built with trust &hearts; for the Tawf community**

</div>
