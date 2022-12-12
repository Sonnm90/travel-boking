let checkProduct = JSON.parse(localStorage.getItem("product"));
console.log(checkProduct);
let input = document.getElementById("search-bar");
let search = document.querySelector("#search-btn");

function searchData() {
  let data = "";
  for (let index = 0; index < checkProduct.length; index++) {
    if (input.value == checkProduct[index].name) {
      console.log("1");
      data += `
      <div class="box product">
        <img src="images/vietnam${index + 1}.jpg" alt="" />
        <div class="content">
          <h3><i class="fas fa-map-marker-alt"></i> ${
            checkProduct[index].name
          }</h3>
          <p>
            ${checkProduct[index].description}
          </p>
          <div class="hearts">
            <i class="fa-solid fa-heart addFavourite"></i>
          </div>
          <div class="price">
            <i class="fa-solid fa-calendar-days"></i> ${
              checkProduct[index].price
            } <span></span>
          </div>
          <a href="#" class="btn booking" >ĐẶT VÉ</a>
        </div>
      </div>
          `;
    } else {
      console.log("2");
    }
  }
  document.getElementById("showProduct").innerHTML = data;
}
