

$("#search").on("click", function () {
    $.ajax({
        url: 'https://www.omdbapi.com',
        data:{
            s: $("#myInput").val(),
            apikey: 'da5abdc4'
        },

        success: function (res) {
            if(res.Response == 'True'){
                let movies = res.Search;
                $("#movies").html(``);
                movies.forEach(movie => {
                    $("#movies").append(
                        `
                        <li class="card">
                            <img src="${movie.Poster}" class="card-img-top">
                            <div class="card-body">
                                <h5 class="card-title">${movie.Title}</h5>
                                <p class="card-text">${movie.Year}</p>
                            </div>
                        </li>
                        `
                    );
                });
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'No movies found!'
                });
            }
           
        }
    });
});