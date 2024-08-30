const sampleListings = [
    {
        title: "Cozy Beachfront Cottage",
        description: "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views from every room and the soothing sound of waves crashing just steps away. The cottage is fully equipped with modern amenities, yet retains its quaint, rustic charm. Perfect for couples or small families looking to unwind in a serene environment. Nearby, you'll find local seafood restaurants, beachside cafes, and plenty of activities like kayaking, surfing, and sunset cruises.",
        image: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
        price: 1500,
        location: "Malibu",
        country: "United States",
    },
    {
        title: "Modern Loft in Downtown",
        description: "Stay in the heart of the city in this stylish loft apartment. With its high ceilings, exposed brick walls, and large windows offering panoramic city views, this loft is the epitome of urban living. Ideal for young professionals and city explorers, the loft is within walking distance of top restaurants, vibrant nightlife, and cultural attractions. The space includes a fully equipped kitchen, a cozy living area, and a private workspace, making it perfect for both work and leisure stays.",
        image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
        price: 1200,
        location: "New York City",
        country: "United States",
    },
    {
        title: "Mountain Retreat",
        description: "Unplug and unwind in this peaceful mountain cabin. Surrounded by lush forests and towering peaks, this retreat is a nature lover's paradise. Spend your days hiking the nearby trails, fishing in crystal-clear streams, or simply relaxing on the deck with a cup of coffee as you take in the breathtaking views. The cabin offers rustic charm with modern conveniences, including a fully stocked kitchen, a fireplace, and a hot tub for evening stargazing. Perfect for a secluded getaway.",
        image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
        price: 1000,
        location: "Aspen",
        country: "United States",
    },
    {
        title: "Historic Villa in Tuscany",
        description: "Experience the charm of Tuscany in this beautifully restored villa. Nestled in the rolling hills of the Tuscan countryside, this villa offers a blend of old-world charm and modern luxury. Explore nearby vineyards and olive groves, visit historic towns, and enjoy the finest local cuisine. The villa features spacious rooms, a private pool, and stunning views of the surrounding landscape. It's the perfect base for a romantic getaway or a family vacation steeped in history and culture.",
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
        price: 2500,
        location: "Florence",
        country: "Italy",
    },
    {
        title: "Secluded Treehouse Getaway",
        description: "Live among the treetops in this unique treehouse retreat. This secluded escape offers a perfect blend of adventure and tranquility, surrounded by lush greenery and the sounds of nature. Ideal for couples or solo travelers looking for a unique experience, the treehouse includes a cozy sleeping area, a small kitchenette, and an outdoor deck for dining and relaxation. Explore nearby hiking trails, or simply enjoy the serenity of being disconnected from the hustle and bustle of everyday life.",
        image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
        price: 800,
        location: "Portland",
        country: "United States",
    },
    {
        title: "Beachfront Paradise",
        description: "Step out of your door onto the sandy beach in this luxurious beachfront condo. Perfect for sunseekers and water lovers, this property offers direct access to the ocean and all the amenities you need for a comfortable stay. Relax on the spacious balcony, take a dip in the private pool, or stroll along the shore at sunset. The condo is fully furnished with modern decor, a well-equipped kitchen, and a cozy living area, making it an ideal choice for families or groups of friends looking to unwind in style.",
        image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
        price: 2000,
        location: "Cancun",
        country: "Mexico",
    },
    {
        title: "Rustic Cabin by the Lake",
        description: "Spend your days fishing and kayaking on the serene lake, or simply relaxing by the fire in this cozy lakeside cabin. This property offers the perfect balance of outdoor adventure and indoor comfort, with a private dock, a fully equipped kitchen, and a wood-burning fireplace. Whether you're looking to escape the city for a weekend or planning a longer stay, this cabin provides a peaceful retreat surrounded by nature. Ideal for families, couples, or solo travelers seeking a quiet getaway.",
        image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
        price: 900,
        location: "Lake Tahoe",
        country: "United States",
    },
    {
        title: "Luxury Penthouse with City Views",
        description: "Indulge in luxury living with panoramic city views from this stunning penthouse apartment. Located in the heart of downtown, this penthouse offers high-end amenities, including a rooftop terrace, a gourmet kitchen, and a spacious living area with floor-to-ceiling windows. Perfect for entertaining or simply enjoying the skyline, this property is ideal for those seeking a sophisticated urban experience. Enjoy close proximity to top dining, shopping, and cultural attractions, making it an ideal base for exploring the city.",
        image: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
        price: 3500,
        location: "Los Angeles",
        country: "United States",
    },
    {
        title: "Ski-In/Ski-Out Chalet",
        description: "Hit the slopes right from your doorstep in this ski-in/ski-out chalet in the Swiss Alps. Designed for the ultimate ski vacation, this chalet offers direct access to the slopes, a private hot tub, and a cozy fireplace for warming up after a day on the mountain. The chalet is beautifully furnished with a blend of traditional Alpine charm and modern comfort, making it a perfect retreat for families, couples, or groups of friends. Enjoy breathtaking views, world-class skiing, and après-ski activities just steps away.",
        image: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
        price: 4000,
        location: "Zermatt",
        country: "Switzerland",
    },
    {
        title: "Desert Oasis Retreat",
        description: "Experience the magic of the desert in this secluded oasis retreat. Surrounded by vast desert landscapes and star-filled skies, this retreat offers a unique blend of luxury and tranquility. The property features a private pool, outdoor fire pit, and spacious indoor living areas with floor-to-ceiling windows that bring the beauty of the desert inside. Perfect for a romantic getaway or a peaceful solo retreat, this oasis provides the perfect escape from the hustle and bustle of daily life.",
        image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGRlc2VydCUyMGxhbmRzY2FwZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
        price: 2200,
        location: "Palm Springs",
        country: "United States",
    },
];

  module.exports = { data: sampleListings };


//images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60