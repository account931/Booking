<?php
 
// creates shedule,generates links to book/delete entries (creates <a href> "book it"</a>)

$tableX=$_POST['serverTableID']; //Table number
$dateX=$_POST['serverDateID']; // Date timestamp // 
$unixX=$_POST['ServerDate_UnixID'];// Unix  var
                     
echo "We  got-> </br>";
echo $tableX."</br>";
echo $dateX."</br>";
echo $unixX."</br>";









// Must have connection for all PHP Handlers, creates $conn-----------------------------------------------
			global $conn; 

			include '../Classes/ConnectDB.php';
			$singeltone=ConnectDB::getInstance(); //creates connection $con;  //was deactivated in index.php

// END  Must have connection for all PHP Handlers, creates $conn-------------------------------------------
















//Starts Selecting (Just fot technical info)---------------------
try {
    //$conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    
$resFR = $conn->query("SELECT * FROM bookingTable WHERE b_bookedUnix ='{$_POST['ServerDate_UnixID']}' AND 	b_table ='{$_POST['serverTableID']}' ORDER BY b_timeInterval ASC     "); //WHERE mvcFr_who LIKE '{$_SESSION['login']}'   




//print_r($resFR->fetchAll());


//Array length
echo "</br>PDO rows length =>  ". $resFR->rowCount(); //works


//single row
//--------
 $rowF =$resFR->fetchAll();
 echo "</br>single row_0=> ".$rowF[0]['b_timeInterval']; 
 echo "</br>single row_1=> ".$rowF[1]['b_timeInterval']; 
//--------------------




$resFR2 = $conn->query("SELECT * FROM bookingTable WHERE b_bookedUnix ='{$_POST['ServerDate_UnixID']}' AND 	b_table ='{$_POST['serverTableID']}' ORDER BY b_timeInterval ASC     "); 

while ($rowF2 =$resFR2->fetch())
   {
echo "</br> vvvID-> ";
echo $rowF2['b_timeInterval']; 
    } //end while


 if($resFR->rowCount()==0){echo "</br>No record for Table ". $_POST['serverTableID'];} else  {echo "</br>Records exist ". $_POST['serverTableID'];}


//Display the date
echo "<center><p style='background-color:green;color:white;padding:2em;text-decoration:underline;border:2px solid grey;'> Schedule for "  .$dateX.  "</p></center>";














//Start Core algorithm-< display items, creates URL for "Book it"---
// **************************************************************************************
// **************************************************************************************
//                                                                                     **
 $resFR2 = $conn->query("SELECT * FROM bookingTable WHERE b_bookedUnix ='{$_POST['ServerDate_UnixID']}' AND 	b_table ='{$_POST['serverTableID']}' ORDER BY b_timeInterval ASC     "); 
 $rowF =$resFR2->fetchAll();



// Start Working CORE -------------
$bIntervals=array();// array for intervals available 

		foreach($rowF as $ss){
                             array_push($bIntervals,$ss['b_timeInterval']);
                             }


 echo "<div>"; //erase  part

		for($i=9; $i<18; $i++){
             //if time exists in array  $bIntervals, displayas taken
             if(in_array($i, $bIntervals)){ $t=$i+1; // next hour

                                            $indexOf=array_search($i,$bIntervals); // find the indexOf of $i, which exists in array to use {$rowF[$indexOf]['b_booker'].}
                                            echo "<h6 class='taken'> Reserved =>  ".$i.  ".00-" .$t. ".00   <span class='bookLink'>by ".    $rowF[$indexOf]['b_booker'].    "</span>  <img class='deleteMe' id="  .$rowF[$indexOf]['b_id'].  "  style='width:5%;margin-right:0.6em;' src='delete.png'/></h6>"; //  we have  to change <p>  to <h6> as it caused cool option to hide taken dates

                                          }else{

                  //setting var to set id and pass in it ID. A click will be assigned to .bookLink, will parse ID, and send ajax with this vars 
                   $tz=$i+1; // i.e (10.00-Stz.00)=(10.00-11.00)
                   $unix=$_POST['ServerDate_UnixID'];//$rowF[0]['b_bookedUnix'];// first Unix stamp from row-any of them fits, Unixtime to book
                   $table=$_POST['serverTableID'];//$rowF[0]['b_table']; //table to book
                   $timeNormal=$_POST['serverDateID'];// normal time like 2017-11-29
                   
                   //echo "<div class='accordition'>";
//---------------------------------
                   echo "<h6 class='free accordition bookLink2'> Free =>  ".$i.  ".00-" .$tz. ".00        <span class='bookLink'  id='' > book it</span>   </h6>";

                   echo "<p style='display:none;margin-top:0.7em;background-color:;' class='nnn'>  Your name <input class='nameX' type='text'size='7' placeholder='name...'/> <button type='button' class='bookFinal' id='tbTime-$i&d-$unix&tableId-$table&timeNormal-$timeNormal' > OK </button>  </p>";

                   //echo "</h6>"; // issue was here , JQ .next() is used for sibling inside PARENT// echo "<p class='free accordition'>

//-------------------------------------------




//PAtch----
                  /*echo "<h6 class='free accordition'> Free =>  ".$i.  ".00-" .$tz. ".00       <span class='bookLink'  id='tbTime-$i&d-$unix&tableId-$table' > book it</span> ";

                   echo "<p style='display:none;margin-top:0.7em;background-color:;' class='nnn'>  Your name <input class='nameX' type='text'size='7' placeholder='name...'/> <button type='button' class='bookFinal' id='tbTime-$i&d-$unix&tableId-$table' > OK </button>  </p>";

                   echo "</h6>"; // issue was here , JQ .next() is used for sibling inside PARENT// echo "<p class='free accordition'>
*/
//END PAtch---


                   //echo "</div>";
            
                 }   //end else

		}  // END for($i=9; $i<19; $i++){




 echo "</div>"; //erase



// END Start Working CORE -------------------------------








//it was prev attempt, which resulted in some glitched
/*
$countZ=9; //9 hours

//check array lengh, if 0, 
if ($resFR2->rowCount()==0){$lengthZ=1;}
else{
$lengthZ=$resFR2->rowCount();// result array lenght
echo "<p> Core lenghs: ".    $lengthZ.    "</p>";
}


for($cou=$countZ; $cou<19; $cou++)
{

	   for($j=0; $j<$lengthZ; $j++){
                    //echo $rowF[$j]['b_timeInterval'];
              
				  if( $rowF[$j]['b_timeInterval']==$cou  )     {echo "<p> Taken =>  ".$cou.  ".00</p>";
				                                                //$cou=$cou--;
				                                                break;  
                                                               // $cou++;
                                                                
				                                                
				                                                }
				                                                else if($rowF[$j]['b_timeInterval']!=$cou ){echo "<p> Free => ".$cou.  ".00</p>";  
				                                                //$cou++;
				                                               break;
				                                                }

	   }// END for($j=0; $j<$lengthZ; $j++){


}     // END for($cou=$countZ; $cou<18; $cou++)

// **                                                                                  **
// **************************************************************************************
// **************************************************************************************
*/
//END Core algorithm--------





} //end try
catch(PDOException $e) {
    echo "ERR-ed";
    echo "Error: " . $e->getMessage();
}
$conn = null;
//END   Selecting----------------------------


//-------



?>
