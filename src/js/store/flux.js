const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: []
		},
		actions: {
			// Use getActions to call a function within a function

			getPeople: (url) => {
				fetch(url)
					.then(data => {
						return data.json();
					})
					.then(resp => {
						setStore({ people: resp });
						const store = getStore();
						console.log(store)
					})
					.catch(error => {
						console.log(error);
					});
			},
			addPeople: (peopleData) => {
				const url = "https://playground.4geeks.com/apis/fake/contact/";
				fetch(url, {
					method: "POST",
					body: JSON.stringify(peopleData),
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(data => {
						return data.json()
					})
					.then(newPeople => {
						setStore({ people: [...store.people, newPeople] });
						const store = getStore();
						console.log(resp)
					})
					.catch(error => {
						console.log(error)
					})
			}
		}
	}
};


export default getState;
