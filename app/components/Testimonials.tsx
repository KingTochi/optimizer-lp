import React from "react";
import Image from "next/image";

function Testimonials() {
  return (
    <section
      id="testimonials"
      aria-label="What our customers are saying"
      className="py-10"
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8 md:px-7">
        <div className="mx-auto md:text-center">
          <h1 className="mx-auto max-w-4xl font-display text-4xl font-bold tracking-normal text-gray-300 sm:text-6xl">
            Loved by many worldwide.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg sm:text-gray-400  text-gray-500 leading-7">
            See what our{" "}
            <a
              href="https://twitter.com/nutlope/status/1651994920654196738"
              className="underline underline-offset-2 hover:text-gray-200  transition"
            >
              1.5 million users
            </a>{" "}
            are saying about the product.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-16 lg:max-w-none lg:grid-cols-3"
        >
          <li>
            <ul role="list" className="flex flex-col gap-y-6 sm:gap-y-8">
              <li className="hover:scale-105 transition duration-300 ease-in-out ">
                <a
                  href="https://twitter.com/eveporcello/status/1631438728999899136"
                  target="_blank"
                  rel="noreferrer"
                >
                  <figure className="relative rounded-2xl bg-gray-800 p-6 shadow-xl shadow-slate-900/10">
                    <blockquote className="relative">
                      <p className="text-lg tracking-tight text-white">
                        "So good! I need this right now. Congrats on the
                        launch!"
                      </p>
                    </blockquote>
                    <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                      <div>
                        <div className="font-display text-base text-white">
                          Eve Porcello
                        </div>
                        <div className="mt-1 text-sm text-gray-400">
                          Engineer &amp; Author
                        </div>
                      </div>
                      <div className="overflow-hidden rounded-full bg-slate-50">
                        <img
                          alt="picture of the testimonial author"
                          loading="lazy"
                          width="56"
                          height="56"
                          decoding="async"
                          data-nimg="1"
                          className="h-14 w-14 object-cover"
                          //style="color:transparent"
                          //srcset="/_next/image?url=%2Feve.jpg&amp;w=64&amp;q=75 1x, /_next/image?url=%2Feve.jpg&amp;w=128&amp;q=75 2x"
                          //src="/_next/image?url=%2Feve.jpg&amp;w=128&amp;q=75"
                        />
                      </div>
                    </figcaption>
                  </figure>
                </a>
              </li>
              <li className="hover:scale-105 transition duration-300 ease-in-out ">
                <a
                  href="https://twitter.com/arthur_dvorkin/status/1631402865209274369"
                  target="_blank"
                  rel="noreferrer"
                >
                  <figure className="relative rounded-2xl bg-gray-800 p-6 shadow-xl shadow-slate-900/10">
                    <blockquote className="relative">
                      <p className="text-lg tracking-tight text-white">
                        "Finally! Something to help me get over my
                        indecisiveness when decorating my house!"
                      </p>
                    </blockquote>
                    <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                      <div>
                        <div className="font-display text-base text-white">
                          Arthur Dvorkin
                        </div>
                        <div className="mt-1 text-sm text-gray-400">
                          Engineer
                        </div>
                      </div>
                      <div className="overflow-hidden rounded-full bg-slate-50">
                        <img
                          alt="picture of the testimonial author"
                          loading="lazy"
                          width="56"
                          height="56"
                          decoding="async"
                          data-nimg="1"
                          className="h-14 w-14 object-cover"
                          //style="color:transparent"
                          //srcset="/_next/image?url=%2Farthur.jpg&amp;w=64&amp;q=75 1x, /_next/image?url=%2Farthur.jpg&amp;w=128&amp;q=75 2x"
                          //src="/_next/image?url=%2Farthur.jpg&amp;w=128&amp;q=75"
                        />
                      </div>
                    </figcaption>
                  </figure>
                </a>
              </li>
            </ul>
          </li>
          <li>
            <ul role="list" className="flex flex-col gap-y-6 sm:gap-y-8">
              <li className="hover:scale-105 transition duration-300 ease-in-out ">
                <a
                  href="https://www.tiktok.com/@thenubians/video/7206088336044313861?q=roomgpt.io&amp;t=1677909079689"
                  target="_blank"
                  rel="noreferrer"
                >
                  <figure className="relative rounded-2xl bg-gray-800 p-6 shadow-xl shadow-slate-900/10">
                    <blockquote className="relative">
                      <p className="text-lg tracking-tight text-white">
                        "This is incredible, you don't need an interior designer
                        anymore."
                      </p>
                    </blockquote>
                    <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                      <div>
                        <div className="font-display text-base text-white">
                          Ade Dada
                        </div>
                        <div className="mt-1 text-sm text-gray-400">
                          Startup Founder
                        </div>
                      </div>
                      <div className="overflow-hidden rounded-full bg-slate-50">
                        <img
                          alt="picture of the testimonial author"
                          loading="lazy"
                          width="56"
                          height="56"
                          decoding="async"
                          data-nimg="1"
                          className="h-14 w-14 object-cover"
                          //style="color:transparent"
                          //srcset="/_next/image?url=%2Fade.jpeg&amp;w=64&amp;q=75 1x, /_next/image?url=%2Fade.jpeg&amp;w=128&amp;q=75 2x"
                          //src="/_next/image?url=%2Fade.jpeg&amp;w=128&amp;q=75"
                        />
                      </div>
                    </figcaption>
                  </figure>
                </a>
              </li>
              <li className="hover:scale-105 transition duration-300 ease-in-out ">
                <a
                  href="https://twitter.com/RobAttfield/status/1631545265281974273"
                  target="_blank"
                  rel="noreferrer"
                >
                  <figure className="relative rounded-2xl bg-gray-800 p-6 shadow-xl shadow-slate-900/10">
                    <blockquote className="relative">
                      <p className="text-lg tracking-tight text-white">
                        "I haven't changed my room layout for 5 years, but this
                        app may change that. Great job."
                      </p>
                    </blockquote>
                    <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                      <div>
                        <div className="font-display text-base text-white">
                          Rob Attfield
                        </div>
                        <div className="mt-1 text-sm text-gray-400">
                          Software Engineer
                        </div>
                      </div>
                      <div className="overflow-hidden rounded-full bg-slate-50">
                        <img
                          alt="picture of the testimonial author"
                          loading="lazy"
                          width="56"
                          height="56"
                          decoding="async"
                          data-nimg="1"
                          className="h-14 w-14 object-cover"
                          //style="color:transparent"
                          //srcset="/_next/image?url=%2Frob.jpg&amp;w=64&amp;q=75 1x, /_next/image?url=%2Frob.jpg&amp;w=128&amp;q=75 2x"
                          //src="/_next/image?url=%2Frob.jpg&amp;w=128&amp;q=75"
                        />
                      </div>
                    </figcaption>
                  </figure>
                </a>
              </li>
            </ul>
          </li>
          <li>
            <ul role="list" className="flex flex-col gap-y-6 sm:gap-y-8">
              <li className="hover:scale-105 transition duration-300 ease-in-out ">
                <a
                  href="https://twitter.com/Music4UsAll/status/1631622608595607552"
                  target="_blank"
                  rel="noreferrer"
                >
                  <figure className="relative rounded-2xl bg-gray-800 p-6 shadow-xl shadow-slate-900/10">
                    <blockquote className="relative">
                      <p className="text-lg tracking-tight text-white">
                        "This is fantastic. I've already decided on a new wall
                        color from a generated image and repainting it is now my
                        weekend project."
                      </p>
                    </blockquote>
                    <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                      <div>
                        <div className="font-display text-base text-white">
                          Music
                        </div>
                        <div className="mt-1 text-sm text-gray-400">
                          Some dude on the internet
                        </div>
                      </div>
                      <div className="overflow-hidden rounded-full bg-slate-50">
                        <img
                          alt="picture of the testimonial author"
                          loading="lazy"
                          width="56"
                          height="56"
                          decoding="async"
                          data-nimg="1"
                          className="h-14 w-14 object-cover"
                          //style="color:transparent"
                          //srcset="/_next/image?url=%2Fmusic.jpg&amp;w=64&amp;q=75 1x, /_next/image?url=%2Fmusic.jpg&amp;w=128&amp;q=75 2x"
                          //src="/_next/image?url=%2Fmusic.jpg&amp;w=128&amp;q=75"
                        />
                      </div>
                    </figcaption>
                  </figure>
                </a>
              </li>
              <li className="hover:scale-105 transition duration-300 ease-in-out ">
                <a
                  href="https://twitter.com/github/status/1631821360619028482"
                  target="_blank"
                  rel="noreferrer"
                >
                  <figure className="relative rounded-2xl bg-gray-800 p-6 shadow-xl shadow-slate-900/10">
                    <blockquote className="relative">
                      <p className="text-lg tracking-tight text-white">"🤯"</p>
                    </blockquote>
                    <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                      <div>
                        <div className="font-display text-base text-white">
                          GitHub
                        </div>
                        <div className="mt-1 text-sm text-gray-400">
                          $7.5 billion dollar developer tool company
                        </div>
                      </div>
                      <div className="overflow-hidden rounded-full bg-slate-50">
                        <img
                          alt="picture of the testimonial author"
                          loading="lazy"
                          width="56"
                          height="56"
                          decoding="async"
                          data-nimg="1"
                          className="h-14 w-14 object-cover"
                          //style="color:transparent"
                          //srcset="/_next/image?url=%2Fgithub.jpg&amp;w=64&amp;q=75 1x, /_next/image?url=%2Fgithub.jpg&amp;w=128&amp;q=75 2x"
                          //src="/_next/image?url=%2Fgithub.jpg&amp;w=128&amp;q=75"
                        />
                      </div>
                    </figcaption>
                  </figure>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Testimonials;
