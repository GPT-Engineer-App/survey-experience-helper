import React, { useState, useEffect } from 'react';

const Index = () => {
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const sections = document.querySelectorAll('.section');
  const sectionVideos = document.querySelectorAll('.section-video');

  useEffect(() => {
    const startButton = document.getElementById('start-button');
    const startExperience = document.getElementById('start-experience');
    const logoContainer = document.getElementById('logo-container');
    const companyLogo = document.getElementById('company-logo');
    const videoContainer = document.getElementById('video-container');
    const introVideo = document.getElementById('intro-video');
    const surveyIntro = document.getElementById('survey-intro');
    const showSurveyButton = document.getElementById('show-survey');
    const surveyContainer = document.getElementById('survey-container');
    const surveyForm = document.getElementById('survey-form');
    const thankYouMessage = document.getElementById('thank-you-message');
    const introVideoContainer = document.getElementById('intro-video-container');
    const initialVideo = document.getElementById('initial-video');

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
        setCurrentSectionIndex(currentSectionIndex + 1);
        showSection(currentSectionIndex + 1);
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
            } else if (checked.value === 'Other') {
              const textarea = currentSection.querySelector(`textarea[name="${name}-other"]`);
              if (textarea && textarea.value.trim() === '') {
                allFilled = false;
              }
            }
          } else if (input.tagName.toLowerCase() === 'textarea' && input.classList.contains('conditional-required')) {
            const relatedRadio = currentSection.querySelector(`input[name="${input.name.replace('-other', '')}"]:checked`);
            if (relatedRadio && relatedRadio.value === 'Other' && input.value.trim() === '') {
              allFilled = false;
            }
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
  }, []);

  return (
    <div className="h-screen w-screen flex items-center justify-center">
      {/* Update with components here - default to put new layout sections as separate components in the components folder, and import them here */}
      <div>
        <h1 className="text-3xl text-center">Your Blank Canvas</h1>
        <p className="text-center">
          Chat with the agent to start making edits.
        </p>
      </div>
    </div>
  );
};

export default Index;