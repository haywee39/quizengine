
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
        "VISITORS CLASS": {
            1 : "Question 1 for VISITORS CLASS: \nQuote Lesson 23, topic and central truth",
            2: "Question 2 for VISITORS CLASS: \nQuote the memory verse for Lesson 22.",
            3: "Question 3 for VISITORS CLASS: \nQuote Lesson 25, topic and central truth?",
            4: "Question 4 for VISITORS CLASS: \nQuote from Lesson 26, \n(a) What circumstances led to the rejection of Saul as the king of Israel? \n(b) What practical lessons can be learnt from the consequences of Saul's disobedience?",
            5: "Question 5 for VISITORS CLASS: \nQuote Lesson 29, topic and central truth \n(b) Quote the memory verse for Lesson 29",
            6: "Question 6 for VISITORS CLASS: \nQuote Lesson 30, How can we practically incorporate spiritual exercises such as prayer, bible study and worship into our daily routines?",
            7: "Question 7 for VISITORS CLASS: \nQuote Lesson 33, How does the fruits of the spirit reinforces the unity of the body of Christ as its members manifest the spiritual gifts?"
        },

        "BAPTISMAL CLASS": {
            1 : "Question 1 for BAPTISMAL CLASS: \nQuote Lesson 23, topic and central truth",
            2: "Question 2 for BAPTISMAL CLASS: \nQuote the memory verse for Lesson 22.",
            3: "Question 3 for BAPTISMAL CLASS: \nQuote Lesson 25, topic and central truth?",
            4: "Question 4 for BAPTISMAL CLASS: \nQuote from Lesson 26, \n(a) What circumstances led to the rejection of Saul as the king of Israel? \n(b) What practical lessons can be learnt from the consequences of Saul's disobedience?",
            5: "Question 5 for BAPTISMAL CLASS: \nQuote Lesson 29, topic and central truth \n(b) Quote the memory verse for Lesson 29",
            6: "Question 6 for BAPTISMAL CLASS: \nQuote Lesson 30, How can we practically incorporate spiritual exercises such as prayer, bible study and worship into our daily routines?",
            7: "Question 7 for BAPTISMAL CLASS: \nQuote Lesson 33, How does the fruits of the spirit reinforces the unity of the body of Christ as its members manifest the spiritual gifts?"
        },

        "MEMBERSHIP CLASS": {
            1: "Question 1 for MEMBERSHIP CLASS: \nWHAT IS THE NAME OF FOURSQUARE FOUNDER?",
            2: "Question 2 for MEMBERSHIP CLASS: \nWHAT IS THE TOPIC OF LESSON 14?",
            3: "Question 3 for MEMBERSHIP CLASS: \nWHAT DOES THE DOVE SYMBOL MEANS?",
            4: "Question 4 for MEMBERSHIP CLASS: \nONE OF THE CRITERIA FOR ENTERING HEAVEN IS?",
            5: "Question 5 for MEMBERSHIP CLASS: \nWHAT LESSON TREATED THE TOPIC 'HEAVEN'?"
        },

        "WORKERS IN TRAINING": {
            1: "Question 1 for WORKERS IN TRAINING: \n________ is something written down for the purpose of future references, which also serves as an aid to achieve a set goal or objective",
            2: "Question 2 for WORKERS IN TRAINING: \nDiscipleship is a gradual process.\n True or False ",
            3: "Question 3 for WORKERS IN TRAINING: \nMention 3 types of discipline.",
            4: "Question 4 for WORKERS IN TRAINING: \nThe art of a more experienced person guiding the less experienced is called _________",
            5: "Question 5 for WORKERS IN TRAINING: \nWhat is the topic of Lesson 3?",
            6: "Question 6 for WORKERS IN TRAINING: \nGod is not very much interested in our spiritual growth. \n True or False",
            7: "Question 7 for WORKERS IN TRAINING: \nShowing the way with a Christian view point is called _____________ ",
            8: "Question 8 for WORKERS IN TRAINING: \nMention any 2 biblical examples of mentoring",
            9: "Question 9 for WORKERS IN TRAINING: \nMention the 3 factors that influences Personality Development according to Lesson 3",
            10: "Question 10 for WORKERS IN TRAINING: \nWhat is Discipline?"
        },

        "ADULT YORUBA": {
            1: "Question 1 for ADULT YORUBA: \nEko wo ni ati ri 'Idapo pelu Kristi'?",
            2: "Question 2 for ADULT YORUBA: \nDaruko ayoka kan tio wa fun idapo pelu Kristi",
            3: "Question 3 for ADULT YORUBA: \nKini akosori ti owa ni Eko 4?",
            4: "Question 4 for ADULT YORUBA: \nOlorun Metalokan Ayeraye, ni'bo  ni ari ayoka re wa?",
            5: "Question 5 for ADULT YORUBA: \nKiki Oba Kaabo, kini ese lati ranti? \nEko wo lowa?"
        },

        "ADULT ENGLISH": {
            1: "Question 1 for ADULT ENGLISH: \nEko wo ni ati ri 'Idapo pelu Kristi'?",
            2: "Question 2 for ADULT ENGLISH: \nDaruko ayoka kan tio wa fun idapo pelu Kristi",
            3: "Question 3 for ADULT ENGLISH: \nKini akosori ti owa ni Eko 4?",
            4: "Question 4 for ADULT ENGLISH: \nOlorun Metalokan Ayeraye, ni'bo  ni ari ayoka re wa?",
            5: "Question 5 for ADULT ENGLISH: \nKiki Oba Kaabo, kini ese lati ranti? \nEko wo lowa?"
        },

        "CHILDREN DEPT": {
            1: "Question 1 for CHILDREN DEPT: \nAccording to the lesson 'The Plan of Salvation'\n_________ is the only way to heaven. \n(a)Water Baptism \n(b)Holy Communion \n(c)Salvation \n(d)Speaking in Tongues",
            2: "Question 2 for CHILDREN DEPT: \nWhat is Salvation?",
            3: "Question 3 for CHILDREN DEPT: \nWhat is the memory verse of the lesson 'Assurance of Salvation'",
            4: "Question 4 for CHILDREN DEPT: \nWhat does Salvation do to us? \nMention any two",
            5: "Question 5 for CHILDREN DEPT: \nWhy do we not baptize babies in Foursquare?",
            6: "Question 6 for CHILDREN DEPT: \nWho planned Salvation?",
            7: "Question 7 for CHILDREN DEPT: \nState 3 importance of Water Baptism",
            8: "Question 8 for CHILDREN DEPT: \nRecite the memory verse of Lesson Two",
            9: "Question 9 for CHILDREN DEPT: \nWhat are the two ordinances Jesus gave his disciples?",
            10: "Question 10 for CHILDREN DEPT: \nWhat is the meaning of  Baptism?"
        },

        "SEMI-TEENS DEPT": {
            1: "Question 1 for SEMI-TEENS DEPT:	\n_______________ and ____________ are the two ordinances that the Foursquare Gospel Church believe in. \nA. Baptism & Reincarnation \n B. The Lord’s Supper & Water Baptism \n C. Holy Baptism & The Lord’s Supper",
            2: "Question 2 for SEMI-TEENS DEPT:	\nThe two types of church are? \nA. Visible and Invisible church \nB. Heavenly and Earthly Church \nC. Foursquare Gospel Church and Others ",
            3: "Question 3 for SEMI-TEENS DEPT:	\nThe key to daily walking worthy of the Lord unto all pleasing is \nA. Fasting & Prayer \nB. The Secret Place \nC. Meditation",
            4: "Question 4 for SEMI-TEENS DEPT:	\nVocal Gifts, Fire Gifts and Revelation Gifts are categories of the gifts of the Holy Spirit according to 1 Cor. 12:1-11. \nTrue \nFalse",
            5: "Question 5 for SEMI-TEENS DEPT:	\nThe nine gifts of the Holy Spirit mentioned in 1 Cor. 12:1-11 are the only gifts available to the Church. \nTrue \nFalse",
            6: "Question 6 for SEMI-TEENS DEPT:	\nRighteousness and holiness are the same. True \nfalse",
            7: "Question 7 for SEMI-TEENS DEPT:	\nState lesson 14 and recite the memory verse for the lesson",
            8: "Question 8 for SEMI-TEENS DEPT:	\nState lesson 5 and recite the memory verse of the lesson.",
            9: "Question 9 for SEMI-TEENS DEPT:	\nMention the nine (9) fruit of the Spirit according to Gal. 5:22-23",
            10: "Question 10 for SEMI-TEENS DEPT:	\nState lesson one and quote the memory verse for the lesson."
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
                questionText.innerHTML = categories[selectedCategory][userNumber].replace(/\n/g, '<br>');

                // Trigger reflow to restart animation
                void questionText.offsetWidth;
                questionText.classList.add('show');
            } else {
                questionText.textContent = selectedCategory ? `Oops! Please pick a number between 1 and 10 for ${selectedCategory}.` : 'Please select a category and a valid question number.';
                questionText.classList.add('show');
            }
        }, 2000); // 2 seconds delay for spin animation
    });



                    // FULLSCREEN QUESTION BUTTON
                const fullscreenQuestionButton = document.getElementById('fullscreen-question-button');
                const questionFullscreen = document.createElement('div');
                questionFullscreen.id = 'question-fullscreen';
                document.body.appendChild(questionFullscreen);

                // Show the fullscreen question button after a question is displayed
                const showFullscreenButton = () => {
                    fullscreenQuestionButton.style.display = 'block';
                };

                // Hide the fullscreen question button initially
                fullscreenQuestionButton.style.display = 'none';

                // Fullscreen question button event listener
                fullscreenQuestionButton.addEventListener('click', () => {
                const questionWithBreaks = questionText.innerHTML; // Use the already formatted question
                questionFullscreen.innerHTML = `<div style="max-width: auto; width: 100%; text-align: left;">${questionWithBreaks}</div>`;
                questionFullscreen.style.display = 'flex';
                });


                // Exit fullscreen when clicking on the fullscreen question
                questionFullscreen.addEventListener('click', () => {
                    questionFullscreen.style.display = 'none';
                });
                showFullscreenButton();
                

});



