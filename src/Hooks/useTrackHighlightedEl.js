import { useState } from "react";

export const useTrackHighlightedEl = () => {
    const [highlightedElements, setHighlightedElements] = useState(null);

    function handleMouseUp() {
        let selection = window.getSelection();

        if (selection.rangeCount > 0) {


            let range = selection.getRangeAt(0);

            if (range.startContainer === range.endContainer) {
                let highlightedElement = range.commonAncestorContainer;


                setHighlightedElements({ hElement: highlightedElement.parentElement, isSingle: true })
                return;


            }


            if (range.startContainer.nodeType === Node.ELEMENT_NODE) {
                let highlightedElement = range.startContainer;
                // applyStyleToElement();
            }


            else {

                let fragment = range.cloneContents();


                let tempDiv = document.createElement('div');
                tempDiv.appendChild(fragment);


                let highlightedHTML = tempDiv.innerHTML;

                let highlightedDiv = document.createElement('div');
                highlightedDiv.innerHTML = highlightedHTML;
                console.log(highlightedDiv)

                setHighlightedElements({ hElement: highlightedDiv, isSingle: false })

            }
        }
    }

    const getPrevStyle = (ele) => {
        let compdStyle = window.getComputedStyle(ele);
        return Array.from(compdStyle).map((property) => {
            return (`${property}:${compdStyle.getPropertyValue(property)}`)
        }).join(";")
    }


    function setNewStyle(selectedEl, postRef, style) {

        if (selectedEl.isSingle) {


            let ele = selectedEl.hElement;
            console.log(ele.style)
            let prevStyles = getPrevStyle(ele);
            let combinedStyles = `${prevStyles}; ${styleToString(style)}`

            const modifiedContent1 = postRef.current.innerHTML.replace(ele.outerHTML, `<p style="${combinedStyles}">${ele.innerHTML}</p>`);

            postRef.current.innerHTML = modifiedContent1;
            return;
        }

        selectedEl.hElement.querySelectorAll('*').forEach(ele => {
            let prevStyles = getPrevStyle(ele);
            let combinedStyles = `${prevStyles}; ${styleToString(style)}`
            const modifiedContent1 = postRef.current.innerHTML.replace(ele.outerHTML, `<p style="${combinedStyles}">${ele.innerHTML}</p>`);

            postRef.current.innerHTML = modifiedContent1;

        });
        // Use React state to manage styles]
        // setPostContent(prevContent => {
        //   const modifiedContent = prevContent.replace(element.outerHTML, `<span style="color: ${color};">${element.innerHTML}</span>`);
        //   return modifiedContent;
        // });

        //   postRef.current.innerHTML = modifiedContent1;
    }

    const styleToString = (styleObject) => {

        return Object.keys(styleObject).map((property) => {
            let original = property;
            const length = original.length
            let extracted = ""
            console.log(original.length)
            for (let i = 0; i < length; i++) {

                extracted = original[i];


                if (extracted.toUpperCase() == original[i]) {

                    property = original.split(original[i]).join(`-${original[i]}`)

                }

            }
            console.log(original, property)
            return `${property}:${styleObject[original]}`
        }).join(";")
    }

    return { highlightedElements, setNewStyle, handleMouseUp }
}