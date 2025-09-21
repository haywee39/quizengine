
document.addEventListener('DOMContentLoaded', () => {
    const questionNumberInput = document.getElementById('question-number-input');
    const getQuestionButton = document.getElementById('get-question-button');
    const questionText = document.getElementById('question-text');
    const initialInstruction = document.getElementById('initial-instruction');
    const categorySelect = document.getElementById('category-select');
    const spinAnimation = document.getElementById('spin-animation');
    const resetButton = document.getElementById('reset-button');

    // Define categories and questions
    const categories = {
        "Category A": {
            1: "Question 1 for Category A: What is the capital of France?",
            2: "Question 2 for Category A: What planet is known as the Red Planet?",
            3: "Question 3 for Category A: Who wrote the play 'Romeo and Juliet'?",
            4: "Question 4 for Category A: What is the largest ocean on Earth?",
            5: "Question 5 for Category A: What element does 'O' represent on the periodic table?",
            6: "Question 6 for Category A: How many continents are there?",
            7: "Question 7 for Category A: What is the longest river in the world?",
            8: "Question 8 for Category A: In what country would you find the Great Pyramid of Giza?",
            9: "Question 9 for Category A: What is the largest mammal?",
            10: "Question 10 for Category A: Who painted the Mona Lisa?"
        },
        "Category B": {
            1: "Question 1 for Category B: What is the chemical symbol for gold?",
            2: "Question 2 for Category B: Which planet is closest to the sun?",
            3: "Question 3 for Category B: Who is the author of 'To Kill a Mockingbird'?",
            4: "Question 4 for Category B: What is the tallest mountain in the world?",
            5: "Question 5 for Category B: What is the largest country by area?",
            6: "Question 6 for Category B: What is the capital of Japan?",
            7: "Question 7 for Category B: Who discovered gravity?",
            8: "Question 8 for Category B: What is the largest desert in the world?",
            9: "Question 9 for Category B: What is the boiling point of water in Celsius?",
            10: "Question 10 for Category B: Who was the first man on the moon?"
        },
        "Category C": {
            1: "Question 1 for Category C: What is the currency of Germany?",
            2: "Question 2 for Category C: What is the largest animal in the world?",
            3: "Question 3 for Category C: Who painted 'The Starry Night'?",
            4: "Question 4 for Category C: What is the capital of Australia?",
            5: "Question 5 for Category C: What is the largest planet in our solar system?",
            6: "Question 6 for Category C: What is the smallest country in the world?",
            7: "Question 7 for Category C: Who wrote 'The Great Gatsby'?",
            8: "Question 8 for Category C: What is the largest lake in the world?",
            9: "Question 9 for Category C: What is the capital of Canada?",
            10: "Question 10 for Category C: Who invented the telephone?"
        },
        "Category D": {
            1: "Question 1 for Category D: What is the capital of Brazil?",
            2: "Question 2 for Category D: What is the largest bird in the world?",
            3: "Question 3 for Category D: Who wrote 'Pride and Prejudice'?",
            4: "Question 4 for Category D: What is the capital of South Africa?",
            5: "Question 5 for Category D: What is the largest island in the world?",
            6: "Question 6 for Category D: What is the capital of China?",
            7: "Question 7 for Category D: Who painted 'The Scream'?",
            8: "Question 8 for Category D: What is the largest waterfall in the world?",
            9: "Question 9 for Category D: What is the capital of Italy?",
            10: "Question 10 for Category D: Who discovered penicillin?"
        },
        "Category E": {
            1: "Question 1 for Category E: What is the capital of Spain?",
            2: "Question 2 for Category E: What is the largest reptile in the world?",
            3: "Question 3 for Category E: Who wrote '1984'?",
            4: "Question 4 for Category E: What is the capital of India?",
            5: "Question 5 for Category E: What is the largest continent in the world?",
            6: "Question 6 for Category E: What is the capital of Russia?",
            7: "Question 7 for Category E: Who painted 'The Last Supper'?",
            8: "Question 8 for Category E: What is the largest volcano in the world?",
            9: "Question 9 for Category E: What is the capital of Egypt?",
            10: "Question 10 for Category E: Who invented the light bulb?"
        }
    };

    // Add a default prompt to the category dropdown
    const defaultOption = document.createElement('option');
    defaultOption.value = '';
    defaultOption.textContent = 'Select a Category';
    defaultOption.selected = true;
    defaultOption.disabled = true;
    categorySelect.appendChild(defaultOption);

    // Populate category dropdown
    for (const category in categories) {
        const option = document.createElement('option');
        option.value = category;
        option.textContent = category;
        categorySelect.appendChild(option);
    }

    // Function to reset the form
    const resetForm = () => {
        categorySelect.value = '';
        questionNumberInput.value = '';
        questionText.textContent = '';
        questionText.classList.remove('show');
        initialInstruction.style.display = 'block';
    };

    // Reset button event listener
    resetButton.addEventListener('click', resetForm);

    getQuestionButton.addEventListener('click', () => {
        const userNumber = parseInt(questionNumberInput.value);
        const selectedCategory = categorySelect.value;

        // Hide initial instruction if it's visible
        if (initialInstruction) {
            initialInstruction.style.display = 'none';
        }

        // Show spin animation
        spinAnimation.style.display = 'block';

        // Simulate a delay for the spin animation
        setTimeout(() => {
            spinAnimation.style.display = 'none';

            // Remove previous show class for re-animation
            questionText.classList.remove('show');

            if (selectedCategory && categories[selectedCategory] && categories[selectedCategory][userNumber]) {
                questionText.textContent = categories[selectedCategory][userNumber];
                // Trigger reflow to restart animation
                void questionText.offsetWidth;
                questionText.classList.add('show');
            } else {
                questionText.textContent = selectedCategory ? `Oops! Please pick a number between 1 and 10 for ${selectedCategory}.` : 'Please select a category and a valid question number.';
                questionText.classList.add('show');
            }
        }, 2000); // 2 seconds delay for spin animation
    });
});
