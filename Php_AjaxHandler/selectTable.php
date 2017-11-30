<?php


$tableX=$_POST['serverTableID']; //Table number
$dateX=$_POST['serverDateID']; // Date timestamp
$unixX=$_POST['ServerDate_UnixID'];// Unix  var
                     
echo "We  got-> </br>";
echo $tableX."</br>";
echo $dateX."</br>";
echo $unixX."</br>";









//-------------------------------------
 global $conn;
  

include '../Classes/ConnectDB.php';
$singeltone=ConnectDB::getInstance(); //creates connection $con;  //was deactivated in index.php



















//Starts Selecting---------------------
try {
    //$conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    
$resFR = $conn->query("SELECT * FROM bookingTable WHERE b_bookedUnix ='{$_POST['ServerDate_UnixID']}' AND 	b_table ='{$_POST['serverTableID']}' ORDER BY b_timeInterval ASC     "); //WHERE mvcFr_who LIKE '{$_SESSION['login']}'   
//ORDER BY b_timeInterval DESC 


//echo "</br>=>".count( ); //confirm delete
//print_r($resFR->fetchAll());


//Array length
echo "</br>PDO rows length =>  ". $resFR->rowCount(); //works



//--------
 $rowF =$resFR->fetchAll();
 echo "</br>single row=> ".$rowF[0]['b_id']; 
//--------------------




$resFR2 = $conn->query("SELECT * FROM bookingTable WHERE b_bookedUnix ='{$_POST['ServerDate_UnixID']}' AND 	b_table ='{$_POST['serverTableID']}' ORDER BY b_timeInterval ASC     "); 
while ($rowF2 =$resFR2->fetch())
{

echo "</br> vvvID-> ";
echo $rowF2['b_id']; 

    } //end while


 if($resFR->rowCount()==0){echo "</br>No record fot Table ". $_POST['serverTableID'];} else  {echo "</br>Records exist ". $_POST['serverTableID'];}


}
catch(PDOException $e) {
    echo "ERR-ed";
    echo "Error: " . $e->getMessage();
}
$conn = null;
//END   Selecting----------------------------


//-------------------------------



?>
