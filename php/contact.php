<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $email = $_POST['email'];
    $query = $_POST['query'];
    $member = isset($_POST['member']) ? 'Yes' : 'No';
    $concern = $_POST['concern'];

    // Connect to the database
    $connection = mysqli_connect("sql105.infinityfree.com", "if0_38684308", "RoyNNfmqxobj1", "if0_38684308_chatwithpdf_db") or die("Connection failed");

    // Prepare the SQL statement to insert data
    $sql = "INSERT INTO contactinfo(email, query, concern, member) VALUES('$email', '$query', '$concern', '$member')";

    if ($connection->query($sql) === TRUE) {
        echo "Data inserted successfully";
    } else {
        echo "Error: " . $sql . "<br>" . $connection->error;
    }

    $connection->close();
}
?>
