console.log('client.js has been loaded');

var geese = [
    {
        name: 'Fred',
        age: 5,
        type: 'Betelgeusian Goosian'
    },
    {
        name: 'Carla',
        age: 4,
        type: 'Canadian'
    }
];

$(document).ready(function(){
    console.log('jquery is loaded');
    for (var i = 0; i < geese.length; i++) {
        var goose = geese[i];
        
        $('#geesenTableBody').prepend(
            '<tr>' +
                '<td>' + goose.name + '</td>' +
                '<td>' + goose.age + '</td>' +
                '<td>' + goose.type + '</td>' +
            '</tr>'
        );
    }
});