// Get the buttons
const resumeBtn = document.getElementById('resumeBtn');
const githubBtn = document.getElementById('githubBtn');
const linkedinBtn= document.getElementById('linkedinBtn');
// Set the URLs
const resumeURL = '';
const githubURL = 'https://github.com/Hemzz2325';
const linkedinURL = 'www.linkedin.com/in/hemanth-barker-53043928a';

// Add click event listeners
resumeBtn.addEventListener('click', () => {
    window.open(resumeURL, '_blank');
});

githubBtn.addEventListener('click', () => {
    window.open(githubURL, '_blank');
});

linkedinBtn.addEventListener('click', () => {
    window.open(linkedinURL, '_blank');
});
