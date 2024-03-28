<?php
header("Access-Control-Allow-Origin: *");
// Vérifie si la méthode de requête est POST
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Récupère les données envoyées depuis le corps de la requête
    $body = file_get_contents('php://input');
    $data = json_decode($body, true);

    // Traitez les données reçues, par exemple, envoyez un e-mail
    $nom = $data['nom'];
    $email = $data['email'];
    $message = $data['message'];

    // Exemple d'envoi de mail (assurez-vous que votre serveur est configuré pour envoyer des e-mails)
    $destinataire = 'contact@mathiasvilly.site';
    $sujet = 'Nouvelle soumission de formulaire';
    $contenu = "Nom: $nom\n";
    $contenu .= "Email: $email\n";
    $contenu .= "Message: $message\n";
    $headers = "From: Website <contact@mathiasvilly.site>\r\nReply-To: contact@mathiasvilly.site";

    // Envoyer l'email
    if (mail($destinataire, $sujet, $contenu, $headers)) {
        http_response_code(200);
        header('Location:https://mathiasvilly.site/#contact');
        // Répond avec un message JSON indiquant que la requête a réussi
        $response = ['success' => true, 'message' => 'Formulaire soumis avec succès'];
        echo json_encode($response);
    } else {
        header('Location:https://mathiasvilly.site/#contact');
        // Répond avec un code d'erreur si l'envoi de l'e-mail a échoué
        http_response_code(500); // Erreur interne du serveur
        $response = ['error' => 'Erreur lors de l\'envoi de l\'e-mail'];
        echo json_encode($response);
    }
} else {
    // Répond avec un code d'erreur si la méthode de requête n'est pas POST
    http_response_code(405); // Méthode non autorisée
    $response = ['error' => 'Méthode non autorisée'];
    echo json_encode($response);
}


