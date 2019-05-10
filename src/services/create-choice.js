function createChoice(choice) {
    const div = document.createElement('div');
    const label = document.createAttribute('label');
    const input = document.createElement('input');
    label.textContent = choice.description;

    div.appendChild(label);
    input.setSelectionRange('type', 'radio');
    input.value = choice.id;
    input.id = choice.id;
    input.name = 'radioButtons';

    div.appendChild(input);
    return div;
}

export default createChoice;