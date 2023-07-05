import { motion } from 'framer-motion';
import { styles } from '../styles';
import { ComputersCanvas } from './canvas';

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto" style={{cursor: 'url(../src/assets/mouse.png),auto'}}>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] mx-w-7x1 mx-auto flex flex-row items-start gap-5`}>
        <div className={"flex flex-col justify-center items-center mt-5"}>
          <div className="w-5 h-5 rounded-full bg-[#eb34cf]" />
          <div className="w-1 sm:h-80 h-40 pink-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}> It's me <span className="text-[#eb34cf]">Pauline</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-[#eb34cf]`}>
            I am a model. <br/> I am a founder. <br className="sm:block hidden" />
            I am a coder.
          </p>
        </div>
      </div>

      <ComputersCanvas />

      <div className={"absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center"}>
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-white flex justify-center items-start p-2">
            <motion.dev
              animate={{
                y: [0, 24, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className="w-3 h-3 rounded-full bg-white mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero
