import { motion } from "framer-motion";

const WelcomeYourComments = () => {
    return (
        <motion.div
            initial={{ y: 160, opacity: 0 }}
            whileInView={{
                y: 0,
                opacity: 1,
                transition: {
                    type: "just",
                    duration: 0.8
                }
            }}
            viewport={{ once: true, amount: 0 }}>
            <div id="WELCOME-TO-YOUR-COMMENTS">
                <div className="left_title">
                    <h2 className="title_3">WELCOME</h2>
                    <h2 className="title_3">YOUR COMMENTS</h2>
                </div>
                <div id="WELCOME-TO-YOUR-COMMENTS_text" className="align_right">
                    <p className="body_2 gray_1">Design Guidelines for Perceived Security에 대해 문의사항이나 개선해야 할 점, 아이디어 등이 있다면 자유롭게 의견을 전달해주세요.</p>
                    <p>&nbsp;</p>
                    <p className="body_2 gray_1">Contact me here.</p>
                    <p className="body_2 blue"><div className="btn">jiny1756@gmail.com</div></p>
                </div>


            </div >
        </motion.div >
    );
}

export default WelcomeYourComments;

