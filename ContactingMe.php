<?php
if (isset($_POST['submit']))
{
  $name=$_POST['yourname'];
  $email=$_POST['email'];
  $subject=$_POST['subject'];
  $message=$_POST['message'];
  $adminwebsite=$_POST['Sllarsen@vt.edu'];
  $header = "Reply-to:$email";
  mail($adminwebsite,$subject,$message,$header);
  )
}

?>
