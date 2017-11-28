$(document).ready(function(){




//Start click on small table in right column
// **************************************************************************************
// **************************************************************************************
//                                                                                     **
                                                                                    
$(".tableSmall_Click").click(function(){
   
   
   tableSelectAction( $(this) );   //pass $(this)  // function listen to your choice in right panel, which table u select & display relevant table in the right

   DatetoUnix();  //convert time from input to Unix time

   sendAjaxSQLSelect(); //sends Ajax request to Php_AjaxHandler/somefil.php  to retrieves info from SQL for relevant table and HTML() it
});
// **                                                                                  **
// **************************************************************************************
// **************************************************************************************
//
//END  click on small table in right column


   








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













//Convert time from input to UNIX(to save it in DB)
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
return UnixTime;
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
   var dateID=$("#myDateInput").val();   
   var date_UnixID=UnixTime; // from DateInputVAl  
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
                                  $("#ajaxResponse").html(data).show().show(2500);
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












//-------------------------------------
// End Ready
});
