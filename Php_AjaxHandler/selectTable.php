<?php


$tableX=$_POST['serverTableID'];
$dateX=$_POST['serverDateID'];
$unixX=$_POST['ServerDate_UnixID'];// Unix  var
                     
echo "We  got-> </br>";
echo $tableX."</br>";
echo $dateX."</br>";
echo $unixX."</br>";




//$resFR = $db->query("SELECT * FROM bookingTable WHERE mvcFr_who LIKE '{$_SESSION['login']}' ");




//-------------------------------------
 global $conn;
    $servername = "localhost";
    $username = "root";
    $password = "root";

try {
     $conn = new PDO("mysql:host=$servername;dbname=Booking_My", $username, $password); // it does see singletone
    // set the PDO error mode to exception
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $sql = "INSERT INTO bookingTable (b_booker,b_table,b_timeInterval)
    VALUES ('Dima', 1, 9)";
    // use exec() because no results are returned
    $conn->exec($sql);
    echo "New record created successfully";
    }
catch(PDOException $e)
    {
    echo "screwed</br>";
    echo $sql . "<br>" . $e->getMessage();
    }

$conn = null;



//-------------------------------


/*$sth = $conn ->prepare("INSERT INTO bookingTable(b_booker,b_table,b_timeInterval) VALUES (:logins, :passs, :birth)");
          $sth->bindValue(':logins',"Dima");
          $sth->bindValue(':passs',1);
          $sth->bindValue(':birth',9);
    
          $sth->execute();*/


?>
