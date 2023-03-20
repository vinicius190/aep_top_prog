import {Request, Response} from 'express'
import ProductService from '../service/ProductService'

class produtoController {
    public async postProduto(req: Request, res: Response) {
        ProductService.createProductList(req.body)
        return res.status(201).send()
    }

    public async getProduto(req: Request, res: Response){
        const produtos = await ProductService.readProduto();
        return res.status(200).json(produtos)
    }

    public async getProdutoStock(req: Request, res: Response){
        const produtosStock = await ProductService.getStock();
        return res.json(produtosStock);
    }
}

export default new produtoController()