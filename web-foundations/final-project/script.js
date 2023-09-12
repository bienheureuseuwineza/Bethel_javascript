const adviceUrl = 'https://api.adviceslip.com/advice';
    const adviceElement = document.getElementById('advice');

    const fetchRandomAdvice = async () => {
      try {
        const response = await fetch(adviceUrl);
        const data = await response.json();
        const advice = data.slip.advice;
        adviceElement.textContent = advice;
      } catch (error) {
        console.log('Error fetching advice:', error);
      }
    };

     // Call the function to fetch random advice
     fetchRandomAdvice();