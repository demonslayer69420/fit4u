import './nav.css';

function Home()
{
    return(
        <>
        <section className='bckgrd-image'>
            <div className='card'>
                <h2 className='wel'>Welcome to FIT4U</h2>
                <p id='boast'>The place that helps you adapt to<br/> a healthy lifestyle.</p>
            </div>
        </section>
        
        <section className='bckgrd-image'>
            <div className='card'>
                <h2 className='wel'>About us</h2>
                <article>
                    <h4>Who we are?</h4>
                    <p>A small team of developers</p>
                </article>
            </div>
        </section>

        <section className='bckgrd-image'>
          <div className="container">
          <div className="right">
            <h4 className='wel'>Send us a message</h4>
          <p>For any queries, contact us!</p>
          <form action="#">
          <div className="input-box">
          <input type="text" placeholder="Enter your name"/>
          </div>
          <div className="input-box">
          <input type="text" placeholder="Enter your email"/>
          </div>
          <div className="input-box message-box">
          <textarea></textarea>
          </div>
          <button className='button'>Submit</button>
          </form>
          </div>
          </div>
        </section>

        </>
    )
};
export default Home;

  