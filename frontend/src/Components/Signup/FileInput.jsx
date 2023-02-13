import { useRef, useState } from "react";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import storage from "../../firebase";
import styles from "../../Styles/FileInput.module.css";
import {Box} from "@chakra-ui/react"
const FileInput = ({ name, label, value, type, handleInputState, ...rest }) => {
	const inputRef = useRef();
	const [progress, setProgress] = useState(0);
	const [progressShow, setProgressShow] = useState(false);

	const handleUpload = () => {
		setProgressShow(true);
		const fileName = new Date().getTime() + value.name;
		const storageRef = ref(
			storage,
			type === "audio" ? `/audio/${fileName}` : `/profiles/${fileName}`
		);
		const uploadTask = uploadBytesResumable(storageRef, value);
		uploadTask.on(
			"state_changed",
			(snapshot) => {
				const uploaded = Math.floor(
					(snapshot.bytesTransferred / snapshot.totalBytes) * 100
				);
				setProgress(uploaded);
			},
			(error) => {
				console.log(error);
			},
			() => {
				getDownloadURL(uploadTask.snapshot.ref).then((url) => {
					handleInputState(name, url);
				});
			}
		);
	};

	return (
		<div className={styles.container}>
         
			<input
				type="file"
				ref={inputRef}
				onChange={(e) => handleInputState(name, e.currentTarget.files[0])}
				vlaue={value}
				className={styles.input}
				{...rest}
			/>
			<button
				type="button"
				onClick={() => inputRef.current.click()}
				className={styles.Choosebutton}
			>
				{label}
			</button>
			{type === "image" && value && (
				<img
					src={typeof value === "string" ? value : URL.createObjectURL(value)}
					alt="file"
					className={styles.preview_img}
				/>
			)}
			{type === "audio" && value && (
				<audio
					src={typeof value === "string" ? value : URL.createObjectURL(value)}
					controls
				/>
			)}
			{value !== null && !progressShow && typeof value !== "string" && (
				<button onClick={handleUpload} className={styles.Uploadbutton}>
					Upload
				</button>
			)}
			{progressShow && progress < 100 && (
				<div className={styles.progress_container}>
					<p>{progress}%</p>
				</div>
			)}
			{progress === 100 && (
				<div className={styles.progress_container}>
					<img src={"https://spng.pngfind.com/pngs/s/52-528870_green-tick-clipart-benefit-green-check-mark-hd.png"} alt="check circle" className={styles.check_img} />
				</div>
			)}
		</div>
	);
};

export default FileInput;