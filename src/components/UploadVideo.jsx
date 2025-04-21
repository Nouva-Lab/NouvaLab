import React, { useState } from 'react';
import { storage, db, auth } from '../firebase/firebase'; 

import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';


const UploadVideo = () => {
  const [videoFile, setVideoFile] = useState(null);
  const [title, setTitle] = useState('');

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!videoFile) return;

    const storageRef = ref(storage, `videos/${videoFile.name}`);
    await uploadBytes(storageRef, videoFile);
    const videoURL = await getDownloadURL(storageRef);

    await addDoc(collection(db, "videos"), {
      title,
      videoURL,
      uploadedBy: auth.currentUser?.email || "anonymous",
      createdAt: serverTimestamp()
    });

    alert("Video uploaded!");
  };

  return (
    <form onSubmit={handleUpload}>
      <h2>Upload Video</h2>
      <input type="text" placeholder="Video Title" onChange={e => setTitle(e.target.value)} required />
      <input type="file" accept="video/*" onChange={e => setVideoFile(e.target.files[0])} required />
      <button type="submit">Upload</button>
    </form>
  );
};

export default UploadVideo;
