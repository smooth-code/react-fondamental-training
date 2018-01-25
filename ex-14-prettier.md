# Exercice 14 - Prettier

## Instructions

Pour développer plus vite, nous allons installer Prettier dans notre projet.

* Installer le plugin Prettier dans votre éditeur
* Installer `prettier` dans le projet
* Créer un fichier `.prettierrc` avec la configuration souhaitée
* Ajouter un script npm "format"
* Lancer `npm run format`

**Résultat attendu**

```
$ npm run format
> react-app@0.1.0 format
> prettier --write "**/*.js"

src/App.js 60ms
src/App.test.js 4ms
...
```

## Aide

### Exemple de fichier `.prettierrc`

```json
{
  "singleQuote": true,
  "trailingComma": "all",
  "semi": false
}
```

### Exemple de script "format"

```json
{
  "name": "my-package",
  "scripts": {
    "format": "prettier --write \"**/*.js\""
  }
}
```
