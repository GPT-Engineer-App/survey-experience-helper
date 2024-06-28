# survey-experience-helper

I have the following files that make a website im working on:

index.html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Survey Form</title>
    <link rel="stylesheet" href="styles.css">
</head>

<body class="blur-background">
    <div id="start-experience" class="start-experience">
        <button id="start-button">Start Experience</button>
    </div>

    <div id="logo-container" class="hidden">
        <img id="company-logo" src="logo.jpg" alt="Company Logo">
    </div>

    <div id="video-container" class="hidden">
        <video id="intro-video" width="600">
            <source src="1_thankyouforchoosingagreco.mp4" type="video/mp4">
            Your browser does not support the video tag.
        </video>
    </div>

    <div id="survey-intro" class="hidden">
        <div class="intro-box">
            <p>Welcome to our survey! Please click the button below to start.</p>
            <button id="show-survey">Start Survey</button>
        </div>
    </div>

    <div id="intro-video-container" class="hidden">
        <video id="initial-video" width="300">
            <source src="video1.mp4" type="video/mp4">
            Your browser does not support the video tag.
        </video>
    </div>

    <div id="survey-container" class="hidden">
        <div class="form-container">
            <form id="survey-form">

                

                <div class="section active">
                    <div class="question">
                        <label>Which of AgrEco’s products do you buy most often?</label>
                        <div class="options">
                            <label><input type="radio" name="product-variety" value="Vegetables"> Vegetables</label>
                            <label><input type="radio" name="product-variety" value="Fruits"> Fruits</label>
                            <label><input type="radio" name="product-variety" value="Subscription boxes"> Subscription boxes</label>
                            <label><input type="radio" name="product-variety" value="Meat"> Meat</label>
                            <label><input type="radio" name="product-variety" value="Insect-based protein"> Insect-based protein</label>
                        </div>
                    </div>
                    <div class="question">
                        <label>What do you like most about AgrEco’s organic products?</label>
                        <div class="options">
                            <label><input type="radio" name="product-likes" value="Quality"> Quality</label>
                            <label><input type="radio" name="product-likes" value="Variety"> Variety</label>
                            <label><input type="radio" name="product-likes" value="Convenience"> Convenience</label>
                            <label><input type="radio" name="product-likes" value="Sustainability"> Sustainability</label>
                            <label><input type="radio" name="product-likes" value="Supporting local businesses"> Supporting local businesses</label>
                            <label><input type="radio" name="product-likes" value="Transparency"> Transparency</label>
                            <label><input type="radio" name="product-likes" value="Other"> Other (please specify)</label>
                            <textarea name="product-likes-other"></textarea>
                        </div>
                    </div>
                    <div class="question">
                        <label>How often do you use AgrEco’s delivery service?</label>
                        <div class="options">
                            <label><input type="radio" name="service-usage" value="Daily"> Daily</label>
                            <label><input type="radio" name="service-usage" value="Weekly"> Weekly</label>
                            <label><input type="radio" name="service-usage" value="Bi-weekly"> Bi-weekly</label>
                            <label><input type="radio" name="service-usage" value="Monthly"> Monthly</label>
                            <label><input type="radio" name="service-usage" value="Occasionally"> Occasionally</label>
                            <label><input type="radio" name="service-usage" value="Never"> Never</label>
                        </div>
                        <button type="button" class="next-section">Next Section</button>
                    </div>
                </div>

                <div class="section-video hidden">
                    <video width="600" controls>
                        <source src="video2.mp4" type="video/mp4">
                        Your browser does not support the video tag.
                    </video>
                </div>

                <div class="section">
                    <div class="question">
                        <label>How has AgrEco improved your shopping experience?</label>
                        <div class="options">
                            <label><input type="radio" name="shopping-experience" value="Saved time"> Saved time</label>
                            <label><input type="radio" name="shopping-experience" value="Easier access to organic products"> Easier access to organic products</label>
                            <label><input type="radio" name="shopping-experience" value="Reduced personal transportation costs"> Reduced personal transportation costs</label>
                            <label><input type="radio" name="shopping-experience" value="Other"> Other (please specify)</label>
                            <textarea name="shopping-experience-other"></textarea>
                        </div>
                    </div>
                    <div class="question">
                        <label>The reduction of individual transportation using cars, due to companies like AgrEco, has greatly improved the environment. How happy are you about this?</label>
                        <div class="options">
                            <label><input type="radio" name="transportation-reduction" value="Very Happy"> Very Happy</label>
                            <label><input type="radio" name="transportation-reduction" value="Relatively Happy"> Relatively Happy</label>
                            <label><input type="radio" name="transportation-reduction" value="Neutral"> Neutral</label>
                            <label><input type="radio" name="transportation-reduction" value="Relatively Unhappy"> Relatively Unhappy</label>
                            <label><input type="radio" name="transportation-reduction" value="Very Unhappy"> Very Unhappy</label>
                        </div>
                    </div>
                    <div class="question">
                        <label>How satisfied are you with AgrEco’s home delivery service?</label>
                        <div class="options">
                            <label><input type="radio" name="delivery-satisfaction" value="Very satisfied"> Very satisfied</label>
                            <label><input type="radio" name="delivery-satisfaction" value="Satisfied"> Satisfied</label>
                            <label><input type="radio" name="delivery-satisfaction" value="Neutral"> Neutral</label>
                            <label><input type="radio" name="delivery-satisfaction" value="Dissatisfied"> Dissatisfied</label>
                            <label><input type="radio" name="delivery-satisfaction" value="Very dissatisfied"> Very dissatisfied</label>
                        </div>
                    </div>
                    <div class="question">
                        <label>Would you recommend AgrEco to your friends and family?</label>
                        <div class="options">
                            <label><input type="radio" name="recommendation" value="Definitely"> Definitely</label>
                            <label><input type="radio" name="recommendation" value="Probably"> Probably</label>
                            <label><input type="radio" name="recommendation" value="Not sure"> Not sure</label>
                            <label><input type="radio" name="recommendation" value="Probably not"> Probably not</label>
                            <label><input type="radio" name="recommendation" value="Definitely not"> Definitely not</label>
                        </div>
                    </div>
                    <button type="button" class="next-section">Next Section</button>
                </div>

                <div class="section-video hidden">
                    <video width="600" controls>
                        <source src="video3.mp4" type="video/mp4">
                        Your browser does not support the video tag.
                    </video>
                </div>

                <div class="section">
                    <div class="question">
                        <label>Do you feel that you are overly reliant on technology for your daily needs?</label>
                        <div class="options">
                            <label><input type="radio" name="reliance-on-technology" value="Strongly agree"> Strongly agree</label>
                            <label><input type="radio" name="reliance-on-technology" value="Agree"> Agree</label>
                            <label><input type="radio" name="reliance-on-technology" value="Neutral"> Neutral</label>
                            <label><input type="radio" name="reliance-on-technology" value="Disagree"> Disagree</label>
                            <label><input type="radio" name="reliance-on-technology" value="Strongly disagree"> Strongly disagree</label>
                        </div>
                    </div>
                    <button type="button" class="next-section">Next Section</button>
                </div>

                <div class="section-video hidden">
                    <video width="600" controls>
                        <source src="video1.mp4" type="video/mp4">
                        Your browser does not support the video tag.
                    </video>
                </div>

                <div class="section">
                    <div class="question">
                        <label>How secure do you believe your personal data is with online services like AgrEco?</label>
                        <div class="options">
                            <label><input type="radio" name="data-security" value="Very secure"> Very secure</label>
                            <label><input type="radio" name="data-security" value="Somewhat secure"> Somewhat secure</label>
                            <label><input type="radio" name="data-security" value="Neutral"> Neutral</label>
                            <label><input type="radio" name="data-security" value="Somewhat insecure"> Somewhat insecure</label>
                            <label><input type="radio" name="data-security" value="Very insecure"> Very insecure</label>
                        </div>
                    </div>
                    <div class="question">
                        <label>How do you feel about being deprived from essentials due to security breaches?</label>
                        <textarea name="deprivation-feelings"></textarea>
                    </div>
                    <div class="question">
                        <label>Have you ever considered the risks of having your data accessed by unauthorized parties?</label>
                        <div class="options">
                            <label><input type="radio" name="data-risk-consideration" value="Often"> Often</label>
                            <label><input type="radio" name="data-risk-consideration" value="Sometimes"> Sometimes</label>
                            <label><input type="radio" name="data-risk-consideration" value="Rarely"> Rarely</label>
                            <label><input type="radio" name="data-risk-consideration" value="Never"> Never</label>
                        </div>
                    </div>
                    <div class="question">
                        <label>How would you rate your awareness of the potential dangers of cyber-attacks on online services?</label>
                        <div class="options">
                            <label><input type="radio" name="cyber-awareness" value="Very high"> Very high</label>
                            <label><input type="radio" name="cyber-awareness" value="High"> High</label>
                            <label><input type="radio" name="cyber-awareness" value="Moderate"> Moderate</label>
                            <label><input type="radio" name="cyber-awareness" value="Low"> Low</label>
                            <label><input type="radio" name="cyber-awareness" value="Very low"> Very low</label>
                        </div>
                    </div>
                    <div class="question">
                        <label>Do you believe that the benefits of online delivery outweigh the risks of potential cyber threats?</label>
                        <div class="options">
                            <label><input type="radio" name="delivery-benefit-vs-risk" value="Strongly agree"> Strongly agree</label>
                            <label><input type="radio" name="delivery-benefit-vs-risk" value="Agree"> Agree</label>
                            <label><input type="radio" name="delivery-benefit-vs-risk" value="Neutral"> Neutral</label>
                            <label><input type="radio" name="delivery-benefit-vs-risk" value="Disagree"> Disagree</label>
                            <label><input type="radio" name="delivery-benefit-vs-risk" value="Strongly disagree"> Strongly disagree</label>
                        </div>
                    </div>
                    <button type="button" class="next-section">Next Section</button>
                </div>

                <div class="section-video hidden">
                    <video width="600" controls>
                        <source src="video1.mp4" type="video/mp4">
                        Your browser does not support the video tag.
                    </video>
                </div>

                <div class="section">
                    <div class="question">
                        <label>Any additional comments or concerns about data security and online services?</label>
                        <textarea name="additional-comments"></textarea>
                    </div>
                    <div class="question">
                        <label>Any other comments about the survey?</label>
                        <textarea name="survey-comments"></textarea>
                    </div>
                    <button type="submit" class="submit-button">Submit</button>
                </div>
            </form>
            <div id="thank-you-message" class="thank-you-message hidden">
                Thank you for completing the survey!
            </div>
        </div>
    </div>    

    <script src="script.js"></script>
</body>

</html>

styles.css:
/* General Body Styling */
body {
    font-family: 'Roboto', sans-serif;
    background-color: #f5f5f5;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: url('background-image.png') no-repeat center center fixed;
    background-size: cover;
    position: relative;
}

.hidden {
    display: none;
}

/* Form Container Styling */
.form-container {
    display: flex;
    flex-direction: column;
    padding: 16px;
    position: relative;
    width: 595px;
    background: #FFFFFF;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
}

/* Header Styling */
.header {
    width: 100%;
    margin-bottom: 20px;
}

.header p {
    margin: 0;
    color: #CBCBCB;
    font-weight: 700;
    font-size: 13px;
}

.header h1 {
    margin: 10px 0;
    font-weight: 700;
    font-size: 32px;
    color: #686868;
}

/* Thank You Styling */
.thank-you {
    background: #F1F1F1;
    padding: 8px;
    border-radius: 8px;
    width: 100%;
}

.thank-you p {
    margin: 5px 0;
}

/* Question Styling */
form .question {
    margin-bottom: 20px;
    width: 100%;
}

form .question label {
    display: block;
    margin-bottom: 5px;
    font-weight: 700;
    font-size: 16px;
    color: #000000;
}

form .question textarea {
    height: 100px;
    padding: 10px;
    border: 1px solid #686868;
    border-radius: 8px;
    font-size: 1em;
    box-shadow: 0px 2px 1px rgba(0, 0, 0, 0.1);
}

form .question .rating {
    display: flex;
    justify-content: space-between;
}

form .question .rating label,
form .question .options label {
    display: flex;
    align-items: center;
    padding: 10px;
    border: 1px solid #686868;
    border-radius: 8px;
    box-shadow: 0px 2px 1px rgba(0, 0, 0, 0.1);
    cursor: pointer;
}

form .question .rating input,
form .question .options input {
    margin-right: 10px;
}

form .question .options {
    display: flex;
    flex-direction: column;
}

/* Button Styling */
button {
    padding: 10px 20px;
    background-color: #007BFF;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

button:hover {
    background-color: #0056b3;
}

#company-logo {
    width: 400px;
    opacity: 0;
    transition: opacity 2s ease;
    position: relative;
    z-index: 3;
}

#company-logo.fade-in {
    opacity: 1;
}

/* Video Container Styling */
#video-container {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    max-width: 800px;
    opacity: 0;
    transition: opacity 2s ease;
    z-index: 3;
}

#video-container.fade-in {
    opacity: 1;
}

#intro-video {
    width: 100%;
    border-radius: 8px;
}

.section-video,
#intro-video-container {
    position: fixed;
    bottom: 20px; /* Adjust based on where you want the video */
    right: 20px; /* Adjust based on where you want the video */
    width: 300px;
    max-width: 600px;
    opacity: 0;
    transition: opacity 1s ease;
    z-index: 4;
}

.section-video.fade-in,
#intro-video-container.fade-in {
    opacity: 1;
}

#initial-video,
.section-video video {
    width: 100%;
    border-radius: 8px;
}




/* Video Popup Styles */
.video-popup {
    display: none;
    position: fixed;
    z-index: 3;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    max-width: 800px;
    background-color: rgba(0, 0, 0, 0.5);
    opacity: 0;
    transition: opacity 0.5s ease;
}

.video-popup.show {
    opacity: 1;
}

.video-popup.corner {
    top: auto;
    left: auto;
    bottom: 20px;
    right: 20px;
    width: 300px;
    height: 200px;
}

.video-popup-content {
    position: relative;
    padding: 10px;
    width: 100%;
    height: 100%;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}

.close {
    position: absolute;
    top: 5px;
    right: 10px;
    color: #aaa;
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;
}

close:hover,
.close:focus {
    color: #000;
    text-decoration: none;
    cursor: pointer;
}

video {
    width: 100%;
    height: 100%;
    border-radius: 8px;
}

/* Start Experience Button Styling */
.start-experience {
    text-align: center;
    padding: 20px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
    background: none;
}

.start-experience button {
    padding: 20px 40px;
    font-size: 20px;
    cursor: pointer;
    border: none;
    border-radius: 10px;
    background-color: #007BFF;
    color: white;
}

.start-experience button:hover {
    background-color: #0056b3;
}

/* Show Survey Button Styling */
.show-survey-button {
    display: none;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 20px 40px;
    font-size: 20px;
    cursor: pointer;
    border: none;
    border-radius: 10px;
    background-color: #007BFF;
    color: white;
    z-index: 4;
}

.show-survey-button:hover {
    background-color: #0056b3;
}

/* Survey Container and Questions */
#survey-intro .intro-box {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: rgba(255, 255, 255, 0.9);
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    text-align: center;
    opacity: 0;
    transition: opacity 1s ease;
    z-index: 3;
}

#survey-intro.hidden .intro-box {
    display: none;
}

#survey-intro .intro-box p {
    margin: 0 0 10px;
}

#survey-intro .intro-box button {
    padding: 10px 20px;
    font-size: 18px;
    cursor: pointer;
    border: none;
    border-radius: 5px;
    background-color: #007BFF;
    color: white;
}

#survey-intro .intro-box button:hover {
    background-color: #0056b3;
}

#survey-intro .intro-box.fade-in {
    opacity: 1;
}


#survey-container {
    display: none;
    z-index: 5; /* Ensure the survey container is on top */
    position: relative; /* Ensure it is properly positioned */
    background: rgba(255, 255, 255, 0.9); /* Optional: slight background for better readability */
    padding: 20px;
    border-radius: 10px;
}


#survey-container.active {
    display: block;
}

/* Updated Question Styling to Match Survey Box Width */
.question {
    display: block;
    opacity: 1;
    margin-bottom: 20px;
    width: 100%; /* Ensure each question takes the full width of the section */
}

.question.active {
    display: block;
    opacity: 1;
}

.next-question {
    margin-top: 10px;
    padding: 10px 20px;
    background-color: #007BFF;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

.next-question:hover {
    background-color: #0056b3;
}

.submit-button {
    display: block;
    margin-top: 10px;
    padding: 10px 20px;
    background-color: #28a745;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

.submit-button:hover {
    background-color: #218838;
}

/* Thank You Message Styling */
.thank-you-message {
    text-align: center;
    padding: 20px;
    font-size: 20px;
    color: #28a745;
}

/* Blurred Background */
body.blur-background::before {
    content: "";
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.7);
    backdrop-filter: blur(5px);
    z-index: 1;
}

/* Ensure sections are properly hidden during video playback */
.section {
    display: none;
    opacity: 0;
    transition: opacity 0.5s ease;
    max-height: 80vh;
    overflow-y: auto;
    width: 100%;
}

.section.active {
    display: block;
    opacity: 1;
    width: calc(100%);
}   

/* Fade-in and fade-out transitions */
.fade-in {
    animation: fadeIn 1s forwards;
}

.fade-out {
    animation: fadeOut 1s forwards;
}

@keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

@keyframes fadeOut {
    from {
        opacity: 1;
    }
    to {
        opacity: 0;
    }
}


script.js:
document.addEventListener('DOMContentLoaded', function () {
    const startButton = document.getElementById('start-button');
    const startExperience = document.getElementById('start-experience');
    const logoContainer = document.getElementById('logo-container');
    const companyLogo = document.getElementById('company-logo');
    const videoContainer = document.getElementById('video-container');
    const introVideo = document.getElementById('intro-video');
    const surveyIntro = document.getElementById('survey-intro');
    const showSurveyButton = document.getElementById('show-survey');
    const surveyContainer = document.getElementById('survey-container');
    const sections = document.querySelectorAll('.section');
    const surveyForm = document.getElementById('survey-form');
    const thankYouMessage = document.getElementById('thank-you-message');
    const sectionVideos = document.querySelectorAll('.section-video');
    const introVideoContainer = document.getElementById('intro-video-container');
    const initialVideo = document.getElementById('initial-video');
    let currentSectionIndex = 0;

    startButton.addEventListener('click', function () {
        startExperience.style.display = 'none';
        document.body.classList.add('blur-background');

        // Logo animation
        logoContainer.classList.remove('hidden');
        setTimeout(() => {
            companyLogo.classList.add('fade-in');
        }, 100);
        setTimeout(() => {
            companyLogo.classList.remove('fade-in');
            companyLogo.classList.add('fade-out');
            setTimeout(() => {
                logoContainer.classList.add('hidden');

                // Video animation
                videoContainer.classList.remove('hidden');
                setTimeout(() => {
                    videoContainer.classList.add('fade-in');
                }, 100);
                introVideo.play().catch((error) => {
                    console.error('Error attempting to play the video:', error);
                });

                introVideo.addEventListener('ended', () => {
                    videoContainer.classList.remove('fade-in');
                    videoContainer.classList.add('fade-out');
                    setTimeout(() => {
                        videoContainer.classList.add('hidden');
                        surveyIntro.classList.remove('hidden');
                        setTimeout(() => {
                            surveyIntro.querySelector('.intro-box').classList.add('fade-in');
                        }, 100);
                    }, 1000);
                });
            }, 2000);
        }, 2000);
    });

    showSurveyButton.addEventListener('click', function () {
        surveyIntro.style.display = 'none';
        introVideoContainer.classList.remove('hidden');
        setTimeout(() => {
            introVideoContainer.classList.add('fade-in');
        }, 100);

        initialVideo.play().catch((error) => {
            console.error('Error attempting to play the video:', error);
        });

        initialVideo.addEventListener('ended', () => {
            introVideoContainer.classList.remove('fade-in');
            introVideoContainer.classList.add('fade-out');
            setTimeout(() => {
                introVideoContainer.classList.add('hidden');
            }, 1000);
        });

        // Show the first section while the initial video is playing
        surveyContainer.classList.add('active');
        surveyContainer.style.zIndex = 5;
        showSection(currentSectionIndex);
    });

    function showSection(index) {
        sections.forEach((section, i) => {
            if (i === index) {
                section.classList.add('fade-in');
                section.classList.remove('fade-out');
                section.classList.add('active');
                showVideo(i);
            } else {
                section.classList.remove('fade-in');
                section.classList.add('fade-out');
                section.classList.remove('active');
            }
        });
    }

    function showNextSection() {
        if (currentSectionIndex < sections.length - 1) {
            currentSectionIndex++;
            showSection(currentSectionIndex);
        } else {
            surveyForm.submit();
        }
    }

    function showVideo(index) {
        const video = sectionVideos[index];
        if (video) {
            // Ensure only the relevant video plays
            sectionVideos.forEach((v, i) => {
                if (i !== index) {
                    v.classList.add('hidden');
                    v.querySelector('video').pause();
                    v.querySelector('video').currentTime = 0;
                }
            });

            video.classList.remove('hidden');
            video.classList.add('fade-in');
            video.querySelector('video').play().catch((error) => {
                console.error('Error attempting to play the video:', error);
                video.classList.add('hidden');
            });

            video.querySelector('video').addEventListener('ended', () => {
                video.classList.remove('fade-in');
                video.classList.add('fade-out');
                setTimeout(() => {
                    video.classList.add('hidden');
                }, 1000);
            });
        }
    }

    document.querySelectorAll('.next-section').forEach(button => {
        button.addEventListener('click', function () {
            const currentSection = sections[currentSectionIndex];

            // Validate current section inputs
            const inputs = currentSection.querySelectorAll('input[type="radio"], textarea');
            let allFilled = true;

            inputs.forEach(input => {
                if (input.type === 'radio') {
                    const name = input.name;
                    const checked = currentSection.querySelector(`input[name="${name}"]:checked`);
                    if (!checked) {
                        allFilled = false;
                    }
                } else if (input.tagName.toLowerCase() === 'textarea' && input.value.trim() === '') {
                    allFilled = false;
                }
            });

            if (allFilled) {
                // Proceed to next section if all inputs are filled
                currentSection.classList.remove('fade-in');
                currentSection.classList.add('fade-out');
                setTimeout(() => {
                    currentSection.classList.remove('active');
                    showNextSection();
                }, 1000);
            } else {
                alert('Please fill out all the questions before moving to the next section.');
            }
        });
    });

    surveyForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const formData = new FormData(surveyForm);
        const data = {};

        sections.forEach(section => {
            const inputs = section.querySelectorAll('input, textarea');
            inputs.forEach(input => {
                if (!data.hasOwnProperty(input.name)) {
                    data[input.name] = formData.get(input.name) || '';
                }
            });
        });

        fetch('/submit-form', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(response => response.text())
            .then(result => {
                alert(result);
                surveyForm.style.display = 'none';
                thankYouMessage.style.display = 'block';
            })
            .catch(error => {
                console.error('Error:', error);
                alert('There was an error submitting the form.');
            });
    });

    showSection(currentSectionIndex);
});


it shows an intro to the website, and then a survey with a few sections and explanatory videos.

I have a problem that 2 videos play at the same time during the first form section. and also I want the question answers to be required which is the case, but it requires me to enter text in the text areas even if I choose another option as an answer.



## Collaborate with GPT Engineer

This is a [gptengineer.app](https://gptengineer.app)-synced repository 🌟🤖

Changes made via gptengineer.app will be committed to this repo.

If you clone this repo and push changes, you will have them reflected in the GPT Engineer UI.

## Tech stack

This project is built with React with shadcn-ui and Tailwind CSS.

- Vite
- React
- shadcn/ui
- Tailwind CSS

## Setup

```sh
git clone https://github.com/GPT-Engineer-App/survey-experience-helper.git
cd survey-experience-helper
npm i
```

```sh
npm run dev
```

This will run a dev server with auto reloading and an instant preview.

## Requirements

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
