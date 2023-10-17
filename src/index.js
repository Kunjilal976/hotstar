let movies = [
    {
      name: "falcon and the winter soldier",
      des:
        "The Falcon and the Winter Soldier is based on Marvel Comics featuring the characters Sam Wilson / Falcon and Bucky Barnes / Winter Soldier.",
      Image: "slider 2.png"
    },
    {
      name: "loki",
      des:
        "Loki is a TV series in the Marvel Cinematic Universe where the God of Mischief, Loki, navigates a new timeline and confronts a variant of himself while working with the Time Variance Authority to restore order to the multiverse.",
      Image: "slider 1.png"
    },
    {
      name: "wanda vision",
      des:
        "WandaVision is a TV series in the Marvel Cinematic Universe that follows Wanda Maximoff (Scarlet Witch) and Vision as they live in a sitcom-inspired reality, with mysterious and surreal events unfolding around them.",
      Image: "slider 3.png"
    },
    {
      name: "raya and the last dragon",
      des:
        "Raya and the Last Dragon is an animated fantasy film produced by Walt Disney Animation Studios. It follows the courageous warrior Raya on her quest to find the last dragon and save her fractured world, Kumandra, from a dark and powerful threat known as the Druun.",
      Image: "slider 4.png"
    },
    {
      name: "luca",
      des:
        "Luca is an animated coming-of-age film produced by Pixar Animation Studios. Set in a beautiful coastal town in Italy, the story revolves around Luca, a young sea monster who disguises himself as a human boy during an unforgettable summer. Alongside his newfound best friend Alberto, Luca experiences adventures and life lessons while trying to keep his true identity hidden from the townspeople, who fear sea monsters.",
      Image: "slider 5.png"
    }
  ];
  
  const carousel = document.querySelector(".carousel");
  let sliders = [];
  
  let slideIndex = 0;
  
  const createSlide = () => {
    if (slideIndex >= movies.length) {
      slideIndex = 0;
    }
    let slide = document.createElement("div");
    var imgElement = document.createElement("img");
    let content = document.createElement("div");
    let h1 = document.createElement("h1");
    let p = document.createElement("p");
  
    imgElement.appendChild(document.createTextNode(""));
    h1.appendChild(document.createTextNode(movies[slideIndex].name));
    p.appendChild(document.createTextNode(movies[slideIndex].des));
    content.appendChild(h1);
    content.appendChild(p);
    slide.appendChild(content);
    slide.appendChild(imgElement);
    carousel.appendChild(slide);
  
    imgElement.src = movies[slideIndex].Image;
    slideIndex++;
  
    slide.className = "slider";
    content.className = "slide-content";
    h1.className = "movie-title";
    p.className = "movie-des";
  
    sliders.push(slide);
  
    if (sliders.length) {
      sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${
        30 * (sliders.length - 2)
      }px)`;
    }
  };
  
  for (let i = 0; i < 3; i++) {
    createSlide();
  }
  
  setInterval(() => {
    createSlide(sliders);
  }, 3000);
  
  const videoCards = [...document.querySelectorAll(".video-card")];
  
  videoCards.forEach((item) => {
    item.addEventListener("mouseover", () => {
      let video = item.children[1];
      video.play();
    });
    item.addEventListener("mouseleave", () => {
      let video = item.children[1];
      video.pause();
    });
  });
  
  let cardContainers = [...document.querySelectorAll(".card-container")];
  let preBtns = [...document.querySelectorAll(".pre-btn")];
  let nxtBtns = [...document.querySelectorAll(".nxt-btn")];
  
  cardContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;
  
    nxtBtns[i].addEventListener("click", () => {
      item.scrollLeft += containerWidth - 200;
    });
    preBtns[i].addEventListener("click", () => {
      item.scrollLeft -= containerWidth + 200;
    });
  });