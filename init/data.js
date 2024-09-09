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

    //new Data

    {
        "title": "Ski-In/Ski-Out Chalet",
        "description": "Hit the slopes right from your doorstep in this ski-in/ski-out chalet in the Swiss Alps. Designed for the ultimate ski vacation, this chalet offers direct access to the slopes, a private hot tub, and a cozy fireplace for warming up after a day on the mountain. The chalet is beautifully furnished with a blend of traditional Alpine charm and modern comfort, making it a perfect retreat for families, couples, or groups of friends. Enjoy breathtaking views, world-class skiing, and après-ski activities just steps away.",
        "image": "https://res.cloudinary.com/dcs7eq5kf/image/upload/q_auto,f_auto,w_600,h_400/v1725229549/hotel15_tnxany.jpg",
        "price": 4000,
        "location": "Zermatt",
        "country": "Switzerland"
    },
    {
        "title": "Luxury Tent in Ladakh",
        "description": "Experience a blend of luxury and adventure in this tented accommodation in Ladakh. Enjoy the stunning landscapes and a comfortable stay with high-end amenities in the heart of the Himalayas.",
        "image": "https://res.cloudinary.com/dcs7eq5kf/image/upload/q_auto,f_auto,w_600,h_400/v1725229541/hotel13_u1iazx.jpg",
        "price": 4000,
        "location": "Ladakh",
        "country": "India"
    },
    {
        "title": "Historic Fort in Rajasthan",
        "description": "Stay in a historic fort in Rajasthan, where traditional architecture and modern comforts meet. Enjoy unique views, luxurious interiors, and a taste of royal heritage.",
        "image": "https://res.cloudinary.com/dcs7eq5kf/image/upload/q_auto,f_auto,w_600,h_400/v1725229539/hotel10_opajhb.jpg",
        "price": 8500,
        "location": "Rajasthan",
        "country": "India"
    },
    {
        "title": "Modern Studio in Gujarat",
        "description": "Stay in a sleek and modern studio in Gujarat, offering stylish decor and all the amenities needed for a comfortable stay. Perfect for exploring the city and enjoying local attractions.",
        "image": "https://res.cloudinary.com/dcs7eq5kf/image/upload/q_auto,f_auto,w_600,h_400/v1725229538/hotel7_hl3ikq.jpg",
        "price": 3100,
        "location": "Gujarat",
        "country": "India"
    },
    {
        "title": "Luxury Apartment in Mumbai",
        "description": "Enjoy a luxurious stay in this modern apartment in Mumbai, featuring upscale amenities and a prime location. Perfect for those seeking a high-end experience in the heart of the city.",
        "image": "https://res.cloudinary.com/dcs7eq5kf/image/upload/q_auto,f_auto,w_600,h_400/v1725229537/hotel14_udlplf.jpg",
        "price": 6200,
        "location": "Mumbai",
        "country": "India"
    },
    {
        "title": "Charming Guesthouse in Delhi",
        "description": "Stay in a charming guesthouse in Delhi with a homely atmosphere, comfortable rooms, and a welcoming host. Ideal for a cozy and personalized experience in the capital city.",
        "image": "https://res.cloudinary.com/dcs7eq5kf/image/upload/q_auto,f_auto,w_600,h_400/v1725229537/hotel12_mirl5u.jpg",
        "price": 3500,
        "location": "Delhi",
        "country": "India"
    },
    {
        "title": "Rustic Lodge in Shimla",
        "description": "This rustic lodge in Shimla offers a warm and inviting atmosphere with traditional decor and beautiful views. Perfect for those seeking a peaceful retreat in the mountains.",
        "image": "https://res.cloudinary.com/dcs7eq5kf/image/upload/q_auto,f_auto,w_600,h_400/v1725229536/hotel5_tdoajs.jpg",
        "price": 3300,
        "location": "Shimla",
        "country": "India"
    },
    {
        "title": "Elegant Resort in Kolkata",
        "description": "Experience elegance and comfort in this upscale resort in Kolkata. With luxurious rooms, fine dining, and top-notch amenities, it's ideal for a relaxing stay in the city.",
        "image": "https://res.cloudinary.com/dcs7eq5kf/image/upload/q_auto,f_auto,w_600,h_400/v1725229536/hotel8_g8b9w7.jpg",
        "price": 7000,
        "location": "Kolkata",
        "country": "India"
    },
    {
        "title": "Stylish Home in Bengaluru",
        "description": "This stylish home in Bengaluru offers modern decor, comfortable living, and a great location for exploring the city. Perfect for those looking for a contemporary stay with easy access to local attractions.",
        "image": "https://res.cloudinary.com/dcs7eq5kf/image/upload/q_auto,f_auto,w_600,h_400/v1725229536/hotel11_jwfytf.jpg",
        "price": 4200,
        "location": "Bengaluru",
        "country": "India"
    },
    {
        "title": "Beachfront Villa in Goa",
        "description": "Enjoy stunning ocean views from this beachfront villa in Goa. With direct access to the beach, luxurious amenities, and a relaxed atmosphere, it's perfect for a coastal getaway.",
        "image": "https://res.cloudinary.com/dcs7eq5kf/image/upload/q_auto,f_auto,w_600,h_400/v1725229536/hotel9_bwhajw.jpg",
        "price": 6000,
        "location": "Goa",
        "country": "India"
    },
    {
        "title": "Deluxe Camp in Ladakh",
        "description": "Experience a deluxe camping experience in Ladakh with top-notch amenities and stunning natural beauty. Perfect for adventurers seeking comfort amidst the mountains.",
        "image": "https://res.cloudinary.com/dcs7eq5kf/image/upload/q_auto,f_auto,w_600,h_400/v1725229535/hotel1_exmjfi.jpg",
        "price": 4200,
        "location": "Ladakh",
        "country": "India"
    },
    {
        "title": "Traditional Haveli in Rajasthan",
        "description": "Immerse yourself in traditional Rajasthani culture by staying in a beautifully preserved haveli. Experience authentic architecture, local cuisine, and rich heritage.",
        "image": "https://res.cloudinary.com/dcs7eq5kf/image/upload/q_auto,f_auto,w_600,h_400/v1725229535/hotel3_w2nhes.jpg",
        "price": 3700,
        "location": "Rajasthan",
        "country": "India"
    },
    {
        "title": "Upscale Studio in Gujarat",
        "description": "Stay in a chic and upscale studio in Gujarat, featuring modern design and all the essentials for a comfortable stay. Perfect for both business and leisure travelers.",
        "image": "https://res.cloudinary.com/dcs7eq5kf/image/upload/q_auto,f_auto,w_600,h_400/v1725229535/hotel2_zmnzip.jpg",
        "price": 3300,
        "location": "Gujarat",
        "country": "India"
    },
    {
        "title": "Charming Cottage in Shimla",
        "description": "Enjoy a cozy stay in this charming cottage in Shimla, complete with picturesque views and a relaxing atmosphere. Ideal for a tranquil escape in the hills.",
        "image": "https://res.cloudinary.com/dcs7eq5kf/image/upload/q_auto,f_auto,w_600,h_400/v1725229549/hotel15_tnxany.jpg",
        "price": 3000,
        "location": "Shimla",
        "country": "India"
    },
    {
        "title": "Elegant Penthouse in Mumbai",
        "description": "This elegant penthouse in Mumbai offers stunning city views, luxury amenities, and a prime location. Perfect for those looking for a high-end stay in the bustling city.",
        "image": "https://res.cloudinary.com/dcs7eq5kf/image/upload/q_auto,f_auto,w_600,h_400/v1725229541/hotel13_u1iazx.jpg",
        "price": 7500,
        "location": "Mumbai",
        "country": "India"
    },
    {
        "title": "Luxury Suite in Delhi",
        "description": "Stay in a luxurious suite in Delhi with top-notch amenities and elegant decor. Ideal for those seeking a high-end experience in the capital city.",
        "image": "https://res.cloudinary.com/dcs7eq5kf/image/upload/q_auto,f_auto,w_600,h_400/v1725229538/hotel7_hl3ikq.jpg",
        "price": 5500,
        "location": "Delhi",
        "country": "India"
    },
    {
        "title": "Modern Villa in Goa",
        "description": "This modern villa in Goa offers stylish decor, a private pool, and easy access to the beach. Perfect for a relaxing stay with luxury and comfort.",
        "image": "https://res.cloudinary.com/dcs7eq5kf/image/upload/q_auto,f_auto,w_600,h_400/v1725229537/hotel14_udlplf.jpg",
        "price": 7000,
        "location": "Goa",
        "country": "India"
    },
    {
        "title": "Classic Guesthouse in Kolkata",
        "description": "Enjoy a classic stay in this charming guesthouse in Kolkata, featuring traditional decor and modern comforts. Ideal for exploring the city in style.",
        "image": "https://res.cloudinary.com/dcs7eq5kf/image/upload/q_auto,f_auto,w_600,h_400/v1725229536/hotel5_tdoajs.jpg",
        "price": 3800,
        "location": "Kolkata",
        "country": "India"
    }
    ,
        {
            "title": "Ski-In/Ski-Out Chalet",
            "description": "Hit the slopes right from your doorstep in this ski-in/ski-out chalet in the Swiss Alps. Designed for the ultimate ski vacation, this chalet offers direct access to the slopes, a private hot tub, and a cozy fireplace for warming up after a day on the mountain. The chalet is beautifully furnished with a blend of traditional Alpine charm and modern comfort, making it a perfect retreat for families, couples, or groups of friends. Enjoy breathtaking views, world-class skiing, and après-ski activities just steps away.",
            "image": "https://res.cloudinary.com/dcs7eq5kf/image/upload/q_auto,f_auto,w_600,h_400/v1725229549/hotel15_tnxany.jpg",
            "price": 4000,
            "location": "Zermatt",
            "country": "Switzerland"
        },
        {
            "title": "Luxury Tent in Ladakh",
            "description": "Experience a blend of luxury and adventure in this tented accommodation in Ladakh. Enjoy the stunning landscapes and a comfortable stay with high-end amenities in the heart of the Himalayas.",
            "image": "https://res.cloudinary.com/dcs7eq5kf/image/upload/q_auto,f_auto,w_600,h_400/v1725229541/hotel13_u1iazx.jpg",
            "price": 4000,
            "location": "Ladakh",
            "country": "India"
        },
        {
            "title": "Historic Fort in Rajasthan",
            "description": "Stay in a historic fort in Rajasthan, where traditional architecture and modern comforts meet. Enjoy unique views, luxurious interiors, and a taste of royal heritage.",
            "image": "https://res.cloudinary.com/dcs7eq5kf/image/upload/q_auto,f_auto,w_600,h_400/v1725229539/hotel10_opajhb.jpg",
            "price": 8500,
            "location": "Rajasthan",
            "country": "India"
        },
        {
            "title": "Modern Studio in Gujarat",
            "description": "Stay in a sleek and modern studio in Gujarat, offering stylish decor and all the amenities needed for a comfortable stay. Perfect for exploring the city and enjoying local attractions.",
            "image": "https://res.cloudinary.com/dcs7eq5kf/image/upload/q_auto,f_auto,w_600,h_400/v1725229538/hotel7_hl3ikq.jpg",
            "price": 3100,
            "location": "Gujarat",
            "country": "India"
        },
        {
            "title": "Luxury Apartment in Mumbai",
            "description": "Enjoy a luxurious stay in this modern apartment in Mumbai, featuring upscale amenities and a prime location. Perfect for those seeking a high-end experience in the heart of the city.",
            "image": "https://res.cloudinary.com/dcs7eq5kf/image/upload/q_auto,f_auto,w_600,h_400/v1725229537/hotel14_udlplf.jpg",
            "price": 6200,
            "location": "Mumbai",
            "country": "India"
        },
        {
            "title": "Charming Guesthouse in Delhi",
            "description": "Stay in a charming guesthouse in Delhi with a homely atmosphere, comfortable rooms, and a welcoming host. Ideal for a cozy and personalized experience in the capital city.",
            "image": "https://res.cloudinary.com/dcs7eq5kf/image/upload/q_auto,f_auto,w_600,h_400/v1725229537/hotel12_mirl5u.jpg",
            "price": 3500,
            "location": "Delhi",
            "country": "India"
        },
        {
            "title": "Rustic Lodge in Shimla",
            "description": "This rustic lodge in Shimla offers a warm and inviting atmosphere with traditional decor and beautiful views. Perfect for those seeking a peaceful retreat in the mountains.",
            "image": "https://res.cloudinary.com/dcs7eq5kf/image/upload/q_auto,f_auto,w_600,h_400/v1725229536/hotel5_tdoajs.jpg",
            "price": 3300,
            "location": "Shimla",
            "country": "India"
        },
        {
            "title": "Elegant Resort in Kolkata",
            "description": "Experience elegance and comfort in this upscale resort in Kolkata. With luxurious rooms, fine dining, and top-notch amenities, it's ideal for a relaxing stay in the city.",
            "image": "https://res.cloudinary.com/dcs7eq5kf/image/upload/q_auto,f_auto,w_600,h_400/v1725229536/hotel8_g8b9w7.jpg",
            "price": 7000,
            "location": "Kolkata",
            "country": "India"
        },
        {
            "title": "Stylish Home in Bengaluru",
            "description": "This stylish home in Bengaluru offers modern decor, comfortable living, and a great location for exploring the city. Perfect for those looking for a contemporary stay with easy access to local attractions.",
            "image": "https://res.cloudinary.com/dcs7eq5kf/image/upload/q_auto,f_auto,w_600,h_400/v1725229536/hotel11_jwfytf.jpg",
            "price": 4200,
            "location": "Bengaluru",
            "country": "India"
        },
        {
            "title": "Beachfront Villa in Goa",
            "description": "Enjoy stunning ocean views from this beachfront villa in Goa. With direct access to the beach, luxurious amenities, and a relaxed atmosphere, it's perfect for a coastal getaway.",
            "image": "https://res.cloudinary.com/dcs7eq5kf/image/upload/q_auto,f_auto,w_600,h_400/v1725229536/hotel9_bwhajw.jpg",
            "price": 6000,
            "location": "Goa",
            "country": "India"
        },
        {
            "title": "Deluxe Camp in Ladakh",
            "description": "Experience a deluxe camping experience in Ladakh with top-notch amenities and stunning natural beauty. Perfect for adventurers seeking comfort amidst the mountains.",
            "image": "https://res.cloudinary.com/dcs7eq5kf/image/upload/q_auto,f_auto,w_600,h_400/v1725229535/hotel1_exmjfi.jpg",
            "price": 4200,
            "location": "Ladakh",
            "country": "India"
        },
        {
            "title": "Traditional Haveli in Rajasthan",
            "description": "Immerse yourself in traditional Rajasthani culture by staying in a beautifully preserved haveli. Experience authentic architecture, local cuisine, and rich heritage.",
            "image": "https://res.cloudinary.com/dcs7eq5kf/image/upload/q_auto,f_auto,w_600,h_400/v1725229535/hotel3_w2nhes.jpg",
            "price": 3700,
            "location": "Rajasthan",
            "country": "India"
        },
        {
            "title": "Upscale Studio in Gujarat",
            "description": "Stay in a chic and upscale studio in Gujarat, featuring modern design and all the essentials for a comfortable stay. Perfect for both business and leisure travelers.",
            "image": "https://res.cloudinary.com/dcs7eq5kf/image/upload/q_auto,f_auto,w_600,h_400/v1725229535/hotel2_zmnzip.jpg",
            "price": 3300,
            "location": "Gujarat",
            "country": "India"
        },
        {
            "title": "Charming Cottage in Shimla",
            "description": "Enjoy a cozy stay in this charming cottage in Shimla, complete with picturesque views and a relaxing atmosphere. Ideal for a tranquil escape in the hills.",
            "image": "https://res.cloudinary.com/dcs7eq5kf/image/upload/q_auto,f_auto,w_600,h_400/v1725229549/hotel15_tnxany.jpg",
            "price": 3000,
            "location": "Shimla",
            "country": "India"
        },
        {
            "title": "Elegant Penthouse in Mumbai",
            "description": "This elegant penthouse in Mumbai offers stunning city views, luxury amenities, and a prime location. Perfect for those looking for a high-end stay in the bustling city.",
            "image": "https://res.cloudinary.com/dcs7eq5kf/image/upload/q_auto,f_auto,w_600,h_400/v1725229541/hotel13_u1iazx.jpg",
            "price": 7500,
            "location": "Mumbai",
            "country": "India"
        },
        {
            "title": "Luxury Suite in Delhi",
            "description": "Stay in a luxurious suite in Delhi with top-notch amenities and elegant decor. Ideal for those seeking a high-end experience in the capital city.",
            "image": "https://res.cloudinary.com/dcs7eq5kf/image/upload/q_auto,f_auto,w_600,h_400/v1725229538/hotel7_hl3ikq.jpg",
            "price": 5500,
            "location": "Delhi",
            "country": "India"
        },
        {
            "title": "Modern Villa in Goa",
            "description": "This modern villa in Goa offers stylish decor, a private pool, and easy access to the beach. Perfect for a relaxing stay with luxury and comfort.",
            "image": "https://res.cloudinary.com/dcs7eq5kf/image/upload/q_auto,f_auto,w_600,h_400/v1725229537/hotel14_udlplf.jpg",
            "price": 7000,
            "location": "Goa",
            "country": "India"
        },
        {
            "title": "Classic Guesthouse in Kolkata",
            "description": "Enjoy a classic stay in this charming guesthouse in Kolkata, featuring traditional decor and modern comforts. Ideal for exploring the city in style.",
            "image": "https://res.cloudinary.com/dcs7eq5kf/image/upload/q_auto,f_auto,w_600,h_400/v1725229537/hotel12_mirl5u.jpg",
            "price": 3400,
            "location": "Kolkata",
            "country": "India"
        },
        {
            "title": "Mountain Lodge in Ladakh",
            "description": "Stay in a cozy mountain lodge in Ladakh, offering stunning views and comfortable amenities. Perfect for a peaceful retreat amidst the Himalayas.",
            "image": "https://res.cloudinary.com/dcs7eq5kf/image/upload/q_auto,f_auto,w_600,h_400/v1725229536/hotel5_tdoajs.jpg",
            "price": 3900,
            "location": "Ladakh",
            "country": "India"
        },
        {
            "title": "Chic Loft in Bengaluru",
            "description": "This chic loft in Bengaluru offers contemporary design and all the amenities needed for a comfortable stay. Ideal for those seeking a stylish city experience.",
            "image": "https://res.cloudinary.com/dcs7eq5kf/image/upload/q_auto,f_auto,w_600,h_400/v1725229536/hotel8_g8b9w7.jpg",
            "price": 4200,
            "location": "Bengaluru",
            "country": "India"
        },
        {
            "title": "Heritage House in Rajasthan",
            "description": "Stay in a beautifully restored heritage house in Rajasthan, blending traditional charm with modern amenities. Experience the cultural richness of the region.",
            "image": "https://res.cloudinary.com/dcs7eq5kf/image/upload/q_auto,f_auto,w_600,h_400/v1725229536/hotel11_jwfytf.jpg",
            "price": 3800,
            "location": "Rajasthan",
            "country": "India"
        },
        {
            "title": "Spacious Apartment in Gujarat",
            "description": "This spacious apartment in Gujarat features modern decor and comfortable living spaces. Perfect for families or groups looking for a relaxing stay.",
            "image": "https://res.cloudinary.com/dcs7eq5kf/image/upload/q_auto,f_auto,w_600,h_400/v1725229536/hotel9_bwhajw.jpg",
            "price": 3500,
            "location": "Gujarat",
            "country": "India"
        },
        {
            "title": "Cozy Cabin in Shimla",
            "description": "Enjoy a cozy cabin experience in Shimla, complete with rustic charm and beautiful mountain views. Ideal for a relaxing getaway in nature.",
            "image": "https://res.cloudinary.com/dcs7eq5kf/image/upload/q_auto,f_auto,w_600,h_400/v1725229535/hotel1_exmjfi.jpg",
            "price": 3200,
            "location": "Shimla",
            "country": "India"
        },
        {
            "title": "Luxury Resort in Goa",
            "description": "This luxury resort in Goa offers upscale amenities, stunning beach views, and a relaxing atmosphere. Perfect for a high-end coastal vacation.",
            "image": "https://res.cloudinary.com/dcs7eq5kf/image/upload/q_auto,f_auto,w_600,h_400/v1725229535/hotel3_w2nhes.jpg",
            "price": 7000,
            "location": "Goa",
            "country": "India"
        },
        {
            "title": "Elegant Room in Delhi",
            "description": "Experience elegance and comfort in this beautifully decorated room in Delhi. Ideal for travelers seeking a sophisticated stay in the capital city.",
            "image": "https://res.cloudinary.com/dcs7eq5kf/image/upload/q_auto,f_auto,w_600,h_400/v1725229535/hotel2_zmnzip.jpg",
            "price": 3600,
            "location": "Delhi",
            "country": "India"
        },
        {
            "title": "Luxurious Suite in Mumbai",
            "description": "Stay in a luxurious suite in Mumbai, featuring modern amenities and stunning city views. Perfect for a high-end urban experience.",
            "image": "https://res.cloudinary.com/dcs7eq5kf/image/upload/q_auto,f_auto,w_600,h_400/v1725229535/hotel4_k3yzdr.jpg",
            "price": 7500,
            "location": "Mumbai",
            "country": "India"
        },
        {
            "title": "Contemporary Villa in Bengaluru",
            "description": "This contemporary villa in Bengaluru offers modern design, luxury amenities, and a prime location. Ideal for those seeking a stylish and comfortable stay.",
            "image": "https://res.cloudinary.com/dcs7eq5kf/image/upload/q_auto,f_auto,w_600,h_400/v1725229549/hotel15_tnxany.jpg",
            "price": 4800,
            "location": "Bengaluru",
            "country": "India"
        },
        {
            "title": "Charming Retreat in Ladakh",
            "description": "Enjoy a charming retreat in Ladakh, featuring cozy accommodations and breathtaking views. Perfect for a serene escape amidst the mountains.",
            "image": "https://res.cloudinary.com/dcs7eq5kf/image/upload/q_auto,f_auto,w_600,h_400/v1725229541/hotel13_u1iazx.jpg",
            "price": 4000,
            "location": "Ladakh",
            "country": "India"
        },
        {
            "title": "Historic Mansion in Rajasthan",
            "description": "Stay in a historic mansion in Rajasthan, offering a blend of traditional elegance and modern comforts. Ideal for those interested in cultural heritage.",
            "image": "https://res.cloudinary.com/dcs7eq5kf/image/upload/q_auto,f_auto,w_600,h_400/v1725229539/hotel10_opajhb.jpg",
            "price": 5000,
            "location": "Rajasthan",
            "country": "India"
        },
        {
            "title": "Modern Loft in Mumbai",
            "description": "Experience modern luxury in this stylish loft in Mumbai. With contemporary decor and a great location, it's perfect for both business and leisure.",
            "image": "https://res.cloudinary.com/dcs7eq5kf/image/upload/q_auto,f_auto,w_600,h_400/v1725229538/hotel7_hl3ikq.jpg",
            "price": 6500,
            "location": "Mumbai",
            "country": "India"
        },
        {
            "title": "Luxury Cabin in Shimla",
            "description": "This luxury cabin in Shimla offers comfort and style with beautiful views and upscale amenities. Ideal for a high-end mountain getaway.",
            "image": "https://res.cloudinary.com/dcs7eq5kf/image/upload/q_auto,f_auto,w_600,h_400/v1725229537/hotel14_udlplf.jpg",
            "price": 3500,
            "location": "Shimla",
            "country": "India"
        },
        {
            "title": "Upscale Guesthouse in Kolkata",
            "description": "Enjoy an upscale experience in this guesthouse in Kolkata, featuring elegant decor and modern amenities. Perfect for a sophisticated stay in the city.",
            "image": "https://res.cloudinary.com/dcs7eq5kf/image/upload/q_auto,f_auto,w_600,h_400/v1725229537/hotel12_mirl5u.jpg",
            "price": 3700,
            "location": "Kolkata",
            "country": "India"
        },
        {
            "title": "Stylish Apartment in Bengaluru",
            "description": "Stay in a stylish apartment in Bengaluru, offering modern design and comfortable living spaces. Ideal for a contemporary city experience.",
            "image": "https://res.cloudinary.com/dcs7eq5kf/image/upload/q_auto,f_auto,w_600,h_400/v1725229536/hotel5_tdoajs.jpg",
            "price": 4200,
            "location": "Bengaluru",
            "country": "India"
        },
        {
            "title": "Cozy Suite in Delhi",
            "description": "This cozy suite in Delhi features modern comforts and a welcoming atmosphere. Ideal for travelers seeking a comfortable stay in the capital city.",
            "image": "https://res.cloudinary.com/dcs7eq5kf/image/upload/q_auto,f_auto,w_600,h_400/v1725229536/hotel8_g8b9w7.jpg",
            "price": 3500,
            "location": "Delhi",
            "country": "India"
        },
        {
            "title": "Beachfront Cottage in Goa",
            "description": "Enjoy a beachfront cottage in Goa, offering direct access to the sand and sea with cozy accommodations. Perfect for a relaxing coastal escape.",
            "image": "https://res.cloudinary.com/dcs7eq5kf/image/upload/q_auto,f_auto,w_600,h_400/v1725229536/hotel11_jwfytf.jpg",
            "price": 5500,
            "location": "Goa",
            "country": "India"
        },
        {
            "title": "Elegant Lodge in Ladakh",
            "description": "This elegant lodge in Ladakh offers a blend of luxury and natural beauty. Enjoy a comfortable stay with breathtaking mountain views.",
            "image": "https://res.cloudinary.com/dcs7eq5kf/image/upload/q_auto,f_auto,w_600,h_400/v1725229536/hotel9_bwhajw.jpg",
            "price": 4000,
            "location": "Ladakh",
            "country": "India"
        }
    ,
    {
        "title": "Serene Retreat in Pune",
        "description": "Relax in a serene retreat in Pune, offering modern amenities and peaceful surroundings. Perfect for a relaxing escape from the city.",
        "image": "https://res.cloudinary.com/dcs7eq5kf/image/upload/q_auto,f_auto,w_600,h_400/v1725229549/hotel15_tnxany.jpg",
        "price": 3400,
        "location": "Pune",
        "country": "India"
    },
    {
        "title": "Urban Loft in Hyderabad",
        "description": "Stay in a contemporary urban loft in Hyderabad, featuring stylish design and convenient amenities. Ideal for a modern city experience.",
        "image": "https://res.cloudinary.com/dcs7eq5kf/image/upload/q_auto,f_auto,w_600,h_400/v1725229541/hotel13_u1iazx.jpg",
        "price": 3600,
        "location": "Hyderabad",
        "country": "India"
    },
    {
        "title": "Comfortable Stay in Chennai",
        "description": "Enjoy a comfortable stay in Chennai with easy access to city attractions and modern amenities. Perfect for both leisure and business travelers.",
        "image": "https://res.cloudinary.com/dcs7eq5kf/image/upload/q_auto,f_auto,w_600,h_400/v1725229539/hotel10_opajhb.jpg",
        "price": 3300,
        "location": "Chennai",
        "country": "India"
    },
    {
        "title": "Rustic Cabin in Darjeeling",
        "description": "Experience the charm of a rustic cabin in Darjeeling, with beautiful mountain views and cozy accommodations. Ideal for a peaceful getaway.",
        "image": "https://res.cloudinary.com/dcs7eq5kf/image/upload/q_auto,f_auto,w_600,h_400/v1725229538/hotel7_hl3ikq.jpg",
        "price": 3100,
        "location": "Darjeeling",
        "country": "India"
    },
    {
        "title": "Modern Apartment in Noida",
        "description": "This modern apartment in Noida offers stylish decor and comfortable living spaces. Perfect for a relaxing stay near the capital.",
        "image": "https://res.cloudinary.com/dcs7eq5kf/image/upload/q_auto,f_auto,w_600,h_400/v1725229537/hotel14_udlplf.jpg",
        "price": 3400,
        "location": "Noida",
        "country": "India"
    },
    {
        "title": "Luxury Suite in Ahmedabad",
        "description": "Stay in a luxurious suite in Ahmedabad with upscale amenities and elegant decor. Ideal for a high-end city experience.",
        "image": "https://res.cloudinary.com/dcs7eq5kf/image/upload/q_auto,f_auto,w_600,h_400/v1725229537/hotel12_mirl5u.jpg",
        "price": 4000,
        "location": "Ahmedabad",
        "country": "India"
    },
    {
        "title": "Charming House in Chandigarh",
        "description": "Experience the charm of a cozy house in Chandigarh, featuring modern comforts and beautiful surroundings. Ideal for a relaxing stay.",
        "image": "https://res.cloudinary.com/dcs7eq5kf/image/upload/q_auto,f_auto,w_600,h_400/v1725229536/hotel5_tdoajs.jpg",
        "price": 3200,
        "location": "Chandigarh",
        "country": "India"
    },
    {
        "title": "Elegant Room in Surat",
        "description": "Enjoy an elegant stay in Surat with comfortable accommodations and a stylish atmosphere. Perfect for business or leisure travelers.",
        "image": "https://res.cloudinary.com/dcs7eq5kf/image/upload/q_auto,f_auto,w_600,h_400/v1725229536/hotel8_g8b9w7.jpg",
        "price": 3500,
        "location": "Surat",
        "country": "India"
    },
    {
        "title": "Cozy Villa in Coimbatore",
        "description": "This cozy villa in Coimbatore offers a blend of comfort and style with beautiful decor and modern amenities. Ideal for a peaceful stay.",
        "image": "https://res.cloudinary.com/dcs7eq5kf/image/upload/q_auto,f_auto,w_600,h_400/v1725229536/hotel11_jwfytf.jpg",
        "price": 3300,
        "location": "Coimbatore",
        "country": "India"
    },
    {
        "title": "Modern Stay in Indore",
        "description": "Experience a modern stay in Indore with stylish decor and convenient amenities. Perfect for travelers looking for comfort and relaxation.",
        "image": "https://res.cloudinary.com/dcs7eq5kf/image/upload/q_auto,f_auto,w_600,h_400/v1725229536/hotel9_bwhajw.jpg",
        "price": 3200,
        "location": "Indore",
        "country": "India"
    },
    {
        "title": "Chic Loft in Dehradun",
        "description": "This chic loft in Dehradun offers contemporary design and all the amenities needed for a stylish stay. Ideal for a modern getaway.",
        "image": "https://res.cloudinary.com/dcs7eq5kf/image/upload/q_auto,f_auto,w_600,h_400/v1725229536/hotel6_ylxwvn.jpg",
        "price": 3400,
        "location": "Dehradun",
        "country": "India"
    },
    {
        "title": "Stylish Apartment in Varanasi",
        "description": "Stay in a stylish apartment in Varanasi, offering modern amenities and comfortable living spaces. Perfect for exploring the city's rich heritage.",
        "image": "https://res.cloudinary.com/dcs7eq5kf/image/upload/q_auto,f_auto,w_600,h_400/v1725229536/hotel6_ylxwvn.jpg",
        "price": 3100,
        "location": "Varanasi",
        "country": "India"
    },
    {
        "title": "Comfortable Cabin in Udaipur",
        "description": "Enjoy a comfortable cabin experience in Udaipur with beautiful lake views and cozy accommodations. Ideal for a relaxing retreat.",
        "image": "https://res.cloudinary.com/dcs7eq5kf/image/upload/q_auto,f_auto,w_600,h_400/v1725229535/hotel1_exmjfi.jpg",
        "price": 3300,
        "location": "Udaipur",
        "country": "India"
    },
    {
        "title": "Luxury Resort in Jaisalmer",
        "description": "This luxury resort in Jaisalmer offers upscale amenities and stunning desert views. Perfect for a high-end desert experience.",
        "image": "https://res.cloudinary.com/dcs7eq5kf/image/upload/q_auto,f_auto,w_600,h_400/v1725229535/hotel3_w2nhes.jpg",
        "price": 7000,
        "location": "Jaisalmer",
        "country": "India"
    },
    {
        "title": "Elegant Lodge in Bhubaneswar",
        "description": "Stay in an elegant lodge in Bhubaneswar with modern comforts and a welcoming atmosphere. Ideal for both business and leisure.",
        "image": "https://res.cloudinary.com/dcs7eq5kf/image/upload/q_auto,f_auto,w_600,h_400/v1725229535/hotel2_zmnzip.jpg",
        "price": 3400,
        "location": "Bhubaneswar",
        "country": "India"
    },
    {
        "title": "Historic Mansion in Jaipur",
        "description": "Experience the grandeur of a historic mansion in Jaipur, blending traditional elegance with modern amenities. Ideal for a cultural stay.",
        "image": "https://res.cloudinary.com/dcs7eq5kf/image/upload/q_auto,f_auto,w_600,h_400/v1725229535/hotel4_k3yzdr.jpg",
        "price": 5000,
        "location": "Jaipur",
        "country": "India"
    },
    {
        "title": "Modern Stay in Kanpur",
        "description": "This modern stay in Kanpur offers stylish decor and comfortable accommodations. Ideal for travelers seeking a relaxing city experience.",
        "image": "https://res.cloudinary.com/dcs7eq5kf/image/upload/q_auto,f_auto,w_600,h_400/v1725229549/hotel15_tnxany.jpg",
        "price": 3400,
        "location": "Kanpur",
        "country": "India"
    },
    {
        "title": "Luxury Suite in Agra",
        "description": "Stay in a luxurious suite in Agra, offering modern amenities and stunning views of the city. Perfect for a high-end experience.",
        "image": "https://res.cloudinary.com/dcs7eq5kf/image/upload/q_auto,f_auto,w_600,h_400/v1725229541/hotel13_u1iazx.jpg",
        "price": 4000,
        "location": "Agra",
        "country": "India"
    },
    {
        "title": "Cozy Apartment in Amritsar",
        "description": "Enjoy a cozy apartment in Amritsar with modern amenities and comfortable living spaces. Perfect for exploring the city's rich history.",
        "image": "https://res.cloudinary.com/dcs7eq5kf/image/upload/q_auto,f_auto,w_600,h_400/v1725229539/hotel10_opajhb.jpg",
        "price": 3200,
        "location": "Amritsar",
        "country": "India"
    }
];

  module.exports = { data: sampleListings };


//images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60