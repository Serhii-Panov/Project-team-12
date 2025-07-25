export function setupFooterForm() {
  const form = document.querySelector(".footer-subscribe-form");
  if (!form) return;

  form.addEventListener("submit", function (e) {
    const input = form.querySelector(".footer-subscribe-form-input");
    const successMsg = form.querySelector(".text-valid");
    const errorMsg = form.querySelector(".text-invalid");

    if (!input.checkValidity()) {
      e.preventDefault();
      errorMsg.style.display = "block";
      successMsg.style.display = "none";
      input.classList.add("error");
      input.classList.remove("success");
    } else {
      e.preventDefault();
      errorMsg.style.display = "none";
      successMsg.style.display = "block";
      input.classList.remove("error");
      input.classList.add("success");
      input.value = "";
    }
  });
}