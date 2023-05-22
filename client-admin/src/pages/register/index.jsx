import RegisterForm from "../../components/register-form";

export default function RegisterPage() {
    return (
        <section>
            <h1 style={{
                marginTop: '19px',
                textAlign: 'center',
                fontWeight: 'bold',
                fontSize: '37px',
                color: 'black'
            }}>NEW ADMIN</h1>
            <div className="container" style={{ marginTop: '30px' }}><RegisterForm /></div>
        </section>
    );

}
