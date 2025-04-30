import React, { useState } from 'react';
import { storage } from '../firebase/firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import './UploadVideo.css';

const UploadVideo = () => {
  const [videoFile, setVideoFile] = useState(null);
  const [videoUrl, setVideoUrl] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [uploadType, setUploadType] = useState('file');

  const handleFileChange = (event) => {
    setVideoFile(event.target.files[0]);
  };

  const handleUrlChange = (event) => {
    setVideoUrl(event.target.value);
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleUploadTypeChange = (event) => {
    setUploadType(event.target.value);
    setVideoFile(null); // Reset the file when changing to URL
  };

  const handleUpload = async () => {
    if (uploadType === 'file') {
      if (!videoFile) {
        alert('Please select a video file');
        return;
      }
      const videoRef = ref(storage, `videos/${videoFile.name}`);
      try {
        await uploadBytes(videoRef, videoFile);
        const downloadURL = await getDownloadURL(videoRef);
        console.log('Download URL:', downloadURL);
      } catch (error) {
        console.error('Error uploading video:', error);
      }
    } else {
      if (!videoUrl) {
        alert('Please enter a video URL');
        return;
      }
      console.log('Video URL:', videoUrl);
    }
  };

  return (
    <div className="upload-video-container">
      <h2>Upload Video</h2>
      <select onChange={handleUploadTypeChange} value={uploadType}>
        <option value="file">File</option>
        <option value="url">URL</option>
      </select>
      {uploadType === 'file' && (
        <input type="file" accept="video/*" onChange={handleFileChange} />
      )}
      {uploadType === 'url' && (
        <input
          type="url"
          placeholder="Video URL"
          value={videoUrl}
          onChange={handleUrlChange}
        />
      )}
      <input type="text" placeholder="Title" value={title} onChange={handleTitleChange} />
      <textarea placeholder="Description" value={description} onChange={handleDescriptionChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default UploadVideo;
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        className="upload-video-input"
      />
        <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <input
          type="file"
          onChange={(e) => {
            if (e.target.files[0]){
              setVideo(e.target.files[0]);
            }
            }}
          className="upload-video-file-input"
        />
      <button type="submit" disabled={loading} className="upload-video-button">
          {loading ? 'Uploading...' : 'Upload'}
        </button>
        {error && <p className="upload-video-error">{error}</p>}
      </form>
    </div>
  );
};

export default UploadVideo;


