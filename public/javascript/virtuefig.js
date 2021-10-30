const imgHolder = document.getElementById('viewHolder')
const saveHolder = []
function changeFunc(htmlObject) {
    console.log(htmlObject)
    var selectedValue = JSON.parse(htmlObject.value);
    saveHolder[htmlObject.slot] = {}
    saveHolder[htmlObject.slot].imgSrc = selectedValue.imgSrc
    saveHolder[htmlObject.slot].docId = selectedValue.docId
    saveHolder[htmlObject.slot].name = selectedValue.innerhtml
    var imageElement = document.getElementById(selectedValue.docId);
    imageElement.src = selectedValue.imgSrc;
    console.log(saveHolder)
   }

