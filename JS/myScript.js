$(document).ready(function(){




//Start click on small table in right column
// **************************************************************************************
// **************************************************************************************
//                                                                                     **
                                                                                    
$(".tableSmall_Click").click(function(){
   
   
   tableSelectAction( $(this) );   //pass $(this)  // function listen to your choice in right panel, which table u select & display relevant table in the right

   window.funcValue=DatetoUnix();  //convert time from input to Unix time->Convert from {29-Nov-Wed-2017} to {2017-11-29} amd uses it to convert to Unix time. //use variable to get two returns[].
   
  // DatetoDateStampSQL(); //convert time from input to SQL Datestamp ->Convert from {29-Nov-Wed-2017} to {2017-11-29}

   sendAjaxSQLSelect(); //sends Ajax request to Php_AjaxHandler/selectTable.php  to retrieves info from SQL for relevant table and HTML() it
});
// **                                                                                  **
// **************************************************************************************
// **************************************************************************************
//
//END  click on small table in right column


   



//Start click on "book it" in SQL results display
// **************************************************************************************
// **************************************************************************************
//                                                                                     **
$(document).on("click", '.bookLink', function() {      //for newly generated                                                                             
//$(".bookLink").click(function(){
   //alert('f');
   sendAjaxSQLInsert($(this)); //sends Ajax Insert request to Php_AjaxHandler/insertTAble.php  to insert data
});
// **                                                                                  **
// **************************************************************************************
// **************************************************************************************
//
//END  click on "book it" in SQL results display














// **************************************************************************************
// **************************************************************************************
//                                                                                     **
                                                                                    
function tableSelectAction(thisObjZ){ //thisObj== $(this) 
   var idm= thisObjZ.attr("id"); //get the clicked id;
  //var idm= $("#" +id).val(); //just sample from other js
    var idm = idm.substring(5, 6); //substring Table1, leaving just {1}
//  alert(idm);
   
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
















// sends Ajax request to Php_AjaxHandler/somefil.php  to retrieves info from SQL for relevant table and HTML() it. Passes to php vars {table + date}
// **************************************************************************************
// **************************************************************************************
//                                                                                     **  
 function sendAjaxSQLSelect(){
     
   var tableID=$("#mTableNumber").html();// alert(+tableID);
   var dateID=funcValue.r2;//$("#myDateInput").val();   //funcValue.r2= is the way to return var ftom function(DatetoUnix(), which returns two var results
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
                                 // $('#result').html(data);
                                  $("#ajaxResponse").html(data)/*.show()*/.show(2500);    //setTimeout(function(){ .html(data) }, 3000);
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
 function sendAjaxSQLInsert(thisObjZ){

      var idm= thisObjZ.attr("id"); //get the clicked id;
      alert(idm);

/*
     
   var tableID=$("#mTableNumber").html();// alert(+tableID);
   var dateID=funcValue.r2;//$("#myDateInput").val();   //funcValue.r2= is the way to return var ftom function(DatetoUnix(), which returns two var results
  // alert(dateID);
   var date_UnixID=funcValue.r1; //UnixTime; // from DateInputVAl  
       //alert(date_UnixID);


                        // send  data  to  PHP handler  ************ 
                                 $.ajax({
                                 url: 'Php_AjaxHandler/insertTable.php',
                                 type: 'POST',
                                 data: { serverTableID:tableID, serverDateID:dateID,ServerDate_UnixID:date_UnixID},
                                 success: function(data) {
                                 // do something;
                                 //alert('done SQL');$('#vkTest').html(data)
                                 // $('#result').html(data);
                                  $("#ajaxResponse").html(data).show(2500);    //setTimeout(function(){ .html(data) }, 3000);
                                  }
                                          });
                                                   // } */
                                               //  END AJAXed  part 

  
  }

// **                                                                                  **
// **************************************************************************************
// **************************************************************************************
// END  sends Ajax request to Php_AjaxHandler/insertTable.php  to insert to SQL for relevant table.














//-------------------------------------
// End Ready
});
