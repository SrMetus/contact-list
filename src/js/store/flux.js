const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			msg: ""
		},
		actions: {
			// Use getActions to call a function within a function

			getPeople: (url) => {
				const store = getStore();
				fetch(url)
					.then(data => {
						return data.json();
					})
					.then(resp => {
						setStore({ people: resp });
						console.log(store)
					})
					.catch(error => {
						console.log(error);
					});
			},

			addPeople: (peopleData) => {
				const store = getStore();
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
					.then(resp => {
						setStore({ people: [...store.people, resp] });
						console.log(resp)
					})
					.catch(error => {
						console.log(error)
					})
			},

			delPeople: (peopleId) => {
				const store = getStore();
				fetch(`https://playground.4geeks.com/apis/fake/contact/${peopleId}`, {
					method: "DELETE"
				})
					.then(data => { return data.json() })
					.then(resp => {
						setStore({ msg: resp.msg });
						console.log("Usuario eliminado:", resp);
					})
					.catch(error => {
						console.error("Error al eliminar usuario:", error);
					});
			}
		}
	}
};


export default getState;
