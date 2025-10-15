# Changelog

Toutes les modifications notables de ce projet seront documentées dans ce fichier.

Le format est basé sur [Keep a Changelog](https://keepachangelog.com/fr/1.0.0/),
et ce projet adhère au [Semantic Versioning](https://semver.org/lang/fr/).

## [Unreleased]

### À venir

- Système de gestion de panier
- Système de commandes
- Intégration paiement
- Notifications email
- Upload d'images
- Système de reviews

---

## [0.1.0] - 2025-10-15

### ✨ Ajouté

- Configuration initiale du projet
- Configuration TypeScript stricte avec ES Modules
- Configuration ESLint avec TypeScript
- Configuration Prettier
- Structure de dossiers du projet
- Point d'entrée de l'application (`src/index.ts`)
- Configuration des variables d'environnement
- Middleware Express de base (JSON, URL-encoded, Cookie parser)
- Endpoint de santé (`GET /`)
- Scripts npm (dev, start, lint, format)
- Documentation complète (README, CONTRIBUTING, API_DOCUMENTATION)
- Fichiers de configuration (.env.example, .gitignore)

### 🔧 Configuration

- Node.js avec TypeScript 5.9.3
- Express.js 5.1.0
- Support ES Modules natif
- Hot reload avec Nodemon
- Strict mode TypeScript activé

### 📦 Dépendances principales

- **express** (5.1.0) - Framework web
- **typescript** (5.9.3) - Langage
- **dotenv** (17.2.3) - Variables d'environnement
- **bcrypt** (6.0.0) - Hashing de mots de passe
- **jsonwebtoken** (9.0.2) - Authentification JWT
- **zod** (4.1.12) - Validation de schémas
- **helmet** (8.1.0) - Sécurité HTTP
- **cors** (2.8.5) - CORS
- **express-rate-limit** (8.1.0) - Rate limiting
- **morgan** (1.10.1) - Logging HTTP
- **compression** (1.8.1) - Compression GZIP

### 📚 Documentation

- README.md complet avec guide d'installation
- CONTRIBUTING.md avec standards de code
- API_DOCUMENTATION.md avec exemples d'endpoints
- .env.example pour la configuration

---

## Format des versions

### Types de changements

- `✨ Ajouté` pour les nouvelles fonctionnalités
- `🔧 Modifié` pour les changements dans les fonctionnalités existantes
- `🗑️ Déprécié` pour les fonctionnalités qui seront supprimées
- `🚫 Supprimé` pour les fonctionnalités supprimées
- `🐛 Corrigé` pour les corrections de bugs
- `🔒 Sécurité` pour les correctifs de vulnérabilités

### Semantic Versioning

- **MAJOR** version (X.0.0) : changements incompatibles avec les versions précédentes
- **MINOR** version (0.X.0) : ajout de fonctionnalités rétrocompatibles
- **PATCH** version (0.0.X) : corrections de bugs rétrocompatibles

---

[Unreleased]: https://github.com/m3dev4/sunushop/compare/v0.1.0...HEAD
[0.1.0]: https://github.com/m3dev4/sunushop/releases/tag/v0.1.0
