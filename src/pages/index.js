import {useState} from 'react';
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";
import { MapIcon } from "@heroicons/react/24/outline";

export default function Home() {
    const [city, setCity] = useState('');
    const [streets, setStreets] = useState([]);
    const [error, setError] = useState('');

    const fetchStreets = async () => {
        if (!city) {
            setError('Please enter a city name.');
            setStreets([]);
            return;
        }
        setError('');
        try {
            const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
            console.log('API Base URL:', process.env.NEXT_PUBLIC_API_BASE_URL);
            const response = await fetch(`${apiBaseUrl}/addresses?city=${encodeURIComponent(city)}`);
            if (!response.ok) throw new Error(`Error: ${response.statusText}`);
            const data = await response.json();
            if (data.error) {
                setError(data.error);
                setStreets([]);
            } else {
                setStreets(data.unique_addresses.map((entry) => entry.street));
            }
        } catch (err) {
            setError(`Failed to fetch data: ${err.message}`);
            setStreets([]);
        }
    };

    return (
        <div className="flex flex-col pt-32 items-center h-screen bg-gradient-to-r ">
            {/* Main container */}
            <div className="text-center font-sans">
                <h1 className="text-6xl text-rose-400 font-bold mb-4">City Address Lookup</h1>
                <p className="mb-4 text-rose-300 text-3xl">Enter the name of a city in Spain to fetch street
                    addresses.</p>
                <div className="flex gap-4 px-36 pt-4">
                    <input
                        type="text"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        placeholder="Enter city name"
                        className="px-8 py-2 border border-rose-700 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                    />
                    <button
                        onClick={fetchStreets}
                        className="px-4 py-2 bg-indigo-600 border-2 border-rose-300  text-white font-bold rounded-md hover:bg-indigo-700 focus:outline-rose-900 focus:ring focus:ring-blue-300"
                    >
                        Fetch Streets
                    </button>
                </div>
            </div>
            {error && <p className="text-red-500">{error}</p>}
            {streets.length > 0 && (
                <div className="mt-6">
                    <h2 className="text-3xl text-rose-400 my-4 flex justify-center font-semibold mb-4"><MapIcon
                        className="h-8 w-8 mr-2 my-0 text-white "/> {}
                        {streets.length} Streets in <span className={"font-bold text-white px-2"}>{city.toUpperCase()}</span>
                        </h2>
                    <div className="overflow-auto max-h-[70vh] rounded-3xl custom-scrollbar">
                        <table className="min-w-full border bg-indigo-500 text-white text-2xl rounded-xl mx-auto">
                            <thead>
                            <tr className="bg-red-300 justify-center">
                            </tr>
                            </thead>
                            <tbody>
                            {streets.map((street, index) => (
                                <tr key={index} className="even:bg-indigo-400 border-0">
                                    <td className="px-4 py-4 border-4 border-t-indigo-500 text-center">{index + 1}</td>
                                    <td className="px-4 py-2 border-4 border-t-indigo-500">{street}</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>

            )}
        </div>
    );


}
