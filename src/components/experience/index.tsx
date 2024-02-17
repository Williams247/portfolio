import { Caption } from "../caption";
import { Container } from "../container";
import { experiences } from "./constant";

export const Experience = () => (
  <>
    <Container>
      <div id={"experience"} className={"mt-10"}>
        <Caption label="Experience" />
        <div className={"flex mt-10 w-full justify-between flex-wrap"}>
          {experiences.map((x, index) => (
            <div key={index} className={"px-4 md:px-8 bg-white w-full sm:w-[49%] md:w-[49.5%] mt-3 py-8 rounded-md"}>
              <p className={"text-primary-blue-100 font-bold text-xl"}>{x.timeframe}</p>
              <p className={"text-base font-[500]"}>{x.company}</p>
              <p className={"text-sm mt-1"}>{x.role}</p>
              <p className={"text-sm mt-1"}>{x.type}</p>
              <ul className={"mt-2"}>
                {x.description.map((y, idx) => (
                  <li key={idx} className={"mt-2 text-sm"}>{idx + 1}. {y}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </Container>
  </>
);
