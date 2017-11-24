<?php
// Class   for  GetTemplate  function
// add "require"  and  use  $get = new GetTemplateClass() $get->GetTemplate($);
class GetTemplateClass
{
var $fileR;
var $htmlR;
// **************************************************************************************
// **************************************************************************************
// **                                                                                  **
// **                                                                                  **
function GetTemplateR($fileR)
  {
     ob_start(); 
     include($fileR); 
     $htmlR = ob_get_contents();  
     ob_end_clean(); 
     return $htmlR;
  }
// **                                                                                  **
// **                                                                                  **
// **************************************************************************************
// **************************************************************************************
// End  Class 
}
?>
