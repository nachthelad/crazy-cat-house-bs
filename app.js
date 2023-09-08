const input = document.getElementById("customFile");
const fileList = document.getElementById("fileList");

input.addEventListener("change", function () {

  // Obtiene la lista de archivos seleccionados
  const files = input.files;
  
  let fileListText = '';

  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    const fileName = file.name;
  
  // Crea un elemento div para contener el nombre del archivo y la "X"
  const fileContainer = document.createElement('div');
  fileContainer.className = "d-inline-flex";

  // Agrega el nombre del archivo al contenedor
  const fileNameSpan = document.createElement('span');
  fileNameSpan.textContent = fileName;
  fileContainer.appendChild(fileNameSpan);

  // Agrega una "X" al contenedor
  const deleteButton = document.createElement('span');
  deleteButton.textContent = 'X';
  deleteButton.className = 'ml-1 mr-2'; 
  deleteButton.style.cursor = 'pointer'; 

  // Agrega un controlador de eventos de clic para eliminar el archivo
  deleteButton.addEventListener('click', function() {
    fileContainer.remove(); // Elimina el contenedor cuando se hace clic en la "X"
  });

  fileContainer.appendChild(deleteButton);

  // Agrega el elemento de archivo al elemento donde mostrar la lista de archivos
  fileList.appendChild(fileContainer);
}
});
