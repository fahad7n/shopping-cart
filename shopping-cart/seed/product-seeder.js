var Product  = require('../models/product');

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/shopping', { useNewUrlParser: true,useUnifiedTopology: true })
.then(() => console.log('connected to database..'))
.catch(err => console.log('Refuse to connect..',err));

var products = [
new Product({
    imagePath: "https://upload.wikimedia.org/wikipedia/en/5/5e/Gothiccover.png",
    title: 'Gothic Video Game',
    description: 'Awesome Game!!!!',
    price: 10
}),
new Product({
    imagePath: "https://upload.wikimedia.org/wikipedia/en/4/41/Codbox.jpg",
    title: 'Call of Duty Video Game',
    description: 'good its okay',
    price: 20
}),
new Product({
    imagePath: "https://upload.wikimedia.org/wikipedia/en/thumb/9/91/WoW_Box_Art1.jpg/220px-WoW_Box_Art1.jpg",
    title: 'World of Warcraft Video Game',
    description: 'Awesome Game!',
    price: 15
}),
new Product({
    imagePath: "https://tse2.mm.bing.net/th?id=OIP._WMnFbBPCDUMrWyAX95a_AHaEK&pid=Api&P=0&w=337&h=190",
    title: 'Dark Souls 3 Video Game',
    description: 'Now that is super awesome',
    price: 50
}),
new Product({
    imagePath: "http://2.bp.blogspot.com/-NkTjKpleBjM/UT9ql5i5eQI/AAAAAAAABAo/Kb1FB3jnufA/s1600/modloader-for-minecraft-02-700x406.jpg",
    title: 'Minecraft Video Game',
    description: 'I died!',
    price: 60
}),
];

var done = 0;
for (var i=0;i<products.length;i++){
    products[i].save(function(err, result) {
       done++;
       if (done === products.length) {
         exit();
       }
    });
}
function exit() {
    mongoose.disconnect();
}