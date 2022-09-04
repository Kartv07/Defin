import twitter_logo from '../../images/twitter_logo.png';
import telegram from '../../images/email_logo.png';
import github from '../../images/github_logo.png';


const Footer = () => {
    return (

                <div className="w-full flex flex-row bg-[#000000] justify-around" id ="Contact Us">
                   <div className="join p-5"><p className='text-5xl text-white p-3 '>Join DeFin</p><br />
                   <p className='text-white text-xl'>Stay on top of Twiss happenings. Be the first to know about <br/>new features, user reported issues and things we work on! </p></div>
                    
                    <div className='flex flex-col'>
                        <div className="flex flex-row">
                        <a href="https://github.com/chico110/Twiss" alt="#" target="_blank" className='link cursor-pointer'><img src={github}  alt="logo" className="w-20 mx-5 cursor-pointer"/></a>
                        <a href="https://www.linkedin.com/in/achhayapathak/" alt="#" target="_blank"  className='link cursor-pointer'><img src={telegram}  alt="logo" className="w-20  mx-5 cursor-pointer"/></a>
                        </div>
                        
                        <div className="flex flex-row">
                        <a href="https://twitter.com/frozen_parantha" alt="#" target="_blank"  className='link cursor-pointer'><img src={twitter_logo}  alt="logo" className="w-20 m-5 cursor-pointer"/></a>
                        <a href="https://www.linkedin.com/in/gaurav-gandhi-885301174/" alt="#" target="_blank"  className='link cursor-pointer'><img src={telegram}  alt="logo" className="w-20 m-5 cursor-pointer"/></a>
                        </div>
                    </div>

                </div>
              

    );
}

export default Footer;