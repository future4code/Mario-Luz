### Exercício 1
a) O que são os round e salt? Que valores são recomendados para o round? Que valor você usou? Por quê?
RESPOSTA: 

b) Round ou custo é um valor atribuído para um salt, que por sua vez é uma string que acrescenta mais aleatoriedade ao código. É recomendado o custo 12 para o hash. Eu usei 12 pois é o recomendado.


c)
```
export class HashManager {
    public async hash(text: string): Promise<string> {
        const rounds = Number(process.env.BCRYPT_COST)
        const salt = await bcrypt.genSalt(rounds)
        const hash = await bcrypt.hash(text, salt)
        return hash
    }
}

```

d)
```
public async compare(text: string, hash: string): Promise<boolean> {
        return bcrypt.compare(text, hash)
    }
```

### Exercício 2
a) 

b) 
```

```

c) 
```

```

d) 
```

```


### Exercício 3
a)

b) 
```
```

c) 

### Exercício 4
a) 

b) 

c) 
