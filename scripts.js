// scripts.js
document.addEventListener('DOMContentLoaded', () => {
    const courses = [
        { title: 'Web Development', description: 'Learn HTML, CSS, and JavaScript', image: 'course1.jpg' },
        { title: 'Data Science', description: 'Learn Python and Data Analysis', image: 'course2.jpg' },
        { title: 'Machine Learning', description: 'Learn ML algorithms and techniques', image: 'course3.jpg' }
    ];

    const courseList = document.querySelector('.course-list');
    
    courses.forEach(course => {
        const courseItem = document.createElement('div');
        courseItem.classList.add('course-item');
        courseItem.innerHTML = `
            <img src="${course.image}" alt="${course.title}">
            <h3>${course.title}</h3>
            <p>${course.description}</p>
            <button onclick="showCourseDetails('${course.title}', '${course.description}', '${course.image}')">Learn More</button>
        `;
        courseList.appendChild(courseItem);
    });
});

function showCourseDetails(title, description, image) {
    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-btn" onclick="closeModal()">&times;</span>
            <img src="${image}" alt="${title}">
            <h2>${title}</h2>
            <p>${description}</p>
        </div>
    `;
    document.body.appendChild(modal);
}

function closeModal() {
    const modal = document.querySelector('.modal');
    if (modal) {
        modal.remove();
    }
}

function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Message sent successfully!');
    this.reset();
});
