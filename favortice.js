function showMyfavortice() {
  let x = localStorage.getItem(localStorage.getItem(USERNAME));
  console.log(x);
  let listHearts = JSON.parse(x);
  console.log(listHearts);

  let data = "";
  for (i = 0; i < listHearts.length; i++) {
    data += `
      <div class="box product">
        <img src="images/vietnam${i + 1}.jpg" alt="" />
        <div class="content">
          <h3><i class="fas fa-map-marker-alt"></i> ${listHearts[i].name}</h3>
                   <div class="hearts">
            <i class="fa-solid fa-heart addFavourite"></i>
          </div>
          <div class="price">
            <i class="fa-solid fa-calendar-days"></i> ${
              listHearts[i].price
            } <span></span>
          </div>
          <a href="#" class="btn">ĐẶT VÉ</a>
        </div>
      </div>
      `;
  }
  document.getElementById("showMyfavortice").innerHTML = data;
}
if (sessionStorage.getItem(USERNAME) != null) {
  //   userLogin.lastChild.previousSibling.innerHTML =
  sessionStorage.getItem(USERNAME);
  showMyfavortice();
  dropdown.style.display = "block";
}
