
function Profile({ name, surname, }) {
    console.log(name);
    return (<div>Hello {name} {surname}!</div>);
}

Profile.getInitialProps = async () => {
    const response = await fetch('http://localhost:3000/profile');
    const data = await response.json();
    return data;
}

export default Profile;