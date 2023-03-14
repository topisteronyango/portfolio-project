import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Irene',
      email: 'admin2@example.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: true,
      isSeller: true,
      seller: {
        name: 'Meze Fresh',
        logo: '/images/logo1.png',
        description: 'best seller',
        rating: 4.5,
        numReviews: 120,
      },
    },
    {
      name: 'John',
      email: 'user@example.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: false,
    },
  ],
  products: [
    {
        
        name: 'Burrito',
        category: 'snacks',
        image: '/images/burrito.jpg',
        price: '3000',
        brand: 'Meze Fresh',
        countInStock: 10,
        rating: 3.5,
        numReview: 20,
        description: 'Very yummy and tastful'
    },
    {
        
        name: 'Quesedilla',
        category: 'snacks',
        image: '/images/quesedilla.jpg',
        price: '4500',
        brand: 'Meze Fresh',
        countInStock: 15,
        rating: 4,
        numReview: 28,
        description: 'Very palatable'
    },
    {
       
        name: 'Potato Fries',
        category: 'lunch',
        image: '/images/fries.jpg',
        price: '2500',
        brand: 'Divine Fast Food',
        countInStock: 11,
        rating: 3,
        numReview: 24,
        description: 'Very yummy and tastful'
    },
    {
        
        name: 'Meat Samosa',
        category: 'snacks',
        image: '/images/Sambusa.jpg',
        price: '400',
        brand: 'Meze Fresh',
        countInStock: 10,
        rating: 4.5,
        numReview: 20,
        description: 'Very yummy and crunchy'
    },
    {
       
        name: 'Banana Bread',
        category: 'additive',
        image: '/images/break.jpg',
        price: '600',
        brand: 'Meze Fresh',
        countInStock: 40,
        rating: 3.5,
        numReview: 60,
        description: 'Very yummy'
    },
    {
        
        name: 'Mango Juice',
        category: 'juice',
        image: '/images/smoothie.jpg',
        price: '2500',
        brand: 'Meze Fresh',
        countInStock: 0,
        rating: 4.0,
        numReview: 80,
        description: 'Very succulent with natural mango flavor'
    },
    {
        
        name: 'Chappati',
        category: 'additive',
        image: '/images/chapati.jpg',
        price: '1500',
        brand: 'Divine Fast Food',
        countInStock: 10,
        rating: 4.5,
        numReview: 80,
        description: 'Very yummy and crunchy, nicely served with your favorite juice'
    },
    {
        
        name: 'Roasted Potatoes',
        category: 'food',
        image: '/images/roasted-potatoes.jpg',
        price: '2500',
        brand: 'Divine Fast Food',
        countInStock: 30,
        rating: 3.4,
        numReview: 50,
        description: 'Very yummy and tastful with garnishings. Comes with protein like chicken'
    },
    {
       
        name: 'Orange Juice',
        category: 'juice',
        image: '/images/orange.jpg',
        price: '2500',
        brand: 'Meze Fresh',
        countInStock: 20,
        rating: 3.7,
        numReview: 60,
        description: 'Very succulent with natural orange flavor'
    },
    {
        
        name: 'Crispy Tacos',
        category: 'food',
        image: '/images/tacos.jpg',
        price: '3500',
        brand: 'Meze Fresh',
        countInStock: 26,
        rating: 4.2,
        numReview: 59,
        description: 'Very delicious, served with your additives & comes with your favorite juice'
    },
    {
        
        name: 'Rice',
        category: 'food',
        image: '/images/rice.jpg',
        price: '3000',
        brand: 'Divine Fast Food',
        countInStock: 22,
        rating: 3.7,
        numReview: 63,
        description: 'Very yummy and delicious with garnishings. Comes with protein like chicken'
    },
    {
        
        name: 'Ugali',
        category: 'food',
        image: '/images/ugali.jpg',
        price: '3000',
        brand: 'Divine Fast Food',
        countInStock: 10,
        rating: 2.9,
        numReview: 69,
        description: 'Very yummy and delicious with garnishings. Comes with protein like chicken and your favorite juice'
    },
    {
        
        name: 'Shawarma',
        category: 'food',
        image: '/images/sharwama.jpg',
        price: '3500',
        brand: 'Divine Fast Food',
        countInStock: 10,
        rating: 3.9,
        numReview: 79,
        description: 'Very yummy and delicious with garnishings. Comes with protein like chicken and your favorite juice'
    },
    {
        
        name: 'Pizza',
        category: 'food',
        image: '/images/pizza.jpg',
        price: '6500',
        brand: 'Meze Fresh',
        countInStock: 14,
        rating: 4.2,
        numReview: 79,
        description: 'Very delicious with different coatings and sizes. Comes with your customization like chicken and your favorite juice'
    },
    {
        
        name: 'Sandwich',
        category: 'additive',
        image: '/images/sandwich.jpg',
        price: '2500',
        brand: 'Meze Fresh, Divine Fast Food',
        countInStock: 18,
        rating: 4.0,
        numReview: 79,
        description: 'Very delicious & Comes with your customization and your favorite juice'
    },
    {
       
        name: 'Soda',
        category: 'juice',
        image: '/images/soda.jpg',
        price: '900',
        brand: 'Meze Fresh, Divine Fast Food',
        countInStock: 88,
        rating: 4.0,
        numReview: 79,
        description: 'Very delicious & Comes with your customization and your favorite juice'
    },

]
};
export default data;
