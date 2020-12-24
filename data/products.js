const products = [
 
  { 
    name: "Lenovo IdeaPad Flex 5 AMD Ryzen 5",
    image: "https://images-na.ssl-images-amazon.com/images/I/717PHDbymML._SX679_.jpg",
    description:
      "Processor: 4th Gen AMD Ryzen 5 (4500U) | Speed: 2.3 GHz (Base) - 4.0 GHz (Max) | 6 Cores | 8MB CacheOS: Pre-Loaded Windows 10 Home with Lifetime Validity Pre-Installed: MS Office Home and Student 2019 Memory and Storage: 8GB RAM DDR4-3200, Upgradable up to 16GB | 512GB SSD. Display: 14 Full HD (1920x1080) | IPS Technology Design: Touchscreen",
    brand: "Lenovo",
    category: "Laptop",
    price: 400,
    countInStock: 30,
    rating: 5,
    numReviews: 17,
  },
  {
   
    name: "DELL Inspiron",
    image: "https://images-na.ssl-images-amazon.com/images/I/71ppje-8lkL._SL1280_.jpg",
    description:
      "3583 15.6inch HD Laptop (Pentium Gold 5405U/4GB/1TB HDD/Win10 + MS Office/Intel UHD Graphics/ Silver) SLV-C563119WIN9",
    brand: "Dell",
    category: "Laptop",
    price: 599.99,
    countInStock: 7,
    rating: 4.8,
    numReviews: 9,
  },
  {
   
    name: "Samsung Galaxy Tab",
    image: "https://images-na.ssl-images-amazon.com/images/I/71PWPoS%2BNtL._SL1500_.jpg",
    description:
      "A 10.1 (10.1 inch, RAM 2GB, ROM 32GB, Wi-Fi-Only), Black",
    brand: "Samsung",
    category: "Tab",
    price: 129.99,
    countInStock: 5,
    rating: 4.6,
    numReviews: 18,
  },
  {
    
    name: "Samsung Galaxy Tab A7",
    image: "https://images-na.ssl-images-amazon.com/images/I/71g9138yHKL._SL1500_.jpg",
    description:
      "Tab A7 (10.4 inch, RAM 3 GB, ROM 32 GB, Wi-Fi-only), Grey",
    brand: "Samsung",
    category: "Tab",
    price: 199.99,
    countInStock: 41,
    rating: 4.8,
    numReviews: 12,
  },
  {
  
    name: "Apple iPad 9.7 with WiFi, 128GB",
    image: "https://images-na.ssl-images-amazon.com/images/I/61g2VZBU88L._AC_SL1000_.jpg",
    description:
      "This pre-owned product is not Apple certified, but has been professionally inspected, tested and cleaned by Amazon-qualified suppliers. There will be no visible cosmetic imperfections when held at an arm’s length. This product will have a battery which exceeds 80% capacity relative to new. Accessories may not be original, but will be compatible and fully functional. Product may come in generic Box. This product is eligible for a replacement or refund within 90 days of receipt if you are not satisfied under the Amazon Renewed Guarantee.",
    brand: "Apple",
    category: "Tab",
    price: 449,
    countInStock: 300,
    rating: 5,
    numReviews: 103,
  },
  {
  
    name: "Apple iPhone XS, 256GB , Space Gray",
    image: "https://images-na.ssl-images-amazon.com/images/I/71XeQzRDyML._AC_SL1500_.jpg",
    description:
      "Fully unlocked and compatible with any carrier of choice (e.g. AT&T, T-Mobile, Sprint, Verizon, US-Cellular, Cricket, Metro, etc.). The device does not come with headphones or a SIM card. It does include a charger and charging cable that may be generic, in which case it will be UL or Mfi (Made for iPhone) Certified. Inspected and guaranteed to have minimal cosmetic damage, which is not noticeable when the device is held at arms length. Successfully passed a full diagnostic test which ensures like-new functionality and removal of any prior-user personal information. Tested for battery health and guaranteed to have a minimum battery capacity of 85%.",
    brand: "Apple",
    category: "Phone",
    price: 304,
    countInStock: 900,
    rating: 5,
    numReviews: 103,
  },
  {
  
    name: "New Apple iPhone 12 Pro Max 128GB, Pacific",
    image: "https://m.media-amazon.com/images/I/71MHTD3uL4L._FMwebp__.jpg",
    description:
      "OFFER INCLUDES: An Apple iPhone and a wireless plan with unlimited data/talk/text WIRELESS PLAN: Unlimited talk, text, and data with mobile hotspot, nationwide coverage, and international reach. No long-term contract required. PROGRAM DETAILS: When you add this offer to cart, it will reflect 3 items: the iPhone, SIM kit, and carrier subscription Ceramic Shield, tougher than any smartphone glass A14 Bionic chip, the fastest chip ever in a smartphone Pro camera system with 12MP Ultra Wide, Wide and Telephoto cameras; 5x optical zoom range; Night mode, Deep Fusion, Smart HDR 3, Apple ProRAW, 4K Dolby Vision HDR recording",
    brand: "Apple",
    category: "Phone",
    price: 1200,
    countInStock: 300,
    rating: 5,
    numReviews: 103,
  },
  {
  
    name: " New Apple MacBook Pro (16-inch, 16GB RAM, 512GB Storage)",
    image: "https://images-na.ssl-images-amazon.com/images/I/71pC69I3lzL._AC_SL1500_.jpg",
    description:
      "Ninth-generation 6-Core Intel Core i7 Processor Stunning 16-inch Retina Display with True Tone technology Touch Bar and Touch ID AMD Radeon Pro 5300M Graphics with GDDR6 memory Ultrafast SSD Intel UHD Graphics 630 Six-speaker system with force-canceling woofers",
    brand: "Apple",
    category: "Laptop",
    price: 2500,
    countInStock: 500,
    rating: 5,
    numReviews: 83,
  },
  {
  
    name: "Dell Latitude 5490",
    image: "https://images-na.ssl-images-amazon.com/images/I/71HMAxr2qGL._AC_SL1500_.jpg",
    description:
      "Dell",
    brand: "Dell",
    category: "Laptop",
    price: 500,
    countInStock: 100,
    rating: 4.7,
    numReviews: 50,
  },
  {
  
    name: " Health & Fitness Smartwatch ",
    image: "https://images-na.ssl-images-amazon.com/images/I/71NVIDruxqL._AC_SL1500_.jpg",
    description:"Run, bike, hike and more phone-free—and see your real-time pace & distance—with built-in GPS. Then check out your workout intensity map in the Fitbit app Active Zone Minutes uses your resting heart rate to gauge exercise effort and gives you a buzz when you step up the intensity so you can make the most of your workouts Better track heart rate 24/7 with PurePulse 2.0, Fitbit’s enhanced heart rate technology See your nightly blood oxygen levels at a glance with our collection of SpO2 clock faces. Then use the Fitbit app to track your trends over time in the Health Metrics dashboard to see when there may be indications of important changes in your wellness Use Google Assistant or Amazon Alexa Built-in to get quick news, set bedtime reminders and alarms, control your smart home devices and more -- just by speaking to your watch (Voice assistant availability and features may vary, see fitbit.com/voice)",
    brand: "Apple",
    category: "Watch",
    price: 198,
    countInStock: 100,
    rating: 5,
    numReviews: 83,
  },
  {
  
    name: " Health & Fitness Smartwatch ",
    image: "https://images-na.ssl-images-amazon.com/images/I/810NSz9ho6L._AC_SL1500_.jpg",
    description:"2020 Latest Style Round Smart Watch】- YAMAY 022 smartwatch adopts 1.28 inch 3D curved HD touch screen, metal structure and soft breathable bands, making it very comfortable for wearing and looking stylish both for men and women. Do you want to add your photos or your favorite images to the watch face? Now it is easy to realize on YAMAY 022 watch. You can choose the existing images or upload images to customize the watch face freely, which can make your watch looks unique. ♥【Smart Watch for Android Phones iPhone iPad and Tablet】- YAMAY 022 can be wide compatible with iOS 9.0 and above Or Android 5.0 and above devices, including smart phones, iPad and tablet. By connecting the watch with your device via the related app, you can get real-time notifications of your calls, texts, and SNS messages, including Facebook, Twitter, WhatsApp, Linkedin, Messenger, etc. Never miss important messages.",
    brand: "YAMAY",
    category: "Watch",
    price: 98,
    countInStock: 100,
    rating: 4.5,
    numReviews: 83,
  },
  {
  
    name: " Willful Smart Watch for Android Phones and iOS ",
    image: "https://images-na.ssl-images-amazon.com/images/I/61l%2BWYDAi1L._AC_SL1300_.jpg",
    description:"Smart watch for Android Phones Samsung iPhone】- Compatible with most iOS 8.0 & Android 4.4 above smartphones. Download and install Free. APP, bind this smartwatch in your cell phone,you can receive alerts of calendar, SMS, incoming calls and SNS (Facebook, WhatsApp, LinkedIn, Instagram, Twitter and more) on this watch;It will never let you miss any important things. ♥【Accurate Fitness Tracker & Connected GPS】- Supports 9 sports such as Walking, running, bicycle , Hike, Mountaineering, Dynamic cycling, Hike, fitness, treadmill, Yoga. Accurately record all-day activities like steps, distance, calories burned, miles walked, active minutes. Connecting the GPS in your cellphone can track all your workout routes, distances, and physical status during exercise. Stay motivated all day",
    brand: "Apple",
    category: "Watch",
    price: 159,
    countInStock: 200,
    rating: 5,
    numReviews: 23,
  },

];

export default products


