
const pusher = new Pusher($('meta[name="_key"]').attr('content'), {
    cluster: $('meta[name="_cluster"]').attr('content'),
    encrypted: true
});

const channel = pusher.subscribe('my-channel');
channel.bind('my-event', function(data) {
    messages.push(data.message);
});

let messages = [];

let acorns = [];
for (i = 1; i <= 25; i++) {
    var acorn = {number: i, active: 1};
    acorns.push(acorn);
}

let vm = new Vue({

    el: '#wrapper',
    data: {
        messages: messages,
        acorns: acorns,
        squirlz: [
            {
                name: 'Ralph',
                image: 'images/characters/ralph.png',
                class: 'col-2 offset-1'
            },
            {
                name: 'Federico',
                image: 'images/characters/federico.png',
                class: 'col-2'
            },
            {
                name: 'Bianca',
                image: 'images/characters/bianca.png',
                class: 'col-2'
            },
            {
                name: 'Jay',
                image: 'images/characters/jay.png',
                class: 'col-2'
            },
            {
                name: 'Tubz',
                image: 'images/characters/tubz.png',
                class: 'col-2'
            },
        ]
    },
    methods: {
        toggle: function (n) {
            n.active = n.active == 1 ? 0 : 1;
        }
    }

});

function addMessage() {
    const name = $('#name').val();
    const message = $('#message').val();
    $("#messageForm").validate({
        rules: {
            name: {
                required: true
            },
            message: {
                required: true
            }
        },
        messages: {
            name: {
                required: "!"
            },
            message: {
                required: "!"
            }
        },
        submitHandler: function(form) {
            $.ajax({
                url: "test.php",
                type: "POST",
                data: $("#messageForm").serialize(),
                success: function() {
                    $('#message').val("");
                    $('#name').prop("readonly", true);
                }
            });
        }
    });
}
