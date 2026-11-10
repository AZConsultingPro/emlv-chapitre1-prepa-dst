# Validations et suivi enseignant

Activation effectuée le 10 novembre 2026 dans le projet existant EMLV · Prépa DST · Validations et suivi.

- Huit formulaires de compétence et un formulaire dédié au sujet blanc.
- Neuf déclencheurs de réception vérifiés.
- Neuf réponses TEST envoyées en mode répondant et retrouvées dans Suivi.
- Champs de méthode obligatoires pour chaque calcul ; méthodes et argumentations à lire par l’enseignant.
- Virgule, point, espace de milliers, unité et nombres négatifs testés.
- Test réel d’une saisie illisible : format à revoir, exclusion du maximum objectif évalué, sans attribution automatique d’erreur.
- Test réel d’une modification de réponse : mise à jour de la même ligne et statut Remise modifiée · à relire.
- Classeur privé, aucune adresse email collectée automatiquement. Horodatage Europe/Paris.

Les liens répondants sont dans assets/config.js. Le classeur privé et les liens de modification sont transmis uniquement à l’enseignant et ne doivent pas être ajoutés à ce dépôt public.

## Maintenance

Conserver le projet Apps Script existant et ses propriétés. Ne pas recréer l’installation dans un autre projet : cela créerait une nouvelle série de formulaires.

installerEMLV reprend les formulaires déjà identifiés dans ce projet. afficherConfigurationEMLV affiche la configuration publique et le lien du suivi privé. finaliserRecetteEMLV corrige le lien documentaire du sujet blanc, applique le fuseau Europe/Paris et contrôle le nombre de déclencheurs.

Les réponses TEST restent conservées pour la recette. Elles sont repérables par le préfixe TEST-RECETTE et doivent être exclues du bilan des étudiants.

## Lecture du suivi

La réception est attestée par l’identifiant réel de réponse et l’horodatage. Un clic dans l’application ne vaut pas remise. Le score objectif porte sur QCM et calculs lisibles ; les formats ambigus restent en attente. Les réponses ouvertes et les méthodes nécessitent une lecture humaine. La validation finale de compétence appartient à l’enseignant.
