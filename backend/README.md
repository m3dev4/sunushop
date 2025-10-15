# 🛍️ Sunu Shop - Backend

> Marketplace e-commerce backend built with Node.js, Express, and TypeScript

[![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-blue.svg)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-LTS-green.svg)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-5.1.0-lightgrey.svg)](https://expressjs.com/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

---

## 📋 Table of Contents

- [About](#about)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Scripts](#scripts)
- [Environment Variables](#environment-variables)
- [Configuration](#configuration)
- [Development](#development)
- [Code Quality](#code-quality)
- [Author](#author)

---

## 🎯 About

Sunu Shop est une plateforme de marketplace e-commerce construite avec les dernières technologies web. Le backend fournit une API RESTful robuste et sécurisée pour gérer les opérations de commerce électronique.

---

## ✨ Features

- ✅ **TypeScript** - Type safety et meilleure DX
- ✅ **ES Modules** - Utilisation du système de modules moderne
- ✅ **Express.js** - Framework web minimaliste et flexible
- ✅ **Security First** - Helmet, CORS, Rate Limiting
- ✅ **Authentication** - JWT avec tokens de rafraîchissement
- ✅ **Validation** - Zod pour la validation des schémas
- ✅ **Code Quality** - ESLint + Prettier configurés
- ✅ **Hot Reload** - Nodemon pour le développement
- ✅ **Environment Config** - Gestion centralisée des variables d'environnement

---

## 🛠️ Tech Stack

### Core

- **Runtime:** Node.js (LTS)
- **Language:** TypeScript 5.9.3
- **Framework:** Express.js 5.1.0
- **Module System:** ES Modules (ESM)

### Security & Middleware

- **helmet** - Sécurisation des headers HTTP
- **cors** - Gestion des requêtes cross-origin
- **express-rate-limit** - Protection contre les attaques DDoS
- **bcrypt** - Hashing sécurisé des mots de passe
- **jsonwebtoken** - Authentification JWT

### Utilities

- **dotenv** - Gestion des variables d'environnement
- **zod** - Validation et parsing de schémas
- **compression** - Compression GZIP des réponses
- **morgan** - Logging HTTP
- **cookie-parser** - Parsing des cookies

### Development Tools

- **nodemon** - Hot reload en développement
- **ts-node** - Exécution directe de TypeScript
- **ESLint** - Linting du code
- **Prettier** - Formatage du code

---

## 📁 Project Structure

```
backend/
├── src/
│   ├── common/          # Utilitaires et helpers partagés
│   │   └── utils/       # Fonctions utilitaires
│   ├── config/          # Configuration de l'application
│   │   └── env/         # Gestion des variables d'environnement
│   ├── controllers/     # Contrôleurs (logique métier)
│   ├── lib/            # Bibliothèques et clients externes
│   ├── mails/          # Templates et gestion des emails
│   ├── routes/         # Définition des routes API
│   ├── script/         # Scripts utilitaires
│   ├── security/       # Configuration de sécurité
│   ├── services/       # Services métier
│   ├── templates/      # Templates de réponses/emails
│   └── index.ts        # Point d'entrée de l'application
├── devOps/             # Scripts DevOps et déploiement
├── .env                # Variables d'environnement (production)
├── .env.local          # Variables d'environnement (development)
├── .prettierrc.json    # Configuration Prettier
├── eslint.config.ts    # Configuration ESLint
├── tsconfig.json       # Configuration TypeScript
└── package.json        # Dépendances et scripts
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** >= 18.x (LTS recommandé)
- **npm** ou **pnpm** (package manager)

### Installation

1. **Clone le repository**

   ```bash
   git clone <repository-url>
   cd sunushop/backend
   ```

2. **Installer les dépendances**

   ```bash
   npm install
   # ou
   pnpm install
   ```

3. **Configurer les variables d'environnement**

   ```bash
   # Copier le fichier d'exemple
   cp .env.local .env

   # Éditer les variables selon votre environnement
   ```

4. **Lancer le serveur de développement**
   ```bash
   npm run dev
   ```

Le serveur démarre sur `http://localhost:8080` par défaut.

---

## 📜 Scripts

| Script             | Description                                            |
| ------------------ | ------------------------------------------------------ |
| `npm run dev`      | Lance le serveur en mode développement avec hot-reload |
| `npm start`        | Lance le serveur en mode production                    |
| `npm run lint`     | Vérifie le code avec ESLint                            |
| `npm run lint:fix` | Corrige automatiquement les erreurs ESLint             |
| `npm run format`   | Formate le code avec Prettier                          |
| `npm test`         | Lance les tests (à configurer)                         |

---

## 🔐 Environment Variables

### Fichiers de configuration

- **`.env`** - Configuration pour la production
- **`.env.local`** - Configuration pour le développement

### Variables disponibles

```bash
# Application
NODE_ENV=development          # Environment: development | production
PORT=8080                     # Port du serveur

# Database (à ajouter selon vos besoins)
# DATABASE_URL=

# JWT (à ajouter)
# JWT_SECRET=
# JWT_REFRESH_SECRET=
# JWT_EXPIRES_IN=

# Email (à ajouter)
# SMTP_HOST=
# SMTP_PORT=
# SMTP_USER=
# SMTP_PASS=
```

> ⚠️ **Important:** Ne jamais commit les fichiers `.env` dans Git. Ils sont déjà dans `.gitignore`.

---

## ⚙️ Configuration

### TypeScript Configuration

Le projet utilise une configuration TypeScript stricte avec:

- **Target:** ESNext (dernières features JavaScript)
- **Module System:** NodeNext (ES Modules natifs)
- **Strict Mode:** Activé pour la sécurité des types
- **Source Maps:** Activés pour le debugging

### ESLint Configuration

- Configuration flat ESM moderne
- Règles TypeScript recommandées
- Intégration avec Prettier

### Prettier Configuration

```json
{
  "semi": true,
  "trailingComma": "all",
  "singleQuote": true,
  "printWidth": 100,
  "tabWidth": 2
}
```

---

## 💻 Development

### Structure du code

#### 1. **Point d'entrée** (`src/index.ts`)

```typescript
import express from "express";
import { config } from "./config/env/env.config.ts";

const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Démarrage du serveur
app.listen(config.PORT, () => {
  console.log(`Server running on port ${config.PORT}`);
});
```

#### 2. **Configuration d'environnement** (`src/config/env/env.config.ts`)

Centralise la gestion des variables d'environnement avec validation et valeurs par défaut.

#### 3. **Utilitaires** (`src/common/utils/`)

Fonctions réutilisables comme `getEnv()` pour récupérer les variables d'environnement de manière sécurisée.

### Bonnes pratiques

1. **Typage strict** - Toujours typer les fonctions et variables
2. **Validation** - Utiliser Zod pour valider les entrées utilisateur
3. **Gestion d'erreurs** - Implémenter un middleware de gestion d'erreurs global
4. **Sécurité** - Toujours valider et sanitizer les données
5. **Async/Await** - Utiliser async/await plutôt que les callbacks
6. **Code modulaire** - Séparer la logique en modules réutilisables

### Ajout de nouvelles routes

```typescript
// src/routes/users.routes.ts
import { Router } from "express";

const router = Router();

router.get("/users", (req, res) => {
  // Logic here
});

export default router;
```

---

## 🎨 Code Quality

### Linting

```bash
# Vérifier le code
npm run lint

# Corriger automatiquement
npm run lint:fix
```

### Formatage

```bash
# Formater tout le code
npm run format
```

### Hooks Git (recommandé)

Installer **husky** et **lint-staged** pour valider le code avant chaque commit:

```bash
npm install -D husky lint-staged
npx husky init
```

---

## 🔒 Security Checklist

- [ ] Utiliser HTTPS en production
- [ ] Configurer Helmet correctement
- [ ] Activer le Rate Limiting
- [ ] Valider toutes les entrées utilisateur
- [ ] Hasher les mots de passe avec bcrypt
- [ ] Utiliser des JWT avec expiration
- [ ] Configurer CORS strictement
- [ ] Ne jamais logger les données sensibles
- [ ] Utiliser des variables d'environnement pour les secrets

---

## 👤 Author

**m3dev4**

- GitHub: [@m3dev4](https://github.com/m3dev4)

---

## 📝 License

Ce projet est sous licence [MIT](LICENSE).

---

## 🤝 Contributing

Les contributions sont les bienvenues ! N'hésitez pas à ouvrir une issue ou une pull request.

1. Fork le projet
2. Créer une branche feature (`git checkout -b feature/AmazingFeature`)
3. Commit vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

---

## 📞 Support

Pour toute question ou problème, ouvrez une issue sur GitHub.

---

**Made with ❤️ by m3dev4**
