import React, {useState} from "react";

type CarouselProps = {
    props: { src: string, title: string, text:string }[];
}

const Shop = () => {
    const Carousel: React.FC<CarouselProps> = ({ props }) => {
        const [currentIndex, setCurrentIndex] = useState(0);

        const handlePrev = () => {
            setCurrentIndex((prevIndex) => (prevIndex === 0 ? props.length - 1 : prevIndex - 1));
        };

        const handleNext = () => {
            setCurrentIndex((prevIndex) => (prevIndex === props.length - 1 ? 0 : prevIndex + 1));
        };

        return (
            <div className="relative w-full max-w-3xl mx-auto">
                <a href='/Safety-Products'>
                    <div className="overflow-hidden md:rounded-xl relative">
                        <img src={props[currentIndex].src} alt={`Slide ${currentIndex}`}
                             className="w-full h-96 object-contain"/>
                        <div className="overlay text-white p-10">
                            <h2 className="text-4xl">{props[currentIndex].title}</h2>
                            <pre className="text-2xl leading-9">{props[currentIndex].text}</pre>
                        </div>
                    </div>
                </a>
                <button
                    onClick={handlePrev}
                    className="absolute top-1/2 transform -translate-y-1/2 left-0 bg-black/60 text-white ms-1 p-2 rounded-full hover:bg-gray-600"
                >
                    &#9664;
                </button>
                <button
                    onClick={handleNext}
                    className="absolute top-1/2 transform -translate-y-1/2 right-0 bg-black/60 text-white me-1 p-2 rounded-full hover:bg-gray-600"
                >
                    &#9654;
                </button>
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {props.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-white' : 'bg-black/80'}`}
                        />
                    ))}
                </div>
            </div>
        );
    };

    const props = [
        { src: 'https://cdn11.bigcommerce.com/s-s2do0/images/stencil/1280x1280/products/1119/4143/61mkxgtxxWL__47363.1710189944.jpg?text=Slide+1',
            title: 'Traffic Cones',
            text: ` 18″ – 3# Reflective 
 28″ – 7# Non-Reflective 
 28″ – 7# Reflective
 36″ – 10# Reflective`},
        { src: '/traffic-paint.jpeg',
            title: 'Traffic Paint & Glass Beads',
            text: ` 5 gallon water-based white, yellow, black, red & blue paint 
 Beads – 50 lb. bags `},
        { src: '/PanelLite.png',
            title: 'Panel Light',
            text: ` Diamond Grade Sheeting 
 2 Sided
 6" x 8" 
 Pre-drilled`},
        { src: '/PavementMarkers.png',
            title: 'Pavement Markers',
            text: `Raised Pavement Markers  
 Barrier Wall Markers 
 Chip Seal Markers`},
        { src: '/road-construction-raffic-safety.png',
            title: 'Click Here to View Full Shop!',
            text: '...'}
    ];

    return (
        <section className="my-24">
            <h2 className="text-6xl text-center font-extrabold text-yellow-400">
                Check Out Our Shop!
            </h2>
            <h3 className='text-center text-2xl pb-5'>Some Items We Offer...</h3>
            <Carousel props={props}/>
        </section>
    );
};
export default Shop;