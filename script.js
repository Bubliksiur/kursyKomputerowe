const obliczBtn = document.querySelector('#obliczBtn');
const checkboxReact = document.querySelector('#checkboxReact');
const checkboxJs = document.querySelector('#checkboxJs');
const liczbaRat = document.querySelector('#poleEdytacyjne');

const optionWarszawa = document.querySelector('#warszawa').value;
const optionKatowice = document.querySelector('#katowice').value;
const optionGdansk = document.querySelector('#gdansk').value;
const miasta = document.querySelector('#miasta');

const komunikat = document.querySelector('#komunikat');

obliczBtn.addEventListener('click', (e) => {
	e.preventDefault();
	let cenaZaWszystko = 0;
	kursReact = {
		liczbaGodzin: 220,
		cena: 5000,
	};
	kursJs = {
		liczbaGodzin: 150,
		cena: 3000,
	};
	if (checkboxReact.checked && checkboxJs.checked) {
		cenaZaWszystko = kursReact.cena + kursJs.cena;
	} else if (checkboxJs.checked) {
		cenaZaWszystko = kursJs.cena;
	} else if (checkboxReact.checked) {
		cenaZaWszystko = kursReact.cena;
	} else {
		cenaZaWszystko = 0;
	}
	let raty = parseInt(liczbaRat.value);
	let kosztJednejRaty = cenaZaWszystko / raty;

	if (isNaN(kosztJednejRaty)) {
		alert("Wybierz ilość rat");
	} else {
		komunikat.textContent = `Kurs odbędzie się w ${miasta.value}. Koszt całkowity: ${cenaZaWszystko}zł. Płacisz ${raty} rat po ${kosztJednejRaty.toFixed(2)}zł`;
	}
});
