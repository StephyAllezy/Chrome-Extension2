document.querySelector("button").addEventListener("click", function () {
  if (document.querySelector("h1")) {
    document.querySelector("h1").classList.add("make-pink");
  }
});

document.querySelector("button").addEventListener("dblclick", function () {
  if (document.querySelector("h1")) {
    document.querySelector("h1").classList.remove("make-pink");
  }
});
{
  /* <html>
  <button id="mybutton">click me</button>
  <script>
    var greeting = "hello, ";
    var button = document.getElementById("mybutton");
    button.person_name = "Bob";
    button.addEventListener(
        "click", () => alert(greeting + button.person_name + "."), false);
  </script>
</html> */
}
