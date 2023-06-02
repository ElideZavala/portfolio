/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
    return (
        <section className="relative w-full h-screen mx-auto">
            <div
                className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
            >
                <div className="flex flex-col justify-center items-center mt-5">
                    <div className="w-5 h-5 rounded-full bg-[#915eff]"></div>
                    <div className="w-1 sm:h-80 h-40 violet-gradient"></div>
                </div>
                <div>
                    <h1 className={`${styles.heroHeadText}`}>
                        Hi, I'm 
                        <span className="text-[#915eff]">Elide</span>
                        <p className={`${styles.heroSubText} mt-2 text-white-100 text-balance w-3/5`}>
                          I am a Frontend Developer with a passion for design and technology, 
                          I love to create beautiful and functional websites, and I am always looking for new challenges.
                        </p>
                    </h1>
                </div>
            </div>
            <ComputersCanvas />
        </section>
    );
};

export default Hero;
