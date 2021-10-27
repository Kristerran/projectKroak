const imgHolder = document.getElementById('viewHolder')

function changeFunc(htmlObject) {
    console.log(htmlObject)
    var selectedValue = JSON.parse(htmlObject.value);
    console.log(selectedValue)
    console.log(selectedValue.imgSrc)
    console.log(selectedValue.docId)
    var imageElement = document.getElementById(selectedValue.docId);
    imageElement.src = selectedValue.imgSrc;
   }

//    [
//     {'imgSrc' : '{{this.image_src}}'},
//     {'docId' : '{{this.question_id}}'}
//     ]