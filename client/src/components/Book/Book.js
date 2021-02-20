import React, {useState, useEffect} from 'react';
import Grid from '@material-ui/core/Grid/Grid';
import Button from '@material-ui/core/Button';
import { Container, Row, Col } from '../Grid';
import { FormBtn } from '../Form';

/**
 * A component that displays a book
 * 
 * @param book
 * @constructor
 */
const Book = ( {save, ...props} ) => {
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
		let {volumeInfo} = props.book; 
		setBook(volumeInfo)
		console.log('props', volumeInfo);
	}, [props]);
	
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
		window.location.href = book.infoLink;
	}
	
	/**
	 * Delete the book
	 */
	const deleteBook = () => {
		//Call the API to delete the book
	}
	
	/**
	 * Delete the book
	 */
	const saveBook = () => {
		//Call the API to save the book
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
					<img src={book.imageLinks.thumbnail}></img>
				</Col>
				<Col size="md-9">
					<p>{book.description}</p>
				</Col>
			</Row>
		</Container>
    );
};

export default Book;