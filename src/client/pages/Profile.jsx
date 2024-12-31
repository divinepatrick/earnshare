import { useDispatch, useSelector } from "react-redux";
import { useRef, useState, useEffect } from "react";
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from "firebase/storage";
import { app } from "../firebase";
import { updateUserStart, updateUserSuccess, updateUserFailure, deleteUserStart, deleteUserSuccess, deleteUserFailure, signOutUserStart, signOutUserSuccess, signOutUserFailure } from "../redux/user/userSlice.js";

const Profile = () => {
  const fileRef = useRef(null);
  const [file, setFile] = useState(undefined);
  const { currentUser, loading, error } = useSelector((state) => state.user);


  const [filePerc, setFilePerc] = useState(0);
  const [fileUploadError, setFileUploadError] = useState(false);
  const [formData, setFormData] = useState({});
  const [updateSuccess, setUpdateSuccess] = useState(false);
  const dispatch = useDispatch();

  console.log(formData);


  useEffect(() => {
    if (file) {
      handleFileUplaod(file);
    }
  }, [file]);


  const handleFileUplaod = (file) => {
    const storage = getStorage(app);


    const fileName = new Date().getTime() + file.name;
    const storageRef = ref(storage, fileName);

    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setFilePerc(Math.round(progress))

      },
      (error) => {
        setFileUploadError(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) =>
          setFormData({ ...formData, avatar: downloadURL })
        );
      }
    );
  };


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(updateUserStart());
      const res = await fetch(`/server/user/update/${currentUser._id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success === false) {
        dispatch(updateUserFailure(data.message));
        return;
      }

      dispatch(updateUserSuccess(data));
      setUpdateSuccess(true);

    } catch (error) {
      dispatch(updateUserFailure(error.message));
    }
  };

  const handleDeleteUser = async () => {
    try {
      dispatch(deleteUserStart());
      const res = await fetch(`/server/user/delete/${currentUser._id}`, {
        method: "DELETE",
      });

      const data = await res.json();
      if (data.success === false) {
        dispatch(deleteUserFailure(data.message));
        return;
      }
      dispatch(deleteUserSuccess());

    } catch (error) {
      dispatch(deleteUserFailure(error.message));
    }
  };

  const handleSignOut = async () => {
    try {
      dispatch(signOutUserStart());
      const res = await fetch(`/server/auth/signout`);
      const data = await res.json();
      if (data.success === false) {
        dispatch(signOutUserFailure(data.message));
        return;
      }
      dispatch(signOutUserSuccess(data));

    } catch (error) {
      signOutUserFailure(error.message);
    }
  };



  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl font-semibold text-center my-7">Profile</h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">

        <input
          onChange={(e) => setFile(e.target.files[0])}
          type="file"
          ref={fileRef}
          hidden
          accept="image/*"
        />

        <img
          onClick={() => fileRef.current.click()}
          src={formData.avatar || currentUser.avatar}
          alt="profile"
          className="rounded-full h-24 w-24 object-cover cursor-pointer self-center mt-2 mx-auto"
        />
        <p className="text-sm self-center">
          {fileUploadError ? (
            <span className="text-red-700">Error Image upload (image must be less than 2 mb)</span>
          ) : filePerc > 0 && filePerc < 100 ? (
            <span className="text-slate-700">{`Uploading ${filePerc}%`}</span>
          ) : filePerc === 100 ? (
            <span className="text-green-700">Image Successfully Uploaded</span>
          ) : (
            ""
          )}
        </p>

        <input
          type="text"
          placeholder="username"
          id="username"
          defaultValue={currentUser.username}
          onChange={handleChange}
          className="border p-3 rounded-lg"
        />

        <input
          type="text"
          placeholder="email"
          id="email" defaultValue={currentUser.email}
          onChange={handleChange}
          className="border p-3 rounded-lg"
        />

        <input
          type="password"
          placeholder="password"
          id="password"
          defaultValue={currentUser.password}
          onChange={handleChange}
          className="border p-3 rounded-lg" />

        <button disabled={loading} className="bg-slate-700 text-white p-3 rounded-lg uppercase text-center hover:opacity-95">
          {loading ? "Loading..." : "Update"}
        </button>
      </form>
      <p className="text-red-700 mt-5">{error ? error : ""}</p>
      <p className="text-green-700 mt-5">{updateSuccess ? "Profile Updated Successfully" : ""}</p>

      <div className="flex justify-between mt-5">
        <span onClick={handleDeleteUser} className="text-red-700 cursor-pointer">Delete Account</span>
        <span onClick={handleSignOut} className="text-red-700 cursor-pointer">Sign Out</span>
      </div>



    </div>
  );
};

export default Profile