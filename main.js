// let card1 = document.getElementById("card1") 

card1 = {
    "name":"Black Hoodie",
    "price":1400
}
card2 = {
    "name":"white Hoodie",
    "price":1400
}
card3 = {
    "name":"Gray Hoodie",
    "price":1400
}
card4 = {
    "name":"Red Hoodie",
    "price":1400
}
card5 = {
    "name":"Green Hoodie",
    "price":1400
}
card6 = {
    "name":"Blue Hoodie",
    "price":1400
}

let nul = 0;
$(document).ready(function(){
    $("#cartbutton").click(function(){
        $("#record").toggle()
        })
    $("#logo").click(function(){
        $(".sub-nav").slideToggle()
    })
    
    // $("#inp1").change(function(){
    //     $("#inp1").val().change()
    // })
    // let f1 = $(".inp1").val()
    // var ff2 = $(".inp1").val()
    // $(".inp1").keyup(function () {
    //     alert()
    // })
    let p1 = 14000
    let p2 = 14500
    let p3 = 12000
    let p4 = 12500
    let p5 = 20000
    let p6 = 17000
    let p7 = 4500
    let p8 = 4700
    let p9 = 5200
    let p10 = 20000
    let p11 = 4500
    let p12 = 25000
    let p13 = 200
    let p14 = 350
    let p15 = 4000
    let p16 = 500
    let p17 = 200
    let p18 = 1500
    let p19 = 1100
    let p20 = 50
    let p21 = 80
    let zero = 0;
   

   $("#btn1").click(function(){
    $("#cart").append('<div id="c1" class="col-12 border border-2 m-3 d-flex"><h6>Black Hoodie</h6><p class="ms-5">Price: $14000</p></div>')
    $("#display").html(nul+=p1)
    
    
    $("#coun").html(zero += 1)

    // alert($(".inp1").val())
   })
   $("#ebtn1").click(function(){
   
    $("#c1").remove()
    $("#display").html(nul-=p1)
    $("#coun").html(zero -= 1)
   
   })
   $("#btn2").click(function(){
    $("#cart").append('<div id="c2" class="col-12 border border-2 m-3 d-flex"><h6>White Hoodie</h6><p class="ms-5">Price: $14500</p></div>')
    $("#display").html(nul+=p2)
    $("#coun").html(zero += 1)

   })
   $("#ebtn2").click(function(){
   
    $("#c2").remove()
    $("#display").html(nul-=p2)
    $("#coun").html(zero -= 1)
   
   })
   $("#btn3").click(function(){
    $("#cart").append('<div id="c3" class="col-12 border border-2 m-3 d-flex"><h6>Gray Hoodie</h6><p class="ms-5">Price: $12000</p></div>')
    $("#display").html(nul+=p3)
    $("#coun").html(zero += 1)
   })
   $("#ebtn3").click(function(){
   
    $("#c3").remove()
    $("#display").html(nul-=p3)
    $("#coun").html(zero -= 1)
   
   })
   $("#btn4").click(function(){
    $("#cart").append('<div id="c4" class="col-12 border border-2 m-3 d-flex"><h6>Red Hoodie</h6><p class="ms-5">Price: $12500</p></div>')
    $("#display").html(nul+=p4)
    $("#coun").html(zero += 1)
   })
   $("#ebtn4").click(function(){
   
    $("#c4").remove()
    $("#display").html(nul-=p4)
    $("#coun").html(zero -= 1)
   })
   $("#btn5").click(function(){
    $("#cart").append('<div id="c5" class="col-12 border border-2 m-3 d-flex"><h6>Green Hoodie</h6><p class="ms-5">Price: $20000</p></div>')
    $("#display").html(nul+=p5)
    $("#coun").html(zero += 1)
   })
   $("#ebtn5").click(function(){
   
    $("#c5").remove()
    $("#display").html(nul-=p5)
    $("#coun").html(zero -= 1)
   })
   $("#btn6").click(function(){
    $("#cart").append('<div id="c6" class="col-12 border border-2 m-3 d-flex"><h6>Navy Hoodie</h6><p class="ms-5">Price: $17000</p></div>')
    $("#display").html(nul+=p6)
    $("#coun").html(zero += 1)
   })
   $("#ebtn6").click(function(){
   
    $("#c6").remove()
    $("#display").html(nul-=p6)
    $("#coun").html(zero -= 1)
   })
   $("#btn7").click(function(){
    $("#cart").append('<div id="c7" class="col-12 border border-2 m-3 d-flex"><h6>Black Polo</h6><p class="ms-5">Price: $4500</p></div>')
    $("#display").html(nul+=p7)
    $("#coun").html(zero += 1)
   })
   $("#ebtn7").click(function(){
   
    $("#c7").remove()
    $("#display").html(nul-=p7)
    $("#coun").html(zero -= 1)
   })
   $("#btn8").click(function(){
    $("#cart").append('<div id="c8" class="col-12 border border-2 m-3 d-flex"><h6>White Polo</h6><p class="ms-5">Price: $4700</p></div>')
    $("#display").html(nul+=p8)
    $("#coun").html(zero += 1)
   })
   $("#ebtn8").click(function(){
   
    $("#c8").remove()
    $("#display").html(nul-=p8)
    $("#coun").html(zero -= 1)
   })
   $("#btn9").click(function(){
    $("#cart").append('<div id="c9" class="col-12 border border-2 m-3 d-flex"><h6>Check long Sleeve Shirt</h6><p class="ms-5">Price: $5200</p></div>')
    $("#display").html(nul+=p9)
    $("#coun").html(zero += 1)
   })
   $("#ebtn9").click(function(){
   
    $("#c9").remove()
    $("#display").html(nul-=p9)
    $("#coun").html(zero -= 1)
   })
   $("#btn10").click(function(){
    $("#cart").append('<div id="c10" class="col-12 border border-2 m-3 d-flex"><h6>Strip Long Sleeve Shirt</h6><p class="ms-5">Price: $20000</p></div>')
    $("#display").html(nul+=p10)
    $("#coun").html(zero += 1)
   })
   $("#ebtn10").click(function(){
   
    $("#c10").remove()
    $("#display").html(nul-=p10)
    $("#coun").html(zero -= 1)
   })
   $("#btn11").click(function(){
    $("#cart").append('<div id="c11" class="col-12 border border-2 m-3 d-flex"><h6>Navy Polo</h6><p class="ms-5">Price: $4500</p></div>')
    $("#display").html(nul+=p11)
    $("#coun").html(zero += 1)
   })
   $("#ebtn11").click(function(){
   
    $("#c11").remove()
    $("#display").html(nul-=p11)
    $("#coun").html(zero -= 1)
   })
   $("#btn12").click(function(){
    $("#cart").append('<div id="c12" class="col-12 border border-2 m-3 d-flex"><h6>White Long Sleeve</h6><p class="ms-5">Price: $25000</p></div>')
    $("#display").html(nul+=p12)
    $("#coun").html(zero += 1)
   })
   $("#ebtn12").click(function(){
   
    $("#c12").remove()
    $("#display").html(nul-=p12)
    $("#coun").html(zero -= 1)
   })
   $("#btn13").click(function(){
    $("#cart").append('<div id="c13" class="col-12 border border-2 m-3 d-flex"><h6>Dark Shade</h6><p class="ms-5">Price: $200</p></div>')
    $("#display").html(nul+=p13)
    $("#coun").html(zero += 1)
   })
   $("#ebtn13").click(function(){
   
    $("#c13").remove()
    $("#display").html(nul-=p13)
    $("#coun").html(zero -= 1)
   })
   $("#btn14").click(function(){
    $("#cart").append('<div id="c14" class="col-12 border border-2 m-3 d-flex"><h6>Pink Pilot Shade</h6><p class="ms-5">Price: $350</p></div>')
    $("#display").html(nul+=p14)
    $("#coun").html(zero += 1)
   })
   $("#ebtn14").click(function(){
   
    $("#c14").remove()
    $("#display").html(nul-=p14)
    $("#coun").html(zero -= 1)
   })
   $("#btn15").click(function(){
    $("#cart").append('<div id="c15" class="col-12 border border-2 m-3 d-flex"><h6>Ravin Shade</h6><p class="ms-5">Price: $4000</p></div>')
    $("#display").html(nul+=p15)
    $("#coun").html(zero += 1)
   })
   $("#ebtn15").click(function(){
   
    $("#c15").remove()
    $("#display").html(nul-=p15)
    $("#coun").html(zero -= 1)
   })
   $("#btn16").click(function(){
    $("#cart").append('<div id="c16" class="col-12 border border-2 m-3 d-flex"><h6>Round Shade</h6><p class="ms-5">Price: $500</p></div>')
    $("#display").html(nul+=p16)
    $("#coun").html(zero += 1)
   })
   $("#ebtn16").click(function(){
   
    $("#c16").remove()
    $("#display").html(nul-=p16)
    $("#coun").html(zero -= 1)
   })
   $("#btn17").click(function(){
    $("#cart").append('<div id="c17" class="col-12 border border-2 m-3 d-flex"><h6>Unisex Summer Shade</h6><p class="ms-5">Price: $500</p></div>')
    $("#display").html(nul+=p17)
    $("#coun").html(zero += 1)
   })
   $("#ebtn17").click(function(){
   
    $("#c17").remove()
    $("#display").html(nul-=p17)
    $("#coun").html(zero -= 1)
   })
   $("#btn18").click(function(){
    $("#cart").append('<div id="c18" class="col-12 border border-2 m-3 d-flex"><h6>Beanie</h6><p class="ms-5">Price: $1500</p></div>')
    $("#display").html(nul+=p18)
    $("#coun").html(zero += 1)
   })
   $("#ebtn18").click(function(){
   
    $("#c18").remove()
    $("#display").html(nul-=p18)
    $("#coun").html(zero -= 1)
   })
   $("#btn19").click(function(){
    $("#cart").append('<div id="c19" class="col-12 border border-2 m-3 d-flex"><h6>Bucket Hat</h6><p class="ms-5">Price: $1100</p></div>')
    $("#display").html(nul+=p19)
    $("#coun").html(zero += 1)
   })
   $("#ebtn19").click(function(){
   
    $("#c19").remove()
    $("#display").html(nul-=p19)
    $("#coun").html(zero -= 1)
   })
   $("#btn20").click(function(){
    $("#cart").append('<div id="c20" class="col-12 border border-2 m-3 d-flex"><h6>Christmas Hat</h6><p class="ms-5">Price: $50</p></div>')
    $("#display").html(nul+=p20)
    $("#coun").html(zero += 1)
   })
   $("#ebtn20").click(function(){
   
    $("#c20").remove()
    $("#display").html(nul-=p20)
    $("#coun").html(zero -= 1)
   })
   $("#btn21").click(function(){
    $("#cart").append('<div id="c21" class="col-12 border border-2 m-3 d-flex"><h6>Straw Hat</h6><p class="ms-5">Price: $80</p></div>')
    $("#display").html(nul+=p21)
    $("#coun").html(zero += 1)
   })
   $("#ebtn21").click(function(){
   
    $("#c21").remove()
    $("#display").html(nul-=p21)
    $("#coun").html(zero -= 1)
   })

   $("textarea").focus(function(){
    $(this).css("background-color","white")
    $(this).css("color","black")
   })
   $("textarea").blur(function(){
    $(this).css("background-color","transparent")
    $(this).css("color","white")
   })


})


