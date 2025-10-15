# ⚡ Quick Start Guide

Guide de démarrage rapide pour Sunu Shop Backend en 5 minutes.

## 📦 Installation rapide

```bash
# 1. Installer les dépendances
npm install

# 2. Configurer l'environnement
cp .env.example .env.local

# 3. Éditer les variables d'environnement
# Ouvrir .env.local et configurer les valeurs

# 4. Lancer le serveur
npm run dev
```

Votre serveur tourne maintenant sur `http://localhost:8080` ! 🎉

---

## 🔑 Configuration minimale

### .env.local

```bash
NODE_ENV=development
PORT=8080
```

C'est tout ce dont vous avez besoin pour démarrer !

---

## 🧪 Vérifier que tout fonctionne

### 1. Tester l'endpoint de santé

```bash
curl http://localhost:8080
```

Réponse attendue:

```
Hello World!
```

### 2. Vérifier les logs

Vous devriez voir dans le terminal:

```
Server running on port 8080
```

---

## 📚 Prochaines étapes

### Ajouter votre première route

1. **Créer un controller**

```typescript
// src/controllers/hello.controller.ts
import type { Request, Response } from "express";

export const sayHello = async (req: Request, res: Response) => {
  return res.json({
    success: true,
    message: "Hello from my first controller!",
  });
};
```

2. **Créer une route**

```typescript
// src/routes/hello.routes.ts
import { Router } from "express";
import { sayHello } from "../controllers/hello.controller.ts";

const router = Router();

router.get("/hello", sayHello);

export default router;
```

3. **Enregistrer la route dans index.ts**

```typescript
// src/index.ts
import helloRoutes from "./routes/hello.routes.ts";

// ... après app.use(cookieParser())
app.use("/api", helloRoutes);
```

4. **Tester votre route**

```bash
curl http://localhost:8080/api/hello
```

---

## 🎯 VSCode Snippets

Si vous utilisez VSCode, des snippets sont disponibles:

- `exp-controller` → Controller Express
- `exp-router` → Router Express
- `exp-middleware` → Middleware Express
- `service` → Service function
- `zod-schema` → Zod validation schema

Tapez le préfixe et appuyez sur `Tab` ! ⚡

---

## 🐛 Debugging

### Dans VSCode

1. Appuyez sur `F5` ou allez dans "Run and Debug"
2. Choisissez "🚀 Launch Program"
3. Placez des breakpoints en cliquant dans la marge
4. Debuggez ! 🔍

### Dans le terminal

```bash
# Mode debug
node --inspect src/index.ts

# Puis ouvrez chrome://inspect dans Chrome
```

---

## 📖 Structure du projet

```
src/
├── common/          # Utilitaires partagés
│   └── utils/       # Fonctions helper
├── config/          # Configuration
│   └── env/         # Variables d'environnement
├── controllers/     # Logique de contrôle
├── routes/          # Routes API
├── services/        # Logique métier
├── security/        # Middlewares de sécurité
└── index.ts         # Point d'entrée
```

### Où mettre quoi?

- **Controllers** → Gestion des requêtes/réponses HTTP
- **Services** → Logique métier réutilisable
- **Routes** → Définition des endpoints
- **Utils** → Fonctions utilitaires (date, string, etc.)
- **Security** → Authentification, autorisation, validation

---

## 🔥 Commandes utiles

```bash
# Développement avec hot reload
npm run dev

# Production
npm start

# Vérifier le code
npm run lint

# Corriger automatiquement
npm run lint:fix

# Formater le code
npm run format

# Tests (à venir)
npm test
```

---

## 🎨 Code Style

Le projet utilise **ESLint + Prettier** pour garantir la qualité du code.

### Auto-format dans VSCode

1. Installez l'extension **Prettier**
2. Le formatage automatique est déjà configuré dans `.vscode/settings.json`
3. Sauvegardez (`Ctrl+S`) → Le code se formate automatiquement ! ✨

---

## 🔐 Sécurité de base

### Variables d'environnement

❌ **JAMAIS** commit les fichiers `.env` !

✅ **TOUJOURS** utiliser `.env.example` comme template

### Mots de passe

```typescript
import bcrypt from "bcrypt";

// Hasher
const hashed = await bcrypt.hash(password, 10);

// Vérifier
const isValid = await bcrypt.compare(password, hashed);
```

### JWT

```typescript
import jwt from "jsonwebtoken";

// Créer un token
const token = jwt.sign({ userId: user.id }, config.JWT_SECRET, {
  expiresIn: "15m",
});

// Vérifier un token
const decoded = jwt.verify(token, config.JWT_SECRET);
```

---

## 📊 Validation avec Zod

```typescript
import { z } from "zod";

// Définir le schéma
const userSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  name: z.string().min(2),
});

// Valider
const result = userSchema.safeParse(req.body);

if (!result.success) {
  return res.status(400).json({
    success: false,
    errors: result.error.errors,
  });
}

// Utiliser les données validées
const { email, password, name } = result.data;
```

---

## 🚀 Déploiement rapide

### Variables d'environnement en production

```bash
NODE_ENV=production
PORT=8080
JWT_SECRET=your_very_secure_secret_here
DATABASE_URL=postgresql://...
```

### Build (si nécessaire)

```bash
# Compiler TypeScript
npx tsc

# Lancer la version compilée
node dist/index.js
```

---

## ❓ Problèmes courants

### Port déjà utilisé

```bash
Error: listen EADDRINUSE: address already in use :::8080
```

**Solution:** Changez le `PORT` dans `.env.local` ou tuez le processus:

```powershell
# Windows PowerShell
Get-Process -Id (Get-NetTCPConnection -LocalPort 8080).OwningProcess | Stop-Process
```

### Module not found

```bash
Error: Cannot find module 'express'
```

**Solution:** Réinstallez les dépendances:

```bash
rm -rf node_modules package-lock.json
npm install
```

### TypeScript errors

```bash
error TS2307: Cannot find module
```

**Solution:** Vérifiez que vous avez bien l'extension `.ts` dans vos imports:

```typescript
// ❌ Mauvais
import { config } from "./config/env/env.config";

// ✅ Bon
import { config } from "./config/env/env.config.ts";
```

---

## 📚 Ressources

- [Documentation complète](./README.md)
- [Documentation API](./API_DOCUMENTATION.md)
- [Guide de contribution](./CONTRIBUTING.md)
- [Changelog](./CHANGELOG.md)

---

## 💡 Tips & Tricks

### Hot reload plus rapide

Le projet utilise déjà Nodemon. Si c'est trop lent:

```json
// nodemon.json
{
  "delay": 500 // Réduire le délai
}
```

### Logs plus lisibles

```typescript
// Utilisez morgan en mode dev
import morgan from "morgan";
app.use(morgan("dev"));
```

### Autocomplete VSCode

Installez les types pour une meilleure DX:

```bash
npm i -D @types/node @types/express
```

---

**Bon développement! 🚀**

Des questions? Consultez la [documentation complète](./README.md) ou ouvrez une issue!
