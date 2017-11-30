<?php
//just a copy of selectTAble, as it contain inserting,

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
   /* $servername = "localhost";
    $username = "root";
    $password = "root";*/



include '../Classes/ConnectDB.php';
$singeltone=ConnectDB::getInstance(); //creates connection $con;  //was deactivated in index.php



















//Starts INSERTING -will be used later-------------------
try {
    // $conn = new PDO("mysql:host=$servername;dbname=Booking_My", $username, $password); // commented as it is in $singeltone=ConnectDB::getInstance();
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);


//-----------------
$sth = $conn ->prepare("INSERT INTO bookingTable(b_booker, b_ip, b_table, b_timeInterval,b_bookedDate, b_bookedUnix,  b_when_was_booked) VALUES (:logins, :ip, :passs, :timeInterval,  :bookedDate,  :bookedDateUnix, :whenBooked)");

          $sth->bindValue(':logins',"Dima");
          $sth->bindValue(':passs',1);
          $sth->bindValue(':ip' ,$_SERVER['REMOTE_ADDR']);
          $sth->bindValue(':timeInterval' ,9);
          $sth->bindValue(':bookedDate', '2017-11-29');  //$_POST['serverDateID'] 
          $sth->bindValue(':bookedDateUnix' ,$_POST['ServerDate_UnixID'] );
          $sth->bindValue(':whenBooked' ,date("Y-m-d H:i:s") );
    
          $sth->execute();
//-----------------
   /* $sql = "INSERT INTO bookingTable (b_booker,b_table,b_timeInterval)
    VALUES ('Dima', 1, 9)";
    // use exec() because no results are returned
    $conn->exec($sql);*/


    echo "New record created successfully";
    }
catch(PDOException $e)
    {
    echo "screwed</br>";
    echo $sql . "<br>" . $e->getMessage();
    }

$conn = null;

//END   INSERTING -will be used later-------------------


//-------------------------------



?>
