import styles from "./ImagesModal.module.css"
import LoadingAnim from "../LoadingAnim/LoadingAnim"
import lazyImage from "../../assets/images/lazyImage.png"
const ImagesList = ({ images, handleSelect }) => {

    return (

        images &&

        images.map((image, index) => {

            let source = image.file && typeof image?.file === 'object' ? URL.createObjectURL(image?.file) : image?.file;
            return (


                <>

                    <div className={styles.image_wrapper}
                        style={{
                            backgroundImage: `url(${lazyImage})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat"
                        }}>
                        {
                            image?.uploadingImage || !image.uploadedImage ?
                                <>
                                    <img

                                        loading="lazy"
                                        key={index}
                                        onClick={() => handleSelect(source)}
                                        src={lazyImage} alt="post_image" />

                                    <div className={styles.loading_wrapper}>

                                        <LoadingAnim className={styles.snipper} />
                                        <p
                                            style={{ fontSize: "1rem", textWrap: "nowrap" }}
                                        >uploding {`${image?.file?.name?.substring(0, 10)} ...`}</p>
                                    </div>
                                </>


                                :
                                <img
                                    style={{ cursor: "pointer" }}
                                    className={image?.isSelected ? styles.selected_image : ""}
                                    onClick={image.uploadedImage ? () => handleSelect(index, image) : ""}
                                    loading="lazy"
                                    key={index}
                                    //onClick={() => handleSelect(source)}
                                    src={source} alt="post_image" />
                        }

                    </div >
                </>

            )

        })

    )
}

export default ImagesList
