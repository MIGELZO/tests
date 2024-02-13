window.addEventListener("load", () => {
  const user_input = document.getElementById("px_field");
  const adjusted_div_el = document.getElementById("changing_div");

  user_input.addEventListener("input", () => {
    if (user_input.value === "") {
      adjusted_div_el.style.width = "50px";
      adjusted_div_el.style.height = "50px";
    } else {
      adjusted_div_el.style.width = user_input.value + "px";
      adjusted_div_el.style.height = user_input.value + "px";
    }
  });
});
