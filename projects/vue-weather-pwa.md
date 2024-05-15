---
title:  Création d'une Progressive Web App avec Vue.js
description: Découvrez les technologies et les bonnes pratiques pour développer une application web progressive avec Vue.js.
img: mockup-pwa-weather.jpg
client: Websylvain
role: Intégration et développement web
link: nolink
listElements:
  - name: Vue.js
    text: Vue.js est un framework JavaScript open source léger et modulaire qui simplifie le développement d'interfaces utilisateur dynamiques.
    img:  vuejs.jpg
  - name: Vuex
    text: Vuex est une librairie permettant de gérer un système centralisé de state pour vos composants, inspirée par la logique Flux.
    img:  vuex.jpg
  - name: Webpack
    text: Webpack est un module bundler indispensable pour le développement d'applications JavaScript, permettant de séparer les ressources en modules indépendants, de les minifier et de préparer une version packagée pour la production.
    img: webpack.jpg
  - name: Vuetify
    text: Vuetify est une bibliothèque de composants réutilisables pour Vue.js, offrant une expérience utilisateur digne des grandes applications de Google grâce à un design minimaliste appelé "Material Design".
    img: vuetify.jpg
---

Les Progressive Web Apps (PWA) ne sont plus une simple légende... Lorsque je donnais des cours sur Vue.js, je cherchais un exemple concret pour la mise en pratique. J'ai pensé qu'une application météo serait intéressante.

Aujourd'hui, nous sommes capables d'offrir aux utilisateurs une expérience d'application native grâce aux technologies web. L'application météo est parfaite pour cet objectif, car elle doit répondre à plusieurs spécifications pour fonctionner correctement. Elle doit notamment être conforme aux recommandations de Google :

- **App-like et Responsive :** L'application doit offrir une expérience utilisateur similaire à celle d'une application native et s'adapter automatiquement à la taille de l'écran.
- **Indépendante de la connectivité :** Les contenus consultés lors d'une précédente visite doivent rester accessibles même en l'absence de connexion internet.
- **Linkable & Discoverable et Easily Installable :** L'application doit être accessible via une URL et pouvoir être ajoutée à l'écran d'accueil du smartphone.
- **Sécurité :** Toutes les requêtes de l'application doivent être sécurisées.
- **À jour :** L'utilisateur doit toujours avoir accès à la dernière version de l'application.
- **Bénéficier des fonctionnalités natives :** L'application doit pouvoir fournir à l'utilisateur des informations météorologiques basées sur sa localisation grâce à la fonction GPS de son appareil.

Découvrez le code source sur ce [repo GitHub](https://github.com/webdev-happiness/progressive-weather-app).