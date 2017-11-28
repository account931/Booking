<?php
include '../Classes/Validate.php';
include '../Classes/SavetoDB.php';
include '../Classes/Mail.php';
//Server-side  validate
$Object=new Validate();
$Object->getValues();
if ($_POST['validate_flag']=='vaidate_flag_OK') //if  we  get  flag  from relevant Class  method
{
   //connect  to  db -->reassigned  to  singleton
   /*$database=new SavetoDB();
   $database->connectDB();
   $database->save_to_DB();*/
   //singletone DB connection+saving
	   $singeltone=SavetoDB::getInstance();
	   $singeltone->save_to_DB();
   //end  singletone
   $Email=new Mail();
   $Email->sendMail();
  //Mail  Class
}
/*$name=$_POST['namePH'];
$email=$_POST['emailPH'];
$phone=$_POST['phonePH'];
$description=$_POST['descriptionPH'];
                     
echo "We  got-> </br>";
echo $name."</br>";
echo $email."</br>";
echo $phone."</br>";
echo $description."</br>";*/
?>
