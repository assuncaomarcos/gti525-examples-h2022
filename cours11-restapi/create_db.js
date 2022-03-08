const casual = require('casual').en_CA;
const path = require('path');
const fs = require("fs");
casual.seed(888);

const numUsers = 10;
const numPosts = 100;
const data = { users: [], posts: [] };
const dbPath = path.join(__dirname, 'db.json');

casual.define('user', function(id) {
    return {
        id: id,
        firstname: casual.first_name,
        lastname: casual.last_name,
        address: casual.address1,
        city: casual.city,
        province: casual.province,
        phone: casual.phone
    };
});

casual.define('post', function(id) {
    return {
        id: id,
        user_id: casual.integer(from=1, to=numUsers),
        title: casual.title,
        text: casual.text
    };
});

// remplir la db avec quelques utilisateurs
for (let i = 0; i < numUsers; i++) {
    data.users.push(casual.user(i + 1));
}

for (let i = 0; i < numPosts; i++) {
    data.posts.push(casual.post( i + 1));
}

try {
    fs.writeFileSync(dbPath, JSON.stringify(data, null, 2));
} catch (err) {
    console.error(err)
}