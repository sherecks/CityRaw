export function createButton(text, top, left) {
    const buttonElement = document.createElement('button');
    buttonElement.textContent = text;
    buttonElement.style.position = 'fixed';
    buttonElement.style.top = top;
    buttonElement.style.left = left;
    buttonElement.style.backgroundColor = 'black';
    buttonElement.style.padding = '5px'
    buttonElement.style.color = 'white';
    buttonElement.style.fontSize = '10px';
    buttonElement.style.border = '3px solid gray';
    buttonElement.style.borderRadius = '10px';
    buttonElement.style.fontFamily = "'Martian Mono', monospace"; 
    buttonElement.style.cursor = 'pointer'; 
    document.body.appendChild(buttonElement); 

    return buttonElement;
}

export function createStyleButton(text, top, left){
    const buttonElement = document.createElement('button');
    buttonElement.textContent = text;
    buttonElement.style.position = 'fixed';
    buttonElement.style.top = top;
    buttonElement.style.left = left;
    buttonElement.style.color = '#CD0909';
    buttonElement.style.fontSize = '25px';
    buttonElement.style.fontFamily = "'Martian Mono', monospace"; 
    buttonElement.style.border = '3px solid black';
    //buttonElement.style.background = 'none';
    buttonElement.style.cursor = 'pointer'; 
    document.body.appendChild(buttonElement); 

    return buttonElement;
}