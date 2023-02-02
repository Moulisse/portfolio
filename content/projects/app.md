---
id: 3
title: Webapp de prise de commandes - Denis Lachartre
description: Webapp mobile et desktop avec gestion de comptes client.
icon: bi:phone
color: "#fb923c"
preview: app.png
stack: [Angular, Ionic, NodeJS]
---

::AppImg{src="app.png"}
::

---

# Webapp de prise de commandes

::Stack
---
stack: [Angular, Ionic]
---
::

Webapp mobile et desktop avec gestion de comptes client.
\
**Démo** :
https://test.xrestoffice.com/mpc-app-v2/37/order/articles?pdvId=SHOWS
\
**Carte bancaire de test** :
1111 2222 3333 4444 avec n'importe quelle date et CVV valides.


## Objectif

Tout comme le projet de borne, il s'agit d'une réécriture et d'un redesign d'une ancienne application AngularJS.
Cette app  doit être _responsive_ afin de s'adapter aux écrans de téléphone et à ceux de PC en Full HD.
Elle doit aussi pouvoir être publiée sur le Play Store et l'Apple Store (ce qui sera rendu possible grâce à Ionic et Capacitor).


## Compte client

La gestion du panier est la même que pour tous les projets de prise de commandes.
Ce qui fait sortir celui-ci du lot et augmente considérablement sa complexité, c'est sa gestion de compte client.
Il faut obligatoirement en avoir un pour pouvoir passer des commandes.
::AppImg{src="app/hist.png"}
::



## Fidélité

En passant des commandes particulières, il est possible de gagner des bons d'achat utilisables sur les prochaines commandes.
Cette gestion de fidélité est entièrement configurable (et désactivable) dans le back office.
::AppImg{src="app/fidelite.png"}
::



## Solde client

Pour éviter d'avoir à payer à chaque repas, il est possible de recharger son compte avec le montant qu'on veut.
Cela permet d'accélérer le parcours utilisateur de ceux qui commandent régulièrement.
::AppImg{src="app/solde.png"}
::

