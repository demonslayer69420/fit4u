import './nav.css';
function login()
{
    return(
    <div class="bckgrd-image">
		<div className="cont">
        	<div className="right">
				<h4 className='wel'>Login</h4>
				<form action="#">
			<div className="input-box">
				<input type="text" placeholder="Username"/>
			</div>
			<div className="input-box">
				<input type="password" placeholder="Password"/>
			</div>
				<p>Forgot Password? Click Here!</p>
				<button className='button' type='button'>Login</button>
			</form>
			</div>
		</div>
	</div>
    )
};
export default login;