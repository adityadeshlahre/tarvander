"use client";

import { useState } from "react";
import { CreateTrip } from "../actions/trips";
import { TripInputModel, TripModel } from "../../../zod-schemas";

export default function Trips() {
    const [leaderId, setLeaderId] = useState("");
    const [placeId, setPlaceId] = useState("");

    const handleCreateTrip = async (e: React.FormEvent) => {
        e.preventDefault();
        const tripData: TripInputModel = {
            leaderId: Number(leaderId),
            placeId: Number(placeId),
        };

        const parsed = TripModel.safeParse(tripData);

        if (!parsed.success) {
            alert("Validation Error: " + JSON.stringify(parsed?.error?.errors));
            return;
        }

        try {
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
            <form onSubmit={handleCreateTrip}>
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

                <button type="submit">Create Trip</button>
            </form>
        </div>
    );
}

