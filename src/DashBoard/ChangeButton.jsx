import { useState } from 'react';

export function ChangeButton() {
    const [isCompleted, setIsCompleted] = useState(false);
    const [isFailed, setIsFailed] = useState(false);

    return (
        <>
            {!isCompleted && !isFailed && (
                <div className="flex gap-2">
                    <button
                        type="button"
                        className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700 transition"
                        onClick={() => {
                            setIsCompleted(true);
                            setIsFailed(false);
                        }}
                    >
                        Mark As Completed
                    </button>
                    <button
                        type="button"
                        className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 transition"
                        onClick={() => {
                            setIsFailed(true);
                            setIsCompleted(false);
                        }}
                    >
                        Mark As Failed
                    </button>
                </div>
            )}

            {isCompleted && (
                <button type="button" className="bg-green-600 text-white px-3 py-1 rounded">
                    Completed
                </button>
            )}

            {isFailed && (
                <button type="button" className="bg-red-600 text-white px-3 py-1 rounded">
                    Failed
                </button>
            )}
        </>
    );
}