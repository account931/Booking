$(document).ready(function(){
 
//all calendar clicking + << >> are in datePicker/datePicker_MineProcessor.js



//Start click on small tables in right column (Selecting the table 1-4)
// **************************************************************************************
// **************************************************************************************
//                                                                                     **
                                                                                    
$(".tableSmall_Click").click(function(){
   
   
   tableSelectAction( $(this) );   //pass $(this)  // function listen to your choice in right panel, which table u select & display relevant table in the right

   window.funcValue=DatetoUnix();  //convert time from input to Unix time->Convert from {29-Nov-Wed-2017} to {2017-11-29} amd uses it to convert to Unix time. //use variable to get two returns[].
   
  // DatetoDateStampSQL(); //convert time from input to SQL Datestamp ->Convert from {29-Nov-Wed-2017} to {2017-11-29}

   sendAjaxSQLSelect(); //sends Ajax request to Php_AjaxHandler/selectTable.php  to retrieves info from SQL for relevant table and HTML() it

  $("#ajaxResponseInsert").html('Insert Status'); //clear Inset status  field


});
// **                                                                                  **
// **************************************************************************************
// **************************************************************************************
//
//END  click on small table in right column - (Selecting the table 1-4)


   











//Start click on "book it" in SQL results display - just show name to book accordition
// **************************************************************************************
// **************************************************************************************
//                                                                                     **
$(document).on("click", '.bookLink2', function() {      //for newly generated                                                                             

  
     ShowNameFieldsAccordition( $(this)  ); //show/hide name fields in accordition
     //sendAjaxSQLInsert($(this)); //sends Ajax Insert request to Php_AjaxHandler/insertTAble.php  to insert data
});
// **                                                                                  **
// **************************************************************************************
// **************************************************************************************
//
//END  click on "book it" in SQL results display-just show name to book accordition







window.v;







//Start Final BOOK click on "OK" in book it section  in SQL results display
// **************************************************************************************
// **************************************************************************************
//                                                                                     **
$(document).on("click", '.bookFinal', function() {      //for newly generated                                                                             
//$(".bookFinal").click(function(){
     
   

     window.v= $(this).prevAll('input').val(); //get the booker name input
     //v=v.trim();
     //$(this).parent().prev().find("input[type=text]:first").val();

     if( v!=""  ){  //if booker name is not empty

   
		   sendAjaxSQLInsert($(this)  ); 
           //the above sends Ajax Insert request to Php_AjaxHandler/insertTAble.php  to insert data
           //were trying to assign to callback,it worked but with same result!!! 

		   // drawUpdatedSchedule(); // redraw refreshed schedule


          //setTimeout(sendAjaxSQLSelect(), 2000); //assigned to calback  //Injected this to  function sendAjaxSQLInsert()in Ajax success section

     }else {alert('empty');}

     
});
// **                                                                                  **
// **************************************************************************************
// **************************************************************************************
//
//END  click on "book it" in SQL results display













window.idm;
// **************************************************************************************
// **************************************************************************************
//                                                                                     **
                                                                                    
function tableSelectAction(thisObjZ){ //thisObj== $(this) 
   window.idm= thisObjZ.attr("id"); //get the clicked id;
  //var idm= $("#" +id).val(); //just sample from other js
    window.idm = idm.substring(5, 6); //substring Table1, leaving just {1}
 //alert(idm);
   
   addRemoveClass(thisObjZ);

  
  //$("#tableMain").clearQueue(); // ????
  $("#tableMain").stop( true, true ).hide(900);   //.stop( true, true )   prevents lapping
  $("#mTableNumber").html(idm);
  $("#tableMain").show(1000);


}
// **                                                                                  **
// **************************************************************************************
// **************************************************************************************








// **************************************************************************************
// **************************************************************************************
//                                                                                     **
        

function addRemoveClass(passObjFromTableSelectAction){  //passObjFromTableSelectAction is $(this) passed from tableSelectAction(thisObjZ)
$(".tableSmall").removeClass("selected");
  passObjFromTableSelectAction.addClass("selected");//assign class to clicked
}


// **                                                                                  **
// **************************************************************************************
// **************************************************************************************













//Convert time from input to UNIX(to save it in DB) // Convert from {29-Nov-Wed-2017} to {2017-11-29} amd uses it to convert to Unix time 
// **************************************************************************************
// **************************************************************************************
//                                                                                     **  
 function DatetoUnix(){

// actually this array is in datePicker_MineProcessor.js  but it does not  work a global
var Monthh = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]; //General array for all click actions


  var DateInputVAl= $("#myDateInput").val();
  // alert(DateInputVAl);
  DateZ=DateInputVAl.split('-');
  var MonthDecimal=Monthh.indexOf(DateZ[1]); // get Month in decimal to use in UNix; Originally here we have month in letters (i.e "Nov")
      MonthDecimal=MonthDecimal+1;
//alert(MonthDecimal);
  DateInputVAl=DateZ[3]+ "-" + MonthDecimal+ "-" +DateZ[0]; // constract var for UNIX (i.e "2013-09-05")


  window.UnixTime=(new Date(DateInputVAl)).getTime() / 1000;
	//var UnixTime=(new Date("2013-09-05 15:34:00")).getTime() / 1000;
	//alert(UnixTime);
	//alert(new Date(UnixTime * 1000)); //check if UNIX OK-> convert it normal time
return {r1:UnixTime, r2:DateInputVAl}; //i.e Unix +{2017-11-29}   // is the way to return var ftom function(DatetoUnix(), which returns two var results
  }

// **                                                                                  **
// **************************************************************************************
// **************************************************************************************
// END Convert time from input to UNIX(to save it in DB)















//CORE iS HERE
// sends Ajax request to Php_AjaxHandler/somefil.php  to retrieves info from SQL for relevant table and HTML() it. Passes to php vars {table + date}
// **************************************************************************************
// **************************************************************************************
//                                                                                     **  
 function sendAjaxSQLSelect(){
     
   var tableID=idm;//$("#mTableNumber").html();// alert(+tableID);
   var dateID=funcValue.r2;//actually this value is not used //$("#myDateInput").val();   //funcValue.r2= is the way to return var ftom function(DatetoUnix(), which returns two var results
  // alert(dateID);
   var date_UnixID=funcValue.r1; //UnixTime; // from DateInputVAl  
       //alert(date_UnixID);


                        // send  data  to  PHP handler  ************ 
                                 $.ajax({
                                 url: 'Php_AjaxHandler/selectTable.php',
                                 type: 'POST',
                                 data: { serverTableID:tableID, serverDateID:dateID,ServerDate_UnixID:date_UnixID},
                                 success: function(data) {
                                 // do something;
                                 //alert('done SQL');$('#vkTest').html(data)
                                
                                 //$("#ajaxResponse").html(data)/*.show()*/.show(2500);    //setTimeout(function(){ .html(data) }, 3000); 

            //------------------------

        $("#ajaxResponse").stop().fadeOut("slow",function(){  $("#ajaxResponse").html(data) }).fadeIn(2000);
            //------------------------

                                  }
                                          });
                                                   // }
                                               //  END AJAXed  part 

   //clear all Fields
    // clearFields();  --confirm erase
 

  }

// **                                                                                  **
// **************************************************************************************
// **************************************************************************************
// END sendAjaxSQLSelect() ->sends Ajax request to Php_AjaxHandler/somefil.php  to retrieves info from SQL for relevant table and HTML() it














 

// sends Ajax request to Php_AjaxHandler/insertTable.php  to insert to SQL for relevant table.
// **************************************************************************************
// **************************************************************************************
//                                                                                     **  
 function sendAjaxSQLInsert( thisObjZ ){     // callback is not active, it worked but with same async result!!!!!
  
     

      var idm= thisObjZ.attr("id"); //get the clicked id, parse it and pass to AjaxInsert;  //i.e {tbTime-$i&d-$unix&tableId-$table}
      var NameZ=window.v;// get the window.name to pass; 
      //alert("button id=> "+idm +" Name=> "+ NameZ);  //TECH!!!!



// Start getting  the vaues from Id to pass it to ajax--
var arrayIDz=idm.split('&');  //alert("all=> "+arrayIDz); //TECH!!!     // slice link with ID to array

var TableInterval=arrayIDz[0].split('-')[1];   //alert("timeInterv=> "+TableInterval); // TAble Interval(9 till 18)
window.TableUnix=arrayIDz[1].split('-')[1];   //we pass it drawUpdatedSchedule ()      //alert("Unix=> "+TableUnix);         // Unix Time
window.TableID=arrayIDz[2].split('-')[1];     //we pass it drawUpdatedSchedule ()      //alert("TAbleID=> "+TableID);        // TAble ID (1-4)
var TableID1=arrayIDz[2].split('-')[1];   // alert("TAbleID=> "+TableID);  //TECH!!!    //we pass it drawUpdatedSchedule ()      //alert("TAbleID=> "+TableID);        // TAble ID (1-4)
var TimeNormal=arrayIDz[3].split('-').slice(1).join('-') ;   // use specific slice as array [timeNormal-2017-11-29] contain several (-)        //alert(TimeNormal);  // normal time like 2017-11-29
// END getting  the vaues from Id to pass it to ajax----               



window.FLAGG="false";


  


                        // send  data  to  PHP handler  ************ 
                                 $.ajax({
                                 url: 'Php_AjaxHandler/insertTable.php',
                                 type: 'POST',
                                 data: { serverInterval:TableInterval,ServerDate_UnixID:TableUnix, ServerTableID:TableID1, ServerName:NameZ, ServerTimeNormal:TimeNormal},
                                 success: function(data) { //alert(window.FLAGG);

                                  sendAjaxSQLSelect(); //ADDON -> Inject function in Ajax succes
                                  window.FLAGG="true";
                                 // do something; 
                                 //alert('done SQL');$('#vkTest').html(data)
                                 // $('#result').html(data);
                                 $("#ajaxResponseInsert").html(data); 
                                  //sendAjaxSQLSelect(); //ADDON -> Inject function in Ajax success //moved upper
                                  }
                                          });
                                                   
                                               //  END AJAXed  part 


     //callback(); // Callback!!!!!!!!!!!!!!!!
  
  }

// **                                                                                  **
// **************************************************************************************
// **************************************************************************************
// END  sends Ajax request to Php_AjaxHandler/insertTable.php  to insert to SQL for relevant table.













// ShowNameFieldsAccordition
// **************************************************************************************
// **************************************************************************************
//                                                                                     **  
 function ShowNameFieldsAccordition(ttt){
    

                ttt.next("p").slideToggle(500)
               .siblings("p:visible").slideUp(1400); 

     //$(".nnn").not(this).hide(1400);  //.not(this)

     //ttt.next("p")./*slideDown*/slideToggle(300)   /*.nextAll("p").hide(400)*/   /*.siblings('.n').slideUp(1400);*/             //siblings(".nnn").slideUp(1400);  
    // ttt.nextAll('.nnn').not('.first').slideUp(1400);     //nextAll(".nnn").hide(300);
      


          
 
  

               /*$(this).next("p").slideToggle(500)
               .siblings("p:visible").slideUp(1400);  */

  
  }

// **                                                                                  **
// **************************************************************************************
// **************************************************************************************
// END  showNameFields()


































//we don't need this - confirm delete
//  drawUpdatedSchedule() after successful booking
// **************************************************************************************
// **************************************************************************************
//                                                                                     **  
 function  drawUpdatedSchedule () {


var tableID=window.TableID; //from sendAjaxSQLInsert(thisObjZ)
var Unix_ID=window.TableUnix;  


alert(Unix_ID);    
           
       // send  data  to  PHP handler  ************ 
                                $.ajax({
                                 url: 'Php_AjaxHandler/DrawUpdatedSchedule.php',
                                 type: 'POST',
                                 data: { ServerTableID:tableID, ServerDate_UnixID:Unix_ID},
                                 success: function(data) {   
                                 // do something;
                                 //alert('done SQL');$('#vkTest').html(data)
                                 // $('#result').html(data);
                                  $("#ajaxResponse").html(data)/*.show(2500)*/ ;    //setTimeout(function(){ .html(data) }, 3000);
                                  }
                                          });
                                                  
                                               //  END AJAXed  part 



  
  }

// **                                                                                  **
// **************************************************************************************
// **************************************************************************************
//END  drawUpdatedSchedule()  after successful booking






























//-------------------------------------
// End Ready
});
