import config from "@config/config.json";
import { plainify } from "@lib/utils/textConverter";
import Image from "next/image";
import Link from "next/link";

// Import your gallery images here

import GalleryImage1 from "../../public/images/gallery1.jpg";
import GalleryImage2 from "../../public/images/gallery2.jpg";
import GalleryImage3 from "../../public/images/gallery3.jpg";
import GalleryImage4 from "../../public/images/gallery4.jpg";
import GalleryImage5 from "../../public/images/gallery5.jpg";
import GalleryImage6 from "../../public/images/gallery6.jpg";
import GalleryImage7 from "../../public/images/gallery7.jpg";
import GalleryImage8 from "../../public/images/gallery8.jpg";
import GalleryImage9 from "../../public/images/gallery9.jpg";
const Posts = ({ posts }) => {
  const { blog_folder, summary_length } = config.settings;

  // Gallery Section
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
                      alt="gallery"
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

  return (
    <div className="section row pb-0">
      <div className="col-12 pb-12 lg:pb-24">
        <div className="row items-center">
          {/* The following section is commented out and replaced by the gallery section */}
          {/* <div className="col-12 md:col-6">
            {posts[0].frontmatter.image && (
              <Image
                className="h-auto w-full rounded-lg"
                src={posts[0].frontmatter.image}
                alt={posts[0].frontmatter.title}
                width={540}
                height={227}
                priority={true}
              />
            )}
          </div> */}
          <div className="col-12 md:col-6">
            <h2 className="h3 mb-2 mt-4">
              <Link
                href={`/${blog_folder}/${posts[0].slug}`}
                className="block hover:text-primary"
              >
                {posts[0].frontmatter.title}
              </Link>
            </h2>
            <p className="text-text">
              {plainify(
                posts[0].content?.slice(0, Number(summary_length)),
                "div"
              )}
            </p>
          </div>
        </div>
      </div>

      {/* Render the gallery section */}
      <GallerySection />

      {posts.slice(1).map((post, i) => (
        <div key={`key-${i}`} className="col-12 mb-8 sm:col-6 lg:col-4">
          {post.frontmatter.image && (
            <Image
              className="rounded-lg"
              src={post.frontmatter.image}
              alt={post.frontmatter.title}
              width={i === 0 ? "925" : "445"}
              height={i === 0 ? "475" : "230"}
            />
          )}
          <h2 className="h3 mb-2 mt-4">
            {/* <Link
              href={`/${blog_folder}/${post.slug}`}
              className="block hover:text-primary"
            >
              {post.frontmatter.title}
            </Link> */}
          </h2>
        </div>
      ))}
    </div>
  );
};

export default Posts;
