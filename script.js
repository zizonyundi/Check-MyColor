window.onload = function() {
  const inputs = document.querySelectorAll(".controls input");
  const redControl = document.querySelector(".controls #red");
  const greenControl = document.querySelector(".controls #green");
  const blueControl = document.querySelector(".controls #blue");

  function colorUpdate() {
    document.documentElement.style.setProperty(
      `--color1`,
      `rgb(${redControl.value},${greenControl.value},${blueControl.value})`
    );
  }

  function rgbToHex() {
    var toHex = function(string) {
      string = parseInt(string, 10).toString(16);
      string = string.length === 1 ? "0" + string : string;

      return string;
    };

    var r = toHex(redControl.value);
    var g = toHex(greenControl.value);
    var b = toHex(blueControl.value);

    var hexType = r + g + b;
    document.getElementById("hexcode").innerHTML = hexType;

    return hexType;
  }

  inputs.forEach(input => input.addEventListener("change", colorUpdate));
  inputs.forEach(input => input.addEventListener("mousemove", colorUpdate));
  inputs.forEach(input => input.addEventListener("change", rgbToHex));
  inputs.forEach(input => input.addEventListener("mousemove", rgbToHex));
};

/*
  function rgbUpdate() {
    document.documentElement.style.setProperty(
      `--color1`,
      `rgb(${redControl.value},${greenControl.value},${blueControl.value})`
    );
  }

  function hslUpdate() {
    const suffix = this.dataset.sizing || "";
    document.documentElement.style.setProperty(
      `--color2`,
      `hsl(${hueControl.value},${satControl.value +
        suffix},${lightControl.value + suffix})`
    );
  }
*/

/*const suffix = this.dataset.sizing || "";
    document.documentElement.style.setProperty(
      `--color2`,
      `hsl(${hueControl.value},${satControl.value +
        suffix},${lightControl.value + suffix})`
    );*/
