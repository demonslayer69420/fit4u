import './nav.css';
function Signup()
{
    return(
    <div class="bckgrd-image">
		<div className="cont">
        	<div className="right">
				<h4 className='wel'>Signup</h4>
				<form action="#">
            <div className="input-box">
				<input type="text" placeholder="Name"/>
			</div>

			<div className="input-box">
				<input type="text" placeholder="Username"/>
			</div>
            <div className="input-box">
				<input type="email" placeholder="Email"/>
			</div>
			<div className="input-box">
				<input type="password" placeholder="Password"/>
			</div>
            <div className="input-box">
				<input type="tel" placeholder="Phone No"/>
			</div>
            <div className="input-box">
				<input type="text" placeholder="Address"/>
			</div>
				<button className='button' type='button'>SignUp</button>
			</form>
			</div>
		</div>
	</div>
    )
};
export default Signup;