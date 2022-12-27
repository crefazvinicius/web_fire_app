<form action="create_user.php" method="post">
  <label for="username">Username:</label><br>
  <input type="text" id="username" name="username"><br>
  <label for="password">Password:</label><br>
  <input type="password" id="password" name="password"><br>
  <label for="email">Email:</label><br>
  <input type="email" id="email" name="email"><br><br>
  <input type="submit" value="Submit">
</form> 
Use PHP to process the form data when the form is submitted. First, check that all required fields have been filled in. Then, create a new user in your database by inserting a new row into the users table, using the form data as the values for the new row.
Copy code
<?php
  // Connect to the database
  $db = mysqli_connect('localhost', 'username', 'password', 'database_name');

  // Check that all required fields have been filled in
  if (empty($_POST['username']) || empty($_POST['password']) || empty($_POST['email'])) {
    echo 'Please fill in all required fields';
  } else {
    // Get the form data
    $username = mysqli_real_escape_string($db, $_POST['username']);
    $password = mysqli_real_escape_string($db, $_POST['password']);
    $email = mysqli_real_escape_string($db, $_POST['email']);

    // Create a new user in the database
    $query = "INSERT INTO users (username, password, email) VALUES ('$username', '$password', '$email')";
    mysqli_query($db, $query);

    echo 'User created successfully';
  }
?>