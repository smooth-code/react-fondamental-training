# Exercice 7 : Classes

## Instructions

Nous souhaitons utiliser une classe pour modéliser nos personnages.

* Créer une classe `Character`
  * Le constructeur acceptera un objet `{ name, title }`
  * Une méthode `getElement()`
  * Une méthode `getColor()`
  * Une méthode `display()`
* Le code doit fonctionner comme auparavant

**Résultat attendu**

```
$ node main.js
Daenerys Targaryen - Mother of Dragons (displayed in red)
Arya Stark - Princess (displayed in blue)
Jon Snow - King of the North (displayed in magenta)
```

## Aide

```js
const characters = [
  new Character({ name: 'Daenerys Targaryen', title: 'Mother of Dragons' }),
  new Character({ name: 'Arya Stark', title: 'Princess' }),
  new Character({ name: 'Jon Snow', title: 'King of the North' }),
]

characters.forEach(function(character) {
  character.display()
})
```
