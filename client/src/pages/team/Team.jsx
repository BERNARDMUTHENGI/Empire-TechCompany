import './team.css'
import Bena from '../../assets/Bena.png'
import Deta from '../../assets/testimony4.jpeg'
import Edu from '../../assets/testimony5.jpeg'
import Goat from '../../assets/007.jpeg'
const Team = () => {
  return (
    <>
    <h1 className='karibu'>Meet Our Team</h1>
    <div className='team'>
      
      <div className="mimi">
       <img src={Bena} alt=''></img>
       <div className="expo">
          <span className='jina'>Bernard Muthengi</span>
          <span>FullStack Web Developer</span>
          <span>Data Analytics Expert</span>
          <span>Machine Learning Engineer</span>
        </div>
        </div>
        <div className="mimi">
        <img src={Deta} alt=''></img>
        <div className="expo">
          <span className='jina'>Detrizer</span>
          <span>Sofware Engineer</span>
          <span>Backend Developer</span>
        </div>
        
        </div>
        <div className="mimi">
        <img src={Edu} alt=''></img>
         <div className="expo">
         <span className='jina'>Mr Edward</span>
          <span>FullStack Web Developer</span>
          <span>CyberSecurity Expert</span>
          
         </div>
        </div>
        <div className="jojo">
        <img src={Goat} alt=''></img>
        <div className="expo">
          <span className='jina'>James Kamiano</span>
          <span>Frontend Engineer</span>
          <span>Networking Security Expert</span>
          
        </div>
        </div>
        
         
       
       
        
   
    
     
        
      
      
        
      
      
       
        </div>
        </>
     
  
  )
}

export default Team
