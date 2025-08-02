export function setupFooterForm() {
  const form = document.querySelector(".footer-subscribe-form");
  if (!form) return;

  const input = form.querySelector(".footer-subscribe-form-input");
  const successMsg = form.querySelector(".text-valid");
  const errorMsg = form.querySelector(".text-invalid");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    if (!input.checkValidity()) {
      errorMsg.style.display = "block";
      successMsg.style.display = "none";
      input.classList.add("error");
      input.classList.remove("success");
    } else {
      errorMsg.style.display = "none";
      successMsg.style.display = "block";
      input.classList.remove("error");
      input.classList.add("success");
      input.value = "";
    }
  });

  // 👇 Reset styles/messages when leaving the field
  input.addEventListener("blur", () => {
    input.classList.remove("error", "success");
    successMsg.style.display = "none";
    errorMsg.style.display = "none";
  });

  // 👇 Clear error/success while typing
  input.addEventListener("input", () => {
    input.classList.remove("error", "success");
    successMsg.style.display = "none";
    errorMsg.style.display = "none";
  });
}
