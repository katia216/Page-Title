var img =["http://s1.cnnx.io/bizrate/editorial/0909_halloween/HalloweenMen_VampireCostume1.png" , "https://www.darkknightarmoury.com/images/Category/medium/655.png" , "https://i.pinimg.com/originals/58/2f/32/582f321ec0e24b1e3f205688760390d5.png" , "https://www.goodwillcentraltexas.org/uploads/images/general_images/steampunk2017.png" , "https://florabama.com/images/scicors.png?crc=184903212" , "https://i.pinimg.com/originals/a5/51/9f/a5519fa1ac6b30b4e8e3a67b5ff03ea5.png"];
$("#button").click(function(){
    var number = Math.floor(Math.random()*6);

    $(".katia").attr("src",img[number]);
    
});


var candy =["https://www.gannett-cdn.com/-mm-/79fd6f331c56e14925ed6a75c980af2cb49b28ee/c=0-372-3000-2628/local/-/media/2017/10/09/FortMyers/FortMyers/636431364443202231-Cadbury.jpg?width=540&height=405&fit=crop" , "https://cdn.shopify.com/s/files/1/0972/7116/products/kit_kat_spooky_candy_bar_1.55oz.png?v=1475525070" , "https://hips.hearstapps.com/ell.h-cdn.co/assets/15/39/1443123430-delish-new-halloween-candy-yoohoo-bars_1.png?fill=160:114&resize=480:*" , "https://halloweenlove.com/images/posts/pb-kisses-candy.png" , "https://s1.r29static.com//bin/entry/770/x/2026525/image.png" , "https://dp3uqzkpcfq4k.cloudfront.net/image/1027"];
$("#candy").click(function(){
    var number = Math.floor(Math.random()*6);

    $(".candy").attr("src",candy[number]);
    
});


$("select.buy").change(function(){
        var buying = $(this).children("option:selected").val();
        if(buying==="BUYING A COSTUME AND CANDY"){alert ("THATS GOING TO COST ALOT!!");}
        else if(buying==="BUYING CANDY ONLY"){alert ("SWEET AND SOUR!!");}
        else{alert ("GET SPOOKY! - " + buying + "!");}
        
       
        
    });