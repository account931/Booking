<!DOCTYPE html>
<html lang="en">

  <head>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>Booking</title>

    <!-- Bootstrap core CSS -->
         <!-- <link href=<?php echo dirname(__FILE__);?>/vendor/bootstrap/css/bootstrap.min.css rel="stylesheet">-->
              <link rel="stylesheet" type="text/css" href="bootstrap.min.css">      



    <!-- Custom styles for this template -->
    <!--<link href="css/blog-post.css" rel="stylesheet">-->
        <link rel="stylesheet" type="text/css" href="blog-post.css">  
    


    <!--<link href="css/css_mine.css" rel="stylesheet">-->
    <link rel="stylesheet" type="text/css" href="css_mine.css"> 





   <link rel="stylesheet" type="text/css" href="datePicker/datepicker.min.css">  


    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="JS/myScript.js"></script>
    <script src="datePicker/datepicker.min.js"></script>
     <script src="datePicker/datePicker_MineProcessor.js"></script>
     

  </head>

  <body>  

    <!-- Navigation -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div class="container">
        <a class="navbar-brand" href="#">Start Booking</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">Home
                <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Services</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>



<!-------------------------------Start All page---------------------------->

    <!-- Page Content -->
    <div class="container">


      <div class="row"> 









<!----------------------------------------Start left column----------------------------------------->


        <!-- Post Content Column -->
        <div class="col-lg-8">

               <div class="row"> <!--Start left column row11-->
                    



<?php
//TRYING TO REFER TO CLASS
include 'Classes/autoload.php';//uses autoload instead of manual includin each class-> Error if it is included in 2 files=only1 is accepted
//include("Classes/GetTemplateClass.php"); // no need as autoloader is here
$get = new GetTemplateClass(); $header=$get->GetTemplateR('Views/Left/content.tpl');
echo $header;





//singletone DB connection+saving
	  // $singeltone=ConnectDB::getInstance();// relocate to Handler->selectTable.php
	   //$singeltone->save_to_DB();
   //end  singletone
?>





             </div> <!--END left column row11-->

        </div><!--END <div class="col-lg-8">--> 
        
<!----------------------------------------END Start left column----------------------------------------->








<!-------------------------------------------Right SIDEBAR Column !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!---------------------------->
        <!-- Sidebar Widgets Column -->
        <div class="col-md-4  col-xs-2 col-sm-2">
         <center></br>
         <h1 class="centerMine">Select</h1></br></br>
         

               <div class="row"> <!--tables 1 row-->    
                     <div class="col-md-2 col-xs-2 col-sm-2 paddX"></div>                          <!-- just for space-->  
                     <div class="col-md-4 col-xs-2 col-sm-4 paddX tableSmall tableSmall_Click" id="table1">Room</br> 1</div>  <!-- table 1-->
                     <div class="col-md-2 col-xs-2 col-sm-2 paddX"></div>                          <!-- just for space-->      
                     <div class="col-md-4 col-xs-4 col-sm-4 paddX tableSmall tableSmall_Click" id="table2">Room </br> 2</div>              <!-- table 2-->

               </div> </br></br>           <!--END of tables 1 row-->
            
                  

              <div class="row"> <!--tables 2 row-->
                     <div class="col-md-2 col-xs-2 col-sm-2 paddX "></div>                          <!-- just for space--> 
                     <div class="col-md-4 col-xs-2 col-sm-4 paddX tableSmall tableSmall_Click" id="table3">Room </br>3</div>   <!-- table 3-->
                     <div class="col-md-2 col-sm-2 paddX "></div>                                   <!-- just for space-->      
                     <div class="col-md-4 col-xs-4 col-sm-4 paddX tableSmall tableSmall_Click" id="table4">Room </br>4</div>   <!-- table 4-->

               </div>            <!--END of tables 2 row-->
         
        


        </center>
        </div> <!-- END sidebar col-md-4-->
<!-------------------------------------------END Right SIDEBAR !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!---------------------------->






      </div>   <!-- END/.row -->








    </div>
    <!-- /.container -->







    <!-- Footer -->
    <footer class="py-5 bg-dark" > <!--my fix to bottom   style=" position: absolute;left: 0;bottom: 0;"-->
      <div class="container">
        <p class="m-0 text-center text-white">Copyright &copy; Your Website 2017</p>
      </div>
      <!-- /.container -->
    </footer>





    <!-- Bootstrap core JavaScript -->
    <!--<script src="vendor/jquery/jquery.min.js"></script>-->  <!--- EMERGENCY caused crashing on ZZZ, localhost was OK-->
    <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

  </body>

</html>
