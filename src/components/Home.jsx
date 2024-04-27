import React from 'react'
import './Home.css';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './Header';

const Home = () => {
  return (
    <div>
      <Header />
      <AnimatePresence>
        <motion.div
          className="row homerow pt-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >

          <motion.div
            className="col-md-4 p-4 "
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h1>WorkConnect</h1>
            <p>
                <span>
                Nurturing Talent, Fostering Growth, and Cultivating Success
                </span>
                <br />
                Your Partner in Human Resource Management Excellence!</p>
            <a
              className='btn'
 
              style={{ backgroundColor: "#5ac1db", color: "white" }}
              href="/login" 
            >
              Explore More
            </a>
          </motion.div>

          <motion.div
            className="col-md-4 heroimg"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <img className='hero-image' src="\home.png" alt="" />
          </motion.div>

          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#5ac1db" fill-opacity="1" d="M0,96L48,106.7C96,117,192,139,288,170.7C384,203,480,245,576,261.3C672,277,768,267,864,229.3C960,192,1056,128,1152,96C1248,64,1344,64,1392,64L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path></svg>

        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Home;
