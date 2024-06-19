
## Installation

```sh
npm i react-drag-bottom-sheet
```
[Live Demo](https://codesandbox.io/p/sandbox/react-drag-bottom-sheet-d37d2h?layout=%257B%2522sidebarPanel%2522%253A%2522EXPLORER%2522%252C%2522rootPanelGroup%2522%253A%257B%2522direction%2522%253A%2522horizontal%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522id%2522%253A%2522ROOT_LAYOUT%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522clxlrab8h00062v6kkg0hnfrl%2522%252C%2522sizes%2522%253A%255B100%252C0%255D%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522EDITOR%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522id%2522%253A%2522clxlrab8h00022v6kxw4ng49b%2522%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522SHELLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522id%2522%253A%2522clxlrab8h00032v6k7ne63rw2%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522DEVTOOLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522id%2522%253A%2522clxlrab8h00052v6kyh4ykh5x%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%252C%2522sizes%2522%253A%255B50%252C50%255D%257D%252C%2522tabbedPanels%2522%253A%257B%2522clxlrab8h00022v6kxw4ng49b%2522%253A%257B%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522clxlrab8h00012v6kx4mw40tn%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522FILE%2522%252C%2522filepath%2522%253A%2522%252Fsrc%252Findex.js%2522%257D%255D%252C%2522id%2522%253A%2522clxlrab8h00022v6kxw4ng49b%2522%252C%2522activeTabId%2522%253A%2522clxlrab8h00012v6kx4mw40tn%2522%257D%252C%2522clxlrab8h00052v6kyh4ykh5x%2522%253A%257B%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522clxlrab8h00042v6kx29vn2iy%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522UNASSIGNED_PORT%2522%252C%2522port%2522%253A0%252C%2522path%2522%253A%2522%252F%2522%257D%255D%252C%2522id%2522%253A%2522clxlrab8h00052v6kyh4ykh5x%2522%252C%2522activeTabId%2522%253A%2522clxlrab8h00042v6kx29vn2iy%2522%257D%252C%2522clxlrab8h00032v6k7ne63rw2%2522%253A%257B%2522tabs%2522%253A%255B%255D%252C%2522id%2522%253A%2522clxlrab8h00032v6k7ne63rw2%2522%257D%257D%252C%2522showDevtools%2522%253Atrue%252C%2522showShells%2522%253Afalse%252C%2522showSidebar%2522%253Atrue%252C%2522sidebarPanelSize%2522%253A15%257D)



## Props

| Props | Description |
| ------ | ------ |
| children | Content displayed under the bottom sheet. |
| isOpen | Specifies if the bottom sheet is open by default.|
| shouldCloseOnOverlayClick |  Closes the bottom sheet when clicking on the overlay. |
| shouldCloseOnEsc | Closes the bottom sheet when pressing the escape key. |
| overlayClassName | Adds a class name to the overlay. |
| onAfterClose| Callback function executed after the bottom sheet closes. |
| className |  Adds a class name to the bottom sheet's parent element.|



## Example

```jsx static
import React, { useRef } from 'react';
import ReactDragBottomSheet from "react-drag-bottom-sheet";

const App = () => {
    const ref =  useRef(null)
    const open = () => {
        if(ref?.current) {
            ref?.current?.open()
        }
    };

    return (
        <div className="App">
             <button onClick={open} className="open-button">
                Open Bottom Sheet
            </button>

            <ReactDragBottomSheet ref={ref}>
                <>
                    <p> Bottom sheet children</p>
                </>
            </ReactDragBottomSheet>

        </div>
    );
};
export default App;

```
