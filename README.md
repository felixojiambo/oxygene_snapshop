# **SnapShop Application**

An advanced, responsive e-commerce platform built using Next.js, Tailwind CSS, and Redux Toolkit, integrating the FakerStore API for products and categories.

---

## **Features**

- **Product Listing**:
  - Displays all products in a paginated layout.
  - Allows filtering products by category.
- **Product Details**:
  - Detailed view of a product, including its name, price, description, and category.
  - Option to adjust the quantity and add items to the cart.
- **Cart Management**:
  - Uses Redux Toolkit to manage cart state.
  - Allows adding, removing, and updating product quantities dynamically.
- **Dynamic Routing**:
  - Product details page is dynamically generated based on product IDs.
- **Responsive Design**:
  - Fully optimized for mobile, tablet, and desktop views.
  - Built using Tailwind CSS for modern and efficient styling.

---

## **Technologies Used**

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **State Management**: [Redux Toolkit](https://redux-toolkit.js.org/)
- **API Integration**: [FakerStore API](https://fakestoreapi.com/)
- **Icons and UI Components**: Tailwind and Headless UI

---

## **Getting Started**

### **1. Prerequisites**

Ensure the following are installed on your system:

- Node.js (v16 or later)
- npm or yarn

### **2. Clone the Repository**

```bash
git clone https://github.com/felixojiambo/oxygene_snapshop
cd oxygene_snapshop
```

### **3. Install Dependencies**

```bash
npm install
```

### **4. Environment Variables**

Create a `.env.local` file in the root directory and configure any necessary environment variables (if applicable).

### **5. Run the Development Server**

Start the development server:

```bash
npm run dev
```

Navigate to `http://localhost:3000` to view the application.

---

## **Key Features Explained**

### **1. Product Listing**
- API: `https://fakestoreapi.com/products`
- Displays paginated products with category filtering.

### **2. Product Details**
- API: `https://fakestoreapi.com/products/:id`
- Shows detailed information about a single product.
- Includes the ability to add a product to the cart.

### **3. Cart Management**
- Built using Redux Toolkit.
- Allows for:
  - Adding products to the cart.
  - Incrementing/decrementing quantities.
  - Removing products from the cart.

---

## **API Endpoints Used**

1. **Get All Products**: `https://fakestoreapi.com/products`
2. **Get Product by ID**: `https://fakestoreapi.com/products/:id`
3. **Get All Categories**: `https://fakestoreapi.com/products/categories`
4. **Get Products in Category**: `https://fakestoreapi.com/products/category/:category`

---

## **Customization**

You can easily customize the project by modifying:

1. **Styling**: Update `globals.css` or directly use Tailwind utility classes in components.
2. **State Management**: Add more slices in the `store/` folder to extend functionality.
3. **API Integration**: Replace FakerStore API with your custom backend API.

---

## **Contributing**

1. Fork the repository.
2. Create a new feature branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add your message here"
   ```
4. Push to the branch:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Create a pull request.

---

## **License**

This project is licensed under the MIT License.

---

## **Contact**

