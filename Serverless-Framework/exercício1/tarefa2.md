1)Verificação de conteúdo na variável 'input'.

input = undefined -> false
input = null -> false
input = "Hello word" -> true

2) Para converter o body, que inicialmente é um JSON , em um objeto

3)Retorna 200 em casos em que o event contiver alguma requisição por queryStringParameters ou do body. O body da resposta é um objeto com duas propriedade booleanas 
uma mostrando se tem um body e outra mostrando se tem uma query

4) Retorna 400 em casos em que o event NÂO contiver alguma requisição por queryStringParameters e por meio do body.