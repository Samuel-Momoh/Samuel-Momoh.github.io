<?php
$name= $_POST['name1'];
$email= $_POST['email1'];
$sub= $_POST['subject1'];
$message= $_POST['message1'];
$sender="From:".$email;
$mail=mail('samueldan@live.com',$subject,$message,$sender);
if($mail){
    echo "Email successfully sent";
}

?>