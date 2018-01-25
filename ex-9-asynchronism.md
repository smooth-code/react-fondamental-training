# Exercice 9 : Asynchronisme

## Instructions

Nous souhaitons que les personnages s'affichent un à un chaque seconde.

* Créer une fonction `delay(time)` qui retournera une Promise
* A l'aide de async / await, compléter la fonction `main`

**Résultat attendu**

```
$ node main.js
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
