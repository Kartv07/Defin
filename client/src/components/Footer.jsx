import linkedin from '../../images/linkdin_logo.png';
import github from '../../images/github_logo.png';
const Footer = () => {
    return (
                <div className="w-full flex flex-row bg-[#000000] justify-around" id ="Contact Us">
                   <div className="join p-5"><p className='text-4xl text-white p-3 '>Join DeFin</p><br /></div>
                    <div className='flex flex-col'>
                        <div className="flex flex-row">
                        <a href="https://github.com/Kartv07/DeFin-Ethereum" alt="#" target="_blank" className='link cursor-pointer'><img src={github}  alt="logo" className="w-20 mx-5 cursor-pointer"/></a>
                        <a href="https://www.linkedin.com/in/kartavya-panthi/" alt="#" target="_blank"  className='link cursor-pointer'><img src={linkedin}  alt="logo" className="w-20  mx-5 cursor-pointer"/></a>
                        </div>
                    </div>

                </div>
    );
}


export default Footer;