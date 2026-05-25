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

## 🔍 SEO & Analytics — Procédure post-déploiement

### 1. Remplacer l'URL placeholder
Une fois votre site déployé (ex : `https://linguaflow.onrender.com`), remplacez **toutes** les occurrences de `https://your-domain.com` :

- Dans `public/index.html` : balises `canonical`, `og:url`, `og:image`, `twitter:image`, JSON-LD (~6 occurrences)
- Dans `server.js` : définissez la variable d'environnement `SITE_URL=https://votre-url.com` sur votre hébergeur (Render : Settings → Environment)

### 2. Activer Cloudflare Web Analytics (gratuit, sans bannière cookies)
1. Créez un compte sur [dash.cloudflare.com](https://dash.cloudflare.com) → menu **Analytics & Logs** → **Web Analytics** → **Add a site**
2. Entrez l'URL de votre site, copiez le **token**
3. Dans `public/index.html`, **décommentez** le bloc Cloudflare et remplacez `YOUR_CLOUDFLARE_TOKEN`

### 3. Activer Microsoft Clarity (gratuit, heatmaps + enregistrements)
1. Créez un projet sur [clarity.microsoft.com](https://clarity.microsoft.com)
2. Récupérez votre **Project ID** (10 caractères, dans Settings → Setup)
3. Dans `public/script.js`, remplacez la constante `CLARITY_PROJECT_ID = 'YOUR_CLARITY_PROJECT_ID'`
4. Le script ne se charge **que si l'utilisateur clique « Accepter »** dans la bannière cookies

### 4. Soumettre votre site aux moteurs de recherche
- **Google** : [search.google.com/search-console](https://search.google.com/search-console) → Add property → URL → soumettez `https://votre-url.com/sitemap.xml`
- **Bing** : [bing.com/webmasters](https://www.bing.com/webmasters) → importez depuis Google Search Console en 1 clic

### 5. Vérifier le SEO
- Aperçu réseaux sociaux : [opengraph.xyz](https://www.opengraph.xyz/)
- Audit complet : Lighthouse (intégré à Chrome DevTools, onglet **Lighthouse**)
- Rich snippets : [search.google.com/test/rich-results](https://search.google.com/test/rich-results)

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