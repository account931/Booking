$(document).ready(function(){




//Start click on small table in right column
// **************************************************************************************
// **************************************************************************************
//                                                                                     **
                                                                                    
$(".tableSmall").click(function(){
   
   
   tableSelectAction( $(this) );   //pass $(this) 

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












//-------------------------------------
// End Ready
});
