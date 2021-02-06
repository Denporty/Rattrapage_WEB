# Rattrapage WEB
## A3DW2 Victor CABOT
### Pré-requis

Pour installer le projet vous aurez besoin de :
* Composer,
* Symfony CLI,
* yarn ou npm

### Installation


Pour démarrer le projet il faut :
- Allez dans le projet via la cmd ;
- Executez les commandes : ``yarn install``, ``composer update``
- Configurez le .env
- Executez les commandes ``php bin/console make:migration``, ``php bin/console doctrine:migrations:migrate``,  ``symfony server:start``

Quand toutes ces étapes sont terminées vous devriez pouvoir accéder au projet via l'URL http://127.0.0.1:8000/

Si rien n'apparait ou qu'il y a une erreur verifier les champs en base de donnée s'il n'y a pas dans "todo" de champs "tracking_number" et/ou "validation_step" il vous faut le(s) rajouté(s)


## Realisation
### Fait avec

* Symfony
* React

### Bibliographie

* J'ai suivi ce tuto afin de réaliser mon projet : https://www.youtube.com/watch?v=qYgf9v3PNu8&list=PLKgdkWe819ixRoJMWqQpebmUkqKaiTMBl
* Pour me debug j'ai majoritairement utiliser stackOverflow
