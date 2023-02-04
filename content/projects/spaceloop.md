---
id: 2
title: Tablette Spaceloop - Denis Lachartre
description: Tablette de prise de commande dans un restaurant au style futuriste.
icon: ri:space-ship-line
color: "#06b6d4"
preview: spaceloop/tablette.png
stack: [Vue, Tailwind, HeadlessUI, NodeJS]
---

::AppImg{src="spaceloop/tablette.png"}
::

---

# Tablette Spaceloop

::Stack
---
stack: [Vue, Tailwind, HeadlessUI, NodeJS]
---
::

Tablette de prise de commande dans un restaurant au style futuriste.

## Objectif

Un client souhaitait ouvrir un nouveau restaurant avec comme theme l'exploration spatiale.
Il s'agissait en réalité de trois applications :
- Un écran d'accueil pour que les serveurs puissent gérer l'occupation du restaurant.
- Les tablettes de prise de commandes; Une par table et représentent la majeure partie du travail réalisé.
- Des écrans en cuisine pour informer les cuisiniers des repas à composer.


## Écran d'accueil

Grâce à cet écran tactile, le personnel du restaurant peut avoir un aperçu de l'occupation du restaurant.
Il peut aussi modifier le statut de chaque place en deux clics.

::AppImg{src="spaceloop/accueil.png"}
::

Un écran situé à l'accueil du restaurant permet d'avoir un apperçu de l'état des tables.
Elle permet d'aider les serveurs à placer les convives, à faire des reservations ainsi qu'a voir quelles tables sont bientôt libres.
Les éléments graphiques de la partie gauche sont réalisés à l'aide à un svg généré dynamiquement.
En convertissant des coordonnées polaires en cartésiennes, on peut facilement créer plusieurs formes en arc de cercle.


## Tablette

Cette app est la plus complète des trois. Elle reprend le parcours utilisateur classique avec quelques subtilités :
- les convives utilisent un badge donné à l'entrée pour s'identifier.
- le paiement s'effectue en caisse à la fin du repas.

::AppImg{src="spaceloop/tablette.png"}
::

La principale difficulté vient de la taille de la tablette, 1024*786 pixels, ainsi qu'une spécification client d'éviter de devoir scroll.
Pour pallier ce problème, la taille des éléments a été réduite au maximum tout en restant utilisation sur un écran tactile.
Ceux qui ne le pouvaient ont été divisés en plusieurs pages, par exemple lors de la sélection des éléments des menus.


## Écrans en cuisine

Enfin, l'écran cuisine indique les plats chauds que les cuisiniers doivent réaliser et envoyer aux convives.
Ils appuient ensuite sur le bouton correspondant pour faire baisser le compteur de 1.

::AppImg{src="spaceloop/cuisine.png"}
::
