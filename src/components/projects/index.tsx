import { ProjectsList } from "./constant";
import { Caption } from "../caption";
import { Container } from "../container";
import { Button } from "../button";

export const Projects = () => (
  <Container>
    <div className={"mt-10"}>
      <Caption label="Projects" />
      <div
        className={
          "flex flex-col sm:flex-row md:flex-row flex-wrap justify-between"
        }
      >
        {ProjectsList.map((i, index) => (
          <div
            key={index}
            className={
              "w-full sm:w-[48%] md:w-[32%] border border-primary-blue-100 rounded-lg mt-8"
            }
          >
            <img src={i.image} alt={i.name} className={"w-full rounded-t-lg"} />
            <div className={"px-5 py-5 flex flex-col justify-between h-80"}>
              <p className={"text-white font-bold"}>{i.name}</p>
              <p className={"text-white text-sm mt-3"}>{i.description}</p>
              <p className={"text-white text-xs mt-3"}>
                <b>
                  Built in:{" "}
                  {i.stacks.map((y, index) => (
                    <span key={index}>
                      {index + 1 === i.stacks.length ? `${y}.` : `${y}, `}
                    </span>
                  ))}
                </b>
              </p>
              <div className={"mt-10"}>
                <a href={i.link} target={"_blank"} rel={"noreferrer"}>
                  <Button
                    variant={"primary"}
                    label={"View Project"}
                    className={"w-full py-2.5 text-sm font-bold"}
                  />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </Container>
);
