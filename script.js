$(document).ready(function(){
    $('body').on('click', '.add-to-cart', function(){
        var p_id = $(this).data("pid"); //fetching id of product to be added to cart
        $.ajax({
            'url':'ajax.php',
            'method':'POST',
            'data':{
                'p_id':p_id
            },
            datatype:'JSON'
        }).done(function(response){
            responseData = $.parseJSON(response);
        })
        // var prod = getProduct(p_id); // fetching the object(product) to be added to cart
        // var quantity = 0;
        // if (cartArray.length == 0){
        //     prod.quantity = 1;
        //     cartArray.push(prod);
        // }
        // else{
        //     if (cartArray.includes(prod)){
        //         prod.quantity +=1;
        //     }
        //     else{
        //         prod.quantity = 1;
        //         cartArray.push(prod);
        //     }
        // }
        // displayCart();
    });
});