$(".btnSebet").click(function(){
    $("#modal").fadeIn(300)
})
$(".md-header i").click(function(){
    $("#modal").fadeOut(300)
})

const btn=document.querySelectorAll("[data='Add_To_Cart']")
btn.forEach(btns=>{
    btns.onclick=function(){
        let cart=this.parentNode.parentNode
        var cartDom={
        image:cart.querySelector(".card-img-top").getAttribute("src"),
        name:cart.querySelector(".card-title").innerText,
        price:cart.querySelector(".cart-price").innerText
        }
        let modalBody=document.querySelector(".md-body")
        if($(".md-body .md-empty").hasClass("md-empty")){
            $(".md-empty").remove()
        }
        
        modalBody.insertAdjacentHTML("beforeend", `
        <div class="md-cart d-flex align-items-center justify-content-between">
        <div class="col-lg-2">
        <img class="img-fluid card-image" src="${cartDom.image}"/>
        </div>

        <div class="col-mg-5">
        <h5 class="card-name m-0">${cartDom.name}</h5>
        </div>

        <p class="cart-price m-0">${cartDom.price}</p>
        <div>
        <button class="btn btn-sm btn-danger">&minus;</button>
        <span>1</span>
        <button class="btn btn-sm btn-primary">&plus;</button>
        </div>
       </div> `);
    }
})
