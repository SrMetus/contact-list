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
						console.log(getStore)
					})
					.catch(error => {
						console.log(error);
					});
			},
			/*changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}*/
		}
	};
};

export default getState;
