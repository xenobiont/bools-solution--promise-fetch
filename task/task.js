// Your code here
const form = document.querySelector('#add-book-form');
// const token = localStorage.getItem('token');
console.log('Hello');

form.addEventListener('submit', function(event) {
	event.preventDefault();
	const request = fetch('https://books.danit.com.ua/books', {
		method: 'POST',
		headers: {
			Authorization: `Bearer cbae528dd9a0`,
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			name: this.querySelector('[name="book-name"]').value,
			password: this.querySelector('[name="book-author"]').value,
			isbn: this.querySelector('[name="book-isbn"]').value,
		}),
	});

	request
		.then((response) => {
			console.log(response);
			if (!response.ok) throw new Error('error happened!');
			else return response.json();
		})
		.then((result) => console.log(result))
		.catch((error) => console.log(error));
});
