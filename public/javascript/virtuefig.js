const saveHolder = []
function changeFunc(htmlObject) {
    let selectedValue = JSON.parse(htmlObject.value);
    let imageElement = document.getElementById(selectedValue.docId);
    saveHolder[htmlObject.slot] = {}
    saveHolder[htmlObject.slot].imgSrc = selectedValue.imgSrc
    saveHolder[htmlObject.slot].docId = selectedValue.docId
    saveHolder[htmlObject.slot].name = selectedValue.innerhtml
    imageElement.src = selectedValue.imgSrc;
   }

