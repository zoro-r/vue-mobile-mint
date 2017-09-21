const cache = {
	set: (key, value) => {
		if (typeof value == 'string') {
			localStorage.setItem(key, value);
		} else {
			localStorage.setItem(key, JSON.stringify(value));
		}
	},
	get: key => {
		let value = localStorage.getItem(key);
		if (value && (value.substr(0, 1) == '{' || value.substr(0, 1) == '[')) {
			try {
				value = eval('(' + value + ')');
			} catch (e) {
				console.log('error in get cache key:' + key + ', value:' + value)
			}
		}
		return value;
	},
	removeItem: key => {
		localStorage.removeItem(key);
	},
	clear: () => {
		localStorage.clear();
	},
}

export default cache