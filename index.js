//Start Periksa
const menuPeriksa = document.querySelector('#MenuPeriksa');
const Periksa = document.querySelector('#Periksa');

menuPeriksa.addEventListener('click', function () {
	Periksa.classList.toggle('Periksa');
});

//End Periksa

//Start Diagnos
const menuDiagnos = document.querySelector('#MenuDiagnos');
const Diagnos = document.querySelector('#Diagnos');

menuDiagnos.addEventListener('click', function () {
	Diagnos.classList.toggle('content');
    HistoryDiagnosa.classList.remove(`HistoryDiagnosa`);
    DaftarPenyakit.classList.remove(`DaftarPenyakit`);
});

const closeDiagnos = document.querySelector('#backDiagnos');

closeDiagnos.addEventListener(`click`, function () {
	Diagnos.classList.remove(`content`);
});
//End Diagnos

//Start Menu History Diagnosa
const menuHistoryDiagnosa = document.querySelector('#MenuHistoryDiagnosa');
const historyDiagnosa = document.querySelector('#HistoryDiagnosa');

menuHistoryDiagnosa.addEventListener('click', function () {
	historyDiagnosa.classList.toggle('HistoryDiagnosa');
    Diagnos.classList.remove(`content`);
    DaftarPenyakit.classList.remove(`DaftarPenyakit`);
});

const closeHistoryDiagnosa = document.querySelector('#backHistoryDiagnosa');

closeHistoryDiagnosa.addEventListener(`click`, function () {
	HistoryDiagnosa.classList.remove(`HistoryDiagnosa`);
});
//End History Diagnosa

//Start Detail
const menuDetail = document.querySelector('#MenuDetail');
const Detail = document.querySelector('#DtHistoryDs');

menuDetail.addEventListener('click', function () {
	Detail.classList.toggle('DtHistoryDs');
});

const closeDetail = document.querySelector('#backDetail');

closeDetail.addEventListener(`click`, function () {
	Detail.classList.remove(`DtHistoryDs`);
});
//End Detail

//Start Daftar Penyakit
const menuDaftarPenyakit = document.querySelector('#MenuDaftarPenyakit');
const DaftarPenyakit = document.querySelector('#DaftarPenyakit');

menuDaftarPenyakit.addEventListener('click', function () {
	DaftarPenyakit.classList.toggle('DaftarPenyakit');
    Diagnos.classList.remove(`content`);
    HistoryDiagnosa.classList.remove(`HistoryDiagnosa`);

});

const closeDaftarPenyakit = document.querySelector('#backDaftarPenyakit');

closeDaftarPenyakit.addEventListener(`click`, function () {
	DaftarPenyakit.classList.remove(`DaftarPenyakit`);
});
//End Daftar
