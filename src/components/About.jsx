import { motion } from "framer-motion";
import { Tilt } from "react-tilt";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
    return (
        <Tilt className="xs:w-[250px] w-full">
            <motion.div
                variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
                className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
            >
                <div
                    options={{
                        max: 45,
                        scale: 1,
                        speed: 450,
                    }}
                    className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
                >
                    <img
                        src={icon}
                        alt={title}
                        title={title}
                        className="w-16 h-16 object-contain"
                    />
                    <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
                </div>
            </motion.div>
        </Tilt>
    );
};

const About = () => {
    
    return (
        <>
            <motion.div variants={textVariant}>
                <p className={styles.sectionSubText}>Introduction</p>
                <h2 className={styles.sectionHeadText}>Overview.</h2>
            </motion.div>

            <motion.p
                variants={fadeIn("", "", 0.1, 1)}
                className="mt-4 text-secondary text-balance text-[17px] max-w-3xl leading-[30px]"
            >
                I am a passionate Frontend Developer dedicated to creating
                visually appealing and functional interfaces. With experience in
                website development, I have developed strong skills in HTML,
                CSS, JavaScript, and other relevant frontend technologies. I
                thrive in collaborative environments, working closely with teams
                to understand user needs and deliver engaging and intuitive
                solutions that enhance the user experience. I am constantly
                seeking opportunities to enhance my skills and stay up-to-date
                with the latest trends in technology and design. I am excited to
                continue my professional growth and tackle new challenges in
                this ever-evolving field
            </motion.p>

            <div className="mt-20 flex flex-wrap gap-10">
                {services.map((service, index) => (
                    <ServiceCard
                        key={service.title}
                        index={index}
                        {...service}
                    />
                ))}
            </div>
        </>
    );
};

// Export About component wrapped with SectionWrapper HOC
export default SectionWrapper(About, "about");
