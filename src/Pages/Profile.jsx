import { useContext } from 'react';
import Navbar from '../Components/Navbar/Navbar';
import { Helmet } from 'react-helmet';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { updateProfile } from 'firebase/auth';
import auth from '../Firebase/firebase.init';
import toast from 'react-hot-toast';

const Profile = () => {
    const { user, setUser } = useContext(AuthContext); 

    const handleSave = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        e.target.reset();

        const data = {
            displayName: name,
            photoURL: photo,
        };

        updateProfile(auth.currentUser, data)
            .then(() => {
               
                setUser((prevUser) => ({
                    ...prevUser,
                    displayName: name,
                    photoURL: photo,
                }));
                toast.success('Changes saved successfully!');
            })
            .catch((error) => {
                toast.error('Profile Update Failed: ' + error.message);
            });
    };

    return (
        <div>
            <Helmet>
                <title>Talent Trail | My Profile</title>
            </Helmet>
            <nav className="lg:w-9/12 mx-auto py-6">
                <Navbar />
            </nav>
            <div className="lg:w-4/12 mx-auto border border-black p-10 space-y-2 text-center">
                <img className="w-20 h-20 ml-60 rounded-full" src={user?.photoURL} alt="Profile" />
                <h1>Name: {user?.displayName}</h1>
                <h1>Email: {user?.email}</h1>
            </div>
            <div className="lg:w-4/12 mx-auto border border-black p-10">
                <form onSubmit={handleSave}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Name"
                            name="name"
                            className="input input-bordered"
                            required
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Photo URL"
                            name="photo"
                            className="input input-bordered"
                            required
                        />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-neutral">Save Changes</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Profile;
