import logo from '../../images/logo.png';
const Footer = () => {
    return (
        <div className="w-full flex md:justify-center justify-between items-center flex-col p-4 bg-[#778899]">
            <div className="w-full  sm:flex-row flex-col justify-between items-center my-4">
                <div className='row'>
                <div>
                    <img src={logo} alt="twiss" className='w-64 cursor-pointer' />
                </div>

                    <div className='column'>
                        <div className='title'>About us</div>
                        <div className='link cursor-pointer'>Story</div>
                        <div className='link cursor-pointer'>Credentials</div>
                        <div className='link cursor-pointer'>Testimonials</div>
                    </div>
                    <div className='column'>
                        <div className='title'>Services</div>
                        <div className='link cursor-pointer'>Tutorials</div>
                        <div className='link cursor-pointer'>Consulting</div>
                        <div className='link cursor-pointer'>Development</div>
                    </div>
                    <div className='column'>
                        <div className='title'>Contact Us</div>
                        <div className='link cursor-pointer'>Address</div>
                        <div className='link cursor-pointer'>Email</div>
                        <div className='link cursor-pointer'>Contact No</div>
                    </div>
                    <div className='column'>
                        <div className='title'>Connect</div>
                        <a href="https://github.com/chico110/Twiss" alt="#" target="_blank" className='link cursor-pointer'>GitHub</a>
                        <a href="https://www.linkedin.com/in/achhayapathak/" alt="#" target="_blank"  className='link cursor-pointer'>Linkedin</a>
                        <a href="https://twitter.com/frozen_parantha" alt="#" target="_blank"  className='link cursor-pointer'>Twitter</a>
                        <a href="https://www.instagram.com/notachhay_/" alt="#" target="_blank"  className='link cursor-pointer'>Instagram</a>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Footer;