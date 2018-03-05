function loadModal() {
  document.getElementsByClassName('modal-wrapper')[0].style.display = 'block';
}

function closeModal() {
  
  if (name.length >= 0) {
    document.getElementById('name').innerHTML = name;
    checkedImage = document.querySelector('input[name=avatar][checked]').value;
    document.getElementById('avatar').src = checkedImage;
  }

  document.getElementsByClassName('modal-wrapper')[0].style.display = 'none';
}
