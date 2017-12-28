<?php

 
// delete a single record by ID
$recordID=$_POST['ServerRecordID']; //Table number

                     
//echo "We  got-> </br>";
//echo $recordID.   "</br>";





//-------------------------------------
global $conn;
  

include '../Classes/ConnectDB.php';
$singeltone=ConnectDB::getInstance(); //creates connection $con;  //was deactivated in index.php





// sql to delete a record
    $sql = "DELETE FROM bookingTable WHERE b_id=$recordID";
    //echo $sql;


try {
   // use exec() because no results are returned
    $conn->exec($sql);
    echo "<p style='background-color:green;'>Record deleted successfully </p>";
    }
catch(PDOException $e)
    {
    echo $sql . "<br>" . $e->getMessage();
    }







?>
