# How to Add Products

Since we represent the store data in a simple file (no database yet), adding products is very easy!

## 1. Prepare Your Images
1.  Take photos of your product.
2.  Name them simply, e.g., `my-new-product.jpg`.
3.  Copy these images into the folder:  
    `c:\Users\sikan\Desktop\frontend-anti\public\images\products\`

## 2. Edit the Product Data File
1.  Open this file in VS Code:  
    `lib/data/products.json`
2.  You will see a list of products between `[` and `]`.
3.  To add a new product, add a **comma** `,` after the last `}` closing bracket, and then paste this template:

```json
    {
        "id": "13",                  // Unique number (change this!)
        "name": "New Product Name",
        "description": "Write a nice description here.",
        "price": 1500.00,            // Price number (no quotes)
        "images": [
            "/images/products/my-new-product.jpg"  // Matches file in public folder
        ],
        "category": "Electronics",   // Electronics, Fashion, or Home & Living
        "inStock": true,
        "featured": true             // true = show on homepage, false = regular
    }
```

## 3. Save
*   Press `Ctrl + S` to save the file.
*   The website will update instantly!

## Troubleshooting
*   **Red lines/Errors?** Make sure you didn't forget the **comma** `,` between product blocks.
*   **Images not showing?** Check if the filename in the JSON matches exactly what is in the `public/images/products` folder.
