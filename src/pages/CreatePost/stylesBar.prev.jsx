import { useRef, useState } from "react"
import style from "./stylesBar.module.css"
import { EditorState } from "draft-js"
import { Editor } from "react-draft-wysiwyg"
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css"



export default function StylesBar({ children, postRef, highlightedElements, setNewStyle }) {
    //   const [styles, setStyles] = useState(Styles)
    const editorRef = useRef(null)
    const [editorstate, setEditorState] = useState(() => EditorState.createEmpty())

    return (
        <div className={style.styles_wrapper} style={{ minHeight: "60dvh" }}>

            <Editor

            />


            {
                styles.map((styl, index) => (
                    <div key={index}>
                        <span
                            //postRef, element, color
                            onClick={() => {
                                console.log(styl.style)
                                console.log(highlightedElements)
                                setNewStyle(highlightedElements, postRef, styl.style)

                                setStyles(prevStyle => {
                                    const updatedStyles = [...prevStyle];
                                    let updatedStyle = { ...prevStyle[index] }

                                    if (updatedStyle.options) {
                                        console.log(updatedStyle.open)
                                        updatedStyle.open = !updatedStyle.open;
                                    }

                                    updatedStyles[index] = updatedStyle;

                                    return updatedStyles;

                                })
                            }

                            }

                        >
                            <styl.styleIcon />
                        </span>
                        {

                            //+
                            styl.options && styl.open ?

                                <div className={`${style.options_container}  ${style[styl.styleName]}`}>
                                    {
                                        styl.options.map((option, index) => {
                                            return (<p key={index}>

                                                {option[Object.keys(option)[0]]}
                                            </p>)
                                        })
                                    }
                                </div>
                                :
                                null
                        }

                    </div>
                ))
            }
            {children}
        </div >
    )
}
