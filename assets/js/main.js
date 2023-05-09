// Membuat fungsi untuk mengubah warna latar belakang

function changeBackgroundColor(color) {

  document.body.style.backgroundColor = color;

}

// Membuat fungsi untuk menampilkan pesan di console

function logMessage(message) {

  console.log(message);

}

// Membuat fungsi untuk menyembunyikan elemen HTML

function hideElement(element) {

  element.style.display = 'none';

}

// Membuat fungsi untuk menampilkan elemen HTML

function showElement(element) {

  element.style.display = 'block';

}

// Membuat fungsi untuk memuat file JSON dengan AJAX

function loadJSON(url, callback) {

  var xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function() {

    if (xhr.readyState === XMLHttpRequest.DONE) {

      if (xhr.status === 200) {

        var response = JSON.parse(xhr.responseText);

        callback(response);

      } else {

        console.log('Error loading JSON file');

      }

    }

  };

  xhr.open('GET', url, true);

  xhr.send();

}

// Membuat fungsi untuk mengambil nilai input dari elemen HTML

function getInputValue(inputElement) {

  return inputElement.value;

}

// Membuat fungsi untuk menambahkan kelas CSS pada elemen HTML

function addClass(element, className) {

  element.classList.add(className);

}

// Membuat fungsi untuk menghapus kelas CSS pada elemen HTML

function removeClass(element, className) {

  element.classList.remove(className);

}


