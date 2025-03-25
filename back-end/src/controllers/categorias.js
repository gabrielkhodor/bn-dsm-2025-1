import prisma from '../database/client.js'

const controller = {} //Objeto vazio
// programação assincrona 
controller.create = async function(req,res){
    /* Conecta-se ao BD e envia uma instrução de criação de um novo documento,
    contendo os dados que vieram dentro do req body
    */
   try{
    await prisma.categoria.create({data: req.body})
    //envia uma mensagem de sucesso ao front-end
    //HTTP 201: CREATED
    res.status(201).end()
   } 
   catch(error){
    // Deu errado exibe o erro no terminal
    console.error(error)
    // envia o erro ao front-end, com status de erro
    // HTTP  500: internal server error
    res.status(500).send(error)
   }

}

export default controller