<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <title>Traitement de la Livraison</title>
</head>

<body>
    <h1>Traitement de la Livraison</h1>

    <?php
    // Vérifie si des données ont été soumises via le formulaire
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        // Récupère l'adresse de livraison sélectionnée
        $adresseLivraison = $_POST["adresse-livraison"];

        // Vous pouvez effectuer d'autres traitements ici, par exemple, enregistrer l'adresse de livraison dans une base de données.

        // Affiche un message de confirmation
        echo "L'adresse de livraison sélectionnée est : " . htmlspecialchars($adresseLivraison);
    } else {
        // Si aucune donnée n'a été soumise, affiche un message d'erreur
        echo "Aucune donnée de livraison reçue.";
    }
    ?>
</body>

</html>