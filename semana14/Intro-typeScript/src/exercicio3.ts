type post = {
  texto: string,
  autor: string
}

const posts: post[]=[
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
      autor: "Andrius"
  },
  {
      texto: "Texto4",
      autor: "Marios4"
  },
  {
      texto: "Texto5",
      autor: "Marios5"
  },
]

const autor: string = "Marios"

console.log(retornaPosts(posts,autor))

function retornaPosts(posts:post[],autor:string):post[] {
  return posts.filter(post=>{return post.autor===autor})

}
//opas

}

