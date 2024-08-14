import Image from "next/image";
import GalleryImage1 from "../../public/images/gallery1.jpg";
import GalleryImage2 from "../../public/images/gallery2.jpg";
import GalleryImage3 from "../../public/images/gallery3.jpg";
import GalleryImage4 from "../../public/images/gallery4.jpg";
import GalleryImage5 from "../../public/images/gallery5.jpg";
import GalleryImage6 from "../../public/images/gallery6.jpg";
import GalleryImage7 from "../../public/images/gallery7.jpg";
import GalleryImage8 from "../../public/images/gallery8.jpg";
import GalleryImage9 from "../../public/images/gallery9.jpg";

// ContactHeader component
const ContactHeader = () => {
  return (
    <div className="bg-cover bg-center text-center  relative z-10 py-6 mt-12" style={{ backgroundImage: "url('/images/naturebg.jpg')", marginTop: '100px', height: '250px' }}>
      <h1 className="text-5xl font-bold leading-tight text-primary absolute bottom-6 left-1/2 transform -translate-x-1/2">Gallery</h1>
    </div>
  );
};

// CardComponent component
const CardComponent = ({ image, heading, paragraph, imagesBelow }) => (
  <div className="mb-12 flex flex-wrap items-center rounded-lg p-6 shadow-md">
    <div className="mb-8 w-full px-4 md:mb-0 md:w-1/2">
      <Image
        src={image}
        alt="Gallery"
        className="h-auto w-full rounded-lg shadow-md"
        width={600}
        height={400}
      />
    </div>
    <div className="flex w-full flex-col items-center px-4 md:w-1/2">
      <h2 className="mb-4 text-center text-2xl font-bold text-gray-800">
        {heading}
      </h2>
      <p className="mb-2 text-2xl font-bold">{paragraph}</p>
    </div>
    <div className="mt-4 flex w-full flex-wrap justify-between">
      {imagesBelow.map((img, index) => (
        <div key={index} className="w-1/3 p-2">
          <div className="relative h-32 w-full overflow-hidden rounded-lg shadow-md">
            <Image
              src={img}
              alt={`Gallery image ${index + 1}`}
              className="h-full w-full object-cover"
              layout="fill"
            />
          </div>
        </div>
      ))}
    </div>
  </div>
);

// GallerySection component
const GallerySection = () => {
  const images = [
    GalleryImage1,
    GalleryImage2,
    GalleryImage3,
    GalleryImage4,
    GalleryImage5,
    GalleryImage6,
    GalleryImage7,
    GalleryImage8,
    GalleryImage9,
  ];

  return (
    <section>
      <div className="container mx-auto px-5 py-24">
        <div className="mb-20 flex w-full flex-col text-center">
          <h2 className="title-font mb-1 text-xs font-medium tracking-widest text-indigo-500">
            OUR GALLERY
          </h2>
          <h1 className="title-font text-2xl font-medium text-gray-900 sm:text-3xl">
            Check out our work
          </h1>
        </div>
        <div className="-m-1 flex flex-wrap md:-m-2">
          {images.map((image, index) => (
            <div key={index} className="flex w-1/3 flex-wrap">
              <div className="w-full p-1 md:p-2">
                <div className="gallery-img-wrapper">
                  <Image
                    alt={`gallery image ${index + 1}`}
                    src={image}
                    layout="fill"
                    objectFit="cover"
                    className="gallery-img"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .gallery-img-wrapper {
          position: relative;
          width: 100%;
          padding-bottom: 75%; /* Adjust this to get the desired aspect ratio */
          overflow: hidden;
          border-radius: 0.5rem;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .gallery-img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
      `}</style>
    </section>
  );
};

// Posts component
const Posts = () => {
  return (
    <>
      <ContactHeader />
      <div>
        <div className="section row pb-0">
          {/* <div className="col-12 pb-12 lg:pb-24">
            <div className="row items-center">
              <div className="col-12 md:col-6">
                <h2 className="h3 mb-2 mt-4">
                  <a href="/some-post-link" className="block hover:text-primary">
                    First Post Title
                  </a>
                </h2>
                <p className="text-text">
                  This is a brief summary of the first post.
                </p>
              </div>
            </div>
          </div> */}

          <CardComponent
            image={GalleryImage1}
            heading="Beautiful Showcase"
            paragraph="Welcome to our gallery! Explore the beautiful images that showcase our work and creativity. Each picture tells a story, reflecting the essence of our dedication and passion."
            imagesBelow={[GalleryImage2, GalleryImage3, GalleryImage4]}
          />

          <CardComponent
            image={GalleryImage5}
            heading="Our Journey Highlights"
            paragraph="Our gallery captures the highlights of our journey, each image illustrating our commitment to excellence and our love for what we do."
            imagesBelow={[GalleryImage6, GalleryImage7, GalleryImage8]}
          />

          <CardComponent
            image={GalleryImage9}
            heading="Moments and Memories"
            paragraph="Dive into our collection of moments and memories, showcasing the artistry and hard work that define our projects."
            imagesBelow={[GalleryImage1, GalleryImage2, GalleryImage3]}
          />
        </div>
        <GallerySection />
      </div>
    </>
  );
};

export default Posts;
