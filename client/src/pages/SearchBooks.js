import React, {useState, useEffect, useRef, createRef} from 'react';
import Book from '../components/Book/Book';
import API from "../utils/API";
import TextField from '@material-ui/core/TextField/TextField';
import Button from '@material-ui/core/Button/Button';
import { Container, Row, Col } from '../components/Grid';
import { Input, TextArea, FormBtn } from '../components/Form'

/**
 * A component that allows the user to search a list of books and display them on the screen
 * @param 
 * @constructor
 */
const SearchBooks = (  ) => {
	//state variables
	const [searchResults, setSearchResults] = useState([]);
	const searchField = createRef();

    //useEffects(Lifecycle Methods)
    /**
     * ComponentDidMount: What should happen when this component is first loaded into the DOM
     */
    useEffect( () => {
		//Get the books
    }, []);

	//Other Methods
	const searchBooks = async () => {
		let searchValue = searchField.current.value;

		if(!searchValue)
			return;
		let res = await API.searchGoogleBooks(searchValue);

		console.log("search resulst", res);
		setSearchResults(res.data.items);
	};

    return (
        <Container>
			<Row>
				<Col size="md-12">
					<Input id="standard-search" label="Book Search " type="search" 
						ref={searchField}/>
					<FormBtn 
						variant="contained" 
						onClick={searchBooks}
						bootClass='btn-success'
					>
						Search
					</FormBtn>
				</Col>
			</Row>
			<Row>
				<Col size="md-12">
					{
						searchResults.length > 0
						?
						(
							<>
								<h2>Results</h2>
								{
									searchResults.map( (res, index) => (
										<Book key={index} book={{
											title: res.volumeInfo.title,
											subtitle: res.volumeInfo.subtitle,
											authors: res.volumeInfo.authors || [],
											image: res.volumeInfo.imageLinks.thumbnail,
											description: res.volumeInfo.description,
											link: res.volumeInfo.infoLink
										}} save={true}></Book>
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

export default SearchBooks;