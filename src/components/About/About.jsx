import React from "react";
import Header from '../Header/Header';
import './About.css';
import aboutVector from './../../assets/about_vector.png';
import FooterLink from '../FooterLink/FooterLink';
import aboutAnime from './../../assets/about_anime.gif';

const About= () => {
    return ( <div className='section-container'>
        <Header heading='About Me.'
        details='Software Engineer | B.Tech Graduate | Coding and Problem Solving Geek'
        />

    <div className="about-main">
        <div className="about-main-left">
              {/* sub section 1 */}
              <h3 className="about-sub-head">
                Software Engineer at Accenture
            </h3>
            <p className="about-details">
            Currently working on most crucial internal project MyWizard Process Builder. MyWizardő (Phoenix) intelligent automation platform provides feature rich platform to integrate various types of business products, apps and services.
            Process Builder helps you to define different processes in graphical form and to monitor and track the progress of the process. And the stacks I've worked on are Angular,typescript,C#,MongoDB.

            </p>

             {/* sub section 2 */}
             <h3 className="about-sub-head">
                Education
            </h3>
            <p className="about-details">
            I did my Engineering in <a className='about-link-element' href='https://nmamit.nitte.edu.in/'> N.M.A.M Instite of Technology</a>. Spent wonderful 4 years at this institute.Developed problem solving skills significantly.
Thanks to well balanced curriculum that i got ample time to dive into different domain and explore new ventures.
            </p>

            {/* sub section 3 */}
            <h3 className="about-sub-head">
                Coding Profiles
            </h3>
            <p className="about-details">
            <a href="https://www.codechef.com/users/ashutosh_mulky"> CodeChef 3 stars(max)</a>: Rated on the basis of live programming contests.<br/>
            <a href="https://auth.geeksforgeeks.org/user/ashutoshmulky7/profile"> Geeks For Geeks</a>: Solved 100+ programming problems.<br/>
            <a href="https://leetcode.com/mulky/"> Leetcode</a>: Solved 50+ programming problems.<br/>
            <a href="https://www.sololearn.com/profile/2871288/"> SoloLearn</a>: Rated on the basis of coding challenges,Quizzes,Contributions.<br/>
            </p>

             {/* sub section 4 */}
             <h3 className="about-sub-head">
                Content creator on YouTube
            </h3>
            <p className="about-details">
            I often post videos where i discuss and solve interesting coding problems and also it consists
            of projects that i had done in my college days. Check it out <a className='about-link-element' href='https://m.youtube.com/channel/UC2RYDAMhUoi8mG-RxAsDlYw'> here</a> 
            </p>


             

        </div>
        <div className="about-main-right">
          
          <img src={aboutAnime} alt="animation" className="about-anime" />

        </div>
    </div>

    <FooterLink phrase="check out my " link="projects!" toAdress="/projects"/>
    {/* vector Frame */}
    <div className="vector-frame">
        <img src={aboutVector} className="about-vector" alt="about"/>
    </div>

    </div> );
};

export default About;