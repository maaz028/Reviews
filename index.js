let current = 0
$(document).ready(function () {
    const persons = [
        {
            'id': 1,
            'name': 'Jhonson',
            'role': 'UI DESIGNER',
            'img': './dwayne-the-rock-.jpg'
        },
        {
            'id': 2,
            'name': 'Usman',
            'role': 'PROGRAMMER',
            'img': './images.jpg'
        },
        {
            'id': 3,
            'name': 'Maaz Kha',
            'role': 'DEVELOPER',
            'img': '../portfolio/20210820_122725.jpg'
        }
    ]


    let name = document.getElementById('name')
    let role = document.getElementById('role')
    let img = document.getElementById('img')

    name.innerText = persons[current].name
    name.innerText = persons[current].name
    role.innerText = persons[current].role
    img.src = persons[current].img

    function showPerson(current) {
        name.innerText = persons[current].name
        name.innerText = persons[current].name
        role.innerText = persons[current].role
        img.src = persons[current].img
    }

    $('#next').click(function () {
        current++
        if (current > persons.length - 1) {
            current = 0
        }
        showPerson(current)

    });
    $('#prev').click(function () {
        current--
        if (current < 0) {
            current = persons.length - 1
        }
        showPerson(current)

    });

    $('#random').click(function()
    {
        rand = random()
        current = rand
        console.log(rand)
        name.innerText = persons[rand].name
        name.innerText = persons[rand].name
        role.innerText = persons[rand].role
        img.src = persons[rand].img

    })
    function random()
    {
        return Math.floor(Math.random()*persons.length)
    }




})
