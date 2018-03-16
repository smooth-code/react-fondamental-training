# Exercice 5 : Template Strings

## Instructions

Nous souhaitons afficher des couleurs dans la console, pour cela nous allons utiliser le package [chalk](https://github.com/chalk/chalk).

* Installer `chalk` dans le projet
* Créer un fichier `.gitignore` avec `node_modules`
* Créer un object `elementsColors` qui permettra de lier une couleur à chaque élément :
  * "ice" => "blue"
  * "fire" => "red"
  * "ice and fire" => "magenta"
* Utiliser `chalk` pour afficher l'élément des personnages

**Résultat attendu**

```
$ node main.js
Daenerys Targaryen - Mother of Dragons (displayed in red)
Arya Stark - Princess (displayed in blue)
Jon Snow - King of the North (displayed in magenta)
```

## Aide

```js
const chalk = require('chalk')

const name = 'Jon'

// Affiche "This in Jon" dans la console avec "Jon" en blanc
console.log(chalk`This is {magenta ${name}}`)
```
