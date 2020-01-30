const recognition = new webkitSpeechRecognition()
recognition.lang = 'en-US'
recognition.continuous = true

recognition.onresult = function(event) {
    const results = event.results;
    const transcript = results[results.length-1][0].transcript

    // making a request to our /emotion endpoint that we defined on the project start and setup section
    fetch(`/emotion?text=${transcript}`)
      .then((response) => response.json())
      .then((result) => {
        console.log('result ->', result) // should be undefined
      })
      .catch((e) => {
        console.error('Request error -> ', e)
      })
}

recognition.onend = function() {
  console.log('disconnected')
}

recognition.start()