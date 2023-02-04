---
id: 1
title: Borne de prise de commandes - Denis Lachartre
description: Projet de borne au format portrait permettant aux utilisateurs de passer leurs commandes de façon autonome.
icon: ic:outline-fastfood
color: "#22c55e"
preview: borne.png
stack: [Vue, Tailwind, HeadlessUI, Electron, NodeJS]
---

::AppImg{src="borne.png"}
::

---

# Borne de prise de commandes

::Stack
---
stack: [Vue, Tailwind, HeadlessUI, Electron, NodeJS]
---
::

Projet de borne au format portrait permettant aux utilisateurs de passer leurs commandes de façon autonome.

## Objectif

Réécriture d'une ancienne app en AngularJS qui était devenue trop compliqué à maintenir.
J'en ai aussi profité pour faire un redesign complet et ajouter beaucoup de micro-interactions et des animations afin de rendre la navigation plus agréable.

## Choix de la stack

- Vue : Mon choix de framework front-end.
- Tailwind : Aide à l'écriture du CSS, évite d'avoir une quantité de CSS qui grossit à mesure qu'on développe.
- HeadlessUI : Bibliothèque de composants minimale et non stylisée, fonctionne très bien avec Tailwind.
- Electron : La borne doit utiliser des fonctions systèmes pour dialoguer avec le terminal de paiement.
Electron est donc une bonne solution pour quelqu'un qui connait aussi NodeJS.

## Utilisation

Similaires aux autres apps de prises de commandes, on sélectionne des articles qu'on ajoute au panier, puis on passe au paiement.
Certains articles sont plus compliqués que d'autres, il faut passer par plusieurs pages pour choisir ses ingrédients.

::AppImg{src="borne/borne_menu.png"}
::

## Personnalisation

Vu qu'elle doit s'inscrire dans un système "as a service", cette borne doit pouvoir anticiper les demandes clients.
La gestion des articles et menus se base sur ce qui a été fait pour l'app de prise de commandes, donc c'est déjà modifiable dans un back-office.
En revanche, il a fallu rendre personnalisables certains éléments statiques ainsi que les différentes couleurs.
Afin de limiter le nombre de couleurs à saisir, certaines couleurs de texte sont calculées automatiquement afin de maximiser le contraste.
Voici ce que ça donne avec un thème black :

::AppImg{src="borne/borne_dark.png"}
::

Un dernier élement important de personnalisation est le mode de paiement.
Certains clients souhaiteront payer en caisse, d'autres avec leur solde fidélité.

::AppImg{src="borne/borne_success.png"}
::

## Paramétrage

Certains paramètres ne peuvent pas être gérés dans le back-office, notamment l'adresse des webservices.
Il a donc fallu développer une petite fenêtre qui se lance en même temps que la borne :

::AppImg{src="borne/borne_settings.png"}
::
