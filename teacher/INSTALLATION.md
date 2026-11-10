# Activation des validations Google Forms

Le script `Code.gs` est préparé mais sa création des formulaires doit être exécutée dans le compte Google de l'enseignant et vérifiée avant diffusion.

1. Dans Google Apps Script, créer un projet « EMLV · Prépa DST · Validations » et remplacer le contenu de Code.gs par le fichier fourni.
2. Exécuter `installerEMLV`. Les autorisations demandées correspondent à la création et gestion des Forms, du suivi Sheets et des déclencheurs de réception. Aucun email n'est envoyé, aucun fichier de réponses n'est rendu public.
3. Le script crée huit formulaires publiés et un classeur privé. En cas d'interruption, relancer la même fonction dans le même projet pour reprendre sans doublons.
4. Consulter les journaux : lien du suivi privé et configuration publique des huit formulaires. Intégrer seulement `forms` à la configuration de l'application. Ne pas publier l'URL privée du suivi.
5. Pour chaque formulaire, vérifier la disponibilité en mode répondant, envoyer une réponse test (identifiant TEST), puis vérifier la ligne de réception dans Suivi. Vérifier un calcul avec virgule, un calcul avec point, un mauvais format et la mise en attente de l'argumentation. Tester aussi la modification d'une réponse.
6. Conserver les copies de test pour contrôle, sans les mélanger avec une décision pédagogique concernant un étudiant.

## Lecture du suivi
- Réception : identifiant réel de réponse Google Forms et horodatage.
- Score objectif : QCM et calculs lisibles. Les formats à revoir sont exclus du maximum évalué et restent explicitement en attente.
- Argumentation : lecture manuelle selon les rubriques, jamais une note automatique par mots-clés.
- Validation enseignant : à renseigner après lecture. Un clic dans l'application ou un score partiel ne déclenche aucune validation de compétence.
- L'identifiant étudiant et la promotion permettent de filtrer la progression sans collecter automatiquement d'adresse email.

Le script n'a pas été exécuté tant que la session Google n'est pas reconnectée. La génération et la réception doivent être confirmées dans les interfaces Google avant de présenter les liens comme actifs.
