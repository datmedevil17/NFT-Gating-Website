var myHeaders = new Headers()
myHeaders.append('accept', 'application/json')
myHeaders.append('Content-Type', 'application/json')
myHeaders.append('x-api-key', 'YOUR_API_KEY')

var requestOptions = {
	method: 'POST',
	headers: myHeaders,
	redirect: 'follow',
	body: JSON.stringify({
		name: 'My Destination',
		to_url: 'https://mydomain.com/webhook',
		webhook_type: 'POST',
		service: 'webhook',
		payload_type: 1,
	}),
}

fetch(
	'https://api.quicknode.com/quickalerts/rest/v1/destinations',
	requestOptions
)
	.then(response => response.text())
	.then(result => console.log(result))
	.catch(error => console.log('error', error))
