// Loading Input
const ButtonSubmit = document.querySelector(".submit_tabungan");
const SubmitLoading = document.querySelector(".submit_loading");

const InputInstan = document.querySelectorAll(".input_instan");

const AreaInputan = document.querySelector(".area_inputan");
const AlertKosong = document.querySelector(".alert_kosong");
const AlertSuccess = document.querySelector(".alert_success");
const InputTabungan = document.querySelector("#input_tabungan");

// Input Tabungan Ke SpreadSheet
async function fetchData() {
  const AmbilInputan = InputTabungan.value;
  var iframe = document.createElement("iframe");
  iframe.style.display = "none";
  iframe.src =
    "https://script.google.com/macros/s/AKfycbzqgiAmpm-kw34tCEPhlBcMmUfyULA5ACFkcr1qhwo3iUhqzL_KW9t-1DiCualGZ_33/exec/" +
    AmbilInputan;
  document.body.appendChild(iframe);

  iframe.onload = function () {
    console.clear();
    ButtonSubmit.classList.remove("hidden");
    SubmitLoading.classList.add("hidden");

    AreaInputan.classList.toggle("mt-10");
    AreaInputan.classList.toggle("mt-4");

    AlertSuccess.classList.toggle("hidden");
    AlertKosong.classList.toggle("flex");

    InputTabungan.value = "";

    setTimeout(() => {
      AlertSuccess.classList.toggle("hidden");
      AreaInputan.classList.toggle("mt-10");
      AreaInputan.classList.toggle("mt-4");
    }, 4000);
  };

  //   window.location.href =
  //     "https://script.google.com/macros/s/AKfycbzqgiAmpm-kw34tCEPhlBcMmUfyULA5ACFkcr1qhwo3iUhqzL_KW9t-1DiCualGZ_33/exec/8000";
  //   try {
  //     const response = await fetch(
  //       "https://script.google.com/macros/s/AKfycbwK4ETAkrs15pUYmz0Pzd-Dc7Q16cpVvU9rGi92jZk/dev",
  //       {
  //         method: "GET",
  //         mode: "cors",
  //         headers: {
  //           "Content-Type": "application/json",
  //           "Access-Control-Allow-Origin": "*",
  //           "Access-Control-Allow-Methods": "GET",
  //         },
  //       }
  //     );

  //     if (!response.ok) {
  //       throw new Error("Gagal memuat data");
  //     }

  //     const data = await response.json();
  //     console.log(data);

  //     ButtonSubmit.classList.remove("hidden");
  //     SubmitLoading.classList.add("hidden");
  //   } catch (error) {
  //     console.log("Terjadi kesalahan:", error);

  // Tampilkan kembali tombol submit dan sembunyikan loading spinner
  // ButtonSubmit.classList.remove("hidden");
  // SubmitLoading.classList.add("hidden");
  //   }
}

// End Input Tabungan
const handleClick = (e) => {
  const valuenya = e.target.value;

  InputTabungan.setAttribute("value", valuenya);
  InputTabungan.value = valuenya;
};

InputInstan.forEach((button) => {
  button.addEventListener("click", handleClick);
});

ButtonSubmit.addEventListener("click", function () {
  if (InputTabungan.value != "") {
    AlertKosong.classList.add("hidden");
    AlertKosong.classList.remove("flex");

    InputTabungan.classList.add("border-primary");
    InputTabungan.classList.remove("border-red-500");

    AreaInputan.classList.add("mt-10");
    AreaInputan.classList.remove("mt-4");

    ButtonSubmit.classList.toggle("hidden");
    SubmitLoading.classList.toggle("hidden");

    // setTimeout(() => {
    //   ButtonSubmit.classList.toggle("hidden");
    //   SubmitLoading.classList.toggle("hidden");
    // }, 3000);
    fetchData();
  } else {
    InputTabungan.classList.remove("border-primary");
    InputTabungan.classList.add("border-red-500");

    AreaInputan.classList.remove("mt-10");
    AreaInputan.classList.add("mt-4");

    // AlertSuccess.classList.remove("alert_success");
    // AlertKosong.classList.add("flex");

    AlertKosong.classList.remove("hidden");
    AlertKosong.classList.add("flex");
  }
});

// Area CekTabungan
const getButtonCekTabungan = document.querySelector("#CekTabungan");

getButtonCekTabungan.addEventListener("click", () => {
  alert("Sedang Dalam Pengembangan MfaDev");
});
// End Area Cek Tabungan
