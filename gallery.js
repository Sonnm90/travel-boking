var listGallery = [
  {
    productID: 1,
    name: "Hạ Long",
    description: `Hạ Long là thành phố tỉnh lỵ của tỉnh Quảng Ninh, Việt Nam. Thành
            phố được đặt theo tên của vịnh Hạ Long, vịnh biển nằm ở phía nam
            thành phố và là một di sản thiên nhiên nổi tiếng của Việt Nam.Tên
            "Hạ Long" nghĩa là "con rồng bay xuống"`,
    price: "2.000.000 đ",
    oldprice: "3.000.000 đ",
    img: "images/vietnam1.jpg",
  },
  {
    productID: 2,
    name: "Fansipan",
    description: `Fansipan là đỉnh núi cao nhất của Việt Nam, nằm trên dãy núi Hoàng
            Liên Sơn ở vùng Tây Bắc Bộ Việt Nam. Đỉnh núi có độ cao tuyệt đối
            là 3147,3 m. Fansipan cũng là đỉnh núi cao nhất của bán đảo Đông
            Dương và được mệnh danh là "Nóc nhà Đông Dương`,
    price: "2.000.000 đ",
    oldprice: "3.000.000 đ",
    img: "images/vietnam2.jpg",
  },
  {
    productID: 3,
    name: "Hội An",
    description: `Hội An là một thành phố trực thuộc tỉnh Quảng Nam, Việt Nam. Phố
            cổ Hội An từng là một thương cảng quốc tế sầm uất, gồm những di
            sản kiến trúc đã có từ hàng trăm năm trước, được UNESCO công nhận
            là di sản văn hóa thế giới từ năm 1999.
          </p>"`,
    price: "2.000.000 đ",
    oldprice: "3.000.000 đ",
    img: "images/vietnam3.jpg",
  },
  {
    productID: 4,
    name: "Sơn La",
    description: `Mộc Châu là một huyện thuộc tỉnh Sơn La, nằm cách Hà Nội 180km về
            phía Tây Bắc. Mộc Châu sở hữu 4 mùa rõ rệt, có khí hậu cao nguyên
            ôn hoà`,
    price: "2.000.000 đ",
    oldprice: "3.000.000 đ",
    img: "images/vietnam4.jpg",
  },
  {
    productID: 5,
    name: "Đồng Tháp",
    description: `Đồng Tháp là một tỉnh thuộc vùng Đồng bằng sông Cửu Long, Việt
            Nam. Vùng đất Đồng Tháp đã được Chúa Nguyễn khai phá vào khoảng
            thế kỷ XVII, XVIII.`,
    price: "2.000.000 đ",
    oldprice: "3.000.000 đ",
    img: "images/vietnam5.jpg",
  },
  {
    productID: 6,
    name: "Phan Thiết",
    description: `Phan Thiết là một thành phố ven biển và là tỉnh lỵ, trung tâm
            chính trị, kinh tế, văn hóa và khoa học kỹ thuật của tỉnh Bình
            Thuận, Việt Nam`,
    price: "2.000.000 đ",
    oldprice: "3.000.000 đ",
    img: "images/vietnam6.jpg",
  },
  {
    productID: 6,
    name: "Phan Thiết",
    description: `Phan Thiết là một thành phố ven biển và là tỉnh lỵ, trung tâm
            chính trị, kinh tế, văn hóa và khoa học kỹ thuật của tỉnh Bình
            Thuận, Việt Nam`,
    price: "2.000.000 đ",
    oldprice: "3.000.000 đ",
    img: "images/vietnam6.jpg",
  },
  {
    productID: 6,
    name: "Phan Thiết",
    description: `Phan Thiết là một thành phố ven biển và là tỉnh lỵ, trung tâm
            chính trị, kinh tế, văn hóa và khoa học kỹ thuật của tỉnh Bình
            Thuận, Việt Nam`,
    price: "2.000.000 đ",
    oldprice: "3.000.000 đ",
    img: "images/vietnam6.jpg",
  },
];

function showGallery() {
  let data = "";
  for (i = 0; i < listGallery.length; i++) {
    data += `
    <div class="box">
      <img src="${listGallery[i].img}" alt="" />
      <div class="content">
        <h3>Điểm đến hấp dẫn</h3>
        <p>
          Mộc Châu là một huyện thuộc tỉnh Sơn La, nằm cách Hà Nội 180km về phía
          Tây Bắc.
        </p>
        <a href="#" class="btn">
          XEM THÊM
        </a>
      </div>
    </div>;
    `;
  }
  document.getElementById("showGallery").innerHTML = data;
}
showGallery();
