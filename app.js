
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
        "ADULT ENGLISH": {
            1: "Question 1 for ADULT ENGLISH: Quote lesson 29, topic and central truth",
            2: "Question 2 for ADULT ENGLISH: Quote the memory verse for lesson 31, and the 3 lesson outline",
            3: "Question 3 for ADULT ENGLISH: Quote lesson 32, topic and memory verse'?",
            4: "Question 4 for ADULT ENGLISH: Question from lesson 33- Do you believe that the working of miracle like tongues and the working of miracles, have ceased with the Apostle-Age?. Yes or No",
            5: "Question 5 for ADULT ENGLISH: Quote from lesson 34, Since we are saved by grace, does God really pay attention to our physical appearance? (b)Is there any moderation in love?",
            6: "Question 6 for ADULT ENGLISH: Quote from lesson 35,What is the difference between being a member of local church and a member of the universal church of Christ?",
            7: "Question 7 for ADULT ENGLISH: How can the church improve it's efficiency and impact in our world today?",
            8: "Question 8 for ADULT ENGLISH: Quote topic for lesson 38, and it's central truth"
            // 9: "Question 9 for ADULT ENGLISH: What is the largest mammal?",
            // 10: "Question 10 for ADULT ENGLISH: Who painted the Mona Lisa?"
        },
        "MEMBERSHIP CLASS": {
            1: "Question 1 for MEMBERSHIP CLASS: WHAT IS THE NAME OF FOURSQUARE FOUNDER?",
            2: "Question 2 for MEMBERSHIP CLASS: WHAT IS THE TOPIC OF LESSON 14?",
            3: "Question 3 for MEMBERSHIP CLASS: WHAT DOES THE DOVE SYMBOL MEANS?",
            4: "Question 4 for MEMBERSHIP CLASS: ONE OF THE CRITERIA FOR ENTERING HEAVEN IS?",
            5: "Question 5 for MEMBERSHIP CLASS: WHAT LESSON TREATED THE TOPIC 'HEAVEN'?"
            // 6: "Question 6 for Memebership Class: What is the capital of Japan?",
            // 7: "Question 7 for Memebership Class: Who discovered gravity?",
            // 8: "Question 8 for Memebership Class: What is the largest desert in the world?",
            // 9: "Question 9 for Memebership Class: What is the boiling point of water in Celsius?",
            // 10: "Question 10 for Memebership Class: Who was the first man on the moon?"
        },
        "BAPTISMAL CLASS": {
            1: "Question 1 for BAPTISMAL CLASS: According to the lesson 'The Plan of Salvation'_________ is the only way to heaven (a)Water Baptism (b)Holy Communion (c)Salvation (d)Speaking in Tongues",
            2: "Question 2 for BAPTISMAL CLASS: What is Salvation?",
            3: "Question 3 for BAPTISMAL CLASS: What is the memory verse of the lesson 'Assurance of Salvation'",
            4: "Question 4 for BAPTISMAL CLASS: What does Salvation do to us? Mention any two",
            5: "Question 5 for BAPTISMAL CLASS: Water Baptism is not necessarily by immersion. True or False?",
            6: "Question 6 for BAPTISMAL CLASS: Who planned Salvation",
            7: "Question 7 for BAPTISMAL CLASS: What is the memory verse for the lesson- Water Baptism?",
            8: "Question 8 for BAPTISMAL CLASS: Quote and recite the memory verse for the lesson: The Plan of Salvation",
            9: "Question 9 for BAPTISMAL CLASS: Acts 1:8 is the memory verse for which lesson? Give the topic.",
            10: "Question 10 for BAPTISMAL CLASS: Water Baptism is an ordinance. True or False?"
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
