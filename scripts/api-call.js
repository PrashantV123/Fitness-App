async function fetchData(muscle) {
    const url = `https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises?muscle=${muscle}`

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '55eb5326b2msh76c48bec142a1a2p102b32jsnbb3934275176',
            'X-RapidAPI-Host': 'exercises-by-api-ninjas.p.rapidapi.com'

        }
    }

    try {
        const response = await fetch(url, options);
        const result = await response.json();


        // display data on webpage

        displayData(result)

        function displayData(result) {
            const displayResult = document.querySelector('.display-result')

            // clear previous data
            displayResult.innerHTML = '';

            const exerciseHeader = document.createElement('div')
            exerciseHeader.innerHTML = `<h1 style="margin-left: 40px;">Showing results for ${muscle} excercises ...</h1>`
            displayResult.appendChild(exerciseHeader)

            // iterate over the result and create HTML to show results on webpage
            for (const item in result) {
                const exerciseName = result[item].name;
                const exerciseMuscle = result[item].muscle;
                const exerciseEquipment = result[item].equipment;
                const excerciseInstruction = result[item].instructions;


                const exerciseElement = document.createElement('div');
                exerciseElement.classList.add('exercise');
                exerciseElement.innerHTML = `                
                <h3>${exerciseName}</h3>
                <div class='muscle-equipment-section'>
                <h5>Muscle: ${exerciseMuscle}</h5>
                <h5>Equipment: ${exerciseEquipment}</h5>
                </div>
                <p>${excerciseInstruction}</p>`;

                displayResult.appendChild(exerciseElement);
            }

        }

    } catch (error) {
        console.error(error);
    }
}









