# 📚 Documentation - Index

Index complet de toute la documentation du projet Sunu Shop Backend.

## 🚀 Pour démarrer

| Document                          | Description                                                           | Audience               |
| --------------------------------- | --------------------------------------------------------------------- | ---------------------- |
| [README.md](../README.md)         | **Documentation principale** - Vue d'ensemble complète du projet      | Tous                   |
| [QUICKSTART.md](../QUICKSTART.md) | **Guide de démarrage rapide** - Installer et lancer en 5 minutes      | Développeurs débutants |
| [.env.example](../.env.example)   | **Template de configuration** - Variables d'environnement nécessaires | Tous                   |

---

## 👨‍💻 Pour les développeurs

| Document                                        | Description                                                              | Audience                  |
| ----------------------------------------------- | ------------------------------------------------------------------------ | ------------------------- |
| [CONTRIBUTING.md](../CONTRIBUTING.md)           | **Guide de contribution** - Standards de code, workflow Git, conventions | Contributeurs             |
| [PROJECT_STRUCTURE.md](./PROJECT_STRUCTURE.md)  | **Architecture du projet** - Structure des dossiers et principes         | Développeurs              |
| [API_DOCUMENTATION.md](../API_DOCUMENTATION.md) | **Documentation de l'API** - Endpoints, authentification, exemples       | Développeurs frontend/API |

---

## 📋 Pour la gestion de projet

| Document                        | Description                                                      | Audience |
| ------------------------------- | ---------------------------------------------------------------- | -------- |
| [CHANGELOG.md](../CHANGELOG.md) | **Historique des versions** - Toutes les modifications du projet | Tous     |
| [LICENSE](../LICENSE)           | **Licence MIT** - Termes d'utilisation                           | Tous     |

---

## ⚙️ Configuration

| Fichier            | Description                           |
| ------------------ | ------------------------------------- |
| `package.json`     | Dépendances, scripts npm, métadonnées |
| `tsconfig.json`    | Configuration TypeScript              |
| `eslint.config.ts` | Configuration ESLint (linting)        |
| `.prettierrc.json` | Configuration Prettier (formatage)    |
| `nodemon.json`     | Configuration Nodemon (hot reload)    |
| `.editorconfig`    | Configuration de l'éditeur            |
| `.gitignore`       | Fichiers ignorés par Git              |

---

## 🛠️ VSCode (Développement)

| Fichier                            | Description             |
| ---------------------------------- | ----------------------- |
| `.vscode/settings.json`            | Paramètres de l'éditeur |
| `.vscode/extensions.json`          | Extensions recommandées |
| `.vscode/launch.json`              | Configuration de debug  |
| `.vscode/tasks.json`               | Tâches automatisées     |
| `.vscode/typescript.code-snippets` | Snippets de code        |

---

## 📖 Guide de lecture par profil

### 🆕 Nouveau développeur sur le projet

1. ✅ Lire [QUICKSTART.md](../QUICKSTART.md) - Démarrer en 5 min
2. ✅ Lire [README.md](../README.md) - Comprendre le projet
3. ✅ Lire [PROJECT_STRUCTURE.md](./PROJECT_STRUCTURE.md) - Comprendre l'architecture
4. ✅ Lire [CONTRIBUTING.md](../CONTRIBUTING.md) - Apprendre les standards

### 🎨 Développeur Frontend

1. ✅ Lire [API_DOCUMENTATION.md](../API_DOCUMENTATION.md) - Comprendre l'API
2. ✅ Consulter [README.md](../README.md) section "Environment Variables"
3. ✅ Tester les endpoints avec Postman/Thunder Client

### 🤝 Contributeur externe

1. ✅ Lire [CONTRIBUTING.md](../CONTRIBUTING.md) - Workflow et standards
2. ✅ Lire [README.md](../README.md) - Contexte du projet
3. ✅ Consulter [CHANGELOG.md](../CHANGELOG.md) - Historique

### 🚀 DevOps / Déploiement

1. ✅ Lire [README.md](../README.md) section "Getting Started"
2. ✅ Consulter [.env.example](../.env.example) - Variables requises
3. ✅ Vérifier `package.json` - Scripts disponibles

---

## 🔍 Trouver rapidement

### Je veux installer le projet

→ [QUICKSTART.md](../QUICKSTART.md)

### Je veux comprendre l'architecture

→ [PROJECT_STRUCTURE.md](./PROJECT_STRUCTURE.md)

### Je veux connaître les endpoints API

→ [API_DOCUMENTATION.md](../API_DOCUMENTATION.md)

### Je veux contribuer au code

→ [CONTRIBUTING.md](../CONTRIBUTING.md)

### Je veux voir les changements récents

→ [CHANGELOG.md](../CHANGELOG.md)

### Je veux configurer mon environnement

→ [.env.example](../.env.example)

### Je veux débugger le code

→ [.vscode/launch.json](../.vscode/launch.json)

### Je veux connaître les commandes disponibles

→ [README.md](../README.md) section "Scripts"

---

## 📊 Statistiques de documentation

| Type                   | Nombre | Fichiers                                                                                                               |
| ---------------------- | ------ | ---------------------------------------------------------------------------------------------------------------------- |
| Documentation markdown | 7      | README, QUICKSTART, API_DOCUMENTATION, CONTRIBUTING, CHANGELOG, PROJECT_STRUCTURE, INDEX                               |
| Configuration          | 8      | package.json, tsconfig.json, eslint.config.ts, .prettierrc.json, nodemon.json, .editorconfig, .gitignore, .env.example |
| VSCode                 | 5      | settings.json, extensions.json, launch.json, tasks.json, typescript.code-snippets                                      |
| **Total**              | **20** | **20 fichiers**                                                                                                        |

---

## 🎯 Checklist pour nouveaux développeurs

### Installation

- [ ] Node.js installé (>= 18.x)
- [ ] Clone du repository
- [ ] `npm install` exécuté
- [ ] `.env.local` configuré
- [ ] Serveur démarre avec `npm run dev`
- [ ] Extensions VSCode installées

### Compréhension

- [ ] README.md lu
- [ ] QUICKSTART.md lu
- [ ] PROJECT_STRUCTURE.md lu
- [ ] CONTRIBUTING.md lu
- [ ] Premier endpoint testé

### Configuration

- [ ] ESLint fonctionne
- [ ] Prettier fonctionne
- [ ] Format on save activé
- [ ] Debug configuré
- [ ] Snippets testés

---

## 🔗 Liens utiles

### Documentation externe

- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Express.js Documentation](https://expressjs.com/)
- [Node.js Documentation](https://nodejs.org/docs/)
- [Zod Documentation](https://zod.dev/)

### Outils recommandés

- [Postman](https://www.postman.com/) - Tester l'API
- [Thunder Client](https://www.thunderclient.com/) - Extension VSCode pour tester l'API
- [Prisma Studio](https://www.prisma.io/studio) - Visualiser la base de données

---

## 📝 Template de documentation

Pour ajouter une nouvelle page de documentation:

1. **Créer le fichier** dans `/docs` ou à la racine selon le type
2. **Ajouter le lien** dans cet index
3. **Suivre le format** markdown existant
4. **Commit** avec message: `docs: ajouter [nom de la doc]`

---

## 🆘 Besoin d'aide ?

### Documentation manquante ?

Ouvrez une issue avec le label `documentation`

### Documentation obsolète ?

Ouvrez une PR avec les corrections

### Question non couverte ?

Contactez [@m3dev4](https://github.com/m3dev4)

---

**Documentation à jour au:** 2025-10-15

**Version du projet:** 0.1.0

**Made with ❤️ by m3dev4**
