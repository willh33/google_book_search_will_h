import React, {useState, useEffect} from 'react';
import Book from '../components/Book/Book';
import Grid from '@material-ui/core/Grid/Grid';
import API from "../utils/API";
import { Container, Row, Col } from '../components/Grid';

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
	 	getSavedBooks();
    }, []);

	//Place other methods here
	const getSavedBooks = async () => {
		//Call the api to get the saved books
		let res = await API.getBooks();
		setBooks(res.data);
	};

    return (
        <Container>
			{/* <Row>
				<Col size="md-12">
					<h2>Saved books</h2>
					<div id="books-div">
						{books.map(book => <Book book={book} saved={false}></Book> )}
					</div>
				</Col>
			</Row> */}
			<Row>
				<Col size="md-12">
					{
						books.length > 0
						?
						(
							<>
								<h2>Saved Books</h2>
								{
									books.map( (res, index) => (
										<Book key={index} book={res} save={false}></Book>
									))
								}
							</>
						)
						:
						''
					}
				</Col>
			</Row>
		</Container>
    );
};

export default SavedBooks;