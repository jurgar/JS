const renderCard = (product) => {
  const { id, image, price, title } = product;

  const card = document.createElement("div"); // <div>
  const imageEl = document.createElement("img"); // <img />
  const titleEl = document.createElement("p"); // <p>
  const priceEl = document.createElement("h5"); // <h5>
  const deleteButton = document.createElement("button"); // <button>

  card.className = "card"; // <div class = "card">
  priceEl.style.color = "red"; // <h5 style = "color: red">

  imageEl.src = image; // <img src={image}/>
  imageEl.alt = title; // <img src={image} alt={title}/>
  titleEl.textContent = title; // <p>{title}</p>
  priceEl.textContent = price; // <h5>{price}</p>
  deleteButton.textContent = "Istrinti"; // <button>Istrinti</button>

  deleteButton.addEventListener("click", () => {
    console.log(id);
    const params = { method: "DELETE" };
    fetch(`https://golden-whispering-show.glitch.me/${id}`, params)
      .then((resp) => resp.json())
      .then((response) => {
        console.log(response);
        location.reload();
      })
      .catch((error) => {
        console.error(error);
      });
  });

  card.append(imageEl, titleEl, priceEl, deleteButton);
  // <div class="card">
  // <img .../>
  // <p>{title}</p>
  // <h5 red>{price}</h5>
  //<button>Istrinti</button>
  //</div>

  document.body.append(card);

  //   console.log(product);
  //   console.log(product.price);
};
fetch("https://golden-whispering-show.glitch.me")
  .then((resp) => resp.json())
  .then((response) => {
    // console.log(response);
    response.forEach((product) => renderCard(product));
    // renderCard(response[0]);
  })
  .catch((error) => {
    console.error(error);
  });
