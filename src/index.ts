import express, { Request, Response } from "express";
import cors from "cors";
import { connectionDb } from "./database/connection";

const app = express();

app.use(express.json());
app.use(cors());

// Interface atualizada para Inglês
interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    is_on_sale: boolean;
}

// --- GET: List all products ---
app.get("/products", async (req: Request, res: Response) => {
    try {
        const products = await connectionDb("products").select("*");
        res.status(200).json(products);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to fetch products" });
    }
});

// --- GET: List products on sale ---
app.get("/products-on-sale", async (req: Request, res: Response) => {
    try {
        const productsOnSale = await connectionDb("products")
            .select("*")
            .where("is_on_sale", 1); // 1 = true in MySQL
        
        res.status(200).json(productsOnSale);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to fetch products on sale" });
    }
});

// --- POST: Create a new product ---
app.post("/create-product", async (req: Request, res: Response) => {
    try {
        const { name, description, price, is_on_sale } = req.body;

        await connectionDb("products").insert({
            name,
            description,
            price,
            is_on_sale
        });

        res.status(201).send({ message: "Product created successfully!" });

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to create product" });
    }
});

// --- PUT: Update a product ---
app.put("/update-product/:id", async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { name, description, price, is_on_sale } = req.body;

        const rowsAffected = await connectionDb("products")
            .where("id", id)
            .update({ 
                name, 
                description, 
                price, 
                is_on_sale 
            });

        if (rowsAffected === 0) {
            return res.status(404).send({ message: "Product not found" });
        }

        res.status(200).send({ message: "Product updated successfully!" });

    } catch (error) {
        console.error(error);
        res.status(500).send({ message: "Failed to update product" });
    }
});

// --- DELETE: Remove a product ---
app.delete("/delete-product/:id", async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        const rowsDeleted = await connectionDb("products")
            .where("id", id)
            .del();

        if (rowsDeleted === 0) {
            return res.status(404).send({ message: "Product not found" });
        }

        res.status(200).send({ message: "Product deleted successfully!" });

    } catch (error) {
        console.error(error);
        res.status(500).send({ message: "Failed to delete product" });
    }
});

app.listen(3000, () => {
    console.log("Server is running on port 3000 🚀");
});