import React from "react";
import "./App.css";
import useProjects from "./projectsApi";


function ProductsPanel() {

    const projects = useProjects();
    console.log("Projects: ", projects);

    const listItems = projects.map(project =>
        <li key={project.id}>
            {project.title}
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
  