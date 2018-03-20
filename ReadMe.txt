#Booking 4 tables, 1 hour interval, 9-18

#Works on ajax SELECT/INSERT

#When u select a table in the left, JS/myScript.js passes table id, Unix Time(current date) to Php_AjaxHAndler/selectTable.php


//--------------------------------------------------------------------
How it works:
1.On load it just draws in html 4 tables with ids (1-4) in right section. Additionally, it gets a current date and puts it in input value.
2.While click on any table, we get id of the clicked, then gets the value of the date input, convet it to Unix time, then call function ajaxSelect. This function calls ajax php file (select), passes to this php 2 var (table nimber+unix time). Php file does Sql Select according to this vars, draws Booking Schedule. Ajax  html () this result.
2.1 Php file creates Free/Taken <p> with unique id {id="table-1&time-256677".
3.When clicking on "book it", we display hidden name input, when u fill it and click OK, it starts function SqlInsert. This function gets the id of clicked, parses it array and gets separated values {table id, tome interval, unix time}. Booker name we get just from name input val(). And we start ajax request to insert php.
4.Call function Select to draw an updated schedule.
