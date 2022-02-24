<?php
    session_start();
    if(isset($_POST['p_id'])){
        $prod = getProduct($_POST['p_id']);
        if(isset($_SESSION['cart'])){
            array_push($_SESSION['cart'], $prod);
        }
        else{
            $_SESSION['cart'] = array($prod);
        }
    }

    function getProduct($id) {
        for ($i = 0; $i < count($_SESSION['products']); $i++) {
            if ($id == $_SESSION['products'][$i]['id']){
                return $_SESSION['products'][$i];
            }
        }
    }

    
?>