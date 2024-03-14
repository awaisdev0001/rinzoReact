export const get = async (url: string) => {
	fetch(url)
		.then(res => res.json())
		.then(
			(response) => {
				return response;
			}
		)
		.catch((err) => {
			console.log(err.message);
		});
}

export const post = async (url: string, body: string) => {
	fetch(url, getHeaders(body, "POST"))
		.then(res => res.json())
		.then(
			(response) => {
				return response;
			}
		)
		.catch((err) => {
			console.log(err.message);
		});
}

export const put = async (url: string, body: string) => {
	fetch(url, getHeaders(body, "PUT"))
		.then(res => res.json())
		.then(
			(response) => {
				return response;
			}
		)
		.catch((err) => {
			console.log(err.message);
		});
}

export const remove = async (url: string, body: string) => {
	fetch(url, getHeaders(body, "DELETE"))
		.then(res => res.json())
		.then(
			(response) => {
				return response;
			}
		)
		.catch((err) => {
			console.log(err.message);
		});
}

const getHeaders = (method: string, body: string) => {
	return {
		method: method,
		headers: {
			'Content-Type': 'application/json',
			'Accept': 'application/json'
		},
		body: JSON.stringify(body)
	}
}