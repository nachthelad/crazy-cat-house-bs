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
  // Constantes
  const ALIAS_TEXT = 'iventura.mp';
  const WALLET_TEXT = '0xFCdf4865Ef48A401f5Ed4eB53F1874C7047e51d1';

  // Función para copiar texto al portapapeles
  async function copyTextToClipboard(text) {
    try {
      await navigator.clipboard.writeText(text);
      console.log("Texto copiado al portapapeles");
      Swal.fire('Texto copiado', '', 'success');
    } catch (err) {
      console.error("No se pudo copiar el texto: ", err);
    }
  }

  // Función para manejar los clics de copiar
  function handleCopyClick(textToCopy) {
    copyTextToClipboard(textToCopy);
  }

  // Manejo de evento para botones
  document.addEventListener('click', function(e) {
    if (e.target.id === "mpBtn") {
      Swal.fire({
        title: 'Alias',
        html: `${ALIAS_TEXT} <i class="fa-regular fa-copy fa-sm copyBtn" data-text="${ALIAS_TEXT}" data-toggle="tooltip" data-placement="top" title="Copiar" ></i>`,
        showConfirmButton: false
      });
    }

    if (e.target.id === "cryptoBtn") {
      Swal.fire({
        title: 'Wallet',
        html: `${WALLET_TEXT} <i class="fa-regular fa-copy fa-sm copyBtn" data-text="${WALLET_TEXT}" data-toggle="tooltip" data-placement="top" title="Copiar" ></i>`,
        showConfirmButton: false
      });
    }

    // Verificar si se hizo clic en un ícono de copia
    if (e.target.classList.contains('copyBtn')) {
      const textToCopy = e.target.getAttribute('data-text');
      handleCopyClick(textToCopy);
    }
  });
});

// Inicializando todos los tooltips
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})