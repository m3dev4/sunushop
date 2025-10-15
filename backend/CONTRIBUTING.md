# 🤝 Contributing to Sunu Shop Backend

Merci de votre intérêt pour contribuer à Sunu Shop ! Ce document fournit des directives pour contribuer au projet.

## 📋 Table des matières

- [Code de conduite](#code-de-conduite)
- [Comment contribuer](#comment-contribuer)
- [Standards de code](#standards-de-code)
- [Processus de Pull Request](#processus-de-pull-request)
- [Structure des commits](#structure-des-commits)
- [Reporting de bugs](#reporting-de-bugs)
- [Suggestions de fonctionnalités](#suggestions-de-fonctionnalités)

---

## 📜 Code de conduite

En participant à ce projet, vous vous engagez à respecter les autres contributeurs et à maintenir un environnement accueillant et inclusif.

---

## 🚀 Comment contribuer

### 1. Fork le projet

Cliquez sur le bouton "Fork" en haut à droite de la page du repository.

### 2. Clone votre fork

```bash
git clone https://github.com/votre-username/sunushop.git
cd sunushop/backend
```

### 3. Créer une branche

```bash
git checkout -b feature/ma-nouvelle-fonctionnalite
```

Conventions de nommage des branches:

- `feature/nom-fonctionnalite` - Nouvelles fonctionnalités
- `fix/nom-bug` - Corrections de bugs
- `docs/description` - Documentation
- `refactor/description` - Refactoring
- `test/description` - Ajout de tests

### 4. Installer les dépendances

```bash
npm install
```

### 5. Faire vos modifications

Assurez-vous de:

- Suivre les [standards de code](#standards-de-code)
- Ajouter des tests si nécessaire
- Mettre à jour la documentation

### 6. Tester vos modifications

```bash
# Linter
npm run lint

# Formater
npm run format

# Tests (quand disponibles)
npm test
```

### 7. Commit vos changements

```bash
git add .
git commit -m "feat: ajouter nouvelle fonctionnalité X"
```

Voir [Structure des commits](#structure-des-commits) pour les conventions.

### 8. Push vers votre fork

```bash
git push origin feature/ma-nouvelle-fonctionnalite
```

### 9. Créer une Pull Request

Allez sur GitHub et créez une Pull Request depuis votre branche vers `main`.

---

## 🎨 Standards de code

### TypeScript

- ✅ **Typage strict** - Toujours typer vos fonctions et variables
- ✅ **Pas de `any`** - Éviter l'utilisation de `any`, utiliser `unknown` si nécessaire
- ✅ **Interfaces vs Types** - Préférer les `interface` pour les objets, `type` pour les unions/intersections

### Naming Conventions

```typescript
// ✅ Bon
const userName = "John";
const getUserById = (id: string) => {};
interface UserProfile {}
class UserService {}

// ❌ Mauvais
const user_name = "John";
const GetUserById = (id: string) => {};
interface userProfile {}
class userService {}
```

### Imports

- Utiliser les imports ES6
- Toujours spécifier l'extension `.ts` pour les imports locaux
- Grouper les imports par catégorie

```typescript
// ✅ Bon
// 1. Librairies externes
import express from "express";
import bcrypt from "bcrypt";

// 2. Modules locaux
import { config } from "./config/env/env.config.ts";
import { UserService } from "./services/user.service.ts";

// 3. Types
import type { Request, Response } from "express";
```

### Fonctions

```typescript
// ✅ Bon - Fonction avec types explicites
export const createUser = async (userData: CreateUserDto): Promise<User> => {
  // Implementation
};

// ✅ Bon - Arrow function pour les callbacks
users.map((user) => user.id);

// ❌ Éviter - Types implicites
export const createUser = async (userData) => {
  // Implementation
};
```

### Gestion d'erreurs

```typescript
// ✅ Bon - Gestion d'erreur explicite
try {
  const user = await userService.create(userData);
  return res.status(201).json(user);
} catch (error) {
  if (error instanceof ValidationError) {
    return res.status(400).json({ message: error.message });
  }
  throw error;
}

// ❌ Mauvais - Catch sans typage
try {
  // ...
} catch (e) {
  console.log(e);
}
```

### Validation

Toujours utiliser **Zod** pour valider les données entrantes:

```typescript
import { z } from "zod";

const createUserSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  name: z.string().min(2),
});

type CreateUserDto = z.infer<typeof createUserSchema>;
```

### Formatage

Le projet utilise **Prettier** avec la configuration suivante:

- Semi-colons: `true`
- Quotes: Single quotes (`'`)
- Trailing commas: `all`
- Print width: `100`
- Tab width: `2`

Exécutez `npm run format` avant de commit.

---

## 🔄 Processus de Pull Request

### Checklist avant de soumettre

- [ ] Le code compile sans erreurs TypeScript
- [ ] ESLint ne remonte aucune erreur (`npm run lint`)
- [ ] Le code est formaté avec Prettier (`npm run format`)
- [ ] Les tests passent (quand disponibles)
- [ ] La documentation est à jour
- [ ] Les commits suivent les conventions
- [ ] La PR a une description claire

### Template de Pull Request

```markdown
## Description

Brève description des changements

## Type de changement

- [ ] Bug fix
- [ ] Nouvelle fonctionnalité
- [ ] Breaking change
- [ ] Documentation

## Comment tester ?

1. Étape 1
2. Étape 2
3. ...

## Checklist

- [ ] Tests ajoutés/mis à jour
- [ ] Documentation mise à jour
- [ ] Code review effectué
```

### Review Process

1. Un mainteneur reviewera votre PR
2. Des modifications peuvent être demandées
3. Une fois approuvée, la PR sera mergée

---

## 📝 Structure des commits

Nous suivons la convention **Conventional Commits**:

```
<type>(<scope>): <description>

[body optionnel]

[footer optionnel]
```

### Types

- **feat**: Nouvelle fonctionnalité
- **fix**: Correction de bug
- **docs**: Documentation seulement
- **style**: Formatage, points-virgules, etc.
- **refactor**: Refactoring de code
- **test**: Ajout de tests
- **chore**: Maintenance (deps, config, etc.)
- **perf**: Amélioration de performance

### Exemples

```bash
# Nouvelle fonctionnalité
git commit -m "feat(auth): ajouter authentification JWT"

# Correction de bug
git commit -m "fix(user): corriger validation email"

# Documentation
git commit -m "docs: mettre à jour README avec instructions"

# Refactoring
git commit -m "refactor(services): extraire logique métier vers services"

# Breaking change
git commit -m "feat(api)!: changer format de réponse API

BREAKING CHANGE: Le format de réponse est maintenant { data, meta }
au lieu de retourner directement les données."
```

---

## 🐛 Reporting de bugs

### Avant de créer un bug report

1. Vérifiez que le bug n'a pas déjà été reporté
2. Vérifiez que vous utilisez la dernière version
3. Collectez les informations nécessaires

### Template de bug report

```markdown
## Description du bug

Description claire et concise du bug

## Comment reproduire

1. Étape 1
2. Étape 2
3. ...

## Comportement attendu

Ce qui devrait se passer

## Comportement actuel

Ce qui se passe réellement

## Screenshots

Si applicable

## Environnement

- OS: [e.g. Windows 11]
- Node version: [e.g. 18.17.0]
- npm/pnpm version: [e.g. 9.6.7]

## Informations additionnelles

Tout autre contexte utile
```

---

## 💡 Suggestions de fonctionnalités

### Template de feature request

```markdown
## Fonctionnalité demandée

Description claire de la fonctionnalité

## Problème résolu

Quel problème cette fonctionnalité résout-elle ?

## Solution proposée

Comment vous imaginez que ça fonctionne ?

## Alternatives considérées

Y a-t-il d'autres façons de résoudre ce problème ?

## Contexte additionnel

Tout autre contexte ou screenshots
```

---

## 🏗️ Architecture et conventions du projet

### Structure des dossiers

```
src/
├── common/          # Code partagé
├── config/          # Configuration
├── controllers/     # Logique de contrôle
├── lib/            # Librairies externes
├── mails/          # Gestion emails
├── routes/         # Définition routes
├── security/       # Sécurité
├── services/       # Logique métier
└── templates/      # Templates
```

### Patterns recommandés

1. **Repository Pattern** - Pour l'accès aux données
2. **Service Layer** - Pour la logique métier
3. **Controller Layer** - Pour la gestion des requêtes
4. **DTO Pattern** - Pour la validation des données
5. **Middleware Pattern** - Pour les opérations transversales

---

## ❓ Questions ?

Si vous avez des questions, n'hésitez pas à:

- Ouvrir une issue avec le label `question`
- Contacter les mainteneurs

---

**Merci de contribuer à Sunu Shop ! 🎉**
