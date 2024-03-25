
import './contacts.css'
const Contacts = () => {
  return (
    <div className="reach">
      <div className="intro">
      <h1>Contact Us</h1>
      <p className='para'>We have physical ofices at Nairobi City, Kahawa Wendani For any queries
        <br></br>feel free to reach to us. <p className='hutoboi'>You will be handled by our team of devoted<br></br>
        workers. To reach Our support team online, fill the form below. Your issues will<br></br>
        be adressed as soon as possible. Thankyou for Choosing us.</p>
      </p>
      <p></p>
      </div>
      <div className="fill">
        <form action="#" method="post">
          <input type="text" name="name" placeholder="Name" className='jaza'></input>
          <input type="email" name="email" placeholder="Email Adress" className='jaza'></input>
          <textarea name="Message" cols='30'rows='4' placeholder="Message"></textarea><br></br>
          <button className='button'>Send</button>
        </form>
        <div className="rada">
     <span>You can also contact us via empiretech@info.com</span>
     <span>Or </span>
     <span>contact the CEO at bernardmuthengi9@gmail.com</span>
     </div>
    
     
      </div>
      
    </div>
  )
}

export default Contacts
