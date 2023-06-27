// Loading Input
const ButtonSubmit = document.querySelector(".submit_tabungan");
const SubmitLoading = document.querySelector(".submit_loading");

const InputInstan = document.querySelectorAll(".input_instan");

const AreaInputan = document.querySelector(".area_inputan");
const AlertKosong = document.querySelector(".alert_kosong");
const InputTabungan = document.querySelector("#input_tabungan");

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

    setTimeout(() => {
      ButtonSubmit.classList.toggle("hidden");
      SubmitLoading.classList.toggle("hidden");
    }, 3000);
  } else {
    InputTabungan.classList.remove("border-primary");
    InputTabungan.classList.add("border-red-500");

    AreaInputan.classList.remove("mt-10");
    AreaInputan.classList.add("mt-4");

    AlertKosong.classList.remove("hidden");
    AlertKosong.classList.add("flex");
  }
});
