"use client";

import { useState } from "react";
import { CreateTrip } from "../actions/trips";

export default function Trips() {
    const [leaderId, setLeaderId] = useState('');
    const [placeId, setPlaceId] = useState('');

    const handleCreateTrip = async () => {
        try {
            const tripData = { leaderId: Number(leaderId), placeId: Number(placeId) };

            await CreateTrip(tripData);
            alert("Trip created successfully!");
        } catch (error) {
            console.error("Error creating trip:", error);
            alert("Failed to create trip.");
        }
    };
    return (
        <div>
            <h1>Trips</h1>

            <input
                type="text"
                placeholder="Leader ID"
                value={leaderId}
                onChange={(e) => setLeaderId(e.target.value)}
            />
            <input
                type="text"
                placeholder="Place ID"
                value={placeId}
                onChange={(e) => setPlaceId(e.target.value)}
            />

            <button onClick={handleCreateTrip}>Create Trip</button>
        </div>
    );
}