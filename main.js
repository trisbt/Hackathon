fetch('https://uberduck-audio-outputs.s3-us-west-2.amazonaws.com/16f2269d-3d1c-46e3-82d4-cd1ad7a450e7/audio.wav')

    .then(response => {
        if (response.ok) {
            return response.blob();
        }
        throw new Error('Network response was not OK.');
    })
    .then(audioBlob => {
        // Create a URL for the audio blob
        const audioUrl = URL.createObjectURL(audioBlob);

        // Use the audio URL as needed (e.g., assign it to an audio element)
        const audioElement = document.createElement('audio');
        audioElement.src = audioUrl;
        audioElement.controls = true;

        // Append the audio element to the document
        document.body.appendChild(audioElement);
    })
    .catch(error => {
        // Handle any errors that occurred during the fetch
        console.error('Error:', error);
    });
