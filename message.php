<?php
   if(isset($_POST["submitBtn"])) {
      $yourName = $_POST["yourName"];      
      $email = $_POST["email"];
      $subject = $_POST["subject"];
      $message = $_POST["msgText"];
	  $to = $email;
      $from = "admin@fitness.com";   
      $subject = "=?utf-8?B?".base64_encode($subject)."?=";
	  $headers = "From: $from\r\nReply-to: $from\r\nContent-type: text/html; charset=utf-8\r\n";
	  mail($to, $subject, $message, $headers);
      echo "Cooбщение отправлено";           	  
   }   
?>