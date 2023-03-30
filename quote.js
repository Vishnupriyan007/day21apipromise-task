// Quote API
fetch('https://api.quotable.io/random')
	.then(response => response.json())
	.then(data => {
		const quoteCard = document.getElementById('quote');
		quoteCard.querySelector('.card-body').innerHTML = `<p>"${data.content}"</p><p>- ${data.author}</p>`;
	})
	.catch(error => console.log(error));
