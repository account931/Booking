<?php

//we don't need this - confirm delete ????


global $conn;
  

include '../Classes/ConnectDB.php';
$singeltone=ConnectDB::getInstance(); //creates connection $con;  //was deactivated in index.php
















//Start Core algorithm-< display items, creates URL for "Book it"---------------------------------------------------
// **************************************************************************************
// **************************************************************************************
//                                                                                     **
 $resFR2 = $conn->query("SELECT * FROM bookingTable WHERE b_bookedUnix ='{$_POST['ServerDate_UnixID']}' AND 	b_table ='{$_POST['ServerTableID']}' ORDER BY b_timeInterval ASC     "); 
 $rowF =$resFR2->fetchAll();



// Start alternative-------------
$bIntervals=array();// array for intervals available 

		foreach($rowF as $ss){
                             array_push($bIntervals,$ss['b_timeInterval']);
                             }


 echo "<div>"; //erase

		for($i=9; $i<18; $i++){
             //if time exists in array  $bIntervals, displayas taken
             if(in_array($i, $bIntervals)){ $t=$i+1; // next hour

                                            $indexOf=array_search($i,$bIntervals); // find the indexOf of $i, which exists in array to use {$rowF[$indexOf]['b_booker'].}
                                            echo "<p class='taken'> Reserved =>  ".$i.  ".00-" .$t. ".00   <span class='bookLink'>by ".    $rowF[$indexOf]['b_booker'].    "</span></p>";

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

// END  alternative---------------------













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
//END Core algorithm-------------------------------------------------------------


























?>
