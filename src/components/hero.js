import hero1Img from '../assets/hero1.png';
import { AiOutlineLinkedin,AiOutlineInstagram,AiOutlineGithub } from "react-icons/ai";
export default function Hero(){
    const config={
        subtitle:'PYTHON DEVELOPER'
    }
    return <section id='hero'className='flex flex-col md:flex-row px-5 py-32 bg-secondary '>
        <div className='md:w-1/2 flex flex-col'>
        <h1 className=' text-black text-5xl font-hero px-20'>HI, 
        <br/> I'M SANTHIYA RAVI
        <p className='text-2xl'>{config.subtitle}  </p>
            </h1><br/>
            <div className='flex px-20 '>
                <a href='http://www.linkedin.com/in/santhiya-r-32a0b2240' className='pr-5 hover:text-white'><AiOutlineLinkedin size={40} /></a>
                <a href='https://www.instagram.com/zen_space__/' className='pr-5 hover:text-white'><AiOutlineInstagram size={40} /></a>
                <a href='https://github.com/Santhiya121' className='pr-5 hover:text-white'><AiOutlineGithub size={40}/></a>
                 
            </div>

        </div>
       
<img className='md:w-1/2 h-1/2' src={hero1Img}/>
    </section>
}