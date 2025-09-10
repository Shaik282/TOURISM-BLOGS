// Declare a constant variable 'blogs' which is an array of blog post objects
const blogs = [
  {
    // First blog post object with title, image, and description
    title: "Exploring the Beauty of Kashmir",
    image:"Jammu-kashmir.jpeg",
    description: "Kashmir is known for its breathtaking scenery, snow-covered mountains, and vibrant culture. Often referred to as 'Paradise on Earth', it offers stunning landscapes filled with lush valleys, serene lakes like Dal Lake, and picturesque gardens such as Shalimar Bagh. The region’s rich cultural heritage is reflected in its traditional handicrafts, warm hospitality, and delicious cuisine like Rogan Josh and Kahwa tea. Whether you’re exploring the beauty of Gulmarg, enjoying a shikara ride in Srinagar, or witnessing the colorful festivals, Kashmir promises an unforgettable travel experience."
  },
  {
    // Second blog post object
    title: "Discovering Goa's Beaches",
    image: "Goa.jpeg",
    description: "Goa is famous for its beautiful beaches, vibrant nightlife, and Portuguese heritage.Stretching along the Arabian Sea, its golden sands and palm-lined shores attract visitors from around the world. From the lively beach parties of Baga and Anjuna to the peaceful charm of Palolem, Goa offers a beach for every mood. The region’s rich history is reflected in its colonial architecture, ancient churches, and colorful festivals. Goa is also known for its spicy seafood, flea markets, water sports, and relaxed coastal vibe, making it a perfect destination for both adventure and relaxation."
  },
  {
    // Third blog post object
    title: "Adventure in Himachal Pradesh",
    image: "Himachal-Pradesh.jpg",
    description: "Himachal Pradesh offers thrilling adventure sports, snowy peaks, and peaceful valleys.It's a haven for nature lovers and adrenaline seekers alike, with activities like trekking, paragliding, skiing, and river rafting. Picturesque hill stations such as Manali, Shimla, and Dharamshala offer stunning landscapes, colonial charm, and vibrant local culture. The region’s rich heritage, ancient temples, and Tibetan monasteries add a spiritual touch, while the cool mountain air and scenic beauty make it a perfect retreat from city life."
  },
  {
    // Fourth blog post object
    title: "Wandering Through Kerala’s Tranquil Waters",
    image: "Kerala-2048x1152.jpg",
    description: "Kerala, often called \"God\’s Own Country,\" is a paradise nestled along the southwestern coast of India. Known for its lush green landscapes, tranquil backwaters, pristine beaches, and rich cultural heritage, Kerala offers a unique blend of natural beauty and traditional charm. Tourists can glide through serene backwaters on houseboats in Alleppey, explore the tea-covered hills of Munnar, and enjoy the vibrant festivals and classical art forms like Kathakali and Mohiniyattam."
  },
];

// Get the DOM element with ID 'blog-container' where all blog posts will be inserted
const container = document.getElementById("blog-container");

// Loop through each blog object in the 'blogs' array
blogs.forEach(blog => {
  // Create a new <div> element for the current blog post
  const post = document.createElement("div");

  // Add the class 'blog-post' to the <div> for CSS styling
  post.className = "blog-post";

  // Use a template literal to set the inner HTML of the post, including image, title, and description
  post.innerHTML = `
    <img src="${blog.image}" alt="${blog.title}">
    <h2>${blog.title}</h2>
    <p>${blog.description}</p>
  `;

  // Append the post <div> to the main container element so it appears on the page
  container.appendChild(post);
});
