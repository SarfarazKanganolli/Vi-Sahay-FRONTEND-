
import Main from '../assets/main.jpg'
import "../Styling/Hero.css"
import MainImg2 from '../assets/event-2.jpg'
import AboutImg from '../assets/image_6.jpg'
import ConatactBack  from '../assets/bg_3.jpg'


const Hero = ({page,description}) => {
  
  const images = {
      home: Main,
      donation: MainImg2,
      about : AboutImg,
      contact : ConatactBack,
    };

  const Descript = {
    Home1: "Doing Nothing is Not An Option of Our Life",
    Donation1: "Donation",
    Message: "Message",
    About:"About",
    Contact:"Contact",
    Blog: "Blog",
  }


    const ImageUrl = images[page];
    const  Maintext = Descript[description];
  return (



    <>


      <div className='w-full h-auto bg-white '>
        <div id="image1" className='w-full bg-black'>
          <img className='w-full h-full object-cover opacity-80' src={ImageUrl} alt="" />
        </div>

        <div className='flex items-center justify-center'>
          <div id='main_text' className=' h-86 flex flex-col items-center justify-center'>
            <h1 className='text-5xl text-white'>{Maintext}</h1>

          </div>
        </div>


        

      </div>




    </>
  )
}

export default Hero