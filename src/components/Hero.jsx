/* eslint-disable react/prop-types */
import { motion } from "framer-motion"
import TypeAnimation from "../utils/TypeAnimation"
import { useState } from "react"

import { styles } from "../styles"



const Hero = ({ loading }) => {

  const [firstAnimationComplete, setFirstAnimationComplete] = useState(false);

  const handleFirstAnimationComplete = (self) => {


    self.cursor.remove()
    // wait for 2 seconds before setting firstAnimationComplete to true
    setTimeout(() => {
      setFirstAnimationComplete(true);
    }, 1000)
  };


  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`${styles.paddingX} absolute inset-0 top-[200px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>

        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#D2691E]" />
          <div className="w-1 sm:h-80 h-40 orange-gradient" />
        </div>

        <div>
          {!loading && (
            <h1 className={`${styles.heroHeadText}`}>
              <TypeAnimation
                strings={['^250H^250i^250,^250 I\'m <span style=\'color: #FF7F00;\'>David</span>']}
                loop={false}
                fadeOut={true}
                typeSpeed={20}
                backSpeed={10}
                startDelay={0}
                onComplete={handleFirstAnimationComplete}
                preStringTyped={() => { }}
                showCursor={true}
                backDelay={1500}
              />
            </h1>
          )}

          {firstAnimationComplete && (
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              <TypeAnimation
                strings={['I <em>create</em> and develop websites', 'I <em>create</em> and develop webapps', 'I <em>create</em> and develop interfaces', 'I <em>create</em> and develop software', 'Let me help you make the web easy.']}
                loop={true}
                fadeOut={false}
                typeSpeed={30}
                backSpeed={40}
                startDelay={0}
                onComplete={(self) => {
                  // Handle completion of the second animation if needed
                }}
                preStringTyped={() => { }}
                showCursor={true}
                backDelay={2200}
              />
            </p>
          )}
        </div>
      </div>
      {/*<ComputersCanvas loading={loading} />*/}

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.dev
              animate={{
                y: [0, 24, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop"
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>

      </div>

    </section>
  )
}

export default Hero
