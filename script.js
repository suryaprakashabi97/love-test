/* =========================================
   LOVE QUIZ
========================================= */


/* =========================================
   QUESTIONS
========================================= */

const questions = [

    {
        question: "Who is more dramatic, me or you?",
        emoji: "🎭",
        options: [
            {
                text: "Definitely You 😂",
                points: 10,
                reaction: "I knew it! 😂"
            },
            {
                text: "Definitely Me 😌",
                points: 10,
                reaction: "Okay okay... I'll accept that! 😜"
            }
        ]
    },

    {
        question: "Do you still love me if I would start from the 1st in this relationship?",
        emoji: "🥺",
        options: [
            {
                text: "Yes ❤️",
                points: 10,
                reaction: "Awww... we can start again. ❤️"
            },
            {
                text: "No 😢",
                points: 0,
                reaction: "But I would still choose you... 🥺"
            }
        ]
    },

    {
        question: "Who loves most between us?",
        emoji: "💕",
        options: [
            {
                text: "Me ❤️",
                points: 10,
                reaction: "I knew you would say that! 😍"
            },
            {
                text: "You ❤️",
                points: 10,
                reaction: "Maybe we both love too much! 🥰"
            }
        ]
    },

    {
        question: "Would you still love me if I became a fat guy?",
        emoji: "🍕",
        options: [
            {
                text: "Yes ❤️",
                points: 10,
                reaction: "Food dates forever! 🍕😂❤️"
            },
            {
                text: "No 😭",
                points: 0,
                reaction: "Hey! I am still the same person! 🥺"
            }
        ]
    },

    {
        question: "Who says Sorry first?",
        emoji: "🥺",
        options: [
            {
                text: "Me 🙋",
                points: 10,
                reaction: "The sweetest one always says sorry first. ❤️"
            },
            {
                text: "You 🙈",
                points: 10,
                reaction: "Okay... guilty! 😂❤️"
            }
        ]
    },

    {
        question: "Do you love me?",
        emoji: "❤️",
        options: [
            {
                text: "Yes ❤️",
                points: 10,
                reaction: "My heart is happy! ❤️❤️❤️"
            },
            {
                text: "No 😢",
                points: 0,
                reaction: "I am going to need a hug after this... 🥺"
            }
        ]
    },

    {
        question: "Do you care about me?",
        emoji: "🫶",
        options: [
            {
                text: "Yes ❤️",
                points: 10,
                reaction: "That's all I wanted to hear. 🥰"
            },
            {
                text: "No 😢",
                points: 0,
                reaction: "My heart just dropped... 💔"
            }
        ]
    },

    {
        question: "Would you give me one more chance?",
        emoji: "🙏",
        options: [
            {
                text: "Yes ❤️",
                points: 10,
                reaction: "Thank you for giving us another chance. ❤️"
            },
            {
                text: "No 😢",
                points: 0,
                reaction: "I'll respect your answer... 🥺"
            }
        ]
    },

    {
        question: "Do you accept my sorry?",
        emoji: "🥺❤️",
        options: [
            {
                text: "Yes ❤️",
                points: 10,
                reaction: "Thank you. I promise to try harder. ❤️"
            },
            {
                text: "No 😢",
                points: 0,
                reaction: "Okay... I understand. 🥺"
            }
        ]
    },

    {
        question: "Do you think I am a mistake?",
        emoji: "💔",
        options: [
            {
                text: "No ❤️",
                points: 10,
                reaction: "Then maybe meeting you was the best thing. ❤️"
            },
            {
                text: "Yes 😢",
                points: 0,
                reaction: "I hope I can change your mind. 🥺"
            }
        ]
    }

];


/* =========================================
   VARIABLES
========================================= */

let currentQuestion = 0;

let totalScore = 0;

let answers = [];


/* =========================================
   ELEMENTS
========================================= */

const welcomePage =
    document.getElementById("welcomePage");

const questionPage =
    document.getElementById("questionPage");

const reportPage =
    document.getElementById("reportPage");

const yesButton =
    document.getElementById("yesButton");

const noButton =
    document.getElementById("noButton");

const noMessage =
    document.getElementById("noMessage");

const questionText =
    document.getElementById("questionText");

const questionEmoji =
    document.getElementById("questionEmoji");

const questionNumber =
    document.getElementById("questionNumber");

const progressFill =
    document.getElementById("progressFill");

const answerButtons =
    document.getElementById("answerButtons");

const questionReaction =
    document.getElementById("questionReaction");

const loveScore =
    document.getElementById("loveScore");

const reportTitle =
    document.getElementById("reportTitle");

const reportMessage =
    document.getElementById("reportMessage");

const answerSummary =
    document.getElementById("answerSummary");

const restartButton =
    document.getElementById("restartButton");

const heartsContainer =
    document.getElementById("hearts-container");

const confettiContainer =
    document.getElementById("confetti-container");


/* =========================================
   FIRST PAGE - NO BUTTON
========================================= */

let noMoveCount = 0;

noButton.addEventListener("mouseenter", moveNoButton);

noButton.addEventListener("touchstart", function (event) {

    event.preventDefault();

    moveNoButton();

});


function moveNoButton() {

    noMoveCount++;

    const messages = [
        "Are you sure? 🥺",
        "Please don't click No! 😭",
        "Wrong button! 😜",
        "Try YES ❤️",
        "You can't escape me 😂",
        "The YES button is waiting ❤️"
    ];

    noMessage.textContent =
        messages[
            Math.min(
                noMoveCount - 1,
                messages.length - 1
            )
        ];


    /*
        Change to fixed positioning after
        the user tries to move it.
    */

    noButton.style.position = "fixed";


    const padding = 30;

    const maxX =
        window.innerWidth -
        noButton.offsetWidth -
        padding;

    const maxY =
        window.innerHeight -
        noButton.offsetHeight -
        padding;


    const randomX =
        padding +
        Math.random() *
        Math.max(0, maxX - padding);

    const randomY =
        padding +
        Math.random() *
        Math.max(0, maxY - padding);


    noButton.style.left =
        randomX + "px";

    noButton.style.top =
        randomY + "px";


    /*
        Make button smaller after repeated attempts.
    */

    const scale =
        Math.max(
            0.55,
            1 - noMoveCount * 0.04
        );

    noButton.style.transform =
        `scale(${scale})`;
}


/* =========================================
   YES BUTTON
========================================= */

yesButton.addEventListener("click", function () {

    document.body.classList.add("happy-theme");

    createConfetti();

    createManyHearts();

    setTimeout(function () {

        showQuestionPage();

    }, 900);

});


/* =========================================
   SHOW QUESTION PAGE
========================================= */

function showQuestionPage() {

    welcomePage.classList.remove("active");

    questionPage.classList.add("active");

    currentQuestion = 0;

    totalScore = 0;

    answers = [];

    loadQuestion();

}


/* =========================================
   LOAD QUESTION
========================================= */

function loadQuestion() {

    const question =
        questions[currentQuestion];


    questionText.textContent =
        question.question;

    questionEmoji.textContent =
        question.emoji;


    questionNumber.textContent =
        `Question ${currentQuestion + 1} of ${questions.length}`;


    const progress =
        ((currentQuestion + 1) /
            questions.length) *
        100;


    progressFill.style.width =
        progress + "%";


    questionReaction.textContent = "";


    answerButtons.innerHTML = "";


    question.options.forEach(
        function (option, index) {

            const button =
                document.createElement("button");

            button.className =
                "btn answer-btn";


            if (
                option.text
                    .toLowerCase()
                    .includes("yes") ||
                option.points > 0
            ) {

                button.classList.add("yes");

            } else {

                button.classList.add("no");

            }


            button.textContent =
                option.text;


            button.addEventListener(
                "click",
                function () {

                    selectAnswer(
                        option,
                        index
                    );

                }
            );


            answerButtons.appendChild(button);

        }
    );

}


/* =========================================
   SELECT ANSWER
========================================= */

function selectAnswer(option, index) {

    totalScore += option.points;


    answers.push({

        question:
            questions[currentQuestion].question,

        answer:
            option.text,

        points:
            option.points

    });


    questionReaction.textContent =
        option.reaction;


    /*
        Change background based on answer.
    */

    if (option.points > 0) {

        document.body.classList.remove(
            "sad-theme",
            "sorry-theme"
        );

        document.body.classList.add(
            "love-theme"
        );

        createHearts(8);

        createConfetti();

    } else {

        document.body.classList.remove(
            "love-theme",
            "happy-theme"
        );

        document.body.classList.add(
            "sad-theme"
        );

    }


    /*
        Disable buttons temporarily.
    */

    const buttons =
        answerButtons.querySelectorAll("button");

    buttons.forEach(function (button) {

        button.disabled = true;

    });


    /*
        Wait before next question.
    */

    setTimeout(function () {

        currentQuestion++;


        if (
            currentQuestion <
            questions.length
        ) {

            loadQuestion();

        } else {

            showReport();

        }

    }, 1200);

}


/* =========================================
   FINAL REPORT
========================================= */

function showReport() {

    questionPage.classList.remove("active");

    reportPage.classList.add("active");


    document.body.classList.remove(
        "sad-theme",
        "sorry-theme"
    );

    document.body.classList.add(
        "love-theme"
    );


    const percentage =
        Math.round(
            (totalScore /
                (questions.length * 10)) *
            100
        );


    animateScore(percentage);


    generateReportText(percentage);

    generateAnswerSummary();


    createManyHearts();

    createConfetti();

}


/* =========================================
   SCORE ANIMATION
========================================= */

function animateScore(target) {

    let current = 0;

    const interval =
        setInterval(function () {

            current += 1;

            loveScore.textContent =
                current + "%";


            if (current >= target) {

                clearInterval(interval);

            }

        }, 25);

}


/* =========================================
   REPORT TEXT
========================================= */

function generateReportText(score) {

    if (score >= 90) {

        reportTitle.textContent =
            "A Love Story Worth Keeping! 💖";

        reportMessage.textContent =
            "Your answers show a lot of love, care and willingness to keep this relationship strong. ❤️";

    }

    else if (score >= 70) {

        reportTitle.textContent =
            "There Is Definitely Love Here! 🥰";

        reportMessage.textContent =
            "There is a beautiful connection here. Keep talking, caring and choosing each other. ❤️";

    }

    else if (score >= 40) {

        reportTitle.textContent =
            "There Is Still Something Special ❤️";

        reportMessage.textContent =
            "Your answers show that there are feelings here, but there may also be things that need understanding and conversation.";

    }

    else {

        reportTitle.textContent =
            "Maybe We Need One More Conversation 🥺";

        reportMessage.textContent =
            "Love is complicated sometimes. Honest communication can help understand what both of you really feel.";

    }

}


/* =========================================
   ANSWER SUMMARY
========================================= */

function generateAnswerSummary() {

    answerSummary.innerHTML = "";


    answers.forEach(
        function (item, index) {

            const div =
                document.createElement("div");

            div.className =
                "summary-item";


            const question =
                document.createElement("div");

            question.className =
                "summary-question";

            question.textContent =
                `${index + 1}. ${item.question}`;


            const answer =
                document.createElement("div");

            answer.className =
                "summary-answer";

            answer.textContent =
                `Answer: ${item.answer}`;


            div.appendChild(question);

            div.appendChild(answer);

            answerSummary.appendChild(div);

        }
    );

}


/* =========================================
   RESTART
========================================= */

restartButton.addEventListener(
    "click",
    function () {

        currentQuestion = 0;

        totalScore = 0;

        answers = [];

        reportPage.classList.remove(
            "active"
        );

        welcomePage.classList.add(
            "active"
        );


        document.body.classList.remove(
            "love-theme",
            "sad-theme",
            "sorry-theme"
        );


        noButton.style.position =
            "relative";

        noButton.style.left = "";

        noButton.style.top = "";

        noButton.style.transform =
            "";


        noMoveCount = 0;

        noMessage.textContent = "";

    }
);


/* =========================================
   FLOATING HEARTS
========================================= */

function createHearts(amount = 1) {

    for (let i = 0; i < amount; i++) {

        const heart =
            document.createElement("div");

        heart.className =
            "floating-heart";


        const heartTypes = [
            "❤️",
            "💕",
            "💖",
            "💗",
            "💓",
            "💘"
        ];


        heart.textContent =
            heartTypes[
                Math.floor(
                    Math.random() *
                    heartTypes.length
                )
            ];


        heart.style.left =
            Math.random() * 100 + "%";


        heart.style.fontSize =
            15 +
            Math.random() * 30 +
            "px";


        heart.style.animationDuration =
            4 +
            Math.random() * 5 +
            "s";


        heartsContainer.appendChild(
            heart
        );


        setTimeout(
            function () {

                heart.remove();

            },
            10000
        );

    }

}


function createManyHearts() {

    createHearts(25);

}


/* =========================================
   AUTO FLOATING HEARTS
========================================= */

setInterval(
    function () {

        createHearts(1);

    },
    1200
);


/* =========================================
   CONFETTI
========================================= */

function createConfetti() {

    const count = 70;


    for (let i = 0; i < count; i++) {

        const piece =
            document.createElement("div");

        piece.className =
            "confetti";


        piece.style.left =
            Math.random() * 100 + "%";


        piece.style.top =
            "-20px";


        piece.style.background =
            randomConfettiColor();


        piece.style.animationDelay =
            Math.random() * 0.7 + "s";


        piece.style.transform =
            `rotate(${Math.random() * 360}deg)`;


        confettiContainer.appendChild(
            piece
        );


        setTimeout(
            function () {

                piece.remove();

            },
            3500
        );

    }

}


function randomConfettiColor() {

    const colors = [
        "#ff416c",
        "#ff4b8b",
        "#ff85a2",
        "#ffd166",
        "#ffffff",
        "#c77dff",
        "#ff9f1c"
    ];


    return colors[
        Math.floor(
            Math.random() *
            colors.length
        )
    ];

}


/* =========================================
   START
========================================= */

createManyHearts();