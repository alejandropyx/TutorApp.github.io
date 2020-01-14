<?php

  header('Content-Type: application/json');

    $aResult = array();

    if( !isset($_POST['functionname']) ) { $aResult['error'] = 'No function name!'; }

    if( !isset($_POST['arguments']) ) { $aResult['error'] = 'No function arguments!'; }

    if( !isset($aResult['error']) ) {

        switch($_POST['functionname']) {
            case 'add':
               $to_email = 'alejandro.s18c@gmail.com';
                $subject = 'Testing PHP Mail';
                $message = 'This mail is sent using the PHP mail function';
                $headers = 'From: noreply@company.com';
                mail($to_email,$subject,$message,$headers);
               break;

            default:
               $aResult['error'] = 'Not found function '.$_POST['functionname'].'!';
               break;
        }

    }

    echo json_encode($aResult);





?>