const preview = document.getElementsByClassName('preview')[0];
let measure = document.getElementById('measure').value;

function start(changedField) {
    const checkbox = document.getElementById('sameValue');
    const changedFieldValue = changedField.value

    checkbox.checked === true ? changeAllBorderRadius(changedField) : changeBorderRadius(changedField.id, changedFieldValue);

}

function changeAllBorderRadius(changedField) {
    const newValue = changedField.value;
    const fields = [
        "topLeftRadius",
        "topRightRadius",
        "bottomLeftRadius",
        "bottomRightRadius"
    ];

    fields.forEach(field => {
        let element = document.getElementById(field);
        element.value = newValue;
    })

    preview.style.borderRadius = newValue + measure;
}

function changeBorderRadius(element, value) {

    switch (element) {
        case "topLeftRadius":
            preview.style.borderTopLeftRadius = value + measure;
            break;
        case "topRightRadius":
            preview.style.borderTopRightRadius = value + measure;
            break;
        case "bottomLeftRadius":
            preview.style.borderBottomLeftRadius = value + measure;
            break;
        case "bottomRightRadius":
            preview.style.borderBottomRightRadius = value + measure;
            break;
        default: break;
    }

}

function updateMeasure(newMeasure) {
    measure = newMeasure;
    changeBorderRadius('topLeftRadius', document.getElementById('topLeftRadius').value);
    changeBorderRadius('topRightRadius', document.getElementById('topRightRadius').value);
    changeBorderRadius('bottomLeftRadius', document.getElementById('bottomLeftRadius').value);
    changeBorderRadius('bottomRightRadius', document.getElementById('bottomRightRadius').value);
}

