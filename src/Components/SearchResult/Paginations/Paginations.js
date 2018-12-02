import React from 'react';
import { Pagination } from 'react-bootstrap';

const Paginations = (props) => {

	let pageNumbers = [];
	let totalPages = parseInt(props.totalPages, 10);
	let startPage = 1;
	let endPage = 1;
	let currentPage = parseInt(props.currentPage, 10);

	if (currentPage < 4) {
		startPage = 1;
		endPage = (totalPages <= 5 ? totalPages : 5)
	}
	else if (currentPage > (totalPages - 3)) {
		endPage = totalPages;
		startPage = (totalPages - 4) < 0 ? 1 : (totalPages - 4);
	}
	else {
		startPage = (currentPage - 2)
		endPage = (currentPage + 2)
	}

	for (let i = startPage; i <= endPage; i++)
		pageNumbers.push(i);

		console.log(totalPages)
		console.log(startPage)
		console.log(endPage)
		console.log(pageNumbers)

	return (
		<Pagination>
			<Pagination.First
				onClick={() => props.searchFunction(1)}
			/>
			<Pagination.Prev
				onClick={() => props.searchFunction(currentPage-1)}
				disabled={currentPage <= 1}
			/>

			{
				pageNumbers.map(num => <Pagination.Item
					key={num}
					active={num === currentPage}
					onClick={() => props.searchFunction(num)}
				> {num} </Pagination.Item>)
			}

			<Pagination.Next
				onClick={() => props.searchFunction(1)}
				disabled={currentPage >= totalPages}
			/>
			<Pagination.Last
				onClick={() => props.searchFunction(totalPages)}
			/>
		</Pagination>
	)

}

export default Paginations;