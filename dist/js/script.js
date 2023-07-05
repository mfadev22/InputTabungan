// Loading Input
const ButtonSubmit = document.querySelector(".submit_tabungan");
const SubmitLoading = document.querySelector(".submit_loading");

const InputInstan = document.querySelectorAll(".input_instan");

const AreaInputan = document.querySelector(".area_inputan");
const AlertKosong = document.querySelector(".alert_kosong");
const AlertSuccess = document.querySelector(".alert_success");
const InputTabungan = document.querySelector("#input_tabungan");
const InputTabunganTarget = document.querySelector("#tabung_target");

const loadingSelesai = () => {
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
// Input Tabungan Ke SpreadSheet
async function fetchData() {
  const AmbilInputan = InputTabungan.value;
  var iframe = document.createElement("iframe");
  iframe.style.display = "none";
  // ? URL BARU dengan Sistem Tabung Target
  iframe.src =
    "https://script.google.com/macros/s/AKfycbyqG-WOOLG0PT_h0i2mZUYtLKQsrPply-38UvcLVhwXYWUsh3PVwzXAM1Hk_geJI3Dq/exec/" +
    AmbilInputan;

  // ? URL LAMA
  // iframe.src =
  //   "https://script.google.com/macros/s/AKfycbzqgiAmpm-kw34tCEPhlBcMmUfyULA5ACFkcr1qhwo3iUhqzL_KW9t-1DiCualGZ_33/exec/" +
  //   AmbilInputan;
  document.body.appendChild(iframe);

  iframe.onload = function () {
    console.clear();
    // ButtonSubmit.classList.remove("hidden");
    // SubmitLoading.classList.add("hidden");

    // AreaInputan.classList.toggle("mt-10");
    // AreaInputan.classList.toggle("mt-4");

    // AlertSuccess.classList.toggle("hidden");
    // AlertKosong.classList.toggle("flex");

    // InputTabungan.value = "";

    // setTimeout(() => {
    //   AlertSuccess.classList.toggle("hidden");
    //   AreaInputan.classList.toggle("mt-10");
    //   AreaInputan.classList.toggle("mt-4");
    // }, 4000);
    loadingSelesai();
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

// Input Include Tabungan Target
async function KirimTabungTarget(cekKode = null) {
  const getInputTabungTarget = InputTabunganTarget.value;
  if (cekKode == "fadlul") {
    var namaTarget = "/fadlul";
  } else {
    var namaTarget = "/ismu";
  }
  var iframe_2 = document.createElement("iframe");
  iframe_2.style.display = "none";
  // ? URL BARU dengan Sistem Tabung Target
  iframe_2.src =
    "https://script.google.com/macros/s/AKfycbyqG-WOOLG0PT_h0i2mZUYtLKQsrPply-38UvcLVhwXYWUsh3PVwzXAM1Hk_geJI3Dq/exec/" +
    getInputTabungTarget +
    namaTarget;

  document.body.appendChild(iframe_2);

  iframe_2.onload = function () {
    console.clear();

    InputTabunganTarget.selectedIndex = 0;
    if (cekKode == "fadlul") {
      loadingSelesai();
    }
  };
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
    const CekInputan = InputTabungan.value;
    if (
      CekInputan == "280706" ||
      CekInputan == "231098" ||
      CekInputan == "230399"
    ) {
      KirimTabungTarget("fadlul");
    } else {
      KirimTabungTarget();
      fetchData();
    }
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
const area_input_menabung = document.querySelector("#area_input_menabung");
const modal_data_tabungan = document.querySelector("#modal_data_tabungan");
const close_modal = document.querySelector("#close_modal");

const total_tabungan = document.querySelector(".total_tabungan");
const sisa_tabungan = document.querySelector(".sisa_tabungan");
const target_fadlul = document.querySelector(".target_fadlul");
const target_ismu = document.querySelector(".target_ismu");
const total_target = document.querySelector(".total_target");
const sisa_target = document.querySelector(".sisa_target");

const loading_cektabung = document.querySelector(".loading_cektabung");

getButtonCekTabungan.addEventListener("click", () => {
  CekTabungan.classList.toggle("hidden");
  loading_cektabung.classList.toggle("hidden");
  let SHEET_ID = "1lilLxrKIz1Zcu1ScSxTU5oyhSXPVBlrEGgnalGTI_ac";
  let SHEET_TITLE = "Total_dan_Pengeluaran";
  let SHEET_RANGE = "I2:J7";

  let FULL_URL =
    "https://docs.google.com/spreadsheets/d/" +
    SHEET_ID +
    "/gviz/tq?sheet=" +
    SHEET_TITLE +
    "&range=" +
    SHEET_RANGE;

  fetch(FULL_URL)
    .then((response) => {
      return response.text();
    })
    .then((data) => {
      let dataBaru = JSON.parse(data.substr(47).slice(0, -2));
      OlahLagi = dataBaru.table.rows;

      const dataAsosiatif = [];
      const keys = [];

      OlahLagi.forEach((row) => {
        const key = row.c[0].v;
        const value = row.c[1].f;

        dataAsosiatif[key] = value;
        keys.push(key);
      });

      // console.log(dataAsosiatif);
      // console.log(keys);

      // alert(
      //   "Masih Dalam Pengembangan. Sementara ini Datanya : " +
      //     keys[0] +
      //     " = " +
      //     dataAsosiatif.total_tabungan
      // );
      total_tabungan.innerHTML =
        "Total Tabungan: <span class='font-bold bg-primary px-2'>" +
        dataAsosiatif.total_tabungan +
        "</span>";
      sisa_tabungan.innerHTML =
        "Sisa Tabungan: <span class='font-bold bg-primary px-2'>" +
        dataAsosiatif.sisa_tabungan +
        "</span>";
      target_fadlul.innerHTML =
        "TabungTarget Fadlul: <span class='font-bold bg-primary px-2'>" +
        dataAsosiatif.fadlul_target +
        "</span>";
      target_ismu.innerHTML =
        "TabungTarget Ismu: <span class='font-bold bg-primary px-2'>" +
        dataAsosiatif.ismu_target +
        "</span>";
      total_target.innerHTML =
        "Total Tabungan Target (Pizza): <span class='font-bold bg-primary px-2'>" +
        dataAsosiatif.total_tabung_target +
        "</span>";
      sisa_target.innerHTML =
        "Sisa Tabungan Target (Pizza): <span class='font-bold bg-primary px-2'>" +
        dataAsosiatif.sisa_tabung_target +
        "</span>";

      loading_cektabung.classList.toggle("hidden");
      CekTabungan.classList.toggle("hidden");
      area_input_menabung.classList.add("hidden");
      modal_data_tabungan.classList.remove("hidden");
      modal_data_tabungan.classList.add("flex");
    })
    .catch((error) => {
      console.error("Kesalahan:" + error);
    });
});

close_modal.addEventListener("click", () => {
  area_input_menabung.classList.toggle("hidden");
  modal_data_tabungan.classList.toggle("hidden");
  modal_data_tabungan.classList.toggle("flex");
});
