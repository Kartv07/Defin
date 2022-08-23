import logo from '../../images/logo.png';
const Footer = () => {
    return (
        <div className="w-full flex md:justify-center justify-between items-center flex-col p-4 bg-[#0f0e13]">
            <div className="w-full flex sm:flex-row flex-col justify-between items-center my-4">
                <div>
                    <img src={logo} alt="twiss" className='w-32' />
                </div>

            </div>
        </div>
    );
}

export default Footer;