import React, {useState, useEffect} from 'react';
import Book from '../components/Book/Book';
import Grid from '@material-ui/core/Grid/Grid';

/**
 * A component that pulls up the books the user has saved and allows them to view or delete them
 * @param 
 * @constructor
 */
const SavedBooks = (  ) => {
	//state variables
	const [books, setBooks] = useState([]);

    //useEffects(Lifecycle Methods)
    /**
     * ComponentDidMount: What should happen when this component is first loaded into the DOM
     */
    useEffect( () => {
		//Get the saved books
		let books = getSavedBooks();
		setBooks(books);
    }, []);

	//Place other methods here
	const getSavedBooks = () => {
		//Call the api to get the saved books
	};

    return (
        <Grid container>
			<Grid item>
				<h2>Saved books</h2>
				<div id="books-div">
					{books.map(book => <Book book={book}></Book> )}
				</div>
			</Grid>
		</Grid>
    );
};

export default SavedBooks;