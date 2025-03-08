const express = require("express");
const path = require("path");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS
app.use(cors());

// Serve static files from the 'imgs' folder
app.use(express.static(path.join(__dirname, "imgs")));
app.use("/static", express.static("imgs"));

// Example route to test server
app.get("/recipes", (req, res) => {
  res.json([
    {
      menuName: "Ziafat Breakfast",
      foods: [
        {
          foodName: "Breakfast Set",
          description:
            "Condiments breakfast, cheese platter, fresh vegetables, home made qaimaq, Italian vegetable, pratha with pastirma, egg with tomato, sunny side egg, bread basket, black tea.",
          img: "imgs/api-menu-1.webp",
          price: "800Af",
          ingredients: [
            "Dairy",
            "Egg",
            "Garlic",
            "Gluten",
            "Honey",
            "Milk",
            "Onion",
            "Organic",
            "Vegan",
            "Halal",
          ],
          review: 4,
        },
        {
          foodName: "Mix Cheese Platter",
          description:
            "Feta cheese, parmesan cheese, cow cheese, cheddar cashkaval cheese, and home made butter, served with grapes and apricot.",
          img: "imgs/api-menu-2.webp",
          price: "300Af",
          ingredients: ["Dairy", "Cheese", "Halal"],
          review: 4.2,
        },
        {
          foodName: "Breakfast Karahi",
          description:
            "Tender beef with lamb fat, caramelized onion, garlic, tomato, served with organic egg.",
          img: "imgs/api-menu-3.webp",
          price: "350Af",
          ingredients: ["Egg", "Garlic", "Onion", "Halal"],
          review: 5,
        },
        {
          foodName: "Lamb Liver",
          description: "Fresh lamb liver with tomato sauce",
          img: "imgs/api-menu-4.webp",
          price: "300Af",
          ingredients: ["Spicy", "Garlic", "Halal "],
          review: 3.5,
        },
        {
          foodName: "Cheese Omeletta",
          description:
            "Egg, cheese and mix bell pepper, served with fresh salad",
          img: "imgs/api-menu-5.webp",
          price: "200Af",
          ingredients: ["Egg", "Cheese", "Halal"],
          review: 5,
        },
      ],
    },
    {
      menuName: "Soup",
      foods: [
        {
          foodName: "Shahi Soup",
          img: "imgs/api-menu-6.webp",
          price: "250Af",
          review: 0,
        },
        {
          foodName: "Ziafat Special Soup",
          img: "imgs/api-menu-7.webp",
          price: "720Af",
          ingredients: ["Dairy", "Cheese", "Halal"],
          review: 4.2,
        },
      ],
    },
    {
      menuName: "Salad",
      foods: [
        {
          foodName: "Ziafat Mezze",
          description:
            "Fatosh Salad, Greek Salad, Fruit Salad, Hummus, Motabel, Ezma, Arabic Bread",
          img: "imgs/api-menu-8.webp",
          price: "700Af",
          ingredients: ["Nuts", "Onion", "Garlic", "Gluten", "Vegan", "Dairy"],
          review: 0,
        },
        {
          foodName: "Ziafat Special Salad",
          description:
            "Small cups tomato,cucumber,onion,parsley pcs of walnuts, pomegranate seeds lemon olive oil pomegranate dressing",
          img: "imgs/api-menu-9.webp",
          price: "720Af",
          ingredients: ["Nuts", "Onion", "Vegan"],
          review: 5,
        },
        {
          foodName: "Fruit Salad",
          description:
            "Apple, banana, grapes, orange, mixed honey with cream, served with mix nuts.",
          img: "imgs/api-menu-10.webp",
          price: "720Af",
          ingredients: ["Honey", "Milk", "Nuts"],
          review: 0,
        },
      ],
    },
    {
      menuName: "Starters",
      foods: [
        {
          foodName: "Dynamite Shrimp",
          description: "With satay sauce",
          img: "imgs/api-menu-11.webp",
          price: "350Af",
          review: 0,
        },
        {
          foodName: "Tandori Samosa",
          description:
            "Small cups tomato,cucumber,onion,parsley pcs of walnuts, pomegranate seeds lemon olive oil pomegranate dressing",
          img: "imgs/api-menu-12.webp",
          price: "150Af",
          review: 0,
        },
      ],
    },
    {
      menuName: "Mughlai Food",
      foods: [
        {
          foodName: "Chicken Biryani",
          description:
            "Aromatic basmati rice cooked with tender chicken pieces and traditional Mughlai spices.",
          img: "imgs/mughlai-chicken-biryani.webp",
          price: "500Af",
          ingredients: ["Chicken", "Rice", "Spices", "Halal"],
          review: 4.5,
        },
        {
          foodName: "Mutton Korma",
          description:
            "Slow-cooked mutton in a rich and creamy gravy made with yogurt and a blend of spices.",
          img: "imgs/mughlai-mutton-korma.webp",
          price: "650Af",
          ingredients: ["Mutton", "Yogurt", "Spices", "Halal"],
          review: 4.7,
        },
      ],
    },
    {
      menuName: "Thai & Chinese",
      foods: [
        {
          foodName: "Pad Thai",
          description:
            "Stir-fried rice noodles with shrimp, tofu, eggs, and a tangy tamarind sauce.",
          img: "imgs/thai-pad-thai.webp",
          price: "450Af",
          ingredients: ["Shrimp", "Noodles", "Peanuts", "Eggs"],
          review: 4.3,
        },
        {
          foodName: "Kung Pao Chicken",
          description:
            "Spicy stir-fried chicken with peanuts, vegetables, and chili peppers.",
          img: "imgs/chinese-kung-pao-chicken.webp",
          price: "500Af",
          ingredients: ["Chicken", "Peanuts", "Chili Peppers", "Soy Sauce"],
          review: 4.6,
        },
      ],
    },
    {
      menuName: "Afghani Cuisine",
      foods: [
        {
          foodName: "Kabuli Pulao",
          description:
            "Traditional Afghan dish of steamed rice mixed with raisins, carrots, and lamb.",
          img: "imgs/afghani-kabuli-pulao.webp",
          price: "550Af",
          ingredients: ["Lamb", "Rice", "Carrots", "Raisins", "Halal"],
          review: 4.8,
        },
        {
          foodName: "Mantu",
          description:
            "Steamed dumplings filled with spiced ground beef, topped with yogurt and tomato sauce.",
          img: "imgs/afghani-mantu.webp",
          price: "400Af",
          ingredients: ["Beef", "Dough", "Yogurt", "Tomato Sauce", "Halal"],
          review: 4.5,
        },
      ],
    },
    {
      menuName: "Bar.B.Q",
      foods: [
        {
          foodName: "Grilled Lamb Chops",
          description:
            "Juicy lamb chops marinated in herbs and spices, grilled to perfection.",
          img: "imgs/bbq-grilled-lamb-chops.webp",
          price: "700Af",
          ingredients: ["Lamb", "Herbs", "Spices", "Halal"],
          review: 4.9,
        },
        {
          foodName: "Chicken Seekh Kebab",
          description:
            "Minced chicken mixed with spices, molded onto skewers, and grilled.",
          img: "imgs/bbq-chicken-seekh-kebab.webp",
          price: "450Af",
          ingredients: ["Chicken", "Spices", "Halal"],
          review: 4.6,
        },
      ],
    },
    {
      menuName: "International Cuisine",
      foods: [
        {
          foodName: "Beef Stroganoff",
          description:
            "Sautéed pieces of beef served in a sauce with smetana (sour cream), served over noodles.",
          img: "imgs/international-beef-stroganoff.webp",
          price: "600Af",
          ingredients: ["Beef", "Sour Cream", "Mushrooms", "Onions", "Halal"],
          review: 4.4,
        },
        {
          foodName: "Chicken Alfredo Pasta",
          description:
            "Creamy Alfredo sauce tossed with fettuccine pasta and grilled chicken.",
          img: "imgs/international-chicken-alfredo-pasta.webp",
          price: "500Af",
          ingredients: [
            "Chicken",
            "Pasta",
            "Cream",
            "Parmesan Cheese",
            "Halal",
          ],
          review: 4.7,
        },
      ],
    },
    {
      menuName: "Sea Food",
      foods: [
        {
          foodName: "Grilled Salmon",
          description:
            "Fresh salmon fillet grilled and served with a lemon butter sauce.",
          img: "imgs/seafood-grilled-salmon.webp",
          price: "800Af",
          ingredients: ["Salmon", "Lemon", "Butter"],
          review: 4.8,
        },
        {
          foodName: "Shrimp Scampi",
          description:
            "Succulent shrimp sautéed in garlic, butter, and white wine sauce, served over linguine.",
          img: "imgs/seafood-shrimp-scampi.webp",
          price: "750Af",
          ingredients: ["Shrimp", "Garlic", "Butter", "White Wine"],
          review: 4.6,
        },
      ],
    },
    {
      menuName: "Burger",
      foods: [
        {
          foodName: "Classic Beef Burger",
          description:
            "Juicy beef patty with lettuce, tomato, cheese, and our special sauce.",
          img: "imgs/burger-classic-beef.webp",
          price: "400Af",
          ingredients: ["Beef", "Lettuce", "Tomato", "Cheese"],
        },
        {
          foodName: "Chicken Avocado Burger",
          description:
            "Grilled chicken breast topped with fresh avocado slices and spicy mayo.",
          img: "imgs/burger-chicken-avocado.webp",
          price: "450Af",
          ingredients: ["Chicken", "Avocado", "Spicy Mayo", "Bun", "Halal"],
          review: 4.7,
        },
      ],
    },
    {
      menuName: "Italian Pizza & Pide",
      foods: [
        {
          foodName: "Margherita Pizza",
          description:
            "Classic pizza topped with fresh mozzarella, tomatoes, and basil.",
          img: "imgs/pizza-margherita.webp",
          price: "500Af",
          ingredients: ["Mozzarella"],
          review: 4.7,
        },
        {
          foodName: "Pepperoni Pizza",
          description:
            "Classic pizza topped with mozzarella cheese and savory pepperoni slices.",
          img: "imgs/pizza-pepperoni.webp",
          price: "550Af",
          ingredients: ["Mozzarella", "Pepperoni"],
          review: 4.6,
        },
        {
          foodName: "Veggie Pizza",
          description:
            "Pizza topped with mozzarella cheese, bell peppers, olives, onions, and mushrooms.",
          img: "imgs/pizza-veggie.webp",
          price: "600Af",
          ingredients: [
            "Mozzarella",
            "Bell Peppers",
            "Olives",
            "Onions",
            "Mushrooms",
          ],
          review: 4.5,
        },
        {
          foodName: "Four Cheese Pizza",
          description:
            "A delightful pizza with mozzarella, cheddar, parmesan, and gouda cheeses.",
          img: "imgs/pizza-four-cheese.webp",
          price: "650Af",
          ingredients: ["Mozzarella", "Cheddar", "Parmesan", "Gouda"],
          review: 4.8,
        },
        {
          foodName: "Meat Lovers Pizza",
          description:
            "Pizza topped with pepperoni, sausage, bacon, and ground beef, with mozzarella.",
          img: "imgs/pizza-meat-lovers.webp",
          price: "700Af",
          ingredients: [
            "Pepperoni",
            "Sausage",
            "Bacon",
            "Ground Beef",
            "Mozzarella",
          ],
          review: 4.7,
        },
      ],
    },
    {
      menuName: "Deep Pan Pizza",
      foods: [
        {
          foodName: "Deep Pan Margherita",
          description:
            "Deep pan pizza with rich tomato sauce, mozzarella cheese, and fresh basil.",
          img: "imgs/deep-pan-margherita.webp",
          price: "600Af",
          ingredients: ["Mozzarella", "Tomato Sauce", "Basil"],
          review: 4.8,
        },
        {
          foodName: "Deep Pan Pepperoni",
          description:
            "Deep pan pizza loaded with savory pepperoni and melted mozzarella cheese.",
          img: "imgs/deep-pan-pepperoni.webp",
          price: "650Af",
          ingredients: ["Mozzarella", "Pepperoni"],
          review: 4.7,
        },
        {
          foodName: "Deep Pan Veggie",
          description:
            "Deep pan pizza with mozzarella cheese, bell peppers, onions, olives, and mushrooms.",
          img: "imgs/deep-pan-veggie.webp",
          price: "700Af",
          ingredients: [
            "Mozzarella",
            "Bell Peppers",
            "Olives",
            "Onions",
            "Mushrooms",
          ],
          review: 4.6,
        },
        {
          foodName: "Deep Pan Meat Lovers",
          description:
            "Deep pan pizza topped with pepperoni, sausage, bacon, and ground beef.",
          img: "imgs/deep-pan-meat-lovers.webp",
          price: "750Af",
          ingredients: [
            "Pepperoni",
            "Sausage",
            "Bacon",
            "Ground Beef",
            "Mozzarella",
          ],
          review: 4.9,
        },
        {
          foodName: "Deep Pan Hawaiian",
          description:
            "Deep pan pizza topped with pineapple, ham, and mozzarella cheese.",
          img: "imgs/deep-pan-hawaiian.webp",
          price: "700Af",
          ingredients: ["Pineapple", "Ham", "Mozzarella"],
          review: 4.5,
        },
      ],
    },

    {
      menuName: "Kids Menu",
      foods: [
        {
          foodName: "Mini Burger",
          description: "Small beef patty with cheese and ketchup.",
          img: "imgs/kids-mini-burger.webp",
          price: "250Af",
          ingredients: ["Beef", "Cheese", "Ketchup", "Bun"],
          review: 4.5,
        },
        {
          foodName: "Chicken Tenders",
          description: "Crispy fried chicken strips with honey mustard dip.",
          img: "imgs/kids-chicken-tenders.webp",
          price: "300Af",
          ingredients: ["Chicken", "Breading", "Honey Mustard"],
          review: 4.2,
        },
        {
          foodName: "Mini Pizza",
          description: "Personal-sized pizza with cheese and tomato sauce.",
          img: "imgs/kids-mini-pizza.webp",
          price: "280Af",
          ingredients: ["Cheese", "Tomato Sauce", "Basil"],
          review: 4.6,
        },
        {
          foodName: "Mac and Cheese",
          description: "Creamy macaroni and cheese topped with cheddar.",
          img: "imgs/kids-mac-and-cheese.webp",
          price: "250Af",
          ingredients: ["Cheddar", "Macaroni", "Cream"],
          review: 4.5,
        },
      ],
    },
    {
      menuName: "Side Orders",
      foods: [
        {
          foodName: "Garlic Bread",
          description: "Crispy garlic bread with a buttery flavor.",
          img: "imgs/side-garlic-bread.webp",
          price: "150Af",
          ingredients: ["Garlic", "Bread", "Butter"],
          review: 4.7,
        },
        {
          foodName: "French Fries",
          description: "Crispy golden fries with a light salt seasoning.",
          img: "imgs/side-french-fries.webp",
          price: "100Af",
          ingredients: ["Potato", "Salt"],
          review: 4.6,
        },
        {
          foodName: "Onion Rings",
          description: "Crispy battered onion rings, served with ketchup.",
          img: "imgs/side-onion-rings.webp",
          price: "200Af",
          ingredients: ["Onion", "Batter", "Ketchup"],
          review: 4.4,
        },
        {
          foodName: "Cheese Sticks",
          description:
            "Fried mozzarella cheese sticks served with marinara sauce.",
          img: "imgs/side-cheese-sticks.webp",
          price: "220Af",
          ingredients: ["Mozzarella", "Batter", "Marinara Sauce"],
          review: 4.5,
        },
      ],
    },
    {
      menuName: "Naan",
      foods: [
        {
          foodName: "Butter Naan",
          description: "Soft naan bread topped with melted butter.",
          img: "imgs/naan-butter.webp",
          price: "120Af",
          ingredients: ["Flour", "Butter"],
          review: 4.8,
        },
        {
          foodName: "Garlic Naan",
          description: "Naan bread with garlic flavor, soft and warm.",
          img: "imgs/naan-garlic.webp",
          price: "130Af",
          ingredients: ["Flour", "Garlic"],
          review: 4.7,
        },
        {
          foodName: "Cheese Naan",
          description: "Naan filled with melted cheese.",
          img: "imgs/naan-cheese.webp",
          price: "150Af",
          ingredients: ["Flour", "Cheese"],
          review: 4.6,
        },
        {
          foodName: "Keema Naan",
          description: "Naan stuffed with spiced minced meat.",
          img: "imgs/naan-keema.webp",
          price: "180Af",
          ingredients: ["Flour", "Minced Meat", "Spices"],
          review: 4.5,
        },
      ],
    },
    {
      menuName: "Desserts",
      foods: [
        {
          foodName: "Baklava",
          description: "Sweet pastry filled with chopped nuts and honey syrup.",
          img: "imgs/dessert-baklava.webp",
          price: "250Af",
          ingredients: ["Nuts", "Honey", "Flour"],
          review: 4.9,
        },
        {
          foodName: "Chocolate Cake",
          description:
            "Rich and moist chocolate cake with a creamy chocolate frosting.",
          img: "imgs/dessert-chocolate-cake.webp",
          price: "300Af",
          ingredients: ["Flour", "Chocolate", "Eggs", "Butter"],
          review: 4.8,
        },
        {
          foodName: "Carrot Cake",
          description:
            "Moist cake with carrots, walnuts, and a cream cheese frosting.",
          img: "imgs/dessert-carrot-cake.webp",
          price: "280Af",
          ingredients: ["Carrots", "Walnuts", "Cream Cheese"],
          review: 4.6,
        },
        {
          foodName: "Ice Cream Sundae",
          description:
            "Vanilla ice cream with chocolate syrup and whipped cream.",
          img: "imgs/dessert-ice-cream-sundae.webp",
          price: "250Af",
          ingredients: [
            "Vanilla Ice Cream",
            "Chocolate Syrup",
            "Whipped Cream",
          ],
          review: 4.7,
        },
      ],
    },
    {
      menuName: "Sheryakh & Ice Cream",
      foods: [
        {
          foodName: "Sheryakh",
          description: "Afghan-style milk-based ice cream with pistachios.",
          img: "imgs/sheryakh-ice-cream.webp",
          price: "200Af",
          ingredients: ["Milk", "Pistachio", "Sugar"],
          review: 4.5,
        },
        {
          foodName: "Vanilla Ice Cream",
          description: "Classic vanilla ice cream made with fresh cream.",
          img: "imgs/ice-cream-vanilla.webp",
          price: "150Af",
          ingredients: ["Cream", "Vanilla", "Sugar"],
          review: 4.6,
        },
        {
          foodName: "Chocolate Ice Cream",
          description: "Rich and creamy chocolate ice cream.",
          img: "imgs/ice-cream-chocolate.webp",
          price: "150Af",
          ingredients: ["Cream", "Chocolate", "Sugar"],
          review: 4.7,
        },
        {
          foodName: "Pistachio Ice Cream",
          description: "Ice cream made with pistachio nuts and cream.",
          img: "imgs/ice-cream-pistachio.webp",
          price: "180Af",
          ingredients: ["Pistachio", "Cream", "Sugar"],
          review: 4.8,
        },
      ],
    },
    {
      menuName: "Fruit Platter",
      foods: [
        {
          foodName: "Mixed Fruit Platter",
          description: "A fresh assortment of seasonal fruits.",
          img: "imgs/fruit-platter.webp",
          price: "350Af",
          ingredients: ["Seasonal Fruits"],
          review: 4.7,
        },
        {
          foodName: "Tropical Fruit Platter",
          description:
            "A platter of tropical fruits like pineapple, mango, and papaya.",
          img: "imgs/fruit-platter-tropical.webp",
          price: "400Af",
          ingredients: ["Pineapple", "Mango", "Papaya"],
          review: 4.8,
        },
        {
          foodName: "Berry Fruit Platter",
          description:
            "A refreshing platter of strawberries, blueberries, and raspberries.",
          img: "imgs/fruit-platter-berry.webp",
          price: "380Af",
          ingredients: ["Strawberries", "Blueberries", "Raspberries"],
          review: 4.7,
        },
      ],
    },
  ]);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
