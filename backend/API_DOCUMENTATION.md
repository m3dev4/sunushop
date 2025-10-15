# 📡 Sunu Shop - API Documentation

Documentation complète de l'API REST de Sunu Shop Backend.

## 📋 Table des matières

- [Base URL](#base-url)
- [Authentication](#authentication)
- [Formats de réponse](#formats-de-réponse)
- [Codes d'erreur](#codes-derreur)
- [Rate Limiting](#rate-limiting)
- [Endpoints](#endpoints)

---

## 🌐 Base URL

### Development

```
http://localhost:8080/api/v1
```

### Production

```
https://api.sunushop.com/v1
```

---

## 🔐 Authentication

L'API utilise **JWT (JSON Web Tokens)** pour l'authentification.

### Headers requis

```http
Authorization: Bearer <votre_token_jwt>
Content-Type: application/json
```

### Obtenir un token

```http
POST /auth/login
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "securePassword123"
}
```

**Réponse:**

```json
{
  "success": true,
  "data": {
    "user": {
      "id": "user_123",
      "email": "user@example.com",
      "name": "John Doe"
    },
    "tokens": {
      "accessToken": "eyJhbGciOiJIUzI1NiIs...",
      "refreshToken": "eyJhbGciOiJIUzI1NiIs...",
      "expiresIn": 900
    }
  }
}
```

### Rafraîchir un token

```http
POST /auth/refresh
Content-Type: application/json

{
  "refreshToken": "eyJhbGciOiJIUzI1NiIs..."
}
```

---

## 📦 Formats de réponse

### Réponse réussie

```json
{
  "success": true,
  "data": {
    // Données de la réponse
  },
  "meta": {
    "timestamp": "2025-10-15T18:44:38Z",
    "version": "1.0.0"
  }
}
```

### Réponse avec pagination

```json
{
  "success": true,
  "data": [
    // Items
  ],
  "meta": {
    "pagination": {
      "page": 1,
      "limit": 20,
      "total": 100,
      "totalPages": 5
    }
  }
}
```

### Réponse d'erreur

```json
{
  "success": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Données de validation invalides",
    "details": [
      {
        "field": "email",
        "message": "Format d'email invalide"
      }
    ]
  },
  "meta": {
    "timestamp": "2025-10-15T18:44:38Z"
  }
}
```

---

## ⚠️ Codes d'erreur

| Code HTTP | Code Erreur           | Description                      |
| --------- | --------------------- | -------------------------------- |
| 400       | `VALIDATION_ERROR`    | Erreur de validation des données |
| 401       | `UNAUTHORIZED`        | Token manquant ou invalide       |
| 403       | `FORBIDDEN`           | Accès refusé                     |
| 404       | `NOT_FOUND`           | Ressource non trouvée            |
| 409       | `CONFLICT`            | Conflit (ex: email déjà utilisé) |
| 429       | `RATE_LIMIT_EXCEEDED` | Trop de requêtes                 |
| 500       | `INTERNAL_ERROR`      | Erreur serveur interne           |

---

## 🚦 Rate Limiting

### Limites par défaut

- **Requêtes anonymes:** 100 requêtes / 15 minutes
- **Requêtes authentifiées:** 500 requêtes / 15 minutes
- **Endpoints sensibles:** 5 requêtes / 15 minutes

### Headers de rate limiting

```http
X-RateLimit-Limit: 100
X-RateLimit-Remaining: 95
X-RateLimit-Reset: 1697385600
```

---

## 🛣️ Endpoints

### 🏠 Health Check

#### GET /

Vérifier que l'API est en ligne.

**Requête:**

```http
GET /
```

**Réponse:**

```json
{
  "message": "Hello World!",
  "status": "ok"
}
```

---

### 🔐 Authentication

#### POST /auth/register

Créer un nouveau compte utilisateur.

**Requête:**

```http
POST /auth/register
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "SecurePass123!",
  "name": "John Doe",
  "phone": "+221770000000"
}
```

**Validation:**

- `email`: Email valide, unique
- `password`: Min 8 caractères, 1 majuscule, 1 chiffre, 1 caractère spécial
- `name`: Min 2 caractères
- `phone`: Format international

**Réponse (201):**

```json
{
  "success": true,
  "data": {
    "user": {
      "id": "user_123",
      "email": "user@example.com",
      "name": "John Doe",
      "createdAt": "2025-10-15T18:44:38Z"
    },
    "tokens": {
      "accessToken": "...",
      "refreshToken": "..."
    }
  }
}
```

---

#### POST /auth/login

Se connecter avec un compte existant.

**Requête:**

```http
POST /auth/login
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "SecurePass123!"
}
```

**Réponse (200):**

```json
{
  "success": true,
  "data": {
    "user": {
      "id": "user_123",
      "email": "user@example.com",
      "name": "John Doe"
    },
    "tokens": {
      "accessToken": "...",
      "refreshToken": "...",
      "expiresIn": 900
    }
  }
}
```

---

#### POST /auth/logout

Se déconnecter (invalider le token).

**Requête:**

```http
POST /auth/logout
Authorization: Bearer <token>
```

**Réponse (200):**

```json
{
  "success": true,
  "message": "Déconnexion réussie"
}
```

---

#### POST /auth/forgot-password

Demander un email de réinitialisation de mot de passe.

**Requête:**

```http
POST /auth/forgot-password
Content-Type: application/json

{
  "email": "user@example.com"
}
```

**Réponse (200):**

```json
{
  "success": true,
  "message": "Email de réinitialisation envoyé"
}
```

---

#### POST /auth/reset-password

Réinitialiser le mot de passe avec le token reçu par email.

**Requête:**

```http
POST /auth/reset-password
Content-Type: application/json

{
  "token": "reset_token_xyz",
  "password": "NewSecurePass123!"
}
```

**Réponse (200):**

```json
{
  "success": true,
  "message": "Mot de passe réinitialisé avec succès"
}
```

---

### 👤 Users

#### GET /users/me

Obtenir le profil de l'utilisateur connecté.

**Requête:**

```http
GET /users/me
Authorization: Bearer <token>
```

**Réponse (200):**

```json
{
  "success": true,
  "data": {
    "id": "user_123",
    "email": "user@example.com",
    "name": "John Doe",
    "phone": "+221770000000",
    "role": "customer",
    "createdAt": "2025-10-15T18:44:38Z",
    "updatedAt": "2025-10-15T18:44:38Z"
  }
}
```

---

#### PATCH /users/me

Mettre à jour le profil de l'utilisateur connecté.

**Requête:**

```http
PATCH /users/me
Authorization: Bearer <token>
Content-Type: application/json

{
  "name": "John Smith",
  "phone": "+221770000001"
}
```

**Réponse (200):**

```json
{
  "success": true,
  "data": {
    "id": "user_123",
    "email": "user@example.com",
    "name": "John Smith",
    "phone": "+221770000001",
    "updatedAt": "2025-10-15T18:50:00Z"
  }
}
```

---

#### DELETE /users/me

Supprimer le compte de l'utilisateur connecté.

**Requête:**

```http
DELETE /users/me
Authorization: Bearer <token>
Content-Type: application/json

{
  "password": "SecurePass123!"
}
```

**Réponse (200):**

```json
{
  "success": true,
  "message": "Compte supprimé avec succès"
}
```

---

### 🛍️ Products

#### GET /products

Lister tous les produits avec pagination et filtres.

**Requête:**

```http
GET /products?page=1&limit=20&category=electronics&sort=-createdAt
```

**Query Parameters:**

- `page` (number): Page actuelle (default: 1)
- `limit` (number): Items par page (default: 20, max: 100)
- `category` (string): Filtrer par catégorie
- `search` (string): Recherche textuelle
- `minPrice` (number): Prix minimum
- `maxPrice` (number): Prix maximum
- `sort` (string): Tri (`-createdAt`, `price`, `-price`, etc.)

**Réponse (200):**

```json
{
  "success": true,
  "data": [
    {
      "id": "prod_123",
      "name": "Smartphone XYZ",
      "description": "Description du produit",
      "price": 299.99,
      "category": "electronics",
      "images": ["url1", "url2"],
      "stock": 50,
      "seller": {
        "id": "seller_456",
        "name": "Tech Store"
      },
      "rating": 4.5,
      "reviewsCount": 120,
      "createdAt": "2025-10-15T18:44:38Z"
    }
  ],
  "meta": {
    "pagination": {
      "page": 1,
      "limit": 20,
      "total": 100,
      "totalPages": 5
    }
  }
}
```

---

#### GET /products/:id

Obtenir les détails d'un produit spécifique.

**Requête:**

```http
GET /products/prod_123
```

**Réponse (200):**

```json
{
  "success": true,
  "data": {
    "id": "prod_123",
    "name": "Smartphone XYZ",
    "description": "Description détaillée...",
    "price": 299.99,
    "category": "electronics",
    "images": ["url1", "url2", "url3"],
    "stock": 50,
    "specifications": {
      "brand": "XYZ",
      "model": "2024",
      "color": "Black"
    },
    "seller": {
      "id": "seller_456",
      "name": "Tech Store",
      "rating": 4.8
    },
    "rating": 4.5,
    "reviewsCount": 120,
    "createdAt": "2025-10-15T18:44:38Z",
    "updatedAt": "2025-10-15T18:44:38Z"
  }
}
```

---

#### POST /products

Créer un nouveau produit (vendeurs uniquement).

**Requête:**

```http
POST /products
Authorization: Bearer <token>
Content-Type: application/json

{
  "name": "Nouveau produit",
  "description": "Description du produit",
  "price": 99.99,
  "category": "electronics",
  "images": ["url1", "url2"],
  "stock": 100,
  "specifications": {
    "brand": "Brand",
    "model": "2024"
  }
}
```

**Réponse (201):**

```json
{
  "success": true,
  "data": {
    "id": "prod_789",
    "name": "Nouveau produit",
    // ... autres champs
    "createdAt": "2025-10-15T18:44:38Z"
  }
}
```

---

### 🛒 Cart

#### GET /cart

Obtenir le panier de l'utilisateur connecté.

**Requête:**

```http
GET /cart
Authorization: Bearer <token>
```

**Réponse (200):**

```json
{
  "success": true,
  "data": {
    "items": [
      {
        "id": "cart_item_1",
        "product": {
          "id": "prod_123",
          "name": "Smartphone XYZ",
          "price": 299.99,
          "image": "url"
        },
        "quantity": 2,
        "subtotal": 599.98
      }
    ],
    "total": 599.98,
    "itemsCount": 2
  }
}
```

---

#### POST /cart/items

Ajouter un produit au panier.

**Requête:**

```http
POST /cart/items
Authorization: Bearer <token>
Content-Type: application/json

{
  "productId": "prod_123",
  "quantity": 2
}
```

**Réponse (201):**

```json
{
  "success": true,
  "data": {
    "id": "cart_item_1",
    "product": {...},
    "quantity": 2,
    "subtotal": 599.98
  }
}
```

---

## 📚 Ressources additionnelles

### Postman Collection

Une collection Postman complète est disponible: [Télécharger](./postman/sunushop-api.json)

### SDK JavaScript/TypeScript

```bash
npm install @sunushop/api-client
```

### Webhooks

Documentation des webhooks disponible: [WEBHOOKS.md](./WEBHOOKS.md)

---

## 🔄 Versioning

L'API utilise le versioning par URL:

- Version actuelle: `v1`
- Format: `/api/v{version}/endpoint`

Les versions sont maintenues pendant au moins 6 mois après une nouvelle release majeure.

---

## 📞 Support

Pour toute question concernant l'API:

- Email: api-support@sunushop.com
- Documentation: https://docs.sunushop.com
- Status page: https://status.sunushop.com

---

**Made with ❤️ by m3dev4**
