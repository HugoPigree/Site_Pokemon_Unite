aura.onclick = function() {
    let start = Date.now();

    let timer = setInterval(function() {
      let timePassed = Date.now() - start;

      aura.style.left = timePassed / 5 + 'px';

      if (timePassed > 2000) clearInterval(timer);

    }, 20);
  }

  function bigImg(x) {
    x.style.height = "400px";
    x.style.width = "400px";
  }
  
  function normalImg(x) {
    x.style.height = "300px";
    x.style.width = "300px";
  }