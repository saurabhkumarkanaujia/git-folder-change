<?php
    function displayProducts()
    {
        foreach($_SESSION["products"] as $value)
        {
            echo "<div id='product-".$value["id"]."' class='product'>
            <img src='images/".$value["image"]."'>
            <h3 class='title'><a href='#'>".$value["name"]."</a></h3>
            <span>Price: $".$value["price"]."</span>
            <a class='add-to-cart' href='#' data-pid = ".$value['id'].">Add To Cart</a>
            </div>";            
        }
    }
    
?>