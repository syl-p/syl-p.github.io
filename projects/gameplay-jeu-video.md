---
title: Gameplay de base d'un jeu vidéo
description: Projet fun dans lequel il est question de s'amuser avec la librairie Threejs et de copier un concept de jeu existant.
img: mockup-pwa-weather.jpg
link: https://syl-p.github.io/progressive-weather-app/#/
tags:
  - threejs
  - typescript
  - 3D
  - jeux vidéos
listElements:
  - name: Typescript
    img: typescript.jpg
  - name: Threejs
    img: threejs.jpg
  - name: Tailwind
    img: tailwind.jpg
---

# Application progressive météo

Il s'agit d'un concept d'application illustrant les notions abordées pendant une formation Vuejs lorsque j'étais intervenant à la CCI de l'Aude (11000).

![Mockup de l'application progressive](/img/mockup-pwa-weather.jpg)

## Le concept

Les Progressive Web Apps (PWA) ne sont plus une simple légende... Lorsque je donnais des cours sur Vue, je cherchais un exemple concret pour la mise en pratique. J'ai pensé qu'une application météo serait intéressante.

![interfaces de l'application progressive](/img/mockup-pwa-weather-app.png)

## Les specifications techniques

Aujourd'hui, nous sommes capables d'offrir aux utilisateurs une expérience d'application native grâce aux technologies web. L'application météo est parfaite pour cet objectif, car elle doit répondre à plusieurs spécifications pour fonctionner correctement. Elle doit notamment être conforme aux recommandations de Google :

- **App-like et Responsive :** L'application doit offrir une expérience utilisateur similaire à celle d'une application native et s'adapter automatiquement à la taille de l'écran.
- **Indépendante de la connectivité :** Les contenus consultés lors d'une précédente visite doivent rester accessibles même en l'absence de connexion internet.
- **Linkable & Discoverable et Easily Installable :** L'application doit être accessible via une URL et pouvoir être ajoutée à l'écran d'accueil du smartphone.
- **Sécurité :** Toutes les requêtes de l'application doivent être sécurisées.
- **À jour :** L'utilisateur doit toujours avoir accès à la dernière version de l'application.
- **Bénéficier des fonctionnalités natives :** L'application doit pouvoir fournir à l'utilisateur des informations météorologiques basées sur sa localisation grâce à la fonction GPS de son appareil.

Découvrez le code source sur ce [repo GitHub](https://github.com/webdev-happiness/progressive-weather-app).

Et vous pouvez tester [la démo de cet application](https://syl-p.github.io/progressive-weather-app/#/) directement depuis votre navigateur.
