const nameText = document.getElementById("name");
const imageSpace = document.getElementById("image");
const testimonyText = document.getElementById("testimony");

const testimonials = [
  {
    name: "Iradukunda Toussaint",
    image: "./image1.jpg",
    testimony:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam dolores aliquid maxime ex sed consectetur ut repudiandae voluptatum eius, harum in, repellendus obcaecati quas adipisci dignissimos. Dicta laboriosam laborum asperiores?",
  },
  {
    name: "Uwamaliya Chantal",
    image: "./image4.jpeg",
    testimony:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam dolores aliquid maxime ex sed consectetur ut repudiandae voluptatum eius, harum in, repellendus obcaecati quas adipisci dignissimos. Dicta laboriosam laborum asperiores?",
  },
  {
    name: "Niyonsaba Moise",
    image: "./image3.jpg",
    testimony:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam dolores aliquid maxime ex sed consectetur ut repudiandae voluptatum eius, harum in, repellendus obcaecati quas adipisci dignissimos. Dicta laboriosam laborum asperiores?",
  },
  {
    name: "Tuyisenge Alice",
    image: "./image2.jpg",
    testimony:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam dolores aliquid maxime ex sed consectetur ut repudiandae voluptatum eius, harum in, repellendus obcaecati quas adipisci dignissimos. Dicta laboriosam laborum asperiores?",
  },
];

function showTestimonial(index){
  nameText.textContent = testimonials[index].name
  imageSpace.src = testimonials[index].image
  testimonyText.textContent = testimonials[index].testimony
}

let counter = 0

function nextTestimonial() {
  if(counter >= testimonials.length)
    counter = 0
  else ++counter

  showTestimonial(counter)
  
}


setInterval(nextTestimonial, 6000)





