
import { useState } from 'react';

export function ChangeButton() {
    const [isCompleted, setIsCompleted] = useState(false); // Tracks if "Completed" is clicked
    const [isFailed, setIsFailed] = useState(false); // Tracks if "Failed" is clicked

    return (
        <>
            {/* Show "Mark As Completed" and "Mark As Failed" buttons only if neither is clicked */}
            {!isCompleted && !isFailed && (
                <div>
                    <button
                        type="button"
                        className="btn btn-success change"
                        onClick={() => {
                            setIsCompleted(true); // Show "Completed" button
                            setIsFailed(false); // Ensure "Failed" button is hidden
                        }}
                    >
                        Mark As Completed
                    </button>
                    <button
                        type="button"
                        className="btn btn-danger change"
                        onClick={() => {
                            setIsFailed(true); // Show "Failed" button
                            setIsCompleted(false); // Ensure "Completed" button is hidden
                        }}
                    >
                        Mark As Failed
                    </button>
                </div>
            )}

            {/* Show "Completed" button only if isCompleted is true */}
            {isCompleted && (
                <button type="button" className="btn btn-success">
                    Completed
                </button>
            )}

            {/* Show "Failed" button only if isFailed is true */}
            {isFailed && (
                <button type="button" className="btn btn-danger">
                    Failed
                </button>
            )}
        </>
    );
}