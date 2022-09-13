var users = [
    {name: "Jill"},
    {name: "Alex"},
    {name: "Bill"}
];

// Classic For Loop

let user;

for (let i = 0; i < users.length; i++) {
    if (users[i].name === "Alex") {
        user = users[i];
    };
};


// Introducing the find helper
/* The find() method returns the first value that matches from the collection. 
Once it matches the value in findings, it will not check the remaining values in the array collection.
It will keep calling elements with the interator function until the iterator function eventually returns true. 
Once it returns true, the find helper exits its iteration
 */

users.find(function(user){
    return user.name === "Alex";
})

var posts = [
    { id: 1, title: "New Post" },
    { id: 2, title: "Old Post" }
];

var comment = { postId: 1, comment: "Great Post" };

function postForComment(posts, comment) {
    return posts.find(function (post) {
        return post.id === comment.postId;
    });
}

// Coding Exercise 9: Finding Admin Users

var users = [
    { id: 1, admin: false },
    { id: 2, admin: false },
    { id: 3, admin: true }
  ];

const admin = users.find(user => user.admin);

// Here I didn't have to specify that user.admin had to be true as the purpose of the find method is to look for truthy value

var accounts = [
    { balance: -10 },
    { balance: 12 },
    { balance: 0 }
  ];

const account = accounts.find(account => account.balance === 12);
