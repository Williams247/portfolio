import Typewriter from "typewriter-effect";

export const TypeWritter = () => (
  <div className="mx-auto w-full max-w-full min-h-[1.5em] break-words [&_.Typewriter__wrapper]:inline">
    <Typewriter
      options={{
        strings: [
          "Software Engineer | Frontend • Backend • Full-Stack",
          "I build high-performance web and mobile applications.",
          "I connect UIs to asynchronous backend systems.",
          "I deploy products to scalable cloud infrastructure.",
        ],
        autoStart: true,
        loop: true,
      }}
    />
  </div>
);
