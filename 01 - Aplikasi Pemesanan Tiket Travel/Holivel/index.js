// Dapatkan elemen harga, jumlah tiket, dan tombol
const amountSelect = document.getElementById("amount");
const discountElement = document.getElementById("discount");
const submitBtn = document.getElementById("submitBtn");
const name = document.getElementById("name");
const destination = document.getElementById("destination");
const isMemberCheckbox = document.getElementById("isMember");

// Dapatkan elemen untuk menampilkan konten
const totalPriceElement = document.getElementById("total_price");
const priceElement = document.getElementById("price");

// Tambahkan event listener
submitBtn.addEventListener("click", calculateTotal);
destination.addEventListener("change", updatePrice);
isMemberCheckbox.addEventListener("change", updateDiscount);
amountSelect.addEventListener("change", updateDiscount);

// Menentukan harga berdasarkan kota tujuan
function getPrice(city) {
  let displayPrice;

  if (city === "jakarta") {
    displayPrice = 100000;
  } else if (city === "cirebon") {
    displayPrice = 50000;
  } else if (city === "semarang") {
    displayPrice = 200000;
  } else if (city === "surabaya") {
    displayPrice = 300000;
  }
  priceElement.value = displayPrice.toString();
  updateDiscount();
  return displayPrice;
}

function updatePrice() {
  const city = destination.value;
  getPrice(city); // Memanggil fungsi getPrice dengan destinasi yang dipilih
}

function updateDiscount() {
  const isMember = isMemberCheckbox.checked;
  console.log(isMember);

  if (isMember) {
    // Jika pemesan adalah anggota, berikan diskon 10%
    const price = parseFloat(priceElement.value);
    const amount = parseInt(amountSelect.value);
    const discount = price * amount * 0.05; // Diskon 10%

    // Update input field untuk diskon
    discountElement.value = discount.toString();
  } else {
    // Jika pemesan bukan anggota, reset diskon
    discountElement.value = "0";
  }
}

function calculateTotal() {
  // Dapatkan nilai harga dan jumlah tiket
  const price = parseFloat(getPrice(destination.value));
  const amount = parseInt(amountSelect.value);
  const discount = parseFloat(discountElement.value);

  // Hitung total harga
  const totalPrice = price * amount - discount;

  // Tampilkan total harga pada elemen total_price
  totalPriceElement.value = `Rp${totalPrice}`;
}
