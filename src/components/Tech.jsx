import { BallCanvas } from '../components/canvas'
import { SectionWrapper } from '../hoc';
import { technologies } from "../constants/index.js";

const Tech = () => {
  return (
    <div className="flex flex-wor flex-wrap justify-center gap-10">
      {technologies.map((technology) => (
        <div className="w-28 h-28" key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  )
}

export default SectionWrapper(Tech, "");
