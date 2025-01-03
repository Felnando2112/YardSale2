import {useState} from "react";
import { ArrowBigLeft, ArrowBigRight,CircleDot,Circle} from "lucide-react";
import "../styles/ProductCarousel.css";


type ImageSliderProps = {
    products: {
      url: string
      alt: string
    }[]
  }

  interface Props {
    products: {
      url: string
      alt: string
    }[]
    tense : string
  }


const ProductCarousel = (props : Props) => {
    const [imageIndex, setImageIndex] = useState(0)

    function showNextImage() {
      setImageIndex(index => {
        if (index === props.products.length - 1) return 0
        return index + 1
      })
    }
  
    function showPrevImage() {
      setImageIndex(index => {
        if (index === 0) return props.products.length - 1
        return index - 1
      })
    }
  
    return (
      <section
        aria-label="Image Slider"
        style={{ width: "100%", height: "100%", position: "relative" }}
      >
        <h2>{props.tense}</h2>
        <a href="#after-image-slider-controls" className="skip-link">
          Skip Image Slider Controls
        </a>
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            overflow: "hidden"
          }}
        >
          {props.products.map(({ url, alt}, index) => (
            <img
              key={url}
              src={url}
              alt={alt}
              aria-hidden={imageIndex !== index}
              className="img-slider-img"
              style={{ translate: `${-100 * imageIndex}%` }}
            />
          ))}
          </div>
      <button
        onClick={showPrevImage}
        className="img-slider-btn"
        style={{ left: 0 }}
        aria-label="View Previous Image"
      >
        <ArrowBigLeft aria-hidden />
      </button>
      <button
        onClick={showNextImage}
        className="img-slider-btn"
        style={{ right: 0 }}
        aria-label="View Next Image"
      >
        <ArrowBigRight aria-hidden />
      </button>
      <div
        style={{
          position: "absolute",
          bottom: ".5rem",
          left: "50%",
          translate: "-50%",
          display: "flex",
          gap: ".25rem",
        }}
      >
        {props.products.map((_, index) => (
          <button
            key={index}
            className="img-slider-dot-btn"
            aria-label={`View Image ${index + 1}`}
            onClick={() => setImageIndex(index)}
          >
            {index === imageIndex ? (
              <CircleDot aria-hidden />
            ) : (
              <Circle aria-hidden />
            )}
          </button>
        ))}
      </div>
      <div id="after-image-slider-controls" />
    </section>
    )

}




export default ProductCarousel;