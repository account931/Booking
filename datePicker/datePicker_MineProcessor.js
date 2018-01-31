         
$(document).ready(function(){

 // Mine Calendar Pick up is here
 // Clicking <<  and >> {Prev and Next} is  here
 // Clendar picker needs {datePicker/datepicker.min.js+ datePicker/datepicker.min.css}










// Arrays to be used by different functions
// **************************************************************************************
// **************************************************************************************
//                                                                                     **  
var Monthh = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]; //General array for all click actions
//General arrayweek days for all click actions
var weekdays = new Array(7);
        weekdays[0] = "Sun";
        weekdays[1] = "Mon";
        weekdays[2] = "Tue";
        weekdays[3] = "Wed";
        weekdays[4] = "Thu";
        weekdays[5] = "Fri";
        weekdays[6] = "Sat";
// **                                                                                  **
// **************************************************************************************
// **************************************************************************************
// END  Arrays to be used by differnt functions



























// Loads today date to input on page load
// **************************************************************************************
// **************************************************************************************
//                                                                                     **  



                  //alert('fggf');
                   /*window.dateZ = new Date(); //alert(dateZ);
                   date_array=dateZ.toString().split(" "); //unless no .toString->crash
                   dateZ=date_array[2]+  '-'  + date_array[1]+  "-"    + date_array[3];
                   $("#myDateInput").val(dateZ);  */

           
//var date = new Date(/*adoptedDateFormat*/); //var date = new Date('04/28/2013 00:00:00');  // must be 2017,9,13'  // creates new date based on input time gen by PHP
     
var yesterday = new Date(   /*date.getTime() -(decr*24*60*60*1000)*/ ); //24*60*60*1000 // gets the date  -1 day
    //--start function
     var curr_date =yesterday.getDate();
     var curr_month = yesterday.getMonth();// + 1; 
     var curr_year = yesterday.getFullYear();
     //var Monthh = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];// dublicate
//week

        var r = weekdays[yesterday.getDay()];
         //alert(r);
//end week
     //alert ("Curr=> " +Monthh[curr_month]+ " date "+ curr_date );
    //
      
//getting all together 
      yesterday=curr_date+"-"+Monthh[curr_month]   +"-" +r+  '-'+curr_year;
//End function-----------------------
      $("#myDateInput").val(yesterday); 


// **                                                                                  **
// **************************************************************************************
// **************************************************************************************
// END  Loads today  date to input on page load









//Start PickDate click calendar --------------------------
// **************************************************************************************
// **************************************************************************************
//                                                                                     **  
var selectedDate = "";
	
 $('#calendarPick').datepicker( {
    onSelect: function(date) {
       //alert(date); //date  result by pick
	   selectedDate = date; // datePicker returns date in format ->  14.10.2017
	  // alert(selectedDate);
    dateArray=selectedDate.split('.');// set to array 
//inj


//inj
//alert(dateArray[1] );
//creates a new Date obj with date-> get Mon,Tues
 // we -1 because  month returned by DatePicker are from 1-12, not 0-11 as in arrat Monthh
 var monthAdopted=dateArray[1]-1; //alert(monthAdopted); // we use dateArray[1]-1 because month value range (1-12) and my Month array range (0-11)
 var oldDate=dateArray[2]+ "," + dateArray[1] /*monthAdopted*/ + "," +dateArray[0];  // Y-M-D   //  the wrong Week days' Error was here-> by using adopted month {var monthAdopted} u calling not actual date, but with -1 monyth; thus u create object for prev month not current;
 // use dateArray[1] instead monthAdopted to fix wrong week days;
 //alert(oldDate);
 var date = new Date(oldDate);// Y-M-D
 var r = weekdays[date.getDay()]; //get Mon,Tues
 //alert("->"+ date.getDay());// alerts nmumeric
    //final assigning
    selectedDateX=dateArray[0]+  '-'    +  Monthh[monthAdopted] + "-"+ r +  "-" + dateArray[2]  ; // date-month(Oct,Nov)-weekDay-Year
	$("#myDateInput").val(selectedDateX); //sets the date to input
	$("#calendarPick").val("Calendar"); //rename the buttion to calendar agian

     onLeftRightCalendarClick_ResetMainArea();
		
    },// END   onSelect: function(date) {
	

  
  });
// **                                                                                  **
// **************************************************************************************
// **************************************************************************************
//Start PickDate click calendar--------------------------
















window.decr=1;     // << Prev global var
window.decrNext=1; // >> NExt global var








// **************************************************************************************
// **************************************************************************************
//                                                                                     **  

//Click Prev Day <<  day -1;
   
  
    $("#prevDay").click(function(){

     decrNext=1; //reset >>  counter from Next day function
     var FormInputFirst= $("#myDateInput").val(); //alert ("1st->"+FormInputFirst); //gets the value from input (autogenerated by Php)
     
//----------------
     //Start=>below is temp disabled, as cause 50% error. This section was used to form {var adoptedDateFormat} and use it in {var date = new Date(adoptedDateFormat)}
     // here we split the php dtae to format fits for '2017,9,13' format to use in New Date()-------------
           var dateSplit=FormInputFirst.split('-');   //.split('\n').join(',').split(',');  
 
         //Object with Month // the crash might happen here;
            var objectMonth = { Jan:"0",Feb:"1",Mar:"2",Apr:"3",May:"4",Jun:"5",Jul:"6",Aug:"7",Sep:"9",Oct:"10",Nov:"11", Dec:"12"};// creat object as no assoc array in JS// Version-2, seems work
            //var objectMonth = { Jan:"0",Feb:"1",Mar:"2",Apr:"3",May:"4",Jun:"5",Jul:"6",Aug:"7",Sep:"8",Oct:"9",Nov:"10", Dec:"11"};// creat object as no assoc array in JS
            //var c=dateSplit[1];alert (c);
            //alert(objectMonth[c]);
			
			//get the 2nd array element (i.e Feb), find it position in array, make +1
			var monthSplit= Monthh.indexOf(dateSplit[1]);   monthSplit=parseInt(monthSplit)+1;        //alert(monthSplit);
			
            var adoptedDateFormat=dateSplit[3]+ "," + /*objectMonth[dateSplit[1]]*/ monthSplit+","+dateSplit[0];    //set to format duitable for JS (YYYY,MM, DD)
            //alert (adoptedDateFormat);
     // END here we split the php dtae to format fits for '2017,9,13' format---------
    //END =>below is temp disabled, as cause 50% error. This section was used to form {var adoptedDateFormat} and use it in {var date = new Date(adoptedDateFormat)}
//------------------------------
      //alert (adoptedDateFormat); alerting date
//get date object .(adoptedDateFormat)  in argument is a a specific date 
     var date = new Date(adoptedDateFormat); //var date = new Date('04/28/2013 00:00:00');  // must be 2017,9,13'  // creates new date based on input time gen by PHP
     
var yesterday = new Date(date.getTime() -(window.decr*24*60*60*1000)); //24*60*60*1000 // gets the date  -1 day
    //--start function
     var curr_date =yesterday.getDate();
     var curr_month = yesterday.getMonth();// + 1; 
     var curr_year = yesterday.getFullYear();
     //var Monthh = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];// dublicate
//week

        var r = weekdays[yesterday.getDay()];
         //alert(r);
//end week
     //alert ("Curr=> " +Monthh[curr_month]+ " date "+ curr_date );
    //
      
//getting all together 
      yesterday=curr_date+"-"+Monthh[curr_month]   +"-" +r+  '-'+curr_year;
//End function-----------------------
      $("#myDateInput").val(yesterday); 
      //window.decr++;  // must be commented if u try to get date value from input


//--------------------
// Refresh main field area on << >> click
   onLeftRightCalendarClick_ResetMainArea();


    });



// **                                                                                  **
// **************************************************************************************
// **************************************************************************************
//











// **************************************************************************************
// **************************************************************************************
//                                                                                     **  



//Start next Day------------------------------
    // var decrNext=1;
    
    $("#nextDay").click(function(){

    window.decr=1;//reset <<  counter from Prev day function click

     var FormInputFirst= $("#myDateInput").val(); //alert ("1st->"+FormInputFirst); //gets the value from input (autogenerated by Php)
     
     // here we split the php dtae to format fits for '2017,9,13' format-------------
           var dateSplit=FormInputFirst.split('-');   //.split('\n').join(',').split(',');  
            var objectMonth = {Oct:"9", model:"500", color:"white"};// creat object as no assoc array in JS
            //var c=dateSplit[1];alert (c);
            //alert(objectMonth[c]);
			
			//get the 2nd array element (i.e Feb), find it position in array, make +1
			var monthSplit= Monthh.indexOf(dateSplit[1]);   monthSplit=parseInt(monthSplit)+1;        //alert(monthSplit);
			
            var adoptedDateFormat=dateSplit[3]+ "," +/*objectMonth[dateSplit[1]]*/ monthSplit+","+dateSplit[0];    //set to format duitable for JS (YYYY,MM, DD)
            //alert (adoptedDateFormat);
     // END here we split the php dtae to format fits for '2017,9,13' format---------
  
//get date object
     var date = new Date(adoptedDateFormat); //var date = new Date('04/28/2013 00:00:00');  // must be 2017,9,13'  // creates new date based on input time gen by PHP
     var yesterday = new Date(date.getTime() +(decrNext*24*60*60*1000)); //24*60*60*1000 // gets the date  -1 day
    //
     var curr_date =yesterday.getDate();
     var curr_month = yesterday.getMonth();// + 1; 
     var curr_year = yesterday.getFullYear();
    



        var r = weekdays[yesterday.getDay()];
         //alert(r);
//end week
     //alert ("Curr=> " +Monthh[curr_month]+ " date "+ curr_date );
    //
      
//getting all together 
      yesterday=curr_date+"-"+Monthh[curr_month]   +"-" +r+  '-'+curr_year;
      $("#myDateInput").val(yesterday); 
      //decrNext++; 

//--------------------
// Refresh main field area on <<  >> click
onLeftRightCalendarClick_ResetMainArea();

    });
//
//End Next day--------------------------------



// **                                                                                  **
// **************************************************************************************
// **************************************************************************************
//








// Refresh main field area on << >> click
// **************************************************************************************
// **************************************************************************************
//                                                                                     **  


function onLeftRightCalendarClick_ResetMainArea(){

 xxx=$("#myDateInput").val(); // date value input;
 $("#ajaxResponse").stop().fadeOut("slow",function(){  $("#ajaxResponse").html("<center><h3 style='background-color:green;color:white; padding: 3em;'>Select table for "  +xxx+  "</h3></center>") }).fadeIn(3000);

$(".tableSmall").removeClass("selected");

}

// **                                                                                  **
// **************************************************************************************
// **************************************************************************************
// END Refresh main field area on << >> click












// **************************************************************************************
// **************************************************************************************
//                                                                                     **  





// **                                                                                  **
// **************************************************************************************
// **************************************************************************************
//












// END READY
});


