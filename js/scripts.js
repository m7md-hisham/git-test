    // // The following code is used for the existance of two buttons.
    // $(document).ready(function() {
    //     $("#mycarousel").carousel({interval: 2000});
    //     $("#carousel-pause").click(function() {
    //         $("#mycarousel").carousel('pause');
    //     });
    //     $("#carousel-play").click(function() {
    //         $("#mycarousel").carousel('cycle');
    //     });
    // });

    // The following code is used for the existance of one button.
    $(document).ready(function() {
        $("#mycarousel").carousel({interval: 2000});
        $("#carouselButton").click(function() {
            if ($("#carouselButton").children("span").hasClass('fa-pause')) {
                $("#mycarousel").carousel('pause');
                $("#carouselButton").children("span").removeClass('fa-pause');
                $("#carouselButton").children("span").addClass('fa-play');
            }
            else if ($("#carouselButton").children("span").hasClass('fa-play')) {
                $("#mycarousel").carousel('cycle');
                $("#carouselButton").children("span").removeClass('fa-play');
                $("#carouselButton").children("span").addClass('fa-pause');
            }
        });
    });

    // The following code is for reserveTable and login buttons
    $(document).ready(function() {
        $("#reserveTableButton").click(function() {
            $("#reserveTableButton").children("button").attr("data-toggle", "modal");
            $("#reserveTableButton").children("button").attr("data-target", "#reserveTable");
        });

        $("#loginButton").click(function() {
            $("#loginButton").children("a").attr("data-toggle", "modal");
            $("#loginButton").children("a").attr("data-target", "#loginModal");
        });
    });