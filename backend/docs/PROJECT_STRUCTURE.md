# 📂 Structure détaillée du projet

Documentation complète de l'architecture et de la structure du projet Sunu Shop Backend.

## 🌳 Arborescence complète

```
backend/
│
├── .vscode/                          # Configuration VSCode
│   ├── extensions.json               # Extensions recommandées
│   ├── launch.json                   # Configuration de debug
│   ├── settings.json                 # Paramètres de l'éditeur
│   ├── tasks.json                    # Tâches automatisées
│   └── typescript.code-snippets      # Snippets de code
│
├── docs/                             # Documentation
│   └── PROJECT_STRUCTURE.md          # Ce fichier
│
├── devOps/                           # Scripts DevOps
│   ├── docker/                       # Fichiers Docker
│   ├── scripts/                      # Scripts de déploiement
│   └── ci-cd/                        # Pipelines CI/CD
│
├── src/                              # Code source
│   │
│   ├── common/                       # Code partagé
│   │   ├── constants/                # Constantes globales
│   │   ├── types/                    # Types TypeScript partagés
│   │   ├── utils/                    # Fonctions utilitaires
│   │   │   ├── get.env.ts           # Helper pour variables d'environnement
│   │   │   ├── logger.ts            # Système de logs
│   │   │   ├── validation.ts        # Helpers de validation
│   │   │   └── response.ts          # Formatage des réponses
│   │   └── interfaces/               # Interfaces partagées
│   │
│   ├── config/                       # Configuration
│   │   ├── env/                      # Variables d'environnement
│   │   │   └── env.config.ts        # Configuration centralisée
│   │   ├── database.config.ts       # Configuration DB
│   │   ├── jwt.config.ts            # Configuration JWT
│   │   └── cors.config.ts           # Configuration CORS
│   │
│   ├── controllers/                  # Contrôleurs
│   │   ├── auth.controller.ts       # Authentification
│   │   ├── user.controller.ts       # Utilisateurs
│   │   ├── product.controller.ts    # Produits
│   │   ├── order.controller.ts      # Commandes
│   │   └── cart.controller.ts       # Panier
│   │
│   ├── routes/                       # Routes API
│   │   ├── index.ts                 # Router principal
│   │   ├── auth.routes.ts           # Routes d'authentification
│   │   ├── user.routes.ts           # Routes utilisateurs
│   │   ├── product.routes.ts        # Routes produits
│   │   ├── order.routes.ts          # Routes commandes
│   │   └── cart.routes.ts           # Routes panier
│   │
│   ├── services/                     # Services métier
│   │   ├── auth.service.ts          # Logique d'authentification
│   │   ├── user.service.ts          # Logique utilisateurs
│   │   ├── product.service.ts       # Logique produits
│   │   ├── order.service.ts         # Logique commandes
│   │   ├── email.service.ts         # Service d'emails
│   │   └── upload.service.ts        # Service d'upload
│   │
│   ├── security/                     # Sécurité
│   │   ├── middlewares/             # Middlewares de sécurité
│   │   │   ├── auth.middleware.ts   # Vérification JWT
│   │   │   ├── role.middleware.ts   # Vérification des rôles
│   │   │   ├── rate-limit.ts        # Rate limiting
│   │   │   └── validation.ts        # Validation des entrées
│   │   ├── helmet.config.ts         # Configuration Helmet
│   │   └── cors.config.ts           # Configuration CORS
│   │
│   ├── lib/                          # Bibliothèques externes
│   │   ├── prisma.ts                # Client Prisma
│   │   ├── redis.ts                 # Client Redis
│   │   └── cloudinary.ts            # Client Cloudinary
│   │
│   ├── mails/                        # Gestion des emails
│   │   ├── templates/               # Templates HTML
│   │   │   ├── welcome.html         # Email de bienvenue
│   │   │   ├── reset-password.html  # Réinitialisation
│   │   │   └── order-confirmation.html
│   │   └── mailer.ts                # Configuration mailer
│   │
│   ├── templates/                    # Templates de réponses
│   │   ├── success.template.ts      # Template de succès
│   │   └── error.template.ts        # Template d'erreur
│   │
│   ├── script/                       # Scripts utilitaires
│   │   ├── seed.ts                  # Seed de la DB
│   │   └── migrate.ts               # Scripts de migration
│   │
│   └── index.ts                      # Point d'entrée
│
├── .env                              # Variables d'environnement (production)
├── .env.local                        # Variables d'environnement (dev)
├── .env.example                      # Template des variables
├── .editorconfig                     # Configuration de l'éditeur
├── .eslintrc.json                    # Configuration ESLint (legacy)
├── .gitignore                        # Fichiers ignorés par Git
├── .prettierrc.json                  # Configuration Prettier
├── eslint.config.ts                  # Configuration ESLint (moderne)
├── nodemon.json                      # Configuration Nodemon
├── package.json                      # Dépendances et scripts
├── tsconfig.json                     # Configuration TypeScript
│
├── API_DOCUMENTATION.md              # Documentation de l'API
├── CHANGELOG.md                      # Historique des versions
├── CONTRIBUTING.md                   # Guide de contribution
├── LICENSE                           # Licence MIT
├── QUICKSTART.md                     # Guide de démarrage rapide
└── README.md                         # Documentation principale
```

---

## 📖 Description des dossiers

### `/src` - Code source

Contient tout le code de l'application.

#### `/src/common` - Code partagé

Code réutilisable dans toute l'application.

- **`constants/`** - Valeurs constantes (statuts, codes d'erreur, etc.)
- **`types/`** - Types TypeScript globaux
- **`utils/`** - Fonctions utilitaires (date, string, validation, etc.)
- **`interfaces/`** - Interfaces partagées

**Exemple:**

```typescript
// src/common/utils/get.env.ts
export const getEnv = (key: string, defaultValue: string) => {
  return process.env[key] ?? defaultValue;
};
```

#### `/src/config` - Configuration

Centralise toute la configuration de l'application.

- **`env/`** - Variables d'environnement
- **`database.config.ts`** - Configuration de la base de données
- **`jwt.config.ts`** - Configuration JWT
- **`cors.config.ts`** - Configuration CORS

**Exemple:**

```typescript
// src/config/env/env.config.ts
export const config = {
  NODE_ENV: getEnv("NODE_ENV", "development"),
  PORT: getEnv("PORT", "8080"),
  JWT_SECRET: getEnv("JWT_SECRET", "dev_secret"),
};
```

#### `/src/controllers` - Contrôleurs

Gèrent les requêtes HTTP et les réponses.

**Responsabilités:**

- Recevoir les requêtes HTTP
- Valider les données d'entrée
- Appeler les services appropriés
- Formater et renvoyer les réponses

**Exemple:**

```typescript
// src/controllers/user.controller.ts
export const getUser = async (req: Request, res: Response) => {
  const userId = req.params.id;
  const user = await userService.findById(userId);

  return res.json({
    success: true,
    data: user,
  });
};
```

#### `/src/routes` - Routes

Définissent les endpoints de l'API.

**Responsabilités:**

- Mapper les URL aux contrôleurs
- Appliquer les middlewares
- Grouper les routes logiquement

**Exemple:**

```typescript
// src/routes/user.routes.ts
import { Router } from "express";
import { getUser } from "../controllers/user.controller.ts";
import { authenticate } from "../security/middlewares/auth.middleware.ts";

const router = Router();

router.get("/users/:id", authenticate, getUser);

export default router;
```

#### `/src/services` - Services

Contiennent la logique métier.

**Responsabilités:**

- Logique métier complexe
- Interactions avec la base de données
- Appels à des APIs externes
- Transformations de données

**Exemple:**

```typescript
// src/services/user.service.ts
export const userService = {
  async findById(id: string) {
    const user = await db.user.findUnique({ where: { id } });
    if (!user) throw new Error("User not found");
    return user;
  },
};
```

#### `/src/security` - Sécurité

Middlewares et configuration de sécurité.

**Contenu:**

- Authentification JWT
- Autorisation par rôles
- Rate limiting
- Validation des entrées
- Configuration Helmet/CORS

**Exemple:**

```typescript
// src/security/middlewares/auth.middleware.ts
export const authenticate = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) {
    return res.status(401).json({ error: "No token provided" });
  }

  const decoded = jwt.verify(token, config.JWT_SECRET);
  req.user = decoded;
  next();
};
```

#### `/src/lib` - Bibliothèques

Clients pour services externes.

**Exemple:**

```typescript
// src/lib/prisma.ts
import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient();
```

#### `/src/mails` - Emails

Gestion et templates d'emails.

**Exemple:**

```typescript
// src/mails/mailer.ts
export const sendWelcomeEmail = async (email: string, name: string) => {
  const template = await renderTemplate("welcome", { name });
  await transporter.sendMail({
    to: email,
    subject: "Bienvenue sur Sunu Shop",
    html: template,
  });
};
```

---

## 🔄 Flow de requête typique

```
1. HTTP Request
   ↓
2. Express Router (routes/)
   ↓
3. Middleware de sécurité (security/middlewares/)
   ↓
4. Controller (controllers/)
   ↓
5. Validation (Zod schemas)
   ↓
6. Service (services/)
   ↓
7. Database/External API (lib/)
   ↓
8. Response formatting (templates/)
   ↓
9. HTTP Response
```

**Exemple concret:**

```
GET /api/users/123
  ↓
routes/user.routes.ts → Route mapping
  ↓
security/middlewares/auth.middleware.ts → Vérification JWT
  ↓
controllers/user.controller.ts → getUser()
  ↓
services/user.service.ts → findById()
  ↓
lib/prisma.ts → Query DB
  ↓
templates/success.template.ts → Format response
  ↓
{ success: true, data: {...} }
```

---

## 📁 Conventions de nommage

### Fichiers

| Type        | Convention            | Exemple               |
| ----------- | --------------------- | --------------------- |
| Controllers | `*.controller.ts`     | `user.controller.ts`  |
| Services    | `*.service.ts`        | `auth.service.ts`     |
| Routes      | `*.routes.ts`         | `product.routes.ts`   |
| Middlewares | `*.middleware.ts`     | `auth.middleware.ts`  |
| Utilities   | `*.util.ts` ou `*.ts` | `date.util.ts`        |
| Types       | `*.types.ts`          | `user.types.ts`       |
| Interfaces  | `*.interface.ts`      | `config.interface.ts` |
| Config      | `*.config.ts`         | `env.config.ts`       |

### Code

```typescript
// ✅ Bon
export const getUserById = async (id: string) => {};
export interface UserProfile {}
export class UserService {}
export enum UserRole {}

// ❌ Mauvais
export const GetUserById = async (id: string) => {};
export interface userProfile {}
export class userService {}
export enum userRole {}
```

---

## 🎯 Principes d'architecture

### 1. Separation of Concerns

Chaque couche a une responsabilité unique:

- **Routes** → Routing
- **Controllers** → HTTP handling
- **Services** → Business logic
- **Lib** → External services

### 2. Dependency Injection

Les dépendances sont injectées, pas instanciées directement:

```typescript
// ✅ Bon
export const userController = (userService: UserService) => ({
  async getUser(req: Request, res: Response) {
    const user = await userService.findById(req.params.id);
    return res.json(user);
  },
});

// ❌ Mauvais
export const getUser = async (req: Request, res: Response) => {
  const userService = new UserService(); // Instanciation directe
  const user = await userService.findById(req.params.id);
  return res.json(user);
};
```

### 3. DRY (Don't Repeat Yourself)

Le code commun est extrait dans `/common`:

```typescript
// ✅ Bon - Utilise un helper
import { formatResponse } from "../common/utils/response.ts";
return res.json(formatResponse(user));

// ❌ Mauvais - Répétition
return res.json({ success: true, data: user });
```

### 4. Type Safety

Toujours typer explicitement:

```typescript
// ✅ Bon
export const createUser = async (data: CreateUserDto): Promise<User> => {
  // ...
};

// ❌ Mauvais
export const createUser = async (data) => {
  // ...
};
```

---

## 📚 Ressources

- [README principal](../README.md)
- [Guide de démarrage rapide](../QUICKSTART.md)
- [Documentation API](../API_DOCUMENTATION.md)
- [Guide de contribution](../CONTRIBUTING.md)

---

**Made with ❤️ by m3dev4**
