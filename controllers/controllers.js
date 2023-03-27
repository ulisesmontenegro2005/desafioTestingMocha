import services from "../services/services.js";
const Services = new services()

class controllers {
    static products = [];

    getProducts (req, res) {
        res.status(200).json(controllers.products);
    }

    getProductById (req, res) {
        const { id } = req.params;

        const prod = controllers.products.find(p => p.id === id)

        if (prod === undefined) {
            return res.sendStatus(404)
        }

        res.status(200).json(prod)
    }
    
    addProduct (req, res) {
        const { nombre, precio, thumbnail } = req.body

        const prod = {nombre, precio, thumbnail, id: Services.generateId()}

        controllers.products.push(prod)

        res.status(201).json(prod)
    }
    
    updateProduct (req, res) {
        const { id } = req.params
        const { nombre, precio, thumbnail } = req.body

        const index = controllers.products.findIndex(p => p.id === id)
        if (index === -1) {
            return res.sendStatus(404)
        }

        const newProd = {
            nombre,
            precio,
            thumbnail,
            id: controllers.products[index].id
        }

        controllers.products.splice(index, 1, newProd)

        res.status(200).json(newProd)
    }
    
    deleteProduct (req, res) {
        const { id } = req.body;

        const index = controllers.products.findIndex(p => p.id === id)
        const deleted = controllers.products.splice(index, 1)

        res.status(200).json(deleted)
    }
}

export default controllers