

document.getElementById('button').addEventListener('click', (e) => {
    e.preventDefault();

    const input = document.getElementById('searchbar').value; 
    const input2 = document.getElementById('othersearchbar').value;
    $.get( `https://api.lyrics.ovh/v1/${input}/${input2}`, function(data) {
        
        console.log(data);

        var answer = data.lyrics;

        $('.lyrics').append(answer);

    });
});
