import { Styles } from "../../utils/styles"
import style from "./stylesBar.module.css"


export default function StylesBar({ children }) {
    return (
        <div className={style.styles_wrapper}>
            {
                Styles.map((style, index) => (
                    <>
                        <span key={style.styleName}>
                            <style.styleIcon />
                        </span>
                        {
                            style.options ?
                                style.options.map((option) => {
                                    return (<p>
                                        {option[Object.keys(option)[0]]}
                                    </p>)
                                })
                                :
                                null
                        }
                    </>
                ))
            }
            {children}
        </div>
    )
}
