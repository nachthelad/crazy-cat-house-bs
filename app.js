const input = document.getElementById("customFile");
const fileList = document.getElementById("fileList");


input.addEventListener("change", function () {
  // Obtiene la lista de archivos seleccionados
  const files = input.files;

  // let fileListText = '';

  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    const fileName = file.name;

    // Crea un elemento div para contener el nombre del archivo y la "X"
    const fileContainer = document.createElement("div");
    fileContainer.className = "d-block";

    // Agrega el nombre del archivo al contenedor
    const fileNameSpan = document.createElement("span");
    fileNameSpan.textContent = fileName;
    fileContainer.appendChild(fileNameSpan);

    // Agrega una "X" al contenedor
    const deleteButton = document.createElement("span");
    deleteButton.textContent = "X";
    deleteButton.className = "ml-1 mr-2";
    deleteButton.style.cursor = "pointer";

    // Agrega un controlador de eventos de clic para eliminar el archivo
    deleteButton.addEventListener("click", function () {
      fileContainer.remove(); // Elimina el contenedor cuando se hace clic en la "X"
    });

    fileContainer.appendChild(deleteButton);

    // Agrega el elemento de archivo al elemento donde mostrar la lista de archivos
    fileList.appendChild(fileContainer);
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const agreeButton = document.getElementById("agreeBtn");
  const divToHide = document.getElementById("divToHide");
  const agreeP = document.getElementById("agreeP");

  agreeButton.addEventListener("click", e => {
    Swal.fire({
      icon: "warning",
      title: "Recuerda...",
      text: "Adoptar un gatito es una gran responsabilidad",
      footer: "Crazy Cat House",
      showCancelButton: true,
      confirmButtonText: "OK",
      cancelButtonText: "Me arrepenti",
    }).then((result) => {
      if (result.isConfirmed) {
        const isHidden = divToHide.classList.contains("hidden");
        if (isHidden) {
          divToHide.classList.remove("hidden");
          agreeP.classList.add("hidden");
          agreeButton.classList.add("hidden");
        } else {
          divToHide.classList.add("hidden");
        }
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const mpBtn = document.getElementById("mpBtn");
  const cryptoBtn = document.getElementById("cryptoBtn");

  // Función para copiar texto al portapapeles
  function copyTextToClipboard(text) {
    const tempInput = document.createElement("input");
    tempInput.value = text;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
  }

  mpBtn.addEventListener('click', () => {
    Swal.fire({
      title: 'Alias',
      html: 'iventura.mp <i class="fa-regular fa-copy fa-sm copyBtn" id="mpCopyIcon"></i>',
      confirmButtonText: '¡Listo!'
    });

    const mpCopyIcon = document.getElementById('mpCopyIcon');
    mpCopyIcon.addEventListener('click', () => {
      const textToCopy = 'iventura.mp';
      copyTextToClipboard(textToCopy);
      Swal.fire('Texto copiado', '', 'success');
    });
  });

  cryptoBtn.addEventListener('click', () => {
    Swal.fire({
      title: 'Wallet',
      html: '0xFCdf4865Ef48A401f5Ed4eB53F1874C7047e51d1 <i class="fa-regular fa-copy fa-sm copyBtn" id="cryptoCopyIcon"></i>',
      confirmButtonText: '¡Listo!'
    });

    const cryptoCopyIcon = document.getElementById('cryptoCopyIcon');
    cryptoCopyIcon.addEventListener('click', () => {
      const textToCopy = '0xFCdf4865Ef48A401f5Ed4eB53F1874C7047e51d1';
      copyTextToClipboard(textToCopy);
      Swal.fire('Texto copiado', '', 'success');
    });
  });
});