import React from 'react';

function bookList({books}){
    return (
        <ul>
            {books.map(book => (
                <li key={book.id}>
                    <h3>{book.title}</h3>
                    <p>by {book.author}</p>
                </li>
            ))}
        </ul>
    );
}

export default function List(){
    const books = [
        {id:1, title:'Book1', author:'Author1'},
        {id:2, title:'Book2', author:'Author2'},
        {id:3, title:'Book3', author:'Author3'}
    ];

    return (
        <div>
            <h2>Books List</h2>
            <bookList books={books}></bookList>
        </div>
    )
}