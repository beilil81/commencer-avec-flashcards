const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Sert les fichiers statiques (HTML, CSS, JS) depuis le dossier /public
app.use(express.static(path.join(__dirname, 'public')));

// Codes de langue autorisés — on filtre pour éviter qu'un utilisateur
// injecte n'importe quelle valeur dans l'URL de l'API externe.
const ALLOWED_LANGS = new Set(['fr', 'en', 'es', 'ar']);

app.get('/api/translate', async (req, res) => {
  const { text, from, to } = req.query;

  if (!text || !from || !to) {
    return res.status(400).json({ error: 'Paramètres manquants : text, from, to.' });
  }
  if (!ALLOWED_LANGS.has(from) || !ALLOWED_LANGS.has(to)) {
    return res.status(400).json({ error: 'Langue non supportée.' });
  }
  if (text.length > 500) {
    return res.status(400).json({ error: 'Texte trop long (max 500 caractères).' });
  }
  if (from === to) {
    return res.json({ translation: text });
  }

  try {
    const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=${from}|${to}`;
    const apiResponse = await fetch(url);

    if (!apiResponse.ok) {
      return res.status(502).json({ error: 'Service de traduction indisponible.' });
    }

    const data = await apiResponse.json();
    const translation = data?.responseData?.translatedText;

    if (!translation) {
      return res.status(502).json({ error: 'Réponse invalide du service de traduction.' });
    }

    res.json({ translation });
  } catch (err) {
    console.error('Erreur de traduction :', err);
    res.status(500).json({ error: 'Erreur serveur lors de la traduction.' });
  }
});

app.listen(PORT, () => {
  console.log(`✓ LinguaFlow démarré sur http://localhost:${PORT}`);
});