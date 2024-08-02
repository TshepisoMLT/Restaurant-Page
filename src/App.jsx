import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

function App() {
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);

  const handleClick = (item) => {
    const descriptionElement = document.querySelector(
      `#${item.id} .description`
    );
    if (descriptionElement.classList.contains("hidden")) {
      setIsDescriptionOpen(true);
      descriptionElement.classList.remove("hidden");
    } else {
      setIsDescriptionOpen(false);
      descriptionElement.classList.add("hidden");
    }
  };

  const menuItems = [
    {
      id: "Mediterranean_Platter",
      imgUrl: "./dish1.jpeg",
      alt: "Mediterranean Platter",
      name: "Mediterranean Platter",
      description:
        "A selection of our finest appetizers, featuring house-made hummus, baba ganoush, and freshly baked pita",
      mealType: "Perfect for sharing",
      price: 10.99,
    },
    {
      id: "Seafood_Paella",
      imgUrl: "./dish3.jpeg",
      alt: "Seafood Paella",
      name: "Seafood Paella",
      description:
        "Traditional Spanish rice dish with fresh mussels, shrimp, and calamari, infused with saffron",
      mealType: "Serves two",
      price: 12.99,
    },
    {
      id: "Greek_Salad",
      imgUrl: "./dish4.jpg",
      alt: "Greek Salad",
      name: "Greek Salad",
      description:
        "Crisp vegetables with feta cheese, Kalamata olives, and our signature oregano dressing",
      mealType: "Vegetarian-friendly",
      price: 14.99,
    },
    {
      id: "Grilled_Lamb_Chops",
      imgUrl: "./dish5.jpeg",
      alt: "Grilled Lamb Chops",
      name: "Grilled Lamb Chops",
      description:
        "Tender lamb chops marinated in rosemary and garlic, served with roasted vegetables",
      mealType: "Chef's special",
      price: 16.99,
    },
  ];

  return (
    <>
      <section className="hero"
        style={{
          backgroundImage: `url(./page1.jpeg)`,
        }}
      >
        <h1>Welcome to SAONA</h1>
        <p>
          Experience Mediterranean culinary excellence in the heart of Foodville
        </p>
        <p>Open daily from 11 AM to 10 PM</p>
        <button className="cta-button">
          <a href="#reservation">Book a Table</a>
        </button>
      </section>

      <section id="about" className="about-us">
        <h2>Our Story</h2>
        <p>
          SAONA brings the flavors of the Mediterranean to your plate. Founded
          in 2010 by Chef Maria Rodriguez, we&apos;ve been serving authentic
          dishes made with love and tradition.
        </p>
        <p>
          Our commitment to using locally-sourced, organic ingredients ensures
          each dish captures the essence of Mediterranean cuisine.
        </p>
      </section>

      <section id="menu" className="featured-dishes">
        <h2>Our Signature Dishes</h2>
        <div className="dish-grid">
          {menuItems.map((item) => (
            <div key={item.id} className="dish-item" id={item.id}>
              <img src={item.imgUrl} alt={item.alt} />
              <h3>{item.name}</h3>
              <div className="description hidden">
                <p>{item.description}</p>
              </div>
              <p>{item.mealType}</p>
              <p>Price: ${item.price.toFixed(2)}</p>
              <div className="buttons">
                <button
                  onClick={() => handleClick(item)}
                  className="show-description-btn"
                >
                  {isDescriptionOpen ? "Close" : "View more"}
                </button>
                <button className="add-to-cart-btn">Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section id="reservation" className="reservation">
        <h2>Make a Reservation</h2>
        <p>
          Join us for an unforgettable dining experience. We recommend booking
          in advance, especially for weekend dinners.
        </p>
        <p>
          For parties of 6 or more, please call us directly at (123) 456-7890
        </p>
        <form className="reservation-form">
          <input type="text" name="name" placeholder="Name" required />
          <input type="email" name="email" placeholder="Email" required />
          <input type="date" name="date" required />
          <input type="time" name="time" required />
          <button type="submit">Reserve Now</button>
        </form>
      </section>

      <footer>
        <p>&copy; 2024 Malatsi Tshepiso. All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;
