var posts = [
    {
        texto: "Texto1",
        autor: "Marios"
    },
    {
        texto: "Texto2",
        autor: "Marios2"
    },
    {
        texto: "Texto3",
        autor: "Marios"
    },
    {
        texto: "Texto4",
        autor: "Marios4"
    },
    {
        texto: "Texto5",
        autor: "Marios5"
    },
];
var autor = "Andrius";
console.log(retornaPosts(posts, autor));
function retornaPosts(posts, autor) {
    return posts.filter(function (post) { return post.autor === autor; });
}