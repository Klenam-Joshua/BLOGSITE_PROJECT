import { useEffect, useRef, useState } from "react"
import style from "./stylesBar.module.css"
import { EditorState } from "draft-js"
import { Editor } from "react-draft-wysiwyg"
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css"
import ReactQuill from "react-quill"
import "react-quill/dist/quill.snow.css"


export default function StylesBar({ children, editorRef, highlightedElements, setNewStyle }) {
    //   const [styles, setStyles] = useState(Styles)

    const [editorstate, setEditorState] = useState(() => EditorState.createEmpty())

    const modules = {
        toolbar: [[{ header: [1, 2, 3, 4, 5, 6, false] }],
        ["bold", "italic", "underline", "strike", "blockquote"],
        [{ size: ["20px", "40px"] }],
        [{ align: ["right", "center", "justify"] }],
        [{ list: "ordered" }, { list: "bullet" }],
        ["link", "image"],
        [{ color: ["red", "green", "black", "white", "purple", "blue", "indigo", "brown"] }],
        [{ background: ["red", "green", "black", "white", "purple", "blue", "indigo", "brown"] }]

        ]
    }

    const format = [
        "bold",
        "italic",
        "underline",
        "strike",
        "align",
        "font",
        "size",
        "list",
        "link"
    ]

    useEffect(() => {
        console.log(editorRef.current.getEditor().container)

    }, [])


    return (
        <div className={style.styles_wrapper} style={{ minHeight: "60dvh" }}>
            {children}
            <ReactQuill
                ref={editorRef}
                theme="snow"
                modules={modules}
                format={format}

            />



        </div >
    )
}
