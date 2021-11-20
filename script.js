function start(changedField){
    const checkbox = document.getElementById('sameValue');

    if(checkbox.checked){
        changeAllBorderRadius(changedField);
    }
}

function changeAllBorderRadius(changedField){
    const newValue = changedField.value;
    const fields = [
        "topLeftRadius",
        "topRightRadius",
        "bottomLeftRadius",
        "bottomRightRadius"
    ];

    fields.forEach(field => {
        const element = document.getElementById(field);
        element.value = newValue;
    })

    document.getElementsByClassName('preview')[0].style.borderRadius = newValue;
}

// function changeBorderRadius(element, value) {
//     element.style.borderRadius = value + 'px';
// }

