# CodeFolio – API de gestion de portfolios (GraphQL)

Un backend centralisé et moderne pour gérer un portfolio personnel sans CMS.  
Permet à l'admin de gérer profil, projets, compétences et expériences, et aux visiteurs de consulter ces informations.

## Stack technique
- **Backend** : Node.js, Express.js  
- **Langage** : TypeScript  
- **API** : GraphQL (Apollo Server)  
- **Base de données** : MongoDB (Mongoose)  
- **Authentification** : JWT  

## Fonctionnalités
- **Queries publiques** : getPortfolio, getProfil, getProjets, getCompetences, getExperiences  
- **Mutations admin** : login, updateProfil, create/update/delete Projet, Competence, Experience  
- **Sécurité** : RBAC – lecture seule pour visiteurs, lecture/écriture pour admin
