function Avatar({ url, className }) {
	return (
		<img
			className={`h-10 rounded-full border-[3px] border-transparent cursor-pointer transition duration-150 transform hover:scale-110 hover:border-gray-300 ${className}`}
			loading="lazy"
			src={url}
			alt="profile picture"
		/>
	);
}

export default Avatar;
