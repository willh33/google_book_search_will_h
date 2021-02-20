import React, {useState, useEffect} from 'react';
import Grid from '@material-ui/core/Grid/Grid';
import Button from '@material-ui/core/Button';
import { Container, Row, Col } from '../Grid';
import { FormBtn } from '../Form';
import API from '../../utils/API';

/**
 * A component that displays a book
 * 
 * @param book
 * @constructor
 */
const Book = ( {save, book: _book} ) => {
	//state variables
	const [book, setBook] = useState({
		title: '', 
		subtitle: '',
		authors: [],
		description: '',
		imageLinks: { thumbnail: '' },
	});

	const [saveOrDelete, setSaveOrDelete] = useState('');
    //useEffects(Lifecycle Methods)
    /**
     * ComponentDidMount: What should happen when this component is first loaded into the DOM
     */
    useEffect( () => {
		setBook(_book)
		console.log('props', _book);
	}, [_book]);
	
	useEffect( () => {
		if(save)
			setSaveOrDelete('save');
		else
			setSaveOrDelete('delete');
	}, [save]);

	//Other Methods

	/**
	 * View the book
	 */
	const viewBook = () => {
		//Go to the view book page
		window.location.href = book.link;
	}
	
	/**
	 * Delete the book
	 */
	const deleteBook = () => {
		//Call the API to delete the book
		API.deleteBook(book._id);
		window.location.reload();
	}
	
	/**
	 * Delete the book
	 */
	const saveBook = () => {
		//Call the API to save the book
		API.saveBook(book);
	}

    return (
        <Container>
			<Row>
				<Col size="md-9">
					<h3>{book.title}</h3>
					<h5>{book.subtitle}</h5>
					<h6>Written By {book.authors ? book.authors.join(', ') : ''}</h6>
				</Col>
				<Col size="md-3">
					{
						saveOrDelete === 'delete' 
						?
						<FormBtn
							variant="contained"
							onClick={deleteBook}
							bootClass='btn-primary'
						>
							Delete
						</FormBtn>
						:
						<FormBtn
							variant="contained"
							onClick={saveBook}
							bootClass='btn-success'
						>
							Save
						</FormBtn>

					}
					<FormBtn
						variant="contained"
						onClick={viewBook}
						bootClass='btn-info'
					>
						View
					</FormBtn>
				</Col>
			</Row>
			<Row>
				<Col size="md-3">
					<img src={book.image}></img>
				</Col>
				<Col size="md-9">
					<p>{book.description}</p>
				</Col>
			</Row>
		</Container>
    );
};

export default Book;