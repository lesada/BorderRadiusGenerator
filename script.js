const preview = document.getElementsByClassName('preview')[0];
const fields = [
    "topLeftRadius",
    "topRightRadius",
    "bottomLeftRadius",
    "bottomRightRadius"
];
let myCss = document.getElementById('myCss');
let measure = document.getElementById('measure').value;
let isThisEqual = true;


function start(changedField) {


    const checkbox = document.getElementById('sameValue');
    const changedFieldValue = changedField.value;

    checkbox.checked === true ? changeAllBorderRadius(changedField) : changeBorderRadius(changedField.id, changedFieldValue);
    getStyle();
}



function changeAllBorderRadius(changedField) {
    const newValue = changedField.value;

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

function isEqual() {
    let topLeftRadiusValue = document.getElementById('topLeftRadius').value;
    let topRightRadiusValue = document.getElementById('topRightRadius').value;
    let bottomLeftRadiusValue = document.getElementById('bottomLeftRadius').value;
    let bottomRightRadiusValue = document.getElementById('bottomRightRadius').value;

    fields.forEach(field => {
        let element = document.getElementById(field).value;
        if ((element !== bottomRightRadiusValue) || (element !== bottomLeftRadiusValue) || (element !== topRightRadiusValue) || (element !== topLeftRadiusValue)) {
            isThisEqual = false;
        }
        else {
            isThisEqual = true;
        }
    })
}

function getStyle() {
    // using window.getComputedStyle(preview).getPropertyValue('border-radius') limited the measures to px and %
    isEqual();
    if (isThisEqual === true) {
        myCss.value = `element {
        border-radius: ${document.getElementById('topLeftRadius').value}${measure}
    }`
    }
    else if (isThisEqual === false) {
        myCss.value = `element {
        border-top-left-radius: ${document.getElementById('topLeftRadius').value}${measure};
        border-top-right-radius: ${document.getElementById('topRightRadius').value}${measure};
        border-bottom-left-radius: ${document.getElementById('bottomLeftRadius').value}${measure};
        border-bottom-right-radius: ${document.getElementById('bottomRightRadius').value}${measure};
    }`
    }
}

function updateMeasure(newMeasure) {
    measure = newMeasure;
    changeBorderRadius('topLeftRadius', document.getElementById('topLeftRadius').value);
    changeBorderRadius('topRightRadius', document.getElementById('topRightRadius').value);
    changeBorderRadius('bottomLeftRadius', document.getElementById('bottomLeftRadius').value);
    changeBorderRadius('bottomRightRadius', document.getElementById('bottomRightRadius').value);

    getStyle();
}
