# 📱 Calculateur de Béton Pro - PWA

Application mobile progressive pour calculer les quantités de matériaux de béton.

## 📦 Contenu du package

- `index.html` - Page principale de l'application
- `style.css` - Feuille de style moderne et responsive
- `script.js` - Logique de calcul et interactions
- `manifest.json` - Manifeste PWA (métadonnées de l'app)
- `service-worker.js` - Service Worker pour le mode hors ligne
- `icon-192.png` - Icône de l'app (192x192px)
- `icon-512.png` - Icône de l'app (512x512px)

## 🚀 Installation directe sur téléphone (PWA)

### Android (Chrome/Edge)

1. Ouvre ton navigateur Chrome ou Edge
2. Va sur le site web de ton app
3. Clique sur le menu (⋮) → **"Installer l'application"** ou **"Ajouter à l'écran d'accueil"**
4. Confirme l'installation
5. L'icône apparaît sur ton écran d'accueil !

### iOS (Safari)

1. Ouvre Safari
2. Va sur le site web
3. Clique sur le bouton Partager (⬆️)
4. Sélectionne **"Sur l'écran d'accueil"**
5. Confirme

## 📲 Conversion en APK avec PWABuilder

### Étape 1 : Héberger ta PWA

Tu dois d'abord mettre ton app en ligne. **Options gratuites :**

#### Option A : GitHub Pages (recommandé)
```bash
# 1. Crée un repo GitHub
# 2. Upload tous les fichiers
# 3. Va dans Settings → Pages
# 4. Active GitHub Pages (branche main, dossier root)
# 5. Ton URL sera : https://ton-username.github.io/ton-repo/
```

#### Option B : Netlify
1. Va sur [netlify.com](https://netlify.com)
2. Drag & drop tous tes fichiers
3. URL instantanée fournie

#### Option C : Vercel
1. Va sur [vercel.com](https://vercel.com)
2. Import depuis GitHub ou drag & drop
3. Déploiement automatique

### Étape 2 : Utiliser PWABuilder

1. **Va sur** [pwabuilder.com](https://www.pwabuilder.com)

2. **Entre l'URL** de ta PWA hébergée
   - Exemple : `https://ton-username.github.io/beton-pro/`

3. **Clique sur "Start"** pour analyser ta PWA

4. **Génère ton APK Android :**
   - Clique sur l'onglet **"Android"**
   - Configure les options :
     - ✅ Package ID : `com.tonnom.betonpro`
     - ✅ App name : `Béton Pro`
     - ✅ Signing : Utilise les clés auto-générées (ou upload les tiennes)
   
5. **Télécharge l'APK** (ou le bundle AAB pour le Play Store)

6. **Installe sur Android :**
   - Transfer l'APK sur ton téléphone
   - Active "Sources inconnues" dans les paramètres
   - Installe l'APK

### Étape 3 : Publier sur Google Play (optionnel)

Si tu veux mettre l'app sur le Play Store :

1. Crée un compte développeur Google Play (25$ unique)
2. Utilise le fichier **AAB** (pas APK) généré par PWABuilder
3. Upload sur la Play Console
4. Remplis les infos requises (description, screenshots, etc.)
5. Soumets pour révision

## ⚙️ Configuration requise

### Pour héberger
- Un serveur web (GitHub Pages, Netlify, Vercel, etc.)
- **HTTPS obligatoire** pour les PWA (fourni gratuitement par ces services)

### Pour tester localement
```bash
# Utilise un serveur local (ne marche PAS en double-cliquant index.html)
python -m http.server 8000
# ou
npx http-server
```

Puis va sur `http://localhost:8000`

## 🔧 Personnalisation

### Changer les couleurs
Édite dans `manifest.json` :
```json
{
  "background_color": "#667eea",  // Couleur de fond
  "theme_color": "#2563eb"        // Couleur de la barre d'état
}
```

### Changer le nom de l'app
Dans `manifest.json` :
```json
{
  "name": "Ton Nom Complet",
  "short_name": "Nom Court"
}
```

### Modifier les icônes
Remplace `icon-192.png` et `icon-512.png` par tes propres images (format carré).

## 🐛 Dépannage

### La PWA ne s'installe pas
- ✅ Vérifie que le site est en **HTTPS**
- ✅ Vérifie que `manifest.json` est bien lié dans `index.html`
- ✅ Ouvre la console du navigateur (F12) pour voir les erreurs

### Le Service Worker ne fonctionne pas
- ✅ Efface le cache du navigateur
- ✅ Vérifie les chemins dans `service-worker.js` (doivent correspondre à ta structure)
- ✅ HTTPS requis (sauf localhost)

### PWABuilder ne détecte pas ma PWA
- ✅ Assure-toi que `manifest.json` est accessible : `ton-url.com/manifest.json`
- ✅ Vérifie que les icônes existent et sont accessibles
- ✅ Le Service Worker doit être enregistré (vérifie dans DevTools)

## 📚 Ressources utiles

- [PWABuilder Documentation](https://docs.pwabuilder.com/)
- [Google PWA Guide](https://web.dev/progressive-web-apps/)
- [Can I Use - PWA Support](https://caniuse.com/serviceworkers)

## 💡 Fonctionnalités de la PWA

✅ **Installation** sur écran d'accueil  
✅ **Mode hors ligne** complet  
✅ **Rapide** (cache intelligent)  
✅ **Responsive** (mobile, tablette, desktop)  
✅ **Icônes natives** Android/iOS  
✅ **Pas de Play Store requis** pour distribution

---

**Besoin d'aide ?** Ouvre un issue ou contacte le développeur ! 🚀
