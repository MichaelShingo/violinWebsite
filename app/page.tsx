'use client';
import Link from 'next/link';
import Navbar from './components/navbar/Navbar';
import LocationIcon from './components/icons/LocationIcon'

export default function Home() {
	return (
		<div className="flex h-[100vh] w-[100vw] flex-col justify-stretch overflow-hidden bg-[url('/coverPhotoHome.jpg')] bg-cover bg-no-repeat pb-5">
			<div className="relative z-50 flex h-full w-full flex-col justify-between">
				<Navbar />
				<div className="flex flex-col gap-6">
					<h1 className="relative z-50 w-full self-center text-center text-7xl uppercase text-white">Michael Shingo Crawford</h1>
					<h1 className="relative z-50 w-full self-center text-center text-4xl uppercase text-white">Violinist // Arranger</h1>
				</div>
				<div className="flex w-full flex-row justify-center">
					<div className="flex w-fit flex-row">

						<div className="mr-3 h-7 w-7">
							<LocationIcon />
						</div>
						<h1 className="relative z-50 w-full self-center text-center text-3xl text-white">Tokyo, Japan</h1>
					</div>
				</div>
			</div>
			<div className="absolute z-10 h-full w-full bg-black-trans">
			</div>
		</div>
	)
}
