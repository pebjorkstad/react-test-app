import React from "react";
import "./App.css";

function ProductsPanel() {

    const products = [
        { title: 'Cabbage', id: 1 },
        { title: 'Garlic', id: 2 },
        { title: 'Apple', id: 3 },
    ];
    const listItems = products.map(product =>
        <li key={product.id}>
            {product.title}
        </li>
    );

    return (
        <div>
            <h1>This is the list of products</h1>
            <ul>{listItems}</ul>
        </div>
    );
}

function LoginForm() {

    function handleClick() {
        alert('Logging in...');
    }

    return (
        <button onClick={handleClick}>
            Please log in to continue
        </button>
    );
}

export default function MyApp() {
    const isLoggedIn = true;
    return (
        <div>
            {isLoggedIn ? (
                <ProductsPanel />
            ) : (
                <LoginForm />
            )}
        </div>
    );
}
  