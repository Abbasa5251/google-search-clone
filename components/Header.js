import { MicrophoneIcon, SearchIcon, XIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { useRouter } from "next/router";
import { useRef } from "react";
import Avatar from "./Avatar";
import HeaderOptions from "./HeaderOptions";

function Header() {
	const router = useRouter();
	const searchInputRef = useRef(null);

	const search = (e) => {
		e.preventDefault();
		const query = searchInputRef.current.value;
		if (!query) return;
		router.push(`/search?q=${query}`);
	};

	return (
		<header className="sticky top-0 bg-white">
			<div className="flex w-full p-6 items-center">
				<Image
					src="/google_logo.png"
					height={40}
					width={120}
					onClick={() => router.push("/")}
					className="cursor-pointer"
				/>
				<form className="flex flex-grow px-6 py-3 ml-10 mr-5 border border-gray-200 rounded-full shadow-lg max-w-3xl items-center">
					<input
						ref={searchInputRef}
						type="text"
						className="flex-grow w-full focus:outline-none"
					/>
					<XIcon
						onClick={() => (searchInputRef.current.value = "")}
						className="h-7 sm:mr-3 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125"
					/>
					<MicrophoneIcon className="mr-3 h-6 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300" />
					<SearchIcon className="h-6 hidden sm:inline-flex text-blue-500" />
					<button hidden type="submit" onClick={search}>
						Search
					</button>
				</form>
				<Avatar
					className="ml-auto"
					url="https://lh3.googleusercontent.com/ogw/ADGmqu93AyeHk1XNvSMQJ0UGQwFrNIlzfgf8pCzfYJrNJA=s32-c-mo"
				/>
			</div>
			<HeaderOptions />
		</header>
	);
}

export default Header;
