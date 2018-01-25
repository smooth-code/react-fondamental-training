# Exercice 2 : Variables

## Instructions

Nous souhaitons pouvoir afficher les personnages de Game of Thrones et déterminer s'il s'agit d'un personnage lié au feu ou à la glace.

Pour déterminer l'élément du personnage, nous allons analyser son nom.

* "ice" s'il contient "stark"
* "fire" s'il contient "targaryen"
* "ice and fire" s'il contient "snow"

Le test devra être insensible à la casse.

Compléter le code suivant :

```js
function getElement(name) {
  /* TODO */
}

console.log(getElement('Daenerys Targaryen'))
console.log(getElement('Arya Stark'))
console.log(getElement('Jon Snow'))
```

**Résultat attendu**

```
$ node main.js
fire
ice
ice and fire
```
