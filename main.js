let link = "https://http.cat/";
let imgSection = document.querySelector(".img-section")

const resCodes = [
    100, 101, 102, 103, 200, 201, 202, 203, 204, 206, 207, 208, 214, 226, 300,
    301, 302, 303, 304, 305, 307, 308, 400, 401, 402, 403, 404, 405, 406, 407,
    408, 409, 410, 411, 412, 413, 414, 415, 416, 417, 418, 420, 421, 422, 423,
    424, 425, 426, 428, 429, 431, 444, 450, 451, 497, 498, 499, 500, 501, 502,
    503, 504, 506, 507, 508, 509, 510, 511, 521, 522, 523, 525, 530, 599,
  ];

  function getImag(){
    for(let i = 0  ; i < resCodes.length ; i++){
        let container = document.createElement("div")
        imgSection.appendChild(container)
        let img = document.createElement("img")
        container.appendChild(img)
        let overllay = document.createElement("div")
        img.appendChild(overllay)
        overllay.className = "overl";
        overllay.style.display = "block";
        img.src = `${link}${resCodes[i]}.jpg`;
        img.className = "imgStyle";
        img.addEventListener("click", (e)=> {
            window.open(`https://http.cat/status/${resCodes[i]}`)
        })
    }
  }
  console.log(getImag())
