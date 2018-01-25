# Exercice 10 : Modules

## Instructions

Nous souhaitons réorganiser notre code pour y voir plus clair.

* Renommer `main.js` en `main.mjs`
* Créer un fichier `Character.mjs` qui exportera la classe `Character`
* Utiliser la syntaxe ES Modules pour importer `chalk`
* Lancer le programme avec `node --experimental-modules`

**Résultat attendu**

```
$ node --experimental-modules main.mjs
Daenerys Targaryen - Mother of Dragons (displayed in red)
# 1 sec..
Arya Stark - Princess (displayed in blue)
# 1 sec..
Jon Snow - King of the North (displayed in magenta)
```

## Aide

```js
const delay = async time => new Promise(resolve => setTimeout(resolve, time))

async function main() {
  for (let character of characters) {
    /* TODO */
  }
}

main()
```
