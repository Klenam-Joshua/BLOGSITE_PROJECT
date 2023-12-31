import { Icons } from "./icons"


const {
    boldIcon,
    videoIcon,
    underlineIcon,
    fontFamily,
    fontSize,
    fontColor,
    unorderedList,
    orderedList
} = Icons;



export const Styles = [
    {
        styleName: "fontStyle",
        styleIcon: boldIcon,
        style: { fontStyle: "bolder" },
    },

    {
        styleName: "textDecoration",
        styleIcon: underlineIcon,
        style: { textDecoration: "underline" }
    },

    {
        styleName: "orderedList",
        styleIcon: orderedList,
        style: "<ol><ol>"
    },

    {
        styleName: "unorderedList",
        styleIcon: unorderedList,
        style: "<ul><ul>"
    },


    {
        styleName: "fontSize",
        styleIcon: fontSize,
        options: [
            {
                fontSizeName: "16px",
                fontSize: "16px"
            },
            {
                fontSizeName: "32px",
                fontSize: "32px"
            },
            {
                fontSizeName: "44px",
                fontSize: "44px"
            },

        ]
    },
    {
        styleName: "fontFamily",
        styleIcon: fontFamily,

        options: [
            {
                fontFamilyName: "arial",
                fontFamily: "arial"
            },
            {
                fontFamilyName: "sans-serif",
                fontFamily: "sans-serif",
            },
            {
                fontFamilyName: "serif",
                fontFamily: "serif"
            }
        ]
    }

]