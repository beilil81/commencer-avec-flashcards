# 🌸 LinguaFlow

Un traducteur web élégant entre **français, anglais, espagnol et arabe**.

## ✨ Fonctionnalités

**Onglet Traduire**
- Traduction instantanée (debounce 800 ms ou clic) entre 4 langues
- Bouton d'inversion des langues avec animation
- Copie de la traduction dans le presse-papier
- Prononciation audio (text-to-speech natif du navigateur)
- Historique des 8 dernières traductions (localStorage)

**Onglet Flashcards**
- 60 cartes pré-définies réparties en 4 thèmes (Salutations, Voyage, Nourriture, Nombres)
- Catégorie « Toutes » qui mélange les cartes de tous les thèmes
- Animation 3D de retournement de carte
- Bouton mélanger, prononciation audio, navigation au clavier (← →)

**Général**
- Support RTL pour l'arabe
- Design glassmorphism responsive avec dégradé animé

## 🚀 Installation locale

```bash
npm install
npm start
```

Puis ouvrez [http://localhost:3000](http://localhost:3000).

## ☁️ Déploiement sur Render (gratuit)

1. Poussez ce dépôt sur GitHub.
2. Allez sur [render.com](https://render.com) → **New** → **Web Service**.
3. Connectez votre dépôt GitHub.
4. Renseignez :
   - **Build Command** : `npm install`
   - **Start Command** : `npm start`
5. Cliquez sur **Create Web Service**. Render injecte automatiquement `process.env.PORT`.

## 🛠 Pile technique

- **Backend** : Node.js 18+ + Express
- **Frontend** : HTML + CSS + JavaScript vanilla (aucun framework)
- **API de traduction** : [MyMemory](https://mymemory.translated.net/) (gratuite, sans clé, ~5000 mots/jour par IP)

## 📁 Structure

```
.
├── package.json
├── server.js          → Express + proxy /api/translate
├── public/
│   ├── index.html
│   ├── style.css
│   └── script.js
└── README.md
```