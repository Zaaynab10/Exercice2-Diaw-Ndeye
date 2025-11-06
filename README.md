# API Backend Todo

Une API RESTful simple pour gérer les tâches todo, construite avec Node.js, Express, et supportant à la fois MongoDB (NoSQL) et les bases de données SQL (PostgreSQL/MySQL).

## Fonctionnalités

- Créer, lire, mettre à jour et supprimer des tâches todo
- Marquer les tâches comme terminées ou non terminées
- Endpoints API RESTful
- Intégration MongoDB pour la persistance des données
- CORS activé pour les requêtes cross-origin
- Service de fichiers statiques pour le frontend
- Support pour bases de données SQL (PostgreSQL/MySQL) en plus de MongoDB

## Installation

1. Cloner le dépôt :

   ```
   git clone <url-du-dépôt>
   cd backend
   ```

2. Installer les dépendances :

   ```
   npm install
   ```

3. Configurer les variables d'environnement :
   Créer un fichier `.env` dans le répertoire racine.

   Pour MongoDB (NoSQL) :

   ```
   MONGO_URL=mongodb://localhost:27017/todoapp
   DB_TYPE=NOSQL
   PORT=3000
   ```

   Pour SQL (PostgreSQL ou MySQL) :

   ```
   DATABASE_URL=postgresql://username:password@localhost:5432/todoapp  # Pour PostgreSQL
   DB_TYPE=SQL
   PORT=3000
   ```

4. Assurer que la base de données choisie fonctionne sur votre système (MongoDB pour NoSQL, PostgreSQL pour SQL).

## Utilisation

Démarrer le serveur :

```
npm start
```

Pour le développement avec rechargement automatique :

```
npm run dev
```

Le serveur tournera sur `http://localhost:3000`.

## Endpoints API

### Obtenir toutes les todos

- **GET** `/todos`
- Réponse : Tableau d'objets todo

### Créer une nouvelle todo

- **POST** `/todos`
- Corps : `{ "title": "Titre de la tâche" }`
- Réponse : Objet todo créé

### Mettre à jour le statut de complétion d'une todo

- **PUT** `/todos/:id`
- Corps : `{ "done": true }`
- Réponse : Objet todo mis à jour

### Supprimer une todo

- **DELETE** `/todos/:id`
- Réponse : Message de confirmation

## Structure du Projet

```
backend/
├── src/
│   ├── controllers/
│   │   └── TodoController.js      # Contrôleur pour la logique métier
│   ├── models/
│   │   └── TodoModel.js           # Modèle pour l'interaction avec la base de données
│   ├── routes/
│   │   └── TodoRoutes.js          # Routes API
│   └── view/
│       ├── app.js                 # Script frontend
│       └── index.html             # Page HTML frontend
├── db.js                          # Configuration de connexion à la base de données
├── server.js                      # Point d'entrée du serveur
├── package.json                   # Dépendances et scripts
├── README.md                      # Ce fichier
└── .env                           # Variables d'environnement
```


## Author

Seynabou
