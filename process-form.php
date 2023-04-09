<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  // Παίρνουμε τα δεδομένα της φόρμας
  $name = $_POST['inputName'];
  $email = $_POST['inputEmail'];
  $subject = $_POST['inputSubject'];
  $message = $_POST['inputMessage'];

  // Εδώ μπορείτε να κάνετε οποιαδήποτε επεξεργασία ή αποθήκευση των δεδομένων
  // που λαμβάνετε από τη φόρμα, όπως για παράδειγμα αποθήκευση σε βάση δεδομένων ή αποστολή email.

  // Στέλνουμε το αποτέλεσμα στον πελάτη
  header('Content-Type: application/json');
  echo json_encode(['status' => 'success']);
} else {
  // Αν ο χρήστης δεν υποβάλει μια φόρμα μέσω POST request, το αίτημα απορρίπτεται
  header("HTTP/1.1 405 Method Not Allowed");
  exit;
}
