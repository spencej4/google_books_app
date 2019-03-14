import React from "react";

export default class Books extends React.Component {

    saveBook = (key, title, author, thumbnail, description, buyLink) => {
        this.props.handleBookSave(key, title, author, thumbnail, description, buyLink)
    }

    render() {
        let bookInstances;       

        bookInstances = this.props.results.map(book => {
            let key = book.id;
            let title = book.volumeInfo.title;
            let thumbnail = book.volumeInfo.imageLinks.thumbnail;
            let author = book.volumeInfo.authors;
            let description = book.volumeInfo.description;
            let buyLink = book.saleInfo.buyLink;
            return(
                <div className='card' key={key}>
                    <div className='image'><img src={thumbnail} alt="presentation" /></div>
                    <div className='book-title'>{title}</div>
                    <div className='book-author'>Author: {author}</div>
                    <div className='book-description'>{description}</div>
                    <div className='book-link'><a href={buyLink} rel="noopener noreferrer" target='_blank'>Purchase</a></div>
                    <div className='add-book-button' value={key} onClick={this.saveBook.bind(this, key, title, author, thumbnail, description, buyLink)}>
                        <p className='save-book'>Save Book</p>
                    </div>
                </div>
            )
        })
        return(
             <div className='books-container'>
                {bookInstances}
            </div>
        )
    }
}