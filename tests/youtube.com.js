window.addEventListener('DOMContentLoaded', () => {
    var moviePlayer = document.getElementById("movie_player");
    moviePlayer.playVideo = function()
    {
        document.getElementById("status").innerHTML = "Play";
    };

    moviePlayer.pauseVideo = function()
    {
        document.getElementById("status").innerHTML = "Pause";
    };

    moviePlayer.nextVideo = function()
    {
        document.getElementById("status").innerHTML = "Next";
    };

    moviePlayer.previousVideo = function()
    {
        document.getElementById("status").innerHTML = "Previous";
    };

    moviePlayer.stopVideo = function () {
        document.getElementById("status").innerHTML = "Stop";
    };

    moviePlayer.getPlayerState = function(){
        var state = document.getElementById("status").innerHTML;
        switch (state){
            case "Stop": return 0;
            case "Play": return 1;
            case "Pause": return 2;
        }
    }
});