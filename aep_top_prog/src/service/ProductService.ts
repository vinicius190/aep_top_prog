import {writeFile, readFile} from 'fs/promises'

class ProdutoService {
    async createProductList(data){
        try {
            console.log("Criando lista de produtos")
            await writeFile('produtos.json', JSON.stringify(data, null, 2))
        } catch (error) {
            throw new Error("Falha ao salvar a lista de produtos")
        }
    }
    async readProduto(){
        try {
            console.log("retornando lista de produtos")
            const produtos = await readFile('produtos.json')
            return JSON.parse(produtos.toString('utf-8'))
        } catch (error) {
            throw new Error("Erro ao salvar arquivo")
        }
    }

    async getStock(){
        try {
            const productList = await this.readProduto()
            const produtos = productList.map(produto => {
                let stock = {
                    nome: produto.nome,
                    qtde: produto.qtde,
                    preco: produto.preco,
                    valor_stock: produto.qtde * produto.preco
                }
                return stock
            })
            return produtos
        } catch (err) {
            throw new Error(err);
        }
    }
}

export default new ProdutoService()