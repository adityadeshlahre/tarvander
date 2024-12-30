"use client";
2
import { title } from "process";
import CreatePlace, { CreatePlaceSchema } from "../actions/place";
import { useState } from "react";

export default function Place() {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [start, setStart] = useState('');
    const [end, setEnd] = useState('');
    const [leaderId, setLeaderId] = useState('');

    const [errors, setErrors] = useState<string[]>([]);


    const handleCreatePlace = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const placeData = { title: title, description: description, start: start, end: end, price: Number(price), leaderId: Number(leaderId) };

            const parsed = CreatePlaceSchema.safeParse(placeData);

            if (!parsed.success) {
                await CreatePlace(placeData);
                alert("Place created successfully!");
            } else {
                alert("Failed to create place.");
            }
        } catch (error) {
            console.error("Error creating trip:", error);
            alert("Failed to create trip.");
        }
    };

    return (
        <div>
            <h1>Place</h1>
            <form onSubmit={handleCreatePlace}>
                <input
                    type="text"
                    placeholder="Place Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Place Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Place Price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />
                <input
                    type="date"
                    placeholder="Start Date"
                    value={start}
                    onChange={(e) => setStart(e.target.value)}
                />
                <input
                    type="date"
                    placeholder="End Date"
                    value={end}
                    onChange={(e) => setEnd(e.target.value)}
                />
                <input
                    type="number"
                    placeholder="Leader ID"
                    value={leaderId}
                    onChange={(e) => setLeaderId(e.target.value)}
                />

                <button onClick={handleCreatePlace}>Create Place</button>
            </form>

            {errors.length > 0 && (
                <div>
                    <h3>Validation Errors:</h3>
                    <ul>
                        {errors.map((error, idx) => (
                            <li key={idx} style={{ color: "red" }}>
                                {error}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};