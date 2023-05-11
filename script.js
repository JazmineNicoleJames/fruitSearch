const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];



function search(str) {
	let results = [];
	
	fruit.filter(function(val) {
		for(let char of str){
			let lowerCased = char.toLowerCase();
			if(val.includes(lowerCased)) {
				results.push(val);
			}
		}
	});
	return results;
}

function searchHandler(e) {
	const inputVal = e.target.value;
	let results = search(inputVal);
	//function filtered(results,inputVal) {
		results = results.filter((el) =>
		el.toLowerCase().includes(inputVal.toLowerCase()))
	//}
	showSuggestions(results, inputVal);
}


function showSuggestions(results, inputVal) {
	results.innerText = [...results];
	suggestions.innerHTML = '';

		for(let i=0; i <results.length; i++){
			const el = results[i];

			if(el.innerText === inputVal.innerText){
				let el = results[i];
				let suggestion = `<li> ${el} </li>`;
				console.log('yesss');
				suggestions.classList.add('has-suggestions');
				if(suggestions.innerHTML !== suggestion){
					suggestions.innerHTML += suggestion;
				}
				console.log('suggestions',suggestions.innerHTML);
		}else{
			console.log('noooo')
		results = [];
			suggestions.innerHTML = '';
			suggestions.classList.remove('has-suggestions');
		}		
	}
}
		


function useSuggestion(e) {
	input.value = e.target.innerText;
	input.focus();
	suggestions.classList.remove('has-suggestions')
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);






//	const filteredFruit = fruitCopy.filter(function(val) {
//		for(let char of str){
//			let lowerCased = char.toLowerCase();
//			if(val.includes(lowerCased)) {
//				results.push(val);
//			}
//		}
  //      	if(val.includes(str)){	
//				results.push(val);
//			}
//	});

//	return results;