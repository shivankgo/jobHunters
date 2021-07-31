// Implement sticky header
// Pagination
// Anotation(expand collapse)

let quesNumber = 0;
let tableHeader = [
    'Q.NO:',
    'Questions',
    'Answer',
    'Link for study',
    'Video for reference',
    'Photo'
];
let questionsList = [
    {
        question: 'Whats the use of Angular ?',
        textAns: 'Angular is a javascript binding frmaework which binds html ui and javascript model,<br>' +
            'this helps you to reduce your effort in writing those lengthy lines of codes for binding.<br> ' +
            'Adding to it, it also helps you to build single page application with the concept of routing.<br> ' +
            'It also has lot of feature like http, DI, Input and output.',
        link: 'https://angular.io/guide/architecture',
        video: openUrl('https://www.youtube.com/watch?v=-jeoyDJDsSM#t=1m23s', "video"),
        photo: getImage("What_is_angular.PNG")
    },
    {
        question: 'Differenciate between angular js and angular',
        textAns: '',
        link: '',
        video: openUrl("https://www.youtube.com/watch?v=-jeoyDJDsSM#t=3m40s", "video"),
        photo: getImage("Difference_between_angular_and_angular_js.PNG")
    },
    {
        question: 'What are directives ?',
        textAns: 'Directives helps you to attach behaviour to your html dom <br> Directives are angular syntaxes which you write inside html.',
        link: 'https://angular.io/guide/built-in-directives',
        video: openUrl("https://www.youtube.com/watch?v=-jeoyDJDsSM#t=8m8s", "video"),
        photo: getImage('What_are_directives.jpeg')
    }

];
createTable();

function createTable() {
    let tableRef = document.getElementById('table');

    let row = table.insertRow();
    for (let tableh of tableHeader) {
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = tableh;
        row.appendChild(headerCell);
    }

    for (var list of questionsList) {
        let tr = tableRef.insertRow(-1);
        let cell1 = tr.insertCell(0);
        let cell2 = tr.insertCell(1);
        let cell3 = tr.insertCell(2);
        let cell4 = tr.insertCell(3);
        let cell5 = tr.insertCell(4);
        let cell6 = tr.insertCell(5);

        cell1.innerHTML = incrementQuestionNumber();
        cell2.innerHTML = '<p style ="font-size: 15px;">' + list.question + '</p>';
        cell3.innerHTML = '<p style ="font-size: 15px;">' + list.textAns + '</p>'
        cell4.innerHTML = list.link !== '' ? openUrl(list.link, list.question) : '<p style ="font-size: 10px;">LINK UNAVAILABLE</p>';
        cell5.innerHTML = list.video;
        cell6.innerHTML = list.photo;
    }
}

function incrementQuestionNumber() {
    return ++quesNumber;
}

function getImage(path) {
    path = 'Images/' + path;
    return '<img src = ' + path + ' alt="Image not found" height=700px width=700px/>';
}

function openUrl(link, name) {
    return '<a   href = ' + link + ' target = "_blank" style="color: blue;">' + name + '</a>'
}
