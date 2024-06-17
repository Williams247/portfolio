import Typewriter from "typewriter-effect";

export const TypeWritter = () => (
  <section>
    <Typewriter
      options={{
        strings: [
          "I'm a software engineer.",
          "I build websites and web apps.",
          "It will be nice to join your team.",
          "You can send a mail to williamsalexjr@gmail.com",
        ],
        autoStart: true,
        loop: true,
      }}
    />
  </section>
);
