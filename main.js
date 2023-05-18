//enable the extension
// cursor on click check for cursors
//Screenshot floating on page
// start infinitely repeating


// Get the body element
// const body = document.documentElement;

// let startX, startY;


// // Mouse event handlers
// body.addEventListener('mousedown', handleMouseDown);
// body.addEventListener('mouseup', handleMouseUp);

// // Mouse down event handler
// function handleMouseDown(event) {
//     startX = event.clientX;
//     startY = event.clientY;

//     // Add mouse move event listener
//     body.addEventListener('mousemove', handleMouseMove);
// }

// // Mouse move event handler
// function handleMouseMove(event) {
//     // Clear any existing selection rectangle
//     const selection = document.getElementById('selection-rectangle');
//     if (selection) {
//         selection.remove();
//     }

//     // Create a selection rectangle element
//     const selectionRectangle = document.createElement('div');
//     selectionRectangle.id = 'selection-rectangle';
//     selectionRectangle.style.position = 'absolute';
//     selectionRectangle.style.top = startY + 'px';
//     selectionRectangle.style.left = startX + 'px';
//     selectionRectangle.style.width = event.clientX - startX + 'px';
//     selectionRectangle.style.height = event.clientY - startY + 'px';
//     selectionRectangle.style.border = '2px dashed red';
//     selectionRectangle.style.background = 'rgba(255, 0, 0, 0.2)';

//     // Append the selection rectangle to the body
//     body.appendChild(selectionRectangle);
// }

// // Mouse up event handler
// function handleMouseUp(event) {
//     // Remove the mouse move event listener
//     body.removeEventListener('mousemove', handleMouseMove);

//     // Get the selection rectangle element
//     const selection = document.getElementById('selection-rectangle');

//     // Capture a screenshot of the selection using HTML2Canvas
//     html2canvas(body, {
//         windowWidth: body.scrollWidth,
//         windowHeight: body.scrollHeight,
//         x: selection.offsetLeft,
//         y: selection.offsetTop,
//         width: selection.offsetWidth,
//         height: selection.offsetHeight,
//     }).then(canvas => {
//         // Display the screenshot in a new window/tab
//         const screenshotUrl = canvas.toDataURL();
//         setTimeout(() => {
//             window.open(screenshotUrl);
//         }, 100)
//     });
//     // Remove the selection rectangle
//     if (selection) {
//         selection.remove();
//     }
// }

