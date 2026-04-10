import Typewriter from "typewriter-effect";

export const TypeWritter = () => (
  <div className="inline-block min-h-[1.5em]">
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
  </div>
);
