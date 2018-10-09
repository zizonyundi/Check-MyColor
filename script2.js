window.onload = function() {
  const inputs = document.querySelectorAll("input");
  const r1 = document.querySelector(".controls_1 .red");
  const g1 = document.querySelector(".controls_1 .green");
  const b1 = document.querySelector(".controls_1 .blue");

  const r2 = document.querySelector(".controls_2 .red");
  const g2 = document.querySelector(".controls_2 .green");
  const b2 = document.querySelector(".controls_2 .blue");

  const icon1 = document.querySelector(".icon-wrap #icon-1");
  const icon2 = document.querySelector(".icon-wrap #icon-2");
  const icon3 = document.querySelector(".icon-wrap #icon-3");
  const icon4 = document.querySelector(".icon-wrap #icon-4");

  icon1.addEventListener("click", patternChange1);
  function patternChange1() {
    document.documentElement.style.setProperty(`--width`, `12%`);
    document.documentElement.style.setProperty(`--height`, `30%`);
    document.documentElement.style.setProperty(`--radius`, `0%`);
    document.documentElement.style.setProperty(`--margin1`, `0 2.222222% 0 0`);
    document.documentElement.style.setProperty(`--margin2`, `0 0 0 2.222222%`);
    document.documentElement.style.setProperty(`--color3`, `black`);
  }
  icon2.addEventListener("click", patternChange2);
  function patternChange2() {
    document.documentElement.style.setProperty(`--width`, `20vw`);
    document.documentElement.style.setProperty(`--height`, `20vw`);
    document.documentElement.style.setProperty(`--radius`, `50%`);
    document.documentElement.style.setProperty(`--margin1`, `0 0 0 0`);
    document.documentElement.style.setProperty(`--margin2`, `0 0 0 0`);
    document.documentElement.style.setProperty(`--color3`, `white`);
  }

  icon3.addEventListener("click", patternChange3);
  function patternChange3() {
    document.documentElement.style.setProperty(`--width`, `4%`);
    document.documentElement.style.setProperty(`--height`, `100%`);
    document.documentElement.style.setProperty(`--radius`, `0%`);
    document.documentElement.style.setProperty(`--margin1`, `0 0.544444% 0 0`);
    document.documentElement.style.setProperty(`--margin2`, `0 0.544444% 0 0%`);
    document.documentElement.style.setProperty(`--color3`, `black`);
  }

  icon4.addEventListener("click", patternChange4);
  function patternChange4() {
    document.documentElement.style.setProperty(`--width`, `20vw`);
    document.documentElement.style.setProperty(`--height`, `20vw`);
    document.documentElement.style.setProperty(`--radius`, `0%`);
    document.documentElement.style.setProperty(`--margin1`, `0 0 0 0`);
    document.documentElement.style.setProperty(`--margin2`, `0 0 0 0`);
    document.documentElement.style.setProperty(`--color3`, `black`);
  }

  function colorUpdate() {
    document.documentElement.style.setProperty(
      `--color1`,
      `rgb(${r1.value},${g1.value},${b1.value})`
    );

    document.documentElement.style.setProperty(
      `--color2`,
      `rgb(${r2.value},${g2.value},${b2.value})`
    );
  }

  function rgbToNumber() {
    document.getElementById("num-r1").innerHTML = "R " + r1.value;
    document.getElementById("num-g1").innerHTML = "G " + g1.value;
    document.getElementById("num-b1").innerHTML = "B " + b1.value;
    document.getElementById("num-r2").innerHTML = "R " + r2.value;
    document.getElementById("num-g2").innerHTML = "G " + g2.value;
    document.getElementById("num-b2").innerHTML = "B " + b2.value;
  }

  function rgbToHex() {
    var toHex = function(string) {
      string = parseInt(string, 10).toString(16);
      string = string.length === 1 ? "0" + string : string;

      return string;
    };

    var r1hex = toHex(r1.value);
    var g1hex = toHex(g1.value);
    var b1hex = toHex(b1.value);

    var r2hex = toHex(r2.value);
    var g2hex = toHex(g2.value);
    var b2hex = toHex(b2.value);

    var hexType1 = r1hex + g1hex + b1hex;
    var hexType2 = r2hex + g2hex + b2hex;

    document.getElementById("hexcode_1").innerHTML = hexType1;
    document.getElementById("hexcode_2").innerHTML = hexType2;

    return hexType1, hexType2;
  }

  inputs.forEach(input => input.addEventListener("change", colorUpdate));
  inputs.forEach(input => input.addEventListener("mousemove", colorUpdate));
  inputs.forEach(input => input.addEventListener("change", rgbToHex));
  inputs.forEach(input => input.addEventListener("mousemove", rgbToHex));
  inputs.forEach(input => input.addEventListener("change", rgbToNumber));
  inputs.forEach(input => input.addEventListener("mousemove", rgbToNumber));
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